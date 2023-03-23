const OurPartner = require('../models/ourPartner');

exports.createPartner = async (req, res) => {
  try {
    const partner = await OurPartner.create(req.body);
    res.status(201).json({ success: true, data: partner });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

/**
 * Get all our partners with pagination.
 * @param {number} page - The page number to retrieve.
 * @param {number} limit - The maximum number of our partners to retrieve per page.
 * @returns {Object} - An object containing an array of our partners and metadata.
 * @throws {Error} - If there is an error retrieving the our partners from the database.
 */
exports.getAllPartners = async (req, res) => {
  try {
      const { page = 1, limit = 10 } = req.query;
      const ourPartners = await OurPartner.find()
          .limit(limit * 1)
          .skip((page - 1) * limit)
          .exec()

      const count = await OurPartner.countDocuments();
      res.json({
          ourPartners: ourPartners.map(partner => partner.toObject()),
          totalPages: Math.ceil(count / limit),
          currentPage: page,
          totalOurPartners: count
      });
  } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
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
