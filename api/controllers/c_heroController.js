const Hero = require('../models/C_hero');

// Create a new hero
exports.createHero = async (req, res) => {
  try {
    const hero = new Hero(req.body);
    const savedHero = await hero.save();
    res.status(201).json(savedHero);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all heroes
exports.getAllHeroes = async (req, res) => {
  try {
    const heroes = await Hero.find();
    res.json(heroes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single hero by id
exports.getHeroById = async (req, res) => {
  try {
    const hero = await Hero.findById(req.params.id);
    if (!hero) {
      return res.status(404).json({ message: 'Hero not found' });
    }
    res.json(hero);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a hero by id
exports.updateHeroById = async (req, res) => {
  try {
    const hero = await Hero.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!hero) {
      return res.status(404).json({ message: 'Hero not found' });
    }
    res.json(hero);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a hero by id
exports.deleteHeroById = async (req, res) => {
  try {
    const hero = await Hero.findByIdAndDelete(req.params.id);
    if (!hero) {
      return res.status(404).json({ message: 'Hero not found' });
    }
    res.json({ message: 'Hero deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
