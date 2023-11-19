const { Schema, model } = require("mongoose");

const gameSchema = new Schema({
  name: { type: String, required: true, unique: true, trim: true },
  rating: { type: Number, required: true },
  image: { type: String, required: true },
  age_rating: { type: String, required: true },
  cover: { type: String, required: true },
  url: { type: String, required: true },
  videos: { type: Array, required: true },
});

const Game = model("Game", gameSchema);

module.exports = Game;
