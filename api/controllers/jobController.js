const Job = require('../models/Job');

/**
@params {Object} req - The request object.
@params {Object} res - The response object.
@returns {Object} - Returns a JSON object containing an array of jobs and metadata about the pagination.
@description Retrieves jobs from the database with pagination based on the query parameters.
@param {Number} req.query.page - The page number to retrieve. Defaults to 1 if not specified.
@param {Number} req.query.limit - The number of jobs to retrieve per page. Defaults to 10 if not specified.
*/
const getAllJobs = async (req, res) => {
  // Get the current page number from the query parameters, default to 1 if not specified
  const page = parseInt(req.query.page) || 1;
  // Get the number of jobs to display per page from the query parameters, default to 10 if not specified
  const limit = parseInt(req.query.limit) || 10;

  try {
    // Get the total number of jobs in the database
    const totalJobs = await Job.countDocuments({});
    // Calculate the total number of pages based on the limit and total number of jobs
    const totalPages = Math.ceil(totalJobs / limit);
    // Calculate the starting index of the jobs to retrieve
    const startIndex = (page - 1) * limit;
    // Calculate the ending index of the jobs to retrieve
    const endIndex = page * limit;

    // Retrieve the jobs from the database based on the pagination parameters
    const jobs = await Job.find({}).skip(startIndex).limit(limit);
    // Send the jobs as a response along with metadata about the pagination
    res.json({
      totalJobs: totalJobs,
      totalPages,
      currentPage: page,
      jobs: jobs
    });
  } catch (err) {
    // If there's an error, log it to the console and send a 500 response
    console.log(err);
    res.status(500).send({ error: 'Server error' });
  }
};

const getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) {
      return res.status(404).json({ msg: 'Job not found' });
    }
    res.json(job);
  } catch (error) {
    console.error(error.message);
    if (error.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Job not found' });
    }
    res.status(500).send('Server error');
  }
};

const createJob = async (req, res) => {
  try {
    const job = new Job(req.body);
    await job.save();
    res.json(job);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};

const updateJobById = async (req, res) => {
  try {
    const job = await Job.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!job) {
      return res.status(404).json({ msg: 'Job not found' });
    }
    res.json(job);
  } catch (error) {
    console.error(error.message);
    if (error.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Job not found' });
    }
    res.status(500).send('Server error');
  }
};

const deleteJobById = async (req, res) => {
  try {
    const job = await Job.findByIdAndRemove(req.params.id);
    if (!job) {
      return res.status(404).json({ msg: 'Job not found' });
    }
    res.json({ msg: 'Job removed' });
  } catch (error) {
    console.error(error.message);
    if (error.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Job not found' });
    }
    res.status(500).send('Server error');
  }
};

module.exports = {
  getAllJobs,
  getJobById,
  createJob,
  updateJobById,
  deleteJobById,
};
