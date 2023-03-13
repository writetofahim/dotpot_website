const mongoose = require('mongoose');

const clientReviewSchema = new mongoose.Schema({
    job_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job',
        required: true
    },
    client_name: {
        type: String,
        required: true
    },
    client_image: {
        type: String,
        required: true
    },
    company_name: {
        type: String,
        required: true
    },
    company_image: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    review_text: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    social_media_links: {
        type: [{
        platform: String,
        url: String
        }]
    },
},{timestamps: true});

module.exports = mongoose.model('ClientReview', clientReviewSchema);
