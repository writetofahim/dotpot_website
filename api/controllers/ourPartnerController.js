const OurPartner = require('../models/ourPartner');

exports.createPartner = async (req, res) => {
  try {
    const partner = await OurPartner.create(req.body);
    res.status(201).json({ success: true, data: partner });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

exports.getAllPartners = async (req, res) => {
  try {
    const partners = await OurPartner.find();
    res.status(200).json({ success: true, data: partners });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

exports.getPartnerById = async (req, res) => {
  try {
    const partner = await OurPartner.findById(req.params.id);
    if (!partner) {
      return res.status(404).json({ success: false, message: 'Partner not found' });
    }
    res.status(200).json({ success: true, data: partner });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

exports.updatePartnerById = async (req, res) => {
  try {
    const partner = await OurPartner.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!partner) {
      return res.status(404).json({ success: false, message: 'Partner not found' });
    }
    res.status(200).json({ success: true, data: partner });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

exports.deletePartnerById = async (req, res) => {
  try {
    const partner = await OurPartner.findByIdAndDelete(req.params.id);
    if (!partner) {
      return res.status(404).json({ success: false, message: 'Partner not found' });
    }
    res.status(200).json({ success: true, message: 'Partner deleted' });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
