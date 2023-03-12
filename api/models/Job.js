const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    responsibilities: {
        type: [String],
        required: true
    },
    qualifications: {
        type: [String],
        required: true
    },
    howToApply: {
        type: String,
        required: true
    },
    salary: {
        min: {
        type: Number
        },
        max: {
        type: Number
        }
    },
    benefits: {
        type: [String]
    },
    isRemote: {
        type: Boolean,
        default: false
    },
    isFullTime: {
        type: Boolean,
        default: true
    },
    }, { 
    timestamps: true 
});

module.exports = mongoose.model('Job', JobSchema);
