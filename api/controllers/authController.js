const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { OAuth2Client } = require("google-auth-library");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const {
  passwordResetTemplate,
  welcomeEmailTemplate,
} = require("../utilities/emailTemplates");
require("dotenv").config();

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
      return res.status(400).json({ msg: "User already exists" });
    }

    // Create user object
    user = new User({
      username,
      email,
      password,
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
        username: user.username,
      },
    };

    const token = createToken(payload);
    const { password: pw, ...rest } = user.toObject();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: user.email,
      subject: "Welcome to Dotpot iT",
      html: welcomeEmailTemplate(),
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        return res
          .status(500)
          .json({ success: false, message: "Email was not sent" });
      }
      console.log(info);
      res.json({ token, user: rest });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

// Login user
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    let user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ message: "Invalid username or password. Please try again." });
    }

    // Check if password matches
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(400)
        .json({ message: "Invalid username or password. Please try again." });
    }

    // Return token
    const payload = {
      user: {
        id: user._id,
        role: user.role,
        username: user.username,
      },
    };

    const token = createToken(payload);

    const { password: pw, ...rest } = user.toObject();

    res.json({ token, user: rest });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
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
    console.log(picture);

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
            username: exist.username,
          },
        };

        const token = createToken(payload);
        return res.status(200).json({
          success: true,
          user: rest,
          token,
        });
      }
      const password = email + process.env.JWT_SECRET;

      let user;
      // Create user object
      user = new User({
        username: name,
        email,
        password,
        photo: picture,
      });

      // Hash password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      // Save user to database
      await user.save();

      const { password: pw, ...rest } = user.toObject();

      const payload = {
        user: {
          id: user._id,
          role: user.role,
          username: user.username,
        },
      };

      const token = createToken(payload);

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD,
        },
      });

      const mailOptions = {
        from: process.env.EMAIL,
        to: user.email,
        subject: "Welcome to Dotpot iT",
        html: welcomeEmailTemplate(),
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
          return res
            .status(500)
            .json({ success: false, message: "Email was not sent" });
        }
        console.log(info);
        res.json({ token, user: rest });
      });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.resetPassword = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    // Generate reset token and save it in the database
    const resetToken = crypto.randomBytes(20).toString("hex");
    user.resetToken = resetToken;
    user.resetTokenExpiration = Date.now() + 3600000; // Expires in 1 hour
    await user.save();

    // password reset link
    const link = `${process.env.CLIENT_URL}/reset-password/${resetToken}`;

    // Send reset password email to the user
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    // Sanitize user input for the HTML template
    const username = escapeHtml(user.username);
    const sanitizedLink = escapeHtml(link);

    const mailOptions = {
      from: process.env.EMAIL,
      to: user.email,
      subject: "Password Reset Request",
      html: passwordResetTemplate(username, sanitizedLink),
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        return res
          .status(500)
          .json({ success: false, message: "Email not sent" });
      }
      console.log("Email sent: " + info.response);
      res.json({
        success: true,
        message: "Email sent, please check your mail!",
      });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Something went wrong!" });
  }
};

exports.verifyResetPassword = async (req, res) => {
  try {
    const user = await User.findOne({
      resetToken: req.params.resetToken,
      resetTokenExpiration: { $gt: Date.now() },
    });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "Invalid or expired reset token" });
    }
    // Update user password
    user.password = await bcrypt.hash(req.body.password, 10);
    user.resetToken = undefined;
    user.resetTokenExpiration = undefined;
    await user.save();
    res.json({ success: true, message: "Password reset successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
};
