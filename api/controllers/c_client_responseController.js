// Import the C_clientResponse model
const C_clientResponse = require("../models/C_clientResponse");

// Create a new C_clientResponse and save it to the database
exports.create = async (req, res) => {
  try {
    // Create a new C_clientResponse instance from the request body
    const clientResponse = new C_clientResponse(req.body);
    // Save the C_clientResponse to the database and return it in the response
    const savedClientResponse = await clientResponse.save();
    res.status(201).json(savedClientResponse);
  } catch (err) {
    // Send a 400 response with the error message if there is an error
    res.status(400).json({ message: err.message });
  }
};

// Get all C_clientResponse from the database with pagination
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
    const c_clientResponse = await C_clientResponse.find({})
      .sort({ createdAt: -1 })
      .skip(startIndex)
      .limit(limit);
    // Send the C_clientResponse as a response along with metadata about the pagination
    res.json({
      totalC_clientResponse: totalC_clientResponse,
      totalPages,
      currentPage: page,
      c_clientResponse: c_clientResponse,
    });
  } catch (err) {
    // If there's an error, log it to the console and send a 500 response
    console.log(err);
    res.status(500).send({ error: "Server error" });
  }
};

// Get a single C_clientResponse by id from the database
exports.getById = async (req, res) => {
  try {
    // Find the C_clientResponse by its id from the request parameters
    const clientResponse = await C_clientResponse.findById(req.params.id);
    // If no C_clientResponse is found, send a 404 response with an error message
    if (!clientResponse) {
      return res.status(404).json({ message: "Client response not found" });
    }
    // If a C_clientResponse is found, send it in the response
    res.json(clientResponse);
  } catch (err) {
    // Send a 500 response with the error message if there is an error
    res.status(500).json({ message: err.message });
  }
};

// Update a single C_clientResponse by id in the database
exports.update = async (req, res) => {
  try {
    // Find the selected C_clientResponse by its id and update it with the request body, returning the new document
    const clientResponse = await C_clientResponse.findById(req.params.id);
    if (clientResponse) {
      clientResponse.set(req.body);
      const updatedClientResponse = await clientResponse.save();
      res.json(updatedClientResponse);
    } else {
      // If no C_clientResponse is found, send a 404 response with an error message
      res.status(404).json({ message: "Client response not found" });
    }
  } catch (err) {
    // Send a 400 response with the error message if there is an error
    res.status(400).json({ message: err.message });
  }
};

// Delete a single C_clientResponse by id from the database
exports.delete = async (req, res) => {
  try {
    // Find the selected C_clientResponse by its id and remove its attachment file
    const selected = await C_clientResponse.findById(req.params.id);
    // if(selected){
    //   await removeFile(selected.attachment);
    // }
    // Find the C_clientResponse by its id and delete it from the database
    const c_clientResponse = await C_clientResponse.findByIdAndDelete(
      req.params.id
    );
    // If no C_clientResponse is found, send a 404 response with an error message
    if (!c_clientResponse) {
      return res.status(404).json({ message: "C_clientResponse not found" });
    }
    // If a C_clientResponse is deleted, send a success message in the response
    res.status(200).json({ message: "C_clientResponse deleted successfully" });
  } catch (error) {
    // If there's an error, log it to the console and send a 500 response
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
