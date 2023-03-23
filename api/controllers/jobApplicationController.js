const JobApplication = require('../models/JobApplication');

const createJobApplication = async (req, res) => {
  try {
    const jobApplication = new JobApplication(req.body);

    await jobApplication.save();

    res.status(201).json({ success: true, data: jobApplication });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

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
      const JobApplications = await JobApplication.find({}).sort({ createdAt: -1 }).skip(startIndex).limit(limit)
      // Send the JobApplications as a response along with metadata about the pagination
      res.json({
        applications: applications,
        totalPages,
        currentPage: page,
        JobApplications: JobApplications
      });
    } catch (err) {
      // If there's an error, log it to the console and send a 500 response
      console.log(err);
      res.status(500).send({ error: 'Server error' });
    }
};

const getJobApplicationById = async (req, res) => {
  try {
    const jobApplication = await JobApplication.findById(req.params.id);

    if (!jobApplication) {
      return res.status(404).json({ success: false, error: 'Job application not found' });
    }

    res.status(200).json({ success: true, data: jobApplication });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

const updateJobApplicationById = async (req, res) => {
  try {
    const jobApplication = await JobApplication.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      },
    );

    if (!jobApplication) {
      return res.status(404).json({ success: false, error: 'Job application not found' });
    }

    res.status(200).json({ success: true, data: jobApplication });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

const deleteJobApplicationById = async (req, res) => {
  try {
    const jobApplication = await JobApplication.findByIdAndDelete(req.params.id);

    if (!jobApplication) {
      return res.status(404).json({ success: false, error: 'Job application not found' });
    }

    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = {
  createJobApplication,
  getAllJobApplications,
  getJobApplicationById,
  updateJobApplicationById,
  deleteJobApplicationById,
};
