const Blog = require("../models/Blog");
const { removeFile } = require("../utilities/removeFile");
const mongoose = require("mongoose");
const generateSitemap = require("../utilities/sitemapUtils");

/**
 * @description Get all blogs with optional filtering by tags, pagination, and sorting
 * @route GET /api/blog
 * @access Public
 * @queryparam {number} [page=1] - The page number for pagination
 * @queryparam {number} [limit=10] - The maximum number of blogs per page
 * @queryparam {string} [tags] - Comma-separated list of tags to filter blogs by
 * @returns {json} - Status and JSON { totalBlogs: number, totalPages: number, currentPage: number, blogs: [] }
 */
const getAllBlogs = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    let tags = [];

    if (req.query.tags && typeof req.query.tags === "string") {
      // Validate and sanitize the tags input
      const rawTags = req.query.tags;
      tags = rawTags.split(",").map((tag) => tag.trim());
    }

    const query = {};
    if (Array.isArray(tags) && tags.length > 0) {
      // Add a query condition to filter blogs by tags (case-insensitive)
      query.tags = { $in: tags.map((tag) => new RegExp(tag, "i")) };
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
    console.error(err);
    res.status(500).send({ error: "Server error" });
  }
};

/**
 * @description Get a blog by ID
 * @route GET /api/blog/:id
 * @access Public
 * @param {string} id - The ID of the blog to retrieve
 * @returns {json} - Status and JSON { blog: {} }
 */
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
    console.error(err);
    res.status(500).send("Server error");
  }
};

/**
 * @description Create a new blog
 * @route POST /api/blog
 * @access Private (requires admin)
 * @body {object} - The blog data
 * @returns {json} - Status and JSON { success: true, data: {}, message: string }
 */
const createBlog = async (req, res) => {
  try {
    const blog = new Blog(req.body);
    await blog.save();
    await generateSitemap();
    res.status(201).json(blog);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

/**
 * @description Update a blog by ID
 * @route PATCH /api/blog/:id
 * @access Private (requires admin)
 * @param {string} id - The ID of the blog to update
 * @body {object} - The updated blog data
 * @returns {json} - Status and JSON { success: true, data: {}, message: string }
 */
const updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).send("Blog post not found");
    }

    // if (req.body.image && req.body.image !== blog.image) {
    //   await removeFile(blog.image);
    // }
    // if (req.body.audio && req.body.audio !== blog.audio) {
    //   await removeFile(blog.audio);
    // }

    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    await generateSitemap();
    res.json(updatedBlog);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

/**
 * @description Controller function to find related blogs based on a blog ID
 * @route GET /api/blog/related/:blogId
 * @access Public
 * @param {string} blogId - The ID of the blog to find related blogs for
 * @returns {json} - Status and JSON { relatedBlogs: [] }
 */
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

/**
 * @description Delete a blog by ID
 * @route DELETE /api/blog/:id
 * @access Private (requires admin)
 * @param {string} id - The ID of the blog to delete
 * @returns {json} - Status and JSON { success: true, data: {}, message: string }
 */
const deleteBlog = async (req, res) => {
  try {
    const selected = await Blog.findById(req.params.id);
    // if (selected) {
    //   await removeFile(selected.image);
    // }
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) {
      return res.status(404).send("Blog post not found");
    }
    await generateSitemap();
    res.json(blog);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

/**
 * @description Controller function to add a comment to a blog
 * @route POST /api/blog/comment
 * @access Public
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @body {string} req.body.blogId - The ID of the blog
 * @body {string} req.body.userId - The ID of the user making the comment
 * @body {string} req.body.content - The content of the comment
 * @returns {json} - Status and JSON { success: true, data: { comment: {} }, message: string }
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
      user: userId,
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

/**
 * @description Controller function to add or remove a like to/from a blog
 * @route POST /api/blog/like
 * @access Public
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @body {string} req.body.blogId - The ID of the blog
 * @body {string} req.body.userId - The ID of the user liking the blog
 * @returns {json} - Status and JSON { success: true, data: { likes: number }, message: string }
 */
const addLike = async (req, res) => {
  try {
    const { blogId, userId } = req.body;

    // Find the blog by its ID
    const blog = await Blog.findById(blogId);

    // Check if the blog exists
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    // Check if the user has already liked the blog
    const existingLikeIndex = blog.likes.findIndex(
      (like) => like.user.toString() === userId
    );

    if (existingLikeIndex !== -1) {
      // User already liked the blog, remove the like
      blog.likes.splice(existingLikeIndex, 1);
    } else {
      // Add a new like
      blog.likes.push({ user: userId });
    }

    // Save the updated blog
    await blog.save();

    res
      .status(200)
      .json({ message: "Like updated successfully", likes: blog.likes.length });
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
