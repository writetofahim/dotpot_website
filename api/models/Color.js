const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// define the ColorSchema
const ColorSchema = new Schema({
  name: { type: String, required: true },
  selected: { type: Boolean, default: false },
  colors: {
    bgPrimary: {
      100: { type: String },
      200: { type: String },
      300: { type: String },
      400: { type: String },
      500: { type: String },
      600: { type: String },
    },
    bgSecondary: {
      100: { type: String },
      200: { type: String },
      300: { type: String },
      400: { type: String },
      500: { type: String },
      600: { type: String },
    },
    primary: {
      100: { type: String },
      200: { type: String },
      300: { type: String },
      400: { type: String },
      500: { type: String },
      600: { type: String },
    },
    secondary: {
      100: { type: String },
      200: { type: String },
      300: { type: String },
      400: { type: String },
      500: { type: String },
      600: { type: String },
    },
    gray: {
      300: { type: String },
      400: { type: String },
      500: { type: String },
    },
    border: { type: String },
  },
});

// create the Color model
const Color = mongoose.model("Color", ColorSchema);

module.exports = Color;
