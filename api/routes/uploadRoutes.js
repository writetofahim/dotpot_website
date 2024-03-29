const express = require("express");
const {
  uploadFileResponse,
  removeAnyFile,
  uploadAudio,
} = require("../controllers/uploadController");

const attachmentUpload = require("../middlewares/attachmentUpload");
const blogsImageUpload = require("../middlewares/blogsImageUpload");
const resumeUpload = require("../middlewares/resumesUpload");
const adminMiddleware = require("../middlewares/adminMiddleware");
const audioUpload = require("../middlewares/audioUpload");
const router = express.Router();

// upload file to conversation folder
router.post("/", attachmentUpload("conversation"), uploadFileResponse);

// remove file from
router.delete("/", adminMiddleware, removeAnyFile);

// upload file to client response folder
router.post("/response", attachmentUpload("response"), uploadFileResponse);

// upload audio file
router.post("/audio", audioUpload("audios"), uploadFileResponse);

// upload file to resume folder
router.post("/resumes", resumeUpload("resumes"), uploadFileResponse);

// upload file to resume folder
router.post("/blogs", blogsImageUpload("blogs"), uploadFileResponse);

module.exports = router;
