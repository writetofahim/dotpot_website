const fs = require("fs");

const removeFile = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.access(filePath, fs.constants.F_OK, (error) => {
      if (error) {
        console.log(`File does not exist: ${filePath}`);
        resolve();
      } else {
        fs.unlink(filePath, (unlinkError) => {
          if (unlinkError) {
            console.log(unlinkError);
            resolve();
          } else {
            console.log(`Successfully removed file: ${filePath}`);
            resolve();
          }
        });
      }
    });
  });
};

module.exports = { removeFile };
