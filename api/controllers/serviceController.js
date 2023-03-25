const Service = require('../models/Service');

exports.createService = async (req, res) => {
  try {
    const service = new Service(req.body);
    await service.save();
    res.status(201).json({ message: 'Service created successfully', service });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};


exports.getAllServices = async (req, res) => {
  // Get the current page number from the query parameters, default to 1 if not specified
  const page = parseInt(req.query.page) || 1;
  // Get the number of services to display per page from the query parameters, default to 10 if not specified
  const limit = parseInt(req.query.limit) || 10;

  try {
      // Get the total number of services in the database
      const totalServices = await Service.countDocuments({});
      // Calculate the total number of pages based on the limit and total number of services
      const totalPages = Math.ceil(totalServices / limit);
      // Calculate the starting index of the services to retrieve
      const startIndex = (page - 1) * limit;
      // Calculate the ending index of the services to retrieve
      const endIndex = page * limit;

      // Retrieve the services from the database based on the pagination parameters
      const services = await Service.find({}).skip(startIndex).limit(limit);
      // Send the services as a response along with metadata about the pagination
      res.json({
          totalServices,
          totalPages,
          currentPage: page,
          services
      });
  } catch (err) {
      // If there's an error, log it to the console and send a 500 response
      console.log(err);
      res.status(500).send({ error: 'Server error' });
  }
};

exports.getServiceById = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }
    res.status(200).json({ service });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

exports.updateServiceById = async (req, res) => {
  try {
    const service = await Service.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }
    res.status(200).json({ message: 'Service updated successfully', service });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

exports.deleteServiceById = async (req, res) => {
  try {
    const service = await Service.findByIdAndDelete(req.params.id);
    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }
    res.status(200).json({ message: 'Service deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};
