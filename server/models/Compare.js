const { Schema, model } = require("mongoose");

const compareSchema = new Schema({
  game1: { type: String, required: true, unique: true, trim: true },
  game2: { type: String, required: true, unique: true, trim: true },
  game1Rating: { type: Number, required: true },
  game2Rating: { type: Number, required: true },
});

const Compare = model("Compare", compareSchema);

module.exports = Compare;
