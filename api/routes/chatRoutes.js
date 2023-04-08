const express = require('express');
const router = express.Router();

const {
    getAllChats,
    createChat,
    addMessageToAChat,
    getMessagesById,
    replayToChat,
    getMessagesByIdForAdmin,
    getTotalAdminUnseen,
    deleteConversation
} = require('../controllers/chatController');

const Message = require('../models/Message');
const adminMiddleware = require('../middlewares/adminMiddleware');

// Route to get all chats
router.get('/', adminMiddleware, getAllChats);

// Route to create a new chat
router.post('/', createChat);

// Route to get messages for a chat by ID
// Request Example: GET /chats/:conversationId/messages
// Response Example: { messages: [...] }
router.get('/:conversationId/messages', getMessages, getMessagesById);

// Route to get messages for a chat by ID (for admin)
// Request Example: GET /chats/:conversationId/messages/admin
// Response Example: { messages: [...] }
router.get('/:conversationId/messages/admin', adminMiddleware, getMessages, getMessagesByIdForAdmin);

// Route to add a new message to a chat
// Request Example: POST /chats/:conversationId/messages
// Request Body Example: { text: "Hello, I need help" }
router.post('/:conversationId/messages', addMessageToAChat);

// Route to reply to a chat
// Request Example: POST /chats/:conversationId/reply
// Request Body Example: { text: "Hello, I need help" }
router.post('/:conversationId/reply', adminMiddleware, replayToChat);

// Route to delete a conversation with messages and attachments
router.delete('/:conversationId', adminMiddleware, deleteConversation);

// Middleware function to get messages for a chat by ID
async function getMessages(req, res, next) {
    try {
        const chat = await Message.find({ conversation_id: req.params.conversationId });
        if (!chat || chat.length === 0) {
            return res.status(404).json({ message: 'Messages not found' });
        }
        res.chat = chat;
        next();
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

module.exports = router;
