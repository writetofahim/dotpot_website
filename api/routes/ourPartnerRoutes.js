const express = require('express');
const router = express.Router();
const ourPartnerController = require('../controllers/ourPartnerController');
const adminMiddleware = require('../middlewares/adminMiddleware');

// Get all partners
router.get('/', ourPartnerController.getAllPartners);

// Create a new partner
router.post('/', adminMiddleware, ourPartnerController.createPartner);

// Get a specific partner by ID
router.get('/:id', ourPartnerController.getPartnerById);

// Update a partner by ID
router.put('/:id', adminMiddleware, ourPartnerController.updatePartnerById);

// Delete a partner by ID
router.delete('/:id', adminMiddleware, ourPartnerController.deletePartnerById);

module.exports = router;
