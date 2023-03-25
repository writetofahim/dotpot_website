const express = require('express');
const router = express.Router();
const partnershipModelController = require('../controllers/c_partnershipModelController');
const adminMiddleware = require('../middlewares/adminMiddleware');

// Get all partnership models
router.get('/', partnershipModelController.getAllPartnershipModels);

// Create a new partnership model
router.post('/', adminMiddleware, partnershipModelController.createNewPartnershipModel);

// Get a single partnership model
router.get('/:id', partnershipModelController.getPartnershipModelById);

// Update a partnership model
router.put('/:id', adminMiddleware, partnershipModelController.updatePartnershipModelById);

// Delete a partnership model
router.delete('/:id', adminMiddleware, partnershipModelController.deletePartnershipModelById);

module.exports = router;
