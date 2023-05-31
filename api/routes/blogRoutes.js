const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController");
const adminMiddleware = require("../middlewares/adminMiddleware");

/**
 * @description Get all blogs with optional filtering by tags, pagination, and sorting
 * @route GET /api/blog
 * @access Public
 * @queryparam {number} [page=1] - The page number for pagination
 * @queryparam {number} [limit=10] - The maximum number of blogs per page
 * @queryparam {string} [tags] - Comma-separated list of tags to filter blogs by
 * @return {json} - Status and JSON { totalBlogs: number, totalPages: number, currentPage: number, blogs: [] }
 */
router.get("/", blogController.getAllBlogs);

/**
 * @description Add a comment to a blog
 * @route POST /api/blog/comment
 * @access Public
 * @params {string} blogId - The ID of the blog to add a comment to
 * @params {string} comment - The comment text
 * @return {json} - Status and JSON { success: true, data: {}, message: string }
 */
router.post("/comment", blogController.addComment);

/**
 * @description Add a like to a blog
 * @route POST /api/blog/like
 * @access Public
 * @params {string} blogId - The ID of the blog to add a like to
 * @return {json} - Status and JSON { success: true, data: {}, message: string }
 */
router.post("/like", blogController.addLike);

/**
 * @description Get related blogs based on a blog ID
 * @route GET /api/blog/related/:blogId
 * @access Public
 * @params {string} blogId - The ID of the blog to find related blogs for
 * @return {json} - Status and JSON { relatedBlogs: [] }
 */
router.get("/related/:blogId", blogController.findRelatedBlogs);

/**
 * @description Get a blog by ID
 * @route GET /api/blog/:id
 * @access Public
 * @params {string} id - The ID of the blog to retrieve
 * @return {json} - Status and JSON { blog: {} }
 */
router.get("/:id", blogController.getBlogById);

/**
 * @description Create a new blog
 * @route POST /api/blog
 * @access Private (requires admin)
 * @body {object} - The blog data
 * @return {json} - Status and JSON { success: true, data: {}, message: string }
 */
router.post("/", adminMiddleware, blogController.createBlog);

/**
 * @description Update a blog by ID
 * @route PATCH /api/blog/:id
 * @access Private (requires admin)
 * @params {string} id - The ID of the blog to update
 * @body {object} - The updated blog data
 * @return {json} - Status and JSON { success: true, data: {}, message: string }
 */
router.patch("/:id", adminMiddleware, blogController.updateBlog);

/**
 * @description Delete a blog by ID
 * @route DELETE /api/blog/:id
 * @access Private (requires admin)
 * @params {string} id - The ID of the blog to delete
 * @return {json} - Status and JSON { success: true, data: {}, message: string }
 */
router.delete("/:id", adminMiddleware, blogController.deleteBlog);

module.exports = router;
