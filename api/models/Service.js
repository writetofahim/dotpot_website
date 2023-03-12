const mongoose = require('mongoose');
const { Schema } = mongoose;

const technologySchema = new Schema({
    id: { type: Number, required: true },
    title: { type: String, required: true },
    sdes: { type: String, required: true },
    icon: { type: String, required: true },
    cost: { type: Number, required: true }
    });

    const addonSchema = new Schema({
    id: { type: Number, required: true },
    title: { type: String, required: true },
    sdes: { type: String, required: true },
    icon: { type: String, required: true },
    cost: { type: Number, required: true }
    });

    const serviceSchema = new Schema({
    id: { type: Number, required: true, unique: true },
    title: { type: String, required: true },
    icon: { type: String, required: true },
    technologies: { type: [technologySchema], required: true },
    addons: { type: [addonSchema], required: true }
    }, { timestamps: true });

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
