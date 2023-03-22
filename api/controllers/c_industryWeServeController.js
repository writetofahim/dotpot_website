const IndustryWeServe = require('../models/C_IndustryWeServe');

/**
 * Get all industryWeServe with pagination.
 * @param {number} page - The page number to retrieve.
 * @param {number} limit - The maximum number of industryWeServe to retrieve per page.
 * @returns {Object} - An object containing an array of industryWeServe and metadata.
 * @throws {Error} - If there is an error retrieving the industryWeServe from the database.
 */
exports.getAllIndustryWeServe = async (req, res) => {
  try {
      const { page = 1, limit = 10 } = req.query;
      const industryWeServe = await IndustryWeServe.find()
          .select('-password')
          .limit(limit * 1)
          .skip((page - 1) * limit)
          .exec()

      const count = await IndustryWeServe.countDocuments();
      res.json({
          industryWeServe: industryWeServe.map(industryWeServe => industryWeServe.toObject()),
          totalPages: Math.ceil(count / limit),
          currentPage: page,
          totalIndustryWeServe: count
      });
  } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
  }
};

// GET a specific industry we serve by ID
exports.getIndustryWeServeById = async (req, res) => {
  try {
    const industryWeServe = await IndustryWeServe.findById(req.params.id);
    if (industryWeServe === null) {
      return res.status(404).json({ message: 'Industry we serve not found' });
    }
    res.json(industryWeServe);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST a new industry we serve
exports.createIndustryWeServe = async (req, res) => {
  const industryWeServe = new IndustryWeServe({
    title: req.body.title,
    description: req.body.description,
    icon: req.body.icon,
    subtitle: req.body.subtitle,
    link: req.body.link
  });
  try {
    const newIndustryWeServe = await industryWeServe.save();
    res.status(201).json(newIndustryWeServe);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// PUT an updated industry we serve by ID
exports.updateIndustryWeServeById = async (req, res) => {
  try {
    const industryWeServe = await IndustryWeServe.findByIdAndUpdate(req.params.id, req.body);
    if (industryWeServe === null) {
      return res.status(404).json({ message: 'Industry we serve not found' });
    }
    res.json(industryWeServe);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE an industry we serve by ID
exports.deleteIndustryWeServeById = async (req, res) => {
  try {
    const industryWeServe = await IndustryWeServe.findByIdAndDelete(req.params.id);
    if (industryWeServe === null) {
      return res.status(404).json({ message: 'Industry we serve not found' });
    }
    res.json(industryWeServe);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
