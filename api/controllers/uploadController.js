const uploader = require("../utilities/uploader");

// upload files to /uploads/conversation folder
const uploadToConversation = (req, res) => {
    if (req.files) {
        res.send(req.files)
    } else {
        res.send({ error: "File uploads failed" })
    }
}

// upload files to /uploads/response folder
function uploadToResponse(req, res, next) {
    const upload = uploader(
        "response",
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
            if (req.files) {
                res.send(req.files)
            } else {
                res.send({ error: "File uploads failed" })
            }
        }
    });
}

module.exports = {
    uploadToConversation,
    uploadToResponse
}