const express = require("express");
const { orderEmail } = require("../controllers/emailController");
const router = express.Router();

// Create a order to company email
router.post("/", orderEmail);

module.exports = router;
