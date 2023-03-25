const express = require('express');
const router = express.Router();
const keyFeatureController = require('../controllers/c_keyFeatureController');
const adminMiddleware = require('../middlewares/adminMiddleware');

// Route to get all key features
router.get('/', keyFeatureController.getAllKeyFeatures);

// Route to create a new key feature
router.post('/', adminMiddleware, keyFeatureController.createNewKeyFeature);

// Route to get a single key feature by id
router.get('/:id', keyFeatureController.getKeyFeatureById);

// Route to update a single key feature by id
router.put('/:id', adminMiddleware, keyFeatureController.updateKeyFeatureById);

// Route to delete a single key feature by id
router.delete('/:id', adminMiddleware, keyFeatureController.deleteKeyFeatureById);

module.exports = router;