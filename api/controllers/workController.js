const Work = require('../models/Work');

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
/**
@params {Object} req - The request object.
@params {Object} res - The response object.
@returns {Object} - Returns a JSON object containing an array of works and metadata about the pagination.
@description Retrieves works from the database with pagination based on the query parameters.
@param {Number} req.query.page - The page number to retrieve. Defaults to 1 if not specified.
@param {Number} req.query.limit - The number of works to retrieve per page. Defaults to 10 if not specified.
*/
exports.getAllWorks = async (req, res) => {
  // Get the current page number from the query parameters, default to 1 if not specified
  const page = parseInt(req.query.page) || 1;
  // Get the number of works to display per page from the query parameters, default to 10 if not specified
  const limit = parseInt(req.query.limit) || 10;

  try {
    // Get the total number of works in the database
    const totalWorks = await Work.countDocuments({});
    // Calculate the total number of pages based on the limit and total number of works
    const totalPages = Math.ceil(totalWorks / limit);
    // Calculate the starting index of the works to retrieve
    const startIndex = (page - 1) * limit;
    // Calculate the ending index of the works to retrieve
    const endIndex = page * limit;

    // Retrieve the works from the database based on the pagination parameters
    const works = await Work.find({}).sort({ createdAt: -1 }).skip(startIndex).limit(limit)
    // Send the works as a response along with metadata about the pagination
    res.json({
      totalWorks: totalWorks,
      totalPages,
      currentPage: page,
      works: works
    });
  } catch (err) {
    // If there's an error, log it to the console and send a 500 response
    console.log(err);
    res.status(500).send({ error: 'Server error' });
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
