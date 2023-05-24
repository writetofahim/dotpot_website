const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
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

const validateSlugLength = (slug) => {
  return slug.length <= 40;
};

const validateAudioFormat = (audio) => {
  const allowedFormats = /\.(mp3|wav|ogg|aac|m4a)$/i;
  return allowedFormats.test(audio);
};

const validateImageFormat = (image) => {
  const allowedFormats = /\.(jpg|jpeg|png|gif)$/i; // Regular expression to match .jpg, .jpeg, .png, and .gif extensions
  return allowedFormats.test(image);
};

const validateTitleLength = (title) => {
  return title.length <= 100;
};

const BlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      validate: [validateTitleLength, "Title should not exceed 100 characters"],
    },
    slug: {
      type: String,
      validate: [validateSlugLength, "Slug should not exceed 40 characters"],
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    body: {
      type: String,
      required: [true, "Body is required"],
    },
    tags: {
      type: [String],
    },
    categories: {
      type: [String],
    },
    image: {
      type: String,
      required: [true, "Image is required"],
      validate: [validateImageFormat, "Invalid image format"],
    },
    audio: {
      type: String,
      validate: [validateAudioFormat, "Invalid audio format"],
    },
    isPublished: {
      type: Boolean,
    },
    summary: {
      type: String,
    },
    likes: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      },
    ],
    comments: [CommentSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Blog", BlogSchema);
