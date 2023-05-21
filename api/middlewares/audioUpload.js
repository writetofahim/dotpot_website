const fs = require("fs");
const path = require("path");
// Import the uploader utility
const uploader = require("../utilities/uploader");

/**
 * Middleware function to handle file uploads
 * @param {string} subFolderName - The name of the folder where the uploaded files should be stored
 * @returns {function} - The middleware function that will handle the file upload
 */
function audioUpload(subFolderName) {
  return (req, res, next) => {
    const parentDirectory = "./uploads";
    const subDirectory = path.join(parentDirectory, subFolderName);

    // Create the parent directory if it doesn't exist
    if (!fs.existsSync(parentDirectory)) {
      fs.mkdirSync(parentDirectory);
    }

    // Check if subdirectory exists, if not create it
    if (!fs.existsSync(subDirectory)) {
      fs.mkdirSync(subDirectory);
    }

    const upload = uploader(
      subFolderName,
      ["audio/mpeg", "audio/wav", "audio/mp3"], // Specify the allowed audio file types
      10 * 1024 * 1024, // Set the file size limit to 10MB
      1, // Set the maximum number of files to be uploaded to 1
      "Only .mp3, .wav, or .mpeg format allowed!" // Error message for unsupported file types
    );
    upload.any()(req, res, (err) => {
      if (err) {
        res.status(500).json({
          errors: {
            msg: err.message,
          },
        });
      } else {
        req.files[0].filename =
          `uploads/${subFolderName}/` + req.files[0].filename;
        next();
      }
    });
  };
}

module.exports = audioUpload;
