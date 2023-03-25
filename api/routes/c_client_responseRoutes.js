const express = require('express');
const router = express.Router();
const cClientResponseController = require('../controllers/c_client_responseController');
const adminMiddleware = require('../middlewares/adminMiddleware');

// Create a new client response
router.post('/', cClientResponseController.create);

// Get all client responses
router.get('/', adminMiddleware, cClientResponseController.getAll);

// Get a specific client response
router.get('/:id', adminMiddleware, cClientResponseController.getById);

// Update a client response
router.put('/:id', adminMiddleware, cClientResponseController.update);

// Delete a client response
router.delete('/:id', adminMiddleware, cClientResponseController.delete);

module.exports = router;
