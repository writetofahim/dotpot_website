/**
 * Controller function to send a response after file upload is complete
 * @param {object} req - The Express request object
 * @param {object} res - The Express response object
 */

const fs = require("fs");

const sanitizeFileName = (fileName) => {
  return fileName.replace(/</g, "&lt;").replace(/>/g, "&gt;");
};

const uploadFileResponse = (req, res) => {
  if (req.files) {
    const sanitizedFiles = req.files.map((file) => {
      return {
        name: sanitizeFileName(file.name),
        size: file.size,
        mimetype: file.mimetype,
      };
    });
    res.send(sanitizedFiles);
  } else {
    res.send({ error: "File uploads failed" });
  }
};

const removeAnyFile = (req, res) => {
  const filePath = req.body.filePath;
  fs.unlink(filePath, (error) => {
    if (error) {
      console.log(error);
      res.status(500).send({ success: false, error: "File remove failed" });
    } else {
      res.send({ success: true, message: "File removed Successful" });
    }
  });
};

// Export the controller function
module.exports = {
  uploadFileResponse,
  removeAnyFile,
};
