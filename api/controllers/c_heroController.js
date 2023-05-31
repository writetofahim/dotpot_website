// Import the Hero model
const Hero = require("../models/C_hero");

// Create a new hero and save it to the database
exports.createHero = async (req, res) => {
  try {
    // Create a new hero instance from the request body
    const hero = new Hero(req.body);
    // Save the hero to the database and return it in the response
    const savedHero = await hero.save();
    res.status(201).json(savedHero);
  } catch (error) {
    // Send a 400 response with the error message if there is an error
    res.status(400).json({ message: error.message });
  }
};

// Get all heroes from the database
exports.getAllHeroes = async (req, res) => {
  try {
    // Find all heroes in the database and return them in the response
    const heroes = await Hero.find();
    res.json(heroes);
  } catch (error) {
    // Send a 500 response with the error message if there is an error
    res.status(500).json({ message: error.message });
  }
};

// Get a single hero by id from the database
exports.getHeroById = async (req, res) => {
  try {
    // Find the hero by its id from the request parameters
    const hero = await Hero.findById(req.params.id);
    // If no hero is found, send a 404 response with an error message
    if (!hero) {
      return res.status(404).json({ message: "Hero not found" });
    }
    // If a hero is found, send it in the response
    res.json(hero);
  } catch (error) {
    // Send a 500 response with the error message if there is an error
    res.status(500).json({ message: error.message });
  }
};

// Update a single hero by id in the database
exports.updateHeroById = async (req, res) => {
  try {
    // If the request body contains an image property, find the selected hero by its id and remove its image file
    if (req.body.image) {
      const selected = await Hero.findById(req.params.id);
      if (selected) {
        // Remove the image file here
      }
    }
    // Find the hero by its id and update it with the request body, returning the new document
    const hero = await Hero.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    // If no hero is found, send a 404 response with an error message
    if (!hero) {
      return res.status(404).json({ message: "Hero not found" });
    }
    // If a hero is updated, send it in the response
    res.json(hero);
  } catch (error) {
    // Send a 400 response with the error message if there is an error
    res.status(400).json({ message: error.message });
  }
};

// Delete a single hero by id from the database
exports.deleteHeroById = async (req, res) => {
  try {
    // Find the selected hero by its id and remove its image file
    const selected = await Hero.findById(req.params.id);
    if (selected) {
      // Remove the image file here
    }
    // Find the hero by its id and delete it from the database
    const hero = await Hero.findByIdAndDelete(req.params.id);
    // If no hero is found, send a 404 response with an error message
    if (!hero) {
      return res.status(404).json({ message: "Hero not found" });
    }
    // If a hero is deleted, send a success message in the response
    res.json({ message: "Hero deleted successfully" });
  } catch (error) {
    // Send a 500 response with the error message if there is an error
    res.status(500).json({ message: error.message });
  }
};
