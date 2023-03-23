const express = require('express');
const router = express.Router();
const ourPartnerController = require('../controllers/ourPartnerController');

// Get all partners
router.get('/', ourPartnerController.getAllPartners);

// Create a new partner
router.post('/', ourPartnerController.createPartner);

// Get a specific partner by ID
router.get('/:id', ourPartnerController.getPartnerById);

// Update a partner by ID
router.put('/:id', ourPartnerController.updatePartnerById);

// Delete a partner by ID
router.delete('/:id', ourPartnerController.deletePartnerById);

module.exports = router;
