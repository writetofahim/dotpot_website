
const uploader = require("../utilities/uploader");

function attachmentUpload(req, res, next) {
    const upload = uploader(
        "conversation",
        ["image/jpeg", "image/jpg", "image/png", 'application/pdf'],
        9273781,
        5,
        "Only .jpg, jpeg, .png or pdf format allowed!"
    );
    upload.any()(req, res, (err) => {
        if (err) {
            res.status(500).json({
                errors: {
                    msg: err.message,
                },
            });
        } else {
            next();
        }
    });
}

module.exports = attachmentUpload;