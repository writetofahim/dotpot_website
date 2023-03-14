const IndustryWeServe = require('../models/C_IndustryWeServe');

// GET all industry we serve
exports.getAllIndustryWeServe = async (req, res) => {
  try {
    const industryWeServe = await IndustryWeServe.find();
    res.json(industryWeServe);
  } catch (err) {
    res.status(500).json({ message: err.message });
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
