const Order = require('../models/Order');

/**
 * Creates a new order
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */
exports.createOrder = async (req, res) => {
  try {
    const { client_id, total_cost, selected_items } = req.body;
    const order = await Order.create({ client_id, total_cost, selected_items });
    res.status(201).json({ success: true, data: order });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Server error' });
  }
};


/**
 * Gets all orders
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */
exports.getAllOrders = async (req, res) => {
  console.log("hits")
  // Get the current page number from the query parameters, default to 1 if not specified
  const page = parseInt(req.query.page) || 1;
  // Get the number of Orders to display per page from the query parameters, default to 10 if not specified
  const limit = parseInt(req.query.limit) || 10;

  try {
    // Get the total number of works in the database
    const reviews = await Order.countDocuments({});
    // Calculate the total number of pages based on the limit and total number of Orders
    const totalPages = Math.ceil(reviews / limit);
    // Calculate the starting index of the Orders to retrieve
    const startIndex = (page - 1) * limit;
    // Calculate the ending index of the Orders to retrieve
    const endIndex = page * limit;

    // Retrieve the Orders from the database based on the pagination parameters
    const orders = await Order.find({}).sort({ createdAt: -1 }).skip(startIndex).limit(limit).populate({path:'client_id', select: '-password'})
    // Send the Orders as a response along with metadata about the pagination
    res.json({
      reviews: reviews,
      totalPages,
      currentPage: page,
      orders: orders
    });
  } catch (err) {
    // If there's an error, log it to the console and send a 500 response
    console.log(err);
    res.status(500).send({ error: 'Server error' });
  }
};

/**
 * Gets an order by ID
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */
exports.getOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findById(id);
    if (!order) {
      return res.status(404).json({ success: false, error: 'Order not found' });
    }
    res.json({ success: true, data: order });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Server error' });
  }
};


/**
 * Updates an order by ID
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */
exports.updateOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    let order = await Order.findById(id);
    if (!order) {
      return res.status(404).json({ success: false, error: 'Order not found' });
    }
    order.status = status;
    order = await order.save();
    res.json({ success: true, data: order });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Server error' });
  }
};


/**
 * Deletes an order by ID
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */
exports.deleteOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findByIdAndDelete(id);
    if (!order) {
      return res.status(404).json({ success: false, error: 'Order not found' });
    }
    res.json({ success: true, data: {} });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Server error' });
  }
};
