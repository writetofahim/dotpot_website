// Import the JobApplication model
const JobApplication = require("../models/JobApplication");

// Define a function to create a new job application and save it to the database
const createJobApplication = async (req, res) => {
  try {
    // Create a new JobApplication instance from the request body
    const jobApplication = new JobApplication(req.body);
    // Save the job application to the database
    await jobApplication.save();
    // Send a success response with the created job application
    res.status(201).json({ success: true, data: jobApplication });
  } catch (error) {
    // If there's an error, send a failure response with the error message
    res.status(500).json({ success: false, error: error.message });
  }
};

// Define a function to get all job applications from the database with pagination
const getAllJobApplications = async (req, res) => {
  // Get the current page number from the query parameters, default to 1 if not specified
  const page = parseInt(req.query.page) || 1;
  // Get the number of Orders to display per page from the query parameters, default to 10 if not specified
  const limit = parseInt(req.query.limit) || 10;
  try {
    // Get the total number of works in the database
    const applications = await JobApplication.countDocuments({});
    // Calculate the total number of pages based on the limit and total number of JobApplications
    const totalPages = Math.ceil(applications / limit);
    // Calculate the starting index of the JobApplications to retrieve
    const startIndex = (page - 1) * limit;
    // Calculate the ending index of the JobApplications to retrieve
    const endIndex = page * limit;
    // Retrieve the JobApplications from the database based on the pagination parameters
    const JobApplications = await JobApplication.find({})
      .sort({ createdAt: -1 })
      .skip(startIndex)
      .limit(limit);
    // Send the JobApplications as a response along with metadata about the pagination
    res.json({
      applications: applications,
      totalPages,
      currentPage: page,
      JobApplications: JobApplications,
    });
  } catch (err) {
    // If there's an error, log it to the console and send a 500 response
    console.log(err);
    res.status(500).send({ error: "Server error" });
  }
};

// Define a function to get a single job application by its id from the database
const getJobApplicationById = async (req, res) => {
  try {
    // Find the job application by its id in the request parameters
    const jobApplication = await JobApplication.findById(req.params.id);
    // If no job application is found, send a not found response
    if (!jobApplication) {
      return res
        .status(404)
        .json({ success: false, error: "Job application not found" });
    }
    // Send a success response with the found job application
    res.status(200).json({ success: true, data: jobApplication });
  } catch (error) {
    // If there's an error, send a failure response with the error message
    res.status(500).json({ success: false, error: error.message });
  }
};

// Define a function to update a single job application by its id in the database
const updateJobApplicationById = async (req, res) => {
  try {
    // Find and update the job application by its id in the request parameters and body, return the updated document and run validators
    const jobApplication = await JobApplication.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    // If no job application is found, send a not found response
    if (!jobApplication) {
      return res
        .status(404)
        .json({ success: false, error: "Job application not found" });
    }
    // Send a success response with the updated job application
    res.status(200).json({ success: true, data: jobApplication });
  } catch (error) {
    // If there's an error, send a failure response with the error message
    res.status(500).json({ success: false, error: error.message });
  }
};

// Define a function to delete a single job application by its id from the database
const deleteJobApplicationById = async (req, res) => {
  try {
    // Find and delete the job application by its id in the request parameters
    const jobApplication = await JobApplication.findByIdAndDelete(
      req.params.id
    );
    // If no job application is found, send a not found response
    if (!jobApplication) {
      return res
        .status(404)
        .json({ success: false, error: "Job application not found" });
    }
    // Send a success response with an empty data object
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    // If there's an error, send a failure response with the error message
    res.status(500).json({ success: false, error: error.message });
  }
};

// Export the functions as a module
module.exports = {
  createJobApplication,
  getAllJobApplications,
  getJobApplicationById,
  updateJobApplicationById,
  deleteJobApplicationById,
};
