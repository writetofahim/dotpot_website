const express = require('express');
const router = express.Router();
const workController = require('../controllers/workController');
const adminMiddleware = require('../middlewares/adminMiddleware');

// Create a work
router.post('/', adminMiddleware, workController.createWork);

// Get all works
router.get('/', workController.getAllWorks);

// Get a specific work by ID
router.get('/:id', workController.getWorkById);

// Update a work by ID
router.put('/:id', adminMiddleware, workController.updateWorkById);

// Delete a work by ID
router.delete('/:id', adminMiddleware, workController.deleteWorkById);

module.exports = router;
