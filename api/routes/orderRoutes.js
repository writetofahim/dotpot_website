const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const adminMiddleware = require('../middlewares/adminMiddleware');

// Create a new order
router.post('/', orderController.createOrder);

// Get all orders
router.get('/', adminMiddleware, orderController.getAllOrders);

// Get a specific order by ID
router.get('/:id', orderController.getOrderById);

// Update a specific order by ID
router.put('/:id', adminMiddleware, orderController.updateOrderById);

// Delete a specific order by ID
router.delete('/:id', adminMiddleware, orderController.deleteOrderById);

module.exports = router;
