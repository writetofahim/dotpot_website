const express = require('express');
const router = express.Router();
const industryWeServeController = require('../controllers/c_industryWeServeController');
const adminMiddleware = require('../middlewares/adminMiddleware');

// GET all industry we serve
router.get('/', industryWeServeController.getAllIndustryWeServe);

// GET a specific industry we serve by ID
router.get('/:id', industryWeServeController.getIndustryWeServeById);

// POST a new industry we serve
router.post('/', adminMiddleware, industryWeServeController.createIndustryWeServe);

// PUT an updated industry we serve by ID
router.put('/:id', adminMiddleware, industryWeServeController.updateIndustryWeServeById);

// DELETE an industry we serve by ID
router.delete('/:id', adminMiddleware, industryWeServeController.deleteIndustryWeServeById);

module.exports = router;
