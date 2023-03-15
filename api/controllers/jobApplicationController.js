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
  try {
    const jobApplications = await JobApplication.find();

    res.status(200).json({ success: true, data: jobApplications });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
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
