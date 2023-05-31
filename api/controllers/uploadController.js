const fs = require("fs");
const path = require("path");
const pathIsInside = require("path-is-inside");

// A function to sanitize the file name by replacing < and > with HTML entities
const sanitizeFileName = (fileName) => {
  return fileName.replace(/</g, "&lt;").replace(/>/g, "&gt;");
};

// A function to handle the file upload response by sending back an array of sanitized file objects
const uploadFileResponse = (req, res) => {
  if (req.files) {
    // Map over the req.files array and sanitize each file name
    const sanitizedFiles = req.files.map((file) => {
      return {
        name: sanitizeFileName(file.name),
        size: file.size,
        mimetype: file.mimetype,
      };
    });
    // Send back the sanitized files array as JSON
    res.json(sanitizedFiles);
  } else {
    // Send back an error message if no files were uploaded
    res.json({ error: "File uploads failed" });
  }
};

// A function to handle the file removal request by deleting the specified file from the server
const removeAnyFile = (req, res) => {
  // Get the filePath from the request body
  const filePath = req.body.filePath;

  // Validate the filePath to prevent Path Traversal
  // Resolve the filePath to an absolute path
  const resolvedPath = path.resolve(filePath);
  // Specify the allowed directory for file removal
  const allowedDirectory = path.join(__dirname, "../uploads");
  // Resolve the allowed directory to an absolute path
  const resolvedAllowedDirectory = path.resolve(allowedDirectory);

  // Check if the resolvedPath is inside the resolvedAllowedDirectory using path-is-inside library
  if (!pathIsInside(resolvedPath, resolvedAllowedDirectory)) {
    // Log and send back an error message if the filePath is invalid
    console.log("Invalid file path:", resolvedPath);
    res.status(400).json({ success: false, error: "Invalid file path" });
    return;
  }

  // Delete the file using fs.unlink
  fs.unlink(resolvedPath, (error) => {
    if (error) {
      // Log and send back an error message if the file removal failed
      console.log(error);
      res.status(500).json({ success: false, error: "File removal failed" });
    } else {
      // Send back a success message if the file was removed successfully
      res.json({ success: true, message: "File removed successfully" });
    }
  });
};

// Export the controller functions
module.exports = {
  uploadFileResponse,
  removeAnyFile,
};
