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
        const basePath = path.join(__dirname, "../uploads"); // Specify the base path of the allowed directory
        const resolvedBasePath = path.resolve(basePath);

        // Check if the resolved file path is equal to or within the resolved base path
        if (!isPathTraversal(resolvedPath, resolvedBasePath)) {
          fs.unlink(resolvedPath, (unlinkError) => {
            if (unlinkError) {
              console.log(unlinkError);
              resolve();
            } else {
              console.log(`Successfully removed file: ${resolvedPath}`);
              resolve();
            }
          });
        } else {
          console.log("Invalid file path:", resolvedPath);
          resolve();
        }
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

const isPathTraversal = (filePath, basePath) => {
  const resolvedFilePath = path.resolve(filePath);

  // Check if the resolved file path is equal to or within the resolved base path
  return !resolvedFilePath.startsWith(basePath);
};

module.exports = { removeFile };
