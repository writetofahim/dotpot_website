const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/google', authController.googleSignup);
router.post('/reset-password', authController.resetPassword);
router.post('/reset-password/:resetToken',authController.verifyResetPassword);
  
module.exports = router;