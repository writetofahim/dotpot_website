const mongoose = require("mongoose");

// define the ColorSchema
const ColorSchema = new mongoose.Schema({
  colors: {
    background: {
      500: String,
    },
    primary: {
      100: String,
      200: String,
      300: String,
      400: String,
      500: String,
      600: String,
    },
    secondary: {
      100: String,
      200: String,
      300: String,
      400: String,
      500: String,
      600: String,
    },
    buttonText: {
      500: String,
    },
    textColor: {
      500: String,
    },
    gray: {
      200: String,
      300: String,
      400: String,
      500: String,
      800: String,
    },
    border: String,
    particleColor: String,
  },
  name: String,
  selected: Boolean,
});

// create the Color model
const Color = mongoose.model("Color", ColorSchema);

module.exports = Color;
