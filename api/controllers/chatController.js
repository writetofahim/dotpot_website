const Conversation = require("../models/Conversation");
const Message = require("../models/Message");

const getAllChats = async (req, res) => {
    const pageSize = 10;
    const page = parseInt(req.query.page) || 1;
    try {
        const chats = await Conversation.find().sort({ createdAt: -1 })
            .skip((page - 1) * pageSize)
            .limit(pageSize)
        const chatsWithLastMessage = await Promise.all(chats.map(async chat => {
            const lastMessage = await Message.findOne({ conversation_id: chat._id }).sort({ createdAt: -1 });
            return { ...chat._doc, lastMessage };
        }));
        res.json(chatsWithLastMessage);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const createChat = async (req, res) => {

    const chat = new Conversation({
        creator: "visitor",
        participant: "admin"
    });

    try {
        const newChat = await chat.save();
        const newMessage = new Message({
            conversation_id: newChat._id,
            sender: "admin",
            receiver: "visitor",
            text: "Hey! How can I help you?",
            isAdminSeen: true
        });
        const message = await newMessage.save()
        // emit a 'newChat' event with the new chat data to all connected clients
        // io.emit('newChat', newChat);
        res.status(201).json(message);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const getMessagesById = (req, res) => {
    res.json(res.chat);
}

const addMessageToAChat = async (req, res) => {
    const message = {
        conversation_id: req.params.conversationId,
        text: req.body?.text,
        attachment: req.body?.attachment,
        sender: "visitor",
        receiver: "admin",
        isVisitorSeen: true
    };
    try {
        const newMessage = new Message(message);
        const msg = await newMessage.save()

        io.emit('newMessage', msg);
        res.status(201).json(msg);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const replayToChat = async (req, res) => {
    const message = {
        conversation_id: req.params.conversationId,
        text: req.body.text,
        sender: "admin",
        receiver: "visitor",
        isAdminSeen: true
    };
    try {
        const newMessage = new Message(message);
        const msg = await newMessage.save()

        io.emit('newMessage', msg);
        res.status(201).json(msg);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

module.exports = {
    getAllChats,
    createChat,
    getMessagesById,
    addMessageToAChat,
    replayToChat
}