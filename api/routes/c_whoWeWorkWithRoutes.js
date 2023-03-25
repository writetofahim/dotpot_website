const express = require('express');
const router = express.Router();
const whoWeWorkWithController = require('../controllers/c_whoWeWorkWithController');
const adminMiddleware = require('../middlewares/adminMiddleware');

// Get all whoWeWorkWith items
router.get('/', whoWeWorkWithController.getAllWhoWeWorkWith);

// Create a new whoWeWorkWith item
router.post('/', adminMiddleware, whoWeWorkWithController.createNewWhoWeWorkWith);

// Get a single whoWeWorkWith item by id
router.get('/:id', whoWeWorkWithController.getWhoWeWorkWithById);

// Update a whoWeWorkWith item by id
router.put('/:id', adminMiddleware, whoWeWorkWithController.updateWhoWeWorkWithById);

// Delete a whoWeWorkWith item by id
router.delete('/:id', adminMiddleware, whoWeWorkWithController.deleteWhoWeWorkWithById);

module.exports = router;
