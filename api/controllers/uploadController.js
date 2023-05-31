const fs = require("fs");
const path = require("path");

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
    res.json(sanitizedFiles);
  } else {
    res.json({ error: "File uploads failed" });
  }
};

const removeAnyFile = (req, res) => {
  const filePath = req.body.filePath;

  // Validate the filePath to prevent Path Traversal
  const resolvedPath = path.resolve(filePath);
  const allowedDirectory = path.join(__dirname, "../uploads"); // Specify the allowed directory here
  const resolvedAllowedDirectory = path.resolve(allowedDirectory);

  if (!resolvedPath.startsWith(resolvedAllowedDirectory)) {
    console.log("Invalid file path:", resolvedPath);
    res.status(400).json({ success: false, error: "Invalid file path" });
    return;
  }

  fs.unlink(resolvedPath, (error) => {
    if (error) {
      console.log(error);
      res.status(500).json({ success: false, error: "File removal failed" });
    } else {
      res.json({ success: true, message: "File removed successfully" });
    }
  });
};

// Export the controller functions
module.exports = {
  uploadFileResponse,
  removeAnyFile,
};
