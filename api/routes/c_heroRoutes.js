const express = require('express');
const router = express.Router();
const c_heroController = require('../controllers/c_heroController');
const adminMiddleware = require('../middlewares/adminMiddleware');

// Create a new hero
router.post('/', adminMiddleware, c_heroController.createHero);

// Get all heroes
router.get('/', c_heroController.getAllHeroes);

// Get a single hero by id
router.get('/:id', c_heroController.getHeroById);

// Update a hero by id
router.put('/:id', adminMiddleware, c_heroController.updateHeroById);

// Delete a hero by id
router.delete('/:id', adminMiddleware, c_heroController.deleteHeroById);

module.exports = router;
