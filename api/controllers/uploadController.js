/**
 * Controller function to send a response after file upload is complete
 * @param {object} req - The Express request object
 * @param {object} res - The Express response object
 */

const fs = require("fs");

const uploadFileResponse = (req, res) => {
  if (req.files) {
    res.send(req.files);
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

/**
 * Controller for uploading audio files.
 * Endpoint: POST /api/audio/upload
 * Expected Request:
 *   - Form Data: audioFile (audio file to be uploaded)
 * Response:
 *   - Success: 200 OK with the audioUrl of the uploaded file
 *   - Error: 400 Bad Request if no audio file is provided or if the file format is invalid
 *           500 Internal Server Error if an error occurs during the upload process
 */

// Export the controller function
module.exports = {
  uploadFileResponse,
  removeAnyFile,
};
