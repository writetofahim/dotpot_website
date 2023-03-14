const PartnershipModel = require('../models/C_partnershipModel');

// Get all partnership models - GET /partnershipModels
exports.getAllPartnershipModels = async function (req, res) {
  try {
    const partnershipModels = await PartnershipModel.find();
    res.status(200).json(partnershipModels);
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message,
    });
  }
};

// Create new partnership model - POST /partnershipModels
exports.createNewPartnershipModel = async function (req, res) {
  try {
    const partnershipModel = new PartnershipModel(req.body);
    const savedPartnershipModel = await partnershipModel.save();
    res.status(200).json(savedPartnershipModel);
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message,
    });
  }
};

// Get a partnership model by ID - GET /partnershipModels/:id
exports.getPartnershipModelById = async function (req, res) {
  try {
    const partnershipModel = await PartnershipModel.findById(req.params.id);
    if (!partnershipModel) {
      return res.status(404).json({
        status: 'error',
        message: 'Partnership Model not found'
      });
    }
    res.status(200).json(partnershipModel);
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message,
    });
  }
};

// Update a partnership model by ID - PUT /partnershipModels/:id
exports.updatePartnershipModelById = async function (req, res) {
  try {
    const partnershipModel = await PartnershipModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!partnershipModel) {
      return res.status(404).json({
        status: 'error',
        message: 'Partnership Model not found'
      });
    }
    res.status(200).json(partnershipModel);
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message,
    });
  }
};

// Delete a partnership model by ID - DELETE /partnershipModels/:id
exports.deletePartnershipModelById = async function (req, res) {
  try {
    const partnershipModel = await PartnershipModel.findByIdAndDelete(req.params.id);
    if (!partnershipModel) {
      return res.status(404).json({
        status: 'error',
        message: 'Partnership Model not found'
      });
    }
    res.json({
      status: 'success',
      message: 'Partnership Model deleted successfully',
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message,
    });
  }
};
