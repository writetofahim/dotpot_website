const mongoose = require('mongoose');

const jobApplicationSchema = new mongoose.Schema(
    {
        jobId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Job',
            required: true,
        },
        companyName: {
            type: String,
            required: true,
        },
        companyLogo: {
            type: String,
            required: true,
        },
        jobTitle: {
            type: String,
            required: true,
        },
        name: {
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
        resume: {
            type: String,
            required: true,
        },
        coverLetter: {
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

module.exports = mongoose.model('JobApplication', jobApplicationSchema);
