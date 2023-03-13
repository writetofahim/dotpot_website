const express = require('express');
const router = express.Router();
const blogController = require("../controllers/blogController")

router.get('', blogController.getAllBlogs);
router.get('/:id', blogController.getBlogById);
router.post('', blogController.createBlog);
router.patch('/:id', blogController.updateBlog);
router.delete('/:id', blogController.deleteBlog);

module.exports = router;