const mongoose = require('mongoose');

const socialMediaSchema = new mongoose.Schema(
    {
        platform: {
        type: String,
        enum: ['Facebook', 'Twitter', 'Instagram', 'LinkedIn', 'YouTube', 'Pinterest', 'TikTok', 'Snapchat'],
        required: true
        },
        username: {
        type: String,
        required: true
        },
        url: {
        type: String,
        required: true
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('SocialMedia', socialMediaSchema);
