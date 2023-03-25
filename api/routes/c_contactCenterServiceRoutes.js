const express = require('express');
const router = express.Router();
const c_contactCenterServiceController = require('../controllers/c_contactCenterServiceController');
const adminMiddleware = require('../middlewares/adminMiddleware');

// Create a new contact center service
router.post('/', adminMiddleware, c_contactCenterServiceController.createContactCenterService);

// Get all contact center services
router.get('/', c_contactCenterServiceController.getAllContactCenterServices);

// Get a single contact center service
router.get('/:id', c_contactCenterServiceController.getContactCenterServiceById);

// Update a contact center service
router.put('/:id', adminMiddleware, c_contactCenterServiceController.updateContactCenterService);

// Delete a contact center service
router.delete('/:id', adminMiddleware, c_contactCenterServiceController.deleteContactCenterService);

module.exports = router;
