// routes/companyInfo.js

const express = require('express');
const router = express.Router();
const companyInfoController = require('../controllers/c_infoController');
const adminMiddleware = require('../middlewares/adminMiddleware');

// Define route to get all company information
router.get('/', companyInfoController.getAllCompanyInfo);

// Define route to get a single company information
router.get('/:id', companyInfoController.getCompanyInfoById);

// Define route to create company information
router.post('/', adminMiddleware, companyInfoController.createCompanyInfo);

// Define route to update company information
router.put('/:id', adminMiddleware, companyInfoController.updateCompanyInfo);

// Define route to delete company information
router.delete('/:id', adminMiddleware, companyInfoController.deleteCompanyInfo);

// Export router to be used in app.js

module.exports = router;
