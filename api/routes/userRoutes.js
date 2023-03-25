const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const userController = require('../controllers/userController');
const adminMiddleware = require('../middlewares/adminMiddleware');

// Get current user
router.get('/', authMiddleware, userController.getUser);

// Get all users (admin only)
router.get('/all', adminMiddleware, userController.getAllUsers);

// Get current user
router.get('/:id', authMiddleware, userController.getSingleUser);

// Update user profile
router.put('/:id', authMiddleware, userController.updateUser);

// Delete user (admin or owner only)
router.delete('/:id', adminMiddleware, userController.deleteUser);

module.exports = router;
