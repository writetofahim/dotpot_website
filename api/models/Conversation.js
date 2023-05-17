const mongoose = require("mongoose");

const conversationSchema = new mongoose.Schema(
  {
    creator: {
      type: String,
      required: true,
    },
    participant: {
      type: String,
      required: true,
    },
    lastMessage: {
      type: mongoose.Types.ObjectId,
      ref: "Message",
    },
  },
  { timestamps: true }
);

const Conversation = mongoose.model("Conversation", conversationSchema);

module.exports = Conversation;
