const axios = require("axios");
require('dotenv').config();
const { signToken, AuthenticationError } = require("../utils/auth");
const { User } = require("../models");

const resolvers = {
  Query: {
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("highscore");
    },

    leaderboard: async () => {
      return User.find().sort({ highscore: -1 }).limit(10);
    },

    fetchAllGames: async () => {
      try {
        console.log("LOOK AT ME", process.env.CLIENT_ID, process.env.ACCESS_TOKEN);
        const response = await axios.post(
          "https://api.igdb.com/v4/games",
          `fields name,total_rating, total_rating_count, url, cover.*;
            where total_rating >0 & total_rating_count >250;
            limit 500;`,
          {
            headers: {
              Accept: "application/json",
              "Client-ID": `${process.env.CLIENT_ID}`,
              Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
            },
          }
        );
        console.log(response);
        return response.data;
      } catch (error) {
        console.error(error);
      }
    },

    //push json data to frontend
    compare: async (_, { game1, game2 }) => {
      try {
        const response1 = await axios.post(
          "https://api.igdb.com/v4/games",
          `fields name,total_rating; where id = "${game1}"; limit 1;`,
          {
            headers: {
              Accept: "application/json",
              "Client-ID": `${process.env.CLIENT_ID}`,
              Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
            },
          }
        );
    
        const response2 = await axios.post(
          "https://api.igdb.com/v4/games",
          `fields name,total_rating; where id = "${game2}"; limit 1;`,
          {
            headers: {
              Accept: "application/json",
              "Client-ID": process.env.CLIENT_ID,
              Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
            },
          }
        );
    
        return {
          game1: response1.data[0],
          game2: response2.data[0],
        };
      } catch (error) {
        console.error(error);
      }
    },
  },
    Mutation: {
      addUser: async (parent, { username, password }) => {
        const user = await User.create({ username, password });
        const token = signToken(user);
        return { token, user };
      },
      login: async (parent, { username, password }) => {
        const user = await User.findOne({ username });
        if (!user) {
          throw new AuthenticationError("Incorrect credentials");
        }

        const correctPw = await user.isCorrectPassword(password);

        if (!correctPw) {
          throw new AuthenticationError("Incorrect credentials");
        }

        const token = signToken(user);

        return { token, user };
      },

      updateScore: async (parent, { username, score }) => {
        const user = await User.findOne({ username: username });
        if (score > user.highscore) {
           await User.findOneAndUpdate({ username: username }, { highscore: score });
        }
        return User.findOne({ username: username });
      },
    },
};
module.exports = resolvers;
