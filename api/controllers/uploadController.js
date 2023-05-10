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
      res.status(500).send({ error: "File remove failed" });
    } else {
      res.send({ error: "File removed Successful" });
    }
  });
};

// Export the controller function
module.exports = {
  uploadFileResponse,
  removeAnyFile,
};
