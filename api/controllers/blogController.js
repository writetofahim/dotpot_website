const Blog = require("../models/Blog");
const { removeFile } = require("../utilities/removeFile");
const mongoose = require("mongoose");

/**
 * Controller function to retrieve a paginated list of all blogs
 * @param {object} req - The Express request object
 * @param {object} res - The Express response object
 */
const getAllBlogs = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const tags = req.query.tags ? req.query.tags.split(",") : [];
  console.log(tags);

  try {
    let query = {};
    if (tags.length > 0) {
      // Add a query condition to filter blogs by tags (case-insensitive)
      query = { tags: { $in: tags.map((tag) => new RegExp(tag, "i")) } };
    }

    const totalBlogs = await Blog.countDocuments(query);
    const totalPages = Math.ceil(totalBlogs / limit);
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const blogs = await Blog.find(query)
      .sort({ createdAt: -1 })
      .skip(startIndex)
      .limit(limit);

    res.json({
      totalBlogs,
      totalPages,
      currentPage: page,
      blogs,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: "Server error" });
  }
};

const getBlogById = async (req, res) => {
  const { id } = req.params;
  try {
    let blog;
    if (mongoose.Types.ObjectId.isValid(id)) {
      blog = await Blog.findById(req.params.id).populate("comments.user");
    } else {
      blog = await Blog.findOne({ slug: req.params.id }).populate(
        "comments.user"
      );
    }
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
  if (req.body.audio) {
    const selected = await Blog.findById(req.params.id);
    await removeFile(selected.audio);
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

// Controller function to find related blogs based on tags
const findRelatedBlogs = async (req, res) => {
  const blogId = req.params.blogId;
  const limit = parseInt(req.query.limit) || 5;

  try {
    const currentBlog = await Blog.findById(blogId);

    if (!currentBlog) {
      return res.status(404).json({ error: "Blog post not found" });
    }

    const tags = currentBlog.tags;

    // Query for related blogs with case-insensitive tag matching
    const relatedBlogs = await Blog.find({
      tags: { $in: tags.map((tag) => new RegExp(tag, "i")) },
      _id: { $ne: blogId },
    })
      .limit(limit)
      .exec();

    res.status(200).json({
      blogs: relatedBlogs,
    });
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

/**
 * @description Controller function to add a comment to a blog
 * @route POST /api/blog/add-comment
 * @access Public
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @body {string} req.body.blogId - The ID of the blog
 * @body {string} req.body.username - The username of the commenter
 * @body {string} req.body.content - The content of the comment
 */
const addComment = async (req, res) => {
  try {
    const { blogId, userId, content } = req.body;

    // Find the blog by its ID
    const blog = await Blog.findById(blogId);

    // Check if the blog exists
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    // Create a new comment object
    const newComment = {
      userId,
      content,
    };

    // Add the comment to the blog's comments array
    blog.comments.push(newComment);

    // Save the updated blog
    await blog.save();

    res
      .status(201)
      .json({ message: "Comment added successfully", comment: newComment });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Controller function to add a like to a blog
const addLike = async (req, res) => {
  try {
    const { blogId } = req.body;

    // Find the blog by its ID
    const blog = await Blog.findById(blogId);

    // Check if the blog exists
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    // Increment the likes count
    blog.likes += 1;

    // Save the updated blog
    await blog.save();

    res
      .status(200)
      .json({ message: "Like added successfully", likes: blog.likes });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  getAllBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
  findRelatedBlogs,
  addComment,
  addLike,
};
