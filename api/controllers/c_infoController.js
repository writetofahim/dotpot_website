// Import the CompanyInfo model
const CompanyInfo = require("../models/C_info");

// Define controller functions for each route

// Get all company information from the database
const getAllCompanyInfo = async (req, res) => {
  try {
    // Find all company information in the database and return them in the response
    const companyInfo = await CompanyInfo.find();
    res.json(companyInfo);
  } catch (err) {
    // Send a 500 response with the error message if there is an error
    res.status(500).json({ message: err.message });
  }
};

// Get a single company information by id from the database
const getCompanyInfoById = async (req, res) => {
  try {
    // Find the company information by its id from the request parameters
    const companyInfo = await CompanyInfo.findById(req.params.id);
    // If no company information is found, send a 404 response with an error message
    if (!companyInfo) {
      return res.status(404).json({ message: "Company information not found" });
    }
    // If a company information is found, send it in the response
    res.json(companyInfo);
  } catch (err) {
    // Send a 500 response with the error message if there is an error
    res.status(500).json({ message: err.message });
  }
};

// Create a new company information and save it to the database
const createCompanyInfo = async (req, res) => {
  // Create a new company information instance from the request body
  const companyInfo = new CompanyInfo(req.body);
  try {
    // Save the company information to the database and return it in the response
    const newCompanyInfo = await companyInfo.save();
    res.status(201).json(newCompanyInfo);
  } catch (err) {
    // Send a 400 response with the error message if there is an error
    res.status(400).json({ message: err.message });
  }
};

// Update company information by id in the database
const updateCompanyInfo = async (req, res) => {
  // If the request body contains a primary_logo property, find the selected company information by its id and remove its primary_logo file
  if (req.body?.primary_logo) {
    const cInfo = await CompanyInfo.findById(req.params.id);
    // removeFile(cInfo?.primary_logo);
  }
  // If the request body contains a secondary_logo property, find the selected company information by its id and remove its secondary_logo file
  if (req.body?.secondary_logo) {
    const cInfo = await CompanyInfo.findById(req.params.id);
    // removeFile(cInfo?.secondary_logo);
  }
  try {
    // Find the company information by its id and update it with the request body, returning the new document
    const updatedCompanyInfo = await CompanyInfo.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    // If no company information is found, send a 404 response with an error message
    if (!updatedCompanyInfo) {
      return res.status(404).json({ message: "Company information not found" });
    }
    // If a company information is updated, send it in the response
    res.json(updatedCompanyInfo);
  } catch (err) {
    // Send a 400 response with the error message if there is an error
    res.status(400).json({ message: err.message });
  }
};

// Delete company information by id from the database
const deleteCompanyInfo = async (req, res) => {
  try {
    // Find the company information by its id and delete it from the database
    const companyInfo = await CompanyInfo.findByIdAndDelete(req.params.id);
    // If no company information is found, send a 404 response with an error message
    if (!companyInfo) {
      return res.status(404).json({ message: "Company information not found" });
    }
    // If a company information is deleted, send a success message in the response
    res.json({ message: "Company information deleted" });
  } catch (err) {
    // Send a 500 response with the error message if there is an error
    res.status(500).json({ message: err.message });
  }
};

// Export controller functions to be used in router
module.exports = {
  getAllCompanyInfo,
  getCompanyInfoById,
  createCompanyInfo,
  updateCompanyInfo,
  deleteCompanyInfo,
};
