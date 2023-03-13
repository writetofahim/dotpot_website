const C_contactCenterService = require('../models/C_contactCenterService');

// Create a new contact center service
exports.createContactCenterService = async (req, res) => {
  try {
    const contactCenterService = new C_contactCenterService(req.body);
    const newContactCenterService = await contactCenterService.save();
    res.status(201).json(newContactCenterService);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get all contact center services
exports.getAllContactCenterServices = async (req, res) => {
  try {
    const contactCenterServices = await C_contactCenterService.find();
    res.status(200).json(contactCenterServices);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get a single contact center service
exports.getContactCenterServiceById = async (req, res) => {
  try {
    const contactCenterService = await C_contactCenterService.findById(req.params.id);
    if (!contactCenterService) {
      return res.status(404).json({ message: 'Contact center service not found' });
    }
    res.status(200).json(contactCenterService);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Update a contact center service
exports.updateContactCenterService = async (req, res) => {
  try {
    const contactCenterService = await C_contactCenterService.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!contactCenterService) {
      return res.status(404).json({ message: 'Contact center service not found' });
    }
    res.status(200).json(contactCenterService);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Delete a contact center service
exports.deleteContactCenterService = async (req, res) => {
  try {
    const contactCenterService = await C_contactCenterService.findByIdAndDelete(req.params.id);
    if (!contactCenterService) {
      return res.status(404).json({ message: 'Contact center service not found' });
    }
    res.status(200).json({ message: 'Contact center service deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};
