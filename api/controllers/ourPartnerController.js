// Import the OurPartner model and the removeFile utility function
const OurPartner = require("../models/OurPartner");

// Create a new partner and save it to the database
exports.createPartner = async (req, res) => {
  try {
    // Use the request body to create a new partner
    const partner = await OurPartner.create(req.body);
    // Send a 201 response with the success flag and the created partner
    res.status(201).json({ success: true, data: partner });
  } catch (err) {
    // Send a 400 response with the error message if there is an error
    res.status(400).json({ success: false, message: err.message });
  }
};

/**
 * Get all our partners with pagination.
 * @param {number} page - The page number to retrieve.
 * @param {number} limit - The maximum number of our partners to retrieve per page.
 * @returns {Object} - An object containing an array of our partners and metadata.
 * @throws {Error} - If there is an error retrieving the our partners from the database.
 */
exports.getAllPartners = async (req, res) => {
  try {
    // Get the page and limit query parameters or use default values
    const { page = 1, limit = 10 } = req.query;
    // Find all our partners with a limit and a skip based on the page number
    const ourPartners = await OurPartner.find()
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    // Count the total number of our partners in the database
    const count = await OurPartner.countDocuments();
    // Send a response with the our partners array and some metadata
    res.json({
      ourPartners: ourPartners.map((partner) => partner.toObject()),
      totalPages: Math.ceil(count / limit),
      currentPage: page,
      totalOurPartners: count,
    });
  } catch (err) {
    // Log the error message and send a 500 response
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// Get a single partner by its id
exports.getPartnerById = async (req, res) => {
  try {
    // Find the partner by its id from the request parameters
    const partner = await OurPartner.findById(req.params.id);
    // If no partner is found, send a 404 response with an error message
    if (!partner) {
      return res
        .status(404)
        .json({ success: false, message: "Partner not found" });
    }
    // If a partner is found, send a 200 response with the success flag and the partner data
    res.status(200).json({ success: true, data: partner });
  } catch (err) {
    // Send a 400 response with the error message if there is an error
    res.status(400).json({ success: false, message: err.message });
  }
};

// Update a single partner by its id
exports.updatePartnerById = async (req, res) => {
  try {
    // If the request body contains a logo property, find the selected partner by its id and remove its logo file
    if (req.body.logo) {
      const selected = await OurPartner.findById(req.params.id);
      // await removeFile(selected.logo);
    }
    // Find the partner by its id and update it with the request body, returning the new document and running validators
    const partner = await OurPartner.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    // If no partner is found, send a 404 response with an error message
    if (!partner) {
      return res
        .status(404)
        .json({ success: false, message: "Partner not found" });
    }
    // If a partner is updated, send a 200 response with the success flag and the updated partner data
    res.status(200).json({ success: true, data: partner });
  } catch (err) {
    // Send a 400 response with the error message if there is an error
    res.status(400).json({ success: false, message: err.message });
  }
};

// Delete a single partner by its id
exports.deletePartnerById = async (req, res) => {
  try {
    // Find the selected partner by its id and remove its logo file
    const selected = await OurPartner.findById(req.params.id);
    if (selected) {
      // await removeFile(selected.logo);
    }
    // Find the partner by its id and delete it from the database
    const partner = await OurPartner.findByIdAndDelete(req.params.id);
    // If no partner is found, send a 404 response with an error message
    if (!partner) {
      return res
        .status(404)
        .json({ success: false, message: "Partner not found" });
    }
    // If a partner is deleted, send a 200 response with the success flag and a message
    res.status(200).json({ success: true, message: "Partner deleted" });
  } catch (err) {
    // Send a 400 response with the error message if there is an error
    res.status(400).json({ success: false, message: err.message });
  }
};
