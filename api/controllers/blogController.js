const Blog = require('../models/Blog');
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
        const blogs = await Blog.find({}).skip(startIndex).limit(limit);
        // Send the blogs as a response along with metadata about the pagination
        res.json({
            totalBlogs,
            totalPages,
            currentPage: page,
            blogs
        });
    } catch (err) {
        // If there's an error, log it to the console and send a 500 response
        console.log(err);
        res.status(500).send({ error: 'Server error' });
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
