const mongoose = require('mongoose');

const HeroSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    subtitle: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    button_text: {
        type: String,
    },
    button_link: {
        type: String,
    },
    image: {
        type: String,
        required: true,
    },
}, { timestamps: true });

module.exports = mongoose.model('C_Hero', HeroSchema);
