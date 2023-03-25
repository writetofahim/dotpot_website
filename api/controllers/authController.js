const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { OAuth2Client } = require("google-auth-library");
require('dotenv').config();

// generate token 
const createToken = (data) => {
  return jwt.sign(data, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRY,
  });
};

// Register user
exports.register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    // Create user object
    user = new User({
      username,
      email,
      password
    });

    // Hash password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    // Save user to database
    await user.save();

    // Return token
    const payload = {
      user: {
        id: user._id,
        role: user.role,
        username: user.username
      }
    };

    const token = createToken(payload)
    const { password: pw, ...rest } = user.toObject()

    res.json({ token, user: rest });

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Login user
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid username or password. Please try again.' });
    }

    // Check if password matches
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid username or password. Please try again.' });
    }

    // Return token
    const payload = {
      user: {
        id: user._id,
        role: user.role,
        username: user.username
      }
    };

    const token = createToken(payload);

    const { password: pw, ...rest } = user.toObject()

    res.json({ token, user: rest });

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};


// initialize google auth provider
const oAuth2Client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  "postmessage"
);

//google signup
exports.googleSignup = async (req, res) => {
  try {
    const { tokens } = await oAuth2Client.getToken(req.body.code); // exchange code for tokens
    const response = await oAuth2Client.verifyIdToken({
      idToken: tokens.id_token,
    });

    const { email_verified, name, email, picture } = response.payload;
    console.log(picture)

    if (email_verified) {
      const exist = await User.findOne({ email });
      if (exist) {
        const {
          password: pw,
          __v,
          createdAt,
          updatedAt,
          ...rest
        } = exist.toObject();

        // Return token
        const payload = {
          user: {
            id: exist._id,
            role: exist.role,
            username: exist.username
          }
        };

        const token = createToken(payload);
        return res.status(200).json({
          success: true,
          user: rest, token
        });
      }
      const password = email + process.env.JWT_SECRET;

      let user;
      // Create user object
      user = new User({
        username: name,
        email,
        password,
        photo: picture
      });

      // Hash password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      // Save user to database
      await user.save();

      // Return token
      const payload = {
        user: {
          id: user._id,
          role: user.role,
          username: user.username
        }
      };

      const { password: pw, ...rest } = user.toObject()

      jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "3d" }, (err, token) => {
        if (err) throw err;
        res.json({ token, user: rest });
      });

    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
