// controllers/companyInfoController.js

const CompanyInfo = require('../models/C_info');

// Define controller functions for each route

// Get all company information
const getAllCompanyInfo = async (req, res) => {
    try {
      const companyInfo = await CompanyInfo.find();
      res.json(companyInfo);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
  
  // Get a single company information by id
  const getCompanyInfoById = async (req, res) => {
    try {
      const companyInfo = await CompanyInfo.findById(req.params.id);
      if (!companyInfo) {
        return res.status(404).json({ message: 'Company information not found' });
      }
      res.json(companyInfo);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
  
  // Create a new company information
  const createCompanyInfo = async (req, res) => {
    const companyInfo = new CompanyInfo(req.body);
    try {
      const newCompanyInfo = await companyInfo.save();
      res.status(201).json(newCompanyInfo);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
  
  // Update company information by id
  const updateCompanyInfo = async (req, res) => {
    try {
      const updatedCompanyInfo = await CompanyInfo.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedCompanyInfo) {
        return res.status(404).json({ message: 'Company information not found' });
      }
      res.json(updatedCompanyInfo);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
  
  // Delete company information by id
  const deleteCompanyInfo = async (req, res) => {
    try {
      const companyInfo = await CompanyInfo.findByIdAndDelete(req.params.id);
      if (!companyInfo) {
        return res.status(404).json({ message: 'Company information not found' });
      }
      res.json({ message: 'Company information deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
  
  // Export controller functions to be used in router
  module.exports = {
    getAllCompanyInfo,
    getCompanyInfoById,
    createCompanyInfo,
    updateCompanyInfo,
    deleteCompanyInfo
  };