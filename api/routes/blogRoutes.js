const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController");
const adminMiddleware = require("../middlewares/adminMiddleware");

router.get("/", blogController.getAllBlogs);
router.post("/comment", blogController.addComment);
router.post("/like", blogController.addLike);

router.get("/related/:blogId", blogController.findRelatedBlogs);
router.get("/:id", blogController.getBlogById);
router.post("/", adminMiddleware, blogController.createBlog);
router.patch("/:id", adminMiddleware, blogController.updateBlog);
router.delete("/:id", adminMiddleware, blogController.deleteBlog);

module.exports = router;
