const User = require('../models/User');

exports.getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

/**
 * Get all users with pagination.
 * @param {number} page - The page number to retrieve.
 * @param {number} limit - The maximum number of users to retrieve per page.
 * @returns {Object} - An object containing an array of users and metadata.
 * @throws {Error} - If there is an error retrieving the users from the database.
 */
exports.getAllUsers = async (req, res) => {
    try {
        const { page = 1, limit = 10 } = req.query;
        const users = await User.find()
            .select('-password')
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .exec()

        const count = await User.countDocuments();
        res.json({
            users: users.map(user => user.toObject()),
            totalPages: Math.ceil(count / limit),
            currentPage: page,
            totalUsers: count
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};


exports.getSingleUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select('-password');
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}

exports.updateUser = async (req, res) => {
    const { fullName, phoneNumber, address } = req.body;
    const userFields = {};
    if (fullName) userFields.fullName = fullName;
    if (phoneNumber) userFields.phoneNumber = phoneNumber;
    if (address) userFields.address = address;

    try {
        let user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }

        // Make sure user is the owner or admin
        if (user._id.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not authorized' });
        }

        user = await User.findByIdAndUpdate(
            req.params.id,
            { $set: userFields },
            { new: true }
        ).select('-password');

        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.deleteUser = async (req, res) => {
    try {
        let user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }

        await User.findByIdAndRemove(req.params.id);

        res.json({ msg: 'User removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
