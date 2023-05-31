const fs = require("fs");
const path = require("path");

const removeFile = (filePath) => {
  return new Promise((resolve, reject) => {
    const resolvedPath = path.resolve(filePath); // Resolve the file path

    if (!isFileInAllowedDirectory(resolvedPath)) {
      // Perform additional validation to ensure the file is within the allowed directory
      console.log("Invalid file path:", resolvedPath);
      resolve();
      return;
    }

    fs.access(resolvedPath, fs.constants.F_OK, (error) => {
      if (error) {
        console.log(`File does not exist: ${resolvedPath}`);
        resolve();
      } else {
        fs.unlink(resolvedPath, (unlinkError) => {
          if (unlinkError) {
            console.log(unlinkError);
            resolve();
          } else {
            console.log(`Successfully removed file: ${resolvedPath}`);
            resolve();
          }
        });
      }
    });
  });
};

const isFileInAllowedDirectory = (filePath) => {
  const allowedDirectory = path.join(__dirname, "../uploads"); // Specify the allowed directory here
  const resolvedAllowedDirectory = path.resolve(allowedDirectory);

  // Check if the file path is within the allowed directory or its subdirectories
  return filePath.startsWith(resolvedAllowedDirectory);
};

module.exports = { removeFile };
