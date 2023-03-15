const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Create a new order
router.post('/', orderController.createOrder);

// Get all orders
router.get('/', orderController.getAllOrders);

// Get a specific order by ID
router.get('/:id', orderController.getOrderById);

// Update a specific order by ID
router.put('/:id', orderController.updateOrderById);

// Delete a specific order by ID
router.delete('/:id', orderController.deleteOrderById);

module.exports = router;
