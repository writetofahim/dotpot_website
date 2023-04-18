const Conversation = require("../models/Conversation");
const Message = require("../models/Message");
const { removeFile } = require("../utilities/removeFile");
/**
 * Retrieves a paginated list of all chats with last messages and admin unseen message count
 *
 * @param {object} req - The Express request object
 * @param {object} res - The Express response object
 * @returns {object} The paginated list of chats with last messages and admin unseen message count, as well as the total count and current page number
 * @throws {object} The error message and status code
 */
const getAllChats = async (req, res) => {
  const pageSize = 10;
  const page = parseInt(req.query.page) || 1;
  try {
    const totalChatsCount = await Conversation.countDocuments();
    const chats = await Conversation.find()
      .sort({ updatedAt: -1 })
      .limit(pageSize * page);
    const chatsWithLastMessage = await Promise.all(
      chats.map(async (chat) => {
        const lastMessage = await Message.findOne({
          conversation_id: chat._id,
        }).sort({ createdAt: -1 });
        const adminUnseenCount = await Message.countDocuments({
          conversation_id: chat._id,
          isAdminSeen: false,
        });
        return { ...chat._doc, lastMessage, adminUnseenCount };
      })
    );
    res.json({
      chats: chatsWithLastMessage,
      totalChatsCount,
      currentPage: page,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/**
 * Controller function to create a new chat conversation between a visitor and an admin
 * @param {object} req - The Express request object
 * @param {object} res - The Express response object
 */

const createChat = async (req, res) => {
  const chat = new Conversation({
    creator: "visitor",
    participant: "admin",
  });

  try {
    const newChat = await chat.save();
    const newMessage = new Message({
      conversation_id: newChat._id,
      sender: "admin",
      receiver: "visitor",
      text: "Hey! How can I help you?",
      isAdminSeen: true,
    });
    const message = await newMessage.save();
    // emit a 'newChat' event with the new chat data to all connected clients
    // io.emit('newChat', newChat);
    res.status(201).json(message);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

/**
 * Controller function to get the total count of messages where isAdminSeen is false.
 * @param {object} req - The Express request object
 * @param {object} res - The Express response object
 */

const getTotalAdminUnseen = async (req, res) => {
  try {
    const count = await Message.countDocuments({ isAdminSeen: false });
    res.json({ count });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Controller function to get all messages of a conversation by conversation id
const getMessagesById = async (req, res) => {
  const conversationId = req.params.conversationId;
  await Message.updateMany(
    { conversation_id: conversationId },
    { $set: { isVisitorSeen: true } }
  );
  res.json(res.chat);
};

const getMessagesByIdForAdmin = async (req, res) => {
  const conversationId = req.params.conversationId;
  await Message.updateMany(
    { conversation_id: conversationId },
    { $set: { isAdminSeen: true } }
  );

  io.emit("adminSeen", { adminSeenConversationId: conversationId });

  res.json(res.chat);
};

const addMessageToAChat = async (req, res) => {
  const message = {
    conversation_id: req.params.conversationId,
    text: req.body?.text,
    attachment: req.body?.attachment,
    sender: "visitor",
    receiver: "admin",
    isVisitorSeen: true,
  };
  try {
    const newMessage = new Message(message);
    const msg = await newMessage.save();
    await Conversation.findOneAndUpdate(
      { _id: req.params.conversationId },
      { $set: { updatedAt: new Date() } },
      { new: true }
    );
    if (req.body.isOrder) {
      const adminMsg = {
        conversation_id: req.params.conversationId,
        text: "Thanks for your order we will contact you soon",
        sender: "admin",
        receiver: "visitor",
        isAdminSeen: true,
        isVisitorSeen: false,
      };
      const newAdminMsg = new Message(adminMsg);
      const AdminMsg = await newAdminMsg.save();
    }

    io.emit("newMessage", msg);
    res.status(201).json(msg);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const replayToChat = async (req, res) => {
  const message = {
    conversation_id: req.params.conversationId,
    text: req.body.text,
    attachment: req?.body?.attachment,
    sender: "admin",
    receiver: "visitor",
    isAdminSeen: true,
  };
  try {
    const newMessage = new Message(message);
    const msg = await newMessage.save();
    await Conversation.findOneAndUpdate(
      { _id: req.params.conversationId },
      { $set: { updatedAt: new Date() } },
      { new: true }
    );

    io.emit("newMessage", msg);
    res.status(201).json(msg);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

/**
 * Delete conversation and all messages in it
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {string} req.params.conversationId - ID of conversation to delete
 */
const deleteConversation = async (req, res) => {
  try {
    const conversationId = req.params.conversationId;

    // Delete all messages in the conversation and their attachments
    const messages = await Message.find({ conversation_id: conversationId });
    for (const message of messages) {
      if (message.attachment) {
        await removeFile(message.attachment);
      }
    }

    await Message.deleteMany({ conversation_id: conversationId });
    // Delete the conversation
    const result = await Conversation.findByIdAndDelete(conversationId);
    console.log(result);

    res.json({ message: "Conversation and messages deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = {
  getAllChats,
  createChat,
  getMessagesById,
  addMessageToAChat,
  replayToChat,
  getMessagesByIdForAdmin,
  getTotalAdminUnseen,
  deleteConversation,
};
