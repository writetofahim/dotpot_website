const fs = require('fs');

const removeFile = (filePath) => {
    return new Promise((resolve, reject) => {
      fs.unlink(filePath, (error) => {
        if (error) {
            console.log(error)
          reject(error);
        } else {
          resolve();
        }
      });
    });
};

module.exports = {removeFile}
