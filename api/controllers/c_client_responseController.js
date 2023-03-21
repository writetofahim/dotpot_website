const C_clientResponse = require('../models/C_clientResponse');

exports.create = async (req, res) => {
  try {
    const clientResponse = new C_clientResponse(req.body);
    const savedClientResponse = await clientResponse.save();
    res.status(201).json(savedClientResponse);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


// Get all C_clientResponse
/**
@params {Object} req - The request object.
@params {Object} res - The response object.
@returns {Object} - Returns a JSON object containing an array of C_clientResponse and metadata about the pagination.
@description Retrieves C_clientResponse from the database with pagination based on the query parameters.
@param {Number} req.query.page - The page number to retrieve. Defaults to 1 if not specified.
@param {Number} req.query.limit - The number of C_clientResponse to retrieve per page. Defaults to 10 if not specified.
*/
exports.getAll = async (req, res) => {
  // Get the current page number from the query parameters, default to 1 if not specified
  const page = parseInt(req.query.page) || 1;
  // Get the number of C_clientResponse to display per page from the query parameters, default to 10 if not specified
  const limit = parseInt(req.query.limit) || 10;

  try {
    // Get the total number of C_clientResponse in the database
    const totalC_clientResponse = await C_clientResponse.countDocuments({});
    // Calculate the total number of pages based on the limit and total number of C_clientResponse
    const totalPages = Math.ceil(totalC_clientResponse / limit);
    // Calculate the starting index of the C_clientResponse to retrieve
    const startIndex = (page - 1) * limit;
    // Calculate the ending index of the C_clientResponse to retrieve
    const endIndex = page * limit;

    // Retrieve the C_clientResponse from the database based on the pagination parameters
    const c_clientResponse = await C_clientResponse.find({}).sort({ createdAt: -1 }).skip(startIndex).limit(limit)
    // Send the C_clientResponse as a response along with metadata about the pagination
    res.json({
      totalC_clientResponse: totalC_clientResponse,
      totalPages,
      currentPage: page,
      c_clientResponse: c_clientResponse
    });
  } catch (err) {
    // If there's an error, log it to the console and send a 500 response
    console.log(err);
    res.status(500).send({ error: 'Server error' });
  }
};

exports.getById = async (req, res) => {
  try {
    const clientResponse = await C_clientResponse.findById(req.params.id);
    res.json(clientResponse);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const clientResponse = await C_clientResponse.findById(req.params.id);
    if (clientResponse) {
      clientResponse.set(req.body);
      const updatedClientResponse = await clientResponse.save();
      res.json(updatedClientResponse);
    } else {
      res.status(404).json({ message: 'Client response not found' });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const c_clientResponse = await C_clientResponse.findByIdAndDelete(req.params.id);
    if (!c_clientResponse) {
      return res.status(404).json({ message: 'C_clientResponse not found' });
    }
    res.status(200).json({ message: 'C_clientResponse deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
