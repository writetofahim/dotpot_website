const ClientReview = require('../models/ClientReview');

exports.getAllReviews = async (req, res) => {
  try {
    const reviews = await ClientReview.find();
    res.json(reviews);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.getAllReviews = async (req, res) => {
  // Get the current page number from the query parameters, default to 1 if not specified
  const page = parseInt(req.query.page) || 1;
  // Get the number of ClientReviews to display per page from the query parameters, default to 10 if not specified
  const limit = parseInt(req.query.limit) || 10;

  try {
    // Get the total number of works in the database
    const reviews = await ClientReview.countDocuments({});
    // Calculate the total number of pages based on the limit and total number of ClientReviews
    const totalPages = Math.ceil(reviews / limit);
    // Calculate the starting index of the ClientReviews to retrieve
    const startIndex = (page - 1) * limit;
    // Calculate the ending index of the ClientReviews to retrieve
    const endIndex = page * limit;

    // Retrieve the ClientReviews from the database based on the pagination parameters
    const ClientReviews = await ClientReview.find({}).sort({ createdAt: -1 }).skip(startIndex).limit(limit)
    // Send the ClientReviews as a response along with metadata about the pagination
    res.json({
      reviews: reviews,
      totalPages,
      currentPage: page,
      ClientReviews: ClientReviews
    });
  } catch (err) {
    // If there's an error, log it to the console and send a 500 response
    console.log(err);
    res.status(500).send({ error: 'Server error' });
  }
};

exports.getReviewById = async (req, res) => {
  try {
    const review = await ClientReview.findById(req.params.id);
    if (!review) {
      return res.status(404).json({ message: 'Review not found' });
    }
    res.json(review);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.createReview = async (req, res) => {
  const {
    job_id,
    client_name,
    client_image,
    company_name,
    company_image,
    position,
    review_text,
    rating,
    social_media_links,
  } = req.body;

  try {
    const review = await ClientReview.create({
      job_id,
      client_name,
      client_image,
      company_name,
      company_image,
      position,
      review_text,
      rating,
      social_media_links,
    });
    res.json(review);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.updateReview = async (req, res) => {
  try {
    const review = await ClientReview.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!review) {
      return res.status(404).json({ message: 'review not found' });
    }
    res.status(200).json({ message: 'review updated successfully', review });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.deleteReview = async (req, res) => {
  try {
    const review = await ClientReview.findByIdAndDelete(req.params.id);
    if (!review) {
      return res.status(404).json({ message: 'Review not found' });
    }
    res.json({ message: 'Review removed' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};
