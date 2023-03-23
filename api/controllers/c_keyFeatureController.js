const KeyFeature = require('../models/C_keyFeature');

// Handle index actions - GET /keyFeatures
exports.getAllKeyFeatures = async function (req, res) {
  // Get the current page number from the query parameters, default to 1 if not specified
  const page = parseInt(req.query.page) || 1;
  // Get the number of KeyFeatures to display per page from the query parameters, default to 10 if not specified
  const limit = parseInt(req.query.limit) || 10;

  try {
    // Get the total number of works in the database
    const keyFeatures = await KeyFeature.countDocuments({});
    // Calculate the total number of pages based on the limit and total number of KeyFeatures
    const totalPages = Math.ceil(keyFeatures / limit);
    // Calculate the starting index of the KeyFeatures to retrieve
    const startIndex = (page - 1) * limit;
    // Calculate the ending index of the KeyFeatures to retrieve
    const endIndex = page * limit;

    // Retrieve the KeyFeatures from the database based on the pagination parameters
    const KeyFeatures = await KeyFeature.find({}).sort({ createdAt: -1 }).skip(startIndex).limit(limit)
    // Send the KeyFeatures as a response along with metadata about the pagination
    res.json({
      keyFeatures: keyFeatures,
      totalPages,
      currentPage: page,
      KeyFeatures: KeyFeatures
    });
  } catch (err) {
    // If there's an error, log it to the console and send a 500 response
    console.log(err);
    res.status(500).send({ error: 'Server error' });
  }
};

// Handle create keyFeature actions - POST /keyFeatures
exports.createNewKeyFeature = async function (req, res) {
  try {
    const keyFeature = new KeyFeature({
      title: req.body.title,
      subtitle: req.body.subtitle,
      description: req.body.description,
      icon: req.body.icon,
      link: req.body.link
    });
    const savedKeyFeature = await keyFeature.save();
    res.status(201).json(savedKeyFeature);
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err.message
    });
  }
};

// Handle view keyFeature info - GET /keyFeatures/:id
exports.getKeyFeatureById = async function (req, res) {
  try {
    const keyFeature = await KeyFeature.findById(req.params.id);
    if (!keyFeature) {
      return res.status(404).json({
        status: "error",
        message: "Key Feature not found"
      });
    }
    res.status(200).json(keyFeature);
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message
    });
  }
};

// Handle update keyFeature info - PUT /keyFeatures/:id
exports.updateKeyFeatureById = async function (req, res) {
  try {
    const keyFeature = await KeyFeature.findById(req.params.id);
    if (!keyFeature) {
      return res.status(404).json({
        status: "error",
        message: "Key Feature not found"
      });
    }
    keyFeature.title = req.body.title;
    keyFeature.subtitle = req.body.subtitle;
    keyFeature.description = req.body.description;
    keyFeature.icon = req.body.icon;
    keyFeature.link = req.body.link;
    const updatedKeyFeature = await keyFeature.save();
    res.json(updatedKeyFeature);
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err.message
    });
  }
};

// Handle delete keyFeature - DELETE /keyFeatures/:keyFeature_id
exports.deleteKeyFeatureById = async function (req, res) {
  try {
    const keyFeature = await KeyFeature.findByIdAndDelete(req.params.id);
    if (!keyFeature) {
      return res.status(404).json({
        status: "error",
        message: "Key Feature not found"
      });
    }
    res.json({
      status: "success",
      message: 'Key Feature deleted'
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message
    });
  }
};
