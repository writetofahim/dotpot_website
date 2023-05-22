const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    body: {
      type: String,
      required: true,
    },
    tags: {
      type: [String],
    },
    categories: {
      type: [String],
    },
    image: {
      type: String,
      required: true,
    },
    audio: {
      type: String,
    },
    isPublished: {
      type: Boolean,
    },
    summary: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Blog", BlogSchema);
