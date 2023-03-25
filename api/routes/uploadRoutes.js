const express = require('express');
const { uploadFileResponse } = require('../controllers/uploadController');

const attachmentUpload = require('../middlewares/attachmentUpload');
const blogsImageUpload = require('../middlewares/blogsImageUpload');
const resumeUpload = require('../middlewares/resumesUpload');
const router = express.Router();

// upload file to conversation folder
router.post('/', attachmentUpload("conversation"), uploadFileResponse);

// upload file to client response folder
router.post('/response', attachmentUpload("response"), uploadFileResponse);

// upload file to resume folder
router.post('/resumes', resumeUpload("resumes"), uploadFileResponse);

// upload file to resume folder
router.post('/blogs',  blogsImageUpload("blogs"), uploadFileResponse);


module.exports = router;