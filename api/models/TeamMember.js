const mongoose = require('mongoose');

const teamMemberSchema = new mongoose.Schema(
    {
        name: {
        type: String,
        required: true,
        },
        title: {
        type: String,
        required: true,
        },
        bio: {
        type: String,
        required: true,
        },
        image: {
        type: String,
        required: true,
        },
        email: {
        type: String,
        required: true,
        },
        phone: {
        type: String,
        required: true,
        },
        socialMediaUrls: {
        type: Map,
        of: String,
        default: {},
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('TeamMember', teamMemberSchema);
