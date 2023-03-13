const Blog = require('../models/Blog');

const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find({});
        res.json(blogs);
    } catch (err) {
        console.log(err);
        res.status(500).send('Server error');
    }
};

const getBlogById = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) {
        return res.status(404).send('Blog post not found');
        }
        res.json(blog);
    } catch (err) {
        console.log(err);
        res.status(500).send('Server error');
    }
};

const createBlog = async (req, res) => {
    try {
        const blog = new Blog(req.body);
        await blog.save();
        res.status(201).json(blog);
    } catch (err) {
        console.log(err);
        res.status(500).send('Server error');
    }
};

const updateBlog = async (req, res) => {
    try {
        const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        });
        if (!blog) {
        return res.status(404).send('Blog post not found');
        }
        res.json(blog);
    } catch (err) {
        console.log(err);
        res.status(500).send('Server error');
    }
};

const deleteBlog = async (req, res) => {
    try {
        const blog = await Blog.findByIdAndDelete(req.params.id);
        if (!blog) {
        return res.status(404).send('Blog post not found');
        }
        res.json(blog);
    } catch (err) {
        console.log(err);
        res.status(500).send('Server error');
    }
};

module.exports = {
    getAllBlogs, getBlogById, createBlog, updateBlog, deleteBlog
}
