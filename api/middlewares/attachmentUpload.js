const fs = require('fs');
const path = require('path');
// Import the uploader utility
const uploader = require("../utilities/uploader");

/**
 * Middleware function to handle file uploads
 * @param {string} subFolderName - The name of the folder where the uploaded files should be stored
 * @returns {function} - The middleware function that will handle the file upload
 */
function attachmentUpload(subFolderName) {
    return (req, res, next) => {
        const parentDirectory = './uploads';
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
            ["image/jpeg", "image/jpg", "image/png", "application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
            9273781,
            5,
            "Only .jpg, jpeg, .png, .pdf, .doc or .docx format allowed!"
        );
        upload.any()(req, res, (err) => {
            if (err) {
                res.status(500).json({
                    errors: {
                        msg: err.message,
                    },
                });
            } else {
                req.files[0].filename = `uploads/${subFolderName}/` + req.files[0].filename;
                next();
            }
        });
    };
}

module.exports = attachmentUpload;
