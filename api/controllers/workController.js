const Work = require('../models/work');

// Create a work
exports.createWork = async (req, res) => {
  try {
    const work = new Work(req.body);
    await work.save();
    res.status(201).json({ message: 'Work created successfully', work });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all works
exports.getAllWorks = async (req, res) => {
  try {
    const works = await Work.find();
    res.status(200).json({ works });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get a specific work by ID
exports.getWorkById = async (req, res) => {
  try {
    const work = await Work.findById(req.params.id);
    if (!work) {
      return res.status(404).json({ message: 'Work not found' });
    }
    res.status(200).json({ work });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update a work by ID
exports.updateWorkById = async (req, res) => {
  try {
    const work = await Work.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!work) {
      return res.status(404).json({ message: 'Work not found' });
    }
    res.status(200).json({ message: 'Work updated successfully', work });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete a work by ID
exports.deleteWorkById = async (req, res) => {
  try {
    const work = await Work.findByIdAndDelete(req.params.id);
    if (!work) {
      return res.status(404).json({ message: 'Work not found' });
    }
    res.status(200).json({ message: 'Work deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
