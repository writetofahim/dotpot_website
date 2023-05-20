const Blog = require("../models/Blog");
const { removeFile } = require("../utilities/removeFile");
/**
 * Controller function to retrieve a paginated list of all blogs
 * @param {object} req - The Express request object
 * @param {object} res - The Express response object
 */
const getAllBlogs = async (req, res) => {
  // Get the current page number from the query parameters, default to 1 if not specified
  const page = parseInt(req.query.page) || 1;
  // Get the number of blogs to display per page from the query parameters, default to 10 if not specified
  const limit = parseInt(req.query.limit) || 10;

  try {
    // Get the total number of blogs in the database
    const totalBlogs = await Blog.countDocuments({});
    // Calculate the total number of pages based on the limit and total number of blogs
    const totalPages = Math.ceil(totalBlogs / limit);
    // Calculate the starting index of the blogs to retrieve
    const startIndex = (page - 1) * limit;
    // Calculate the ending index of the blogs to retrieve
    const endIndex = page * limit;

    // Retrieve the blogs from the database based on the pagination parameters
    const blogs = await Blog.find({})
      .sort({ createdAt: -1 })
      .skip(startIndex)
      .limit(limit);
    // Send the blogs as a response along with metadata about the pagination
    res.json({
      totalBlogs,
      totalPages,
      currentPage: page,
      blogs,
    });
  } catch (err) {
    // If there's an error, log it to the console and send a 500 response
    console.log(err);
    res.status(500).send({ error: "Server error" });
  }
};

const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).send("Blog post not found");
    }
    res.json(blog);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
};

const createBlog = async (req, res) => {
  try {
    const blog = new Blog(req.body);
    await blog.save();
    res.status(201).json(blog);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
};

const updateBlog = async (req, res) => {
  if (req.body.image) {
    const selected = await Blog.findById(req.params.id);
    await removeFile(selected.image);
  }
  try {
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!blog) {
      return res.status(404).send("Blog post not found");
    }
    res.json(blog);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
};

const findRelatedBlogs = async (req, res) => {
  const blogId = req.params.blogId; // Assuming you have the current blog post's ID
  const limit = parseInt(req.query.limit) || 5; // Default limit is 5 if not specified in query params

  try {
    // Find the current blog post by ID
    const currentBlog = await Blog.findById(blogId);

    if (!currentBlog) {
      return res.status(404).json({ error: "Blog post not found" });
    }

    // Extract the tags from the current blog post
    const tags = currentBlog.tags;

    // Find related blogs by matching any one tag
    const relatedBlogs = await Blog.find({ tags: { $in: tags } })
      .limit(limit) // Set the limit based on the query param or default to 5
      .exec();

    res.status(200).json({ relatedBlogs });
  } catch (error) {
    console.error("Error finding related blogs:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const selected = await Blog.findById(req.params.id);
    if (selected) {
      await removeFile(selected.image);
    }
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) {
      return res.status(404).send("Blog post not found");
    }
    res.json(blog);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
};

module.exports = {
  getAllBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
  findRelatedBlogs,
};
