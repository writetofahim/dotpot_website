const express = require('express');
const { uploadToConversation, uploadToResponse } = require('../controllers/uploadController');
const attachmentUpload = require('../middlewares/attachmentUpload');
const router = express.Router();

// upload file to conversation folder
router.post('', attachmentUpload, uploadToConversation);

// upload file to client response folder
router.post('/response', uploadToResponse);


module.exports = router;