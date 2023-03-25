const SocialMedia = require('../models/SocialMedia');

// Create a new social media account
exports.createSocialMedia = async (req, res) => {
  try {
    const socialMedia = new SocialMedia(req.body);
    const savedSocialMedia = await socialMedia.save();
    res.status(201).json(savedSocialMedia);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Get all social media accounts
exports.getAllSocialMedia = async (req, res) => {
  try {
    const socialMedia = await SocialMedia.find();
    res.status(200).json(socialMedia);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Get a specific social media account by ID
exports.getSocialMediaById = async (req, res) => {
  try {
    const socialMedia = await SocialMedia.findById(req.params.id);
    if (!socialMedia) {
      return res.status(404).json({ message: 'Social media account not found' });
    }
    res.status(200).json(socialMedia);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Update a social media account by ID
exports.updateSocialMediaById = async (req, res) => {
  try {
    const socialMedia = await SocialMedia.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!socialMedia) {
      return res.status(404).json({ message: 'socialMedia not found' });
    }
    res.status(200).json({ message: 'socialMedia updated successfully', socialMedia });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Delete a social media account by ID
exports.deleteSocialMediaById = async (req, res) => {
  try {
    const socialMedia = await SocialMedia.findByIdAndDelete(req.params.id);
    if (!socialMedia) {
      return res.status(404).json({ message: 'Social media account not found' });
    }
    res.status(200).json({ message: 'Social media account deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};
