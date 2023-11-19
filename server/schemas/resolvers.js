const axios = require("axios");
require("dotenv").config();
const { signToken, AuthenticationError } = require("../utils/auth");
const { User } = require("../models");

const resolvers = {
  Query: {
    user: async (parent, { username }) => {
        return User.findOne({ username }).populate('highscore');
    },

    compare: async (_, { previousGameId }) => {
      try {
        // Fetch the previous game
        const previousGameResponse = await axios.post(
          "https://api.igdb.com/v4/games",
          `fields name,total_rating; where id = ${previousGameId};`,
          {
            headers: {
              Accept: "application/json",
              "Client-ID": process.env.CLIENT_ID,
              Authorization: process.env.ACCESS_TOKEN,
            },
          }
        );

        // Fetch a random game
        const randomGameResponse = await axios.post(
          "https://api.igdb.com/v4/games",
          "fields name,total_rating; limit 1; offset random_offset;",
          {
            headers: {
              Accept: "application/json",
              "Client-ID": "Client ID",
              Authorization: "Bearer access_token",
            },
          }
        );

        return {
          previousGame: previousGameResponse.data[0].name,
          previousGameRating: previousGameResponse.data[0].total_rating,
          randomGame: randomGameResponse.data[0].name,
          randomGameRating: randomGameResponse.data[0].total_rating,
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

    updateScore: async (parent, { username, highscore }) => {
      const user = await User.findOneAndUpdate(
        { username: username },
        { highscore: highscore },
        { new: true }
      );
      return user;
    },
  },
};
module.exports = resolvers;
