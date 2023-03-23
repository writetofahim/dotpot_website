const PartnershipModel = require('../models/C_partnershipModel');

/**
 * Get all partnershipModel with pagination.
 * @param {number} page - The page number to retrieve.
 * @param {number} limit - The maximum number of partnershipModel to retrieve per page.
 * @returns {Object} - An object containing an array of partnershipModel and metadata.
 * @throws {Error} - If there is an error retrieving the partnershipModel from the database.
 */
exports.getAllPartnershipModels = async (req, res) => {
  try {
      const { page = 1, limit = 10 } = req.query;
      const partnershipModel = await PartnershipModel.find()
          .limit(limit * 1)
          .skip((page - 1) * limit)
          .exec()

      const count = await PartnershipModel.countDocuments();
      res.json({
          partnershipModels: partnershipModel.map(partnership => partnership.toObject()),
          totalPages: Math.ceil(count / limit),
          currentPage: page,
          totalPartnershipModel: count
      });
  } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
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
