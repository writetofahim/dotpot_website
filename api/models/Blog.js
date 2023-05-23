const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

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
    likes: {
      type: Number,
      default: 0,
    },
    comments: [CommentSchema], // Use the modified CommentSchema
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Blog", BlogSchema);
