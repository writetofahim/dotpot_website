// Import the Work model
const Work = require("../models/Work");

// Create a work
/**
@params {Object} req - The request object.
@params {Object} res - The response object.
@returns {Object} - Returns a JSON object containing a success message and the created work.
@description Creates a new work from the request body and saves it to the database.
*/
exports.createWork = async (req, res) => {
  try {
    // Create a new Work instance from the request body
    const work = new Work(req.body);
    // Save the work to the database
    await work.save();
    // Send a success response with the created work
    res.status(201).json({ message: "Work created successfully", work });
  } catch (error) {
    // If there's an error, log it to the console and send a failure response
    console.error(error);
    res.status(500).json({ message: "Server error" });
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
    const works = await Work.find({})
      .sort({ createdAt: -1 })
      .skip(startIndex)
      .limit(limit);
    // Send the works as a response along with metadata about the pagination
    res.json({
      totalWorks: totalWorks,
      totalPages,
      currentPage: page,
      works: works,
    });
  } catch (err) {
    // If there's an error, log it to the console and send a 500 response
    console.log(err);
    res.status(500).send({ error: "Server error" });
  }
};

// Get a specific work by ID
/**
@params {Object} req - The request object.
@params {Object} res - The response object.
@returns {Object} - Returns a JSON object containing a single work or an error message if not found.
@description Finds a work by its id in the request parameters and sends it as a response.
*/
exports.getWorkById = async (req, res) => {
  try {
    // Find the work by its id in the request parameters
    const work = await Work.findById(req.params.id);
    // If no work is found, send a not found response
    if (!work) {
      return res.status(404).json({ message: "Work not found" });
    }
    // Send a success response with the found work
    res.status(200).json({ work });
  } catch (error) {
    // If there's an error, log it to the console and send a failure response
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Update a work by ID
/**
@params {Object} req - The request object.
@params {Object} res - The response object.
@returns {Object} - Returns a JSON object containing a success message and the updated work or an error message if not found.
@description Updates a work by its id in the request parameters and body and sends it as a response.
*/
exports.updateWorkById = async (req, res) => {
  try {
    // If the request body contains an image, find the work by its id and remove the old image
    if (req.body.image) {
      const selected = await Work.findById(req.params.id);
      // if (selected) {
      //   await removeFile(selected.image);
      // }
    }
    // Find and update the work by its id in the request parameters and body, return the updated document
    const work = await Work.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    // If no work is found, send a not found response
    if (!work) {
      return res.status(404).json({ message: "Work not found" });
    }
    // Send a success response with the updated work
    res.status(200).json({ message: "Work updated successfully", work });
  } catch (error) {
    // If there's an error, log it to the console and send a failure response
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete a work by ID
/**
@params {Object} req - The request object.
@params {Object} res - The response object.
@returns {Object} - Returns a JSON object containing a success message or an error message if not found.
@description Deletes a work by its id in the request parameters and sends a confirmation message as a response.
*/
exports.deleteWorkById = async (req, res) => {
  try {
    // Find the work by its id in the request parameters
    const selected = await Work.findById(req.params.id);
    // If the work has an image, remove it from the file system
    // if(selected){
    //     await removeFile(selected.image);
    // }
    // Delete the work from the database
    const work = await Work.findByIdAndDelete(req.params.id);
    // If no work is found, send a not found response
    if (!work) {
      return res.status(404).json({ message: "Work not found" });
    }
    // Send a success response with a confirmation message
    res.status(200).json({ message: "Work deleted successfully" });
  } catch (error) {
    // If there's an error, log it to the console and send a failure response
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
