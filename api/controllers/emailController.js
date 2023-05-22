const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

/**
 * @description Sends an email with order details
 * @route POST /api/send-email
 * @access Public
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @body {string} name - The customer's name
 * @body {string} email - The customer's email
 * @body {string} phone - The customer's phone number
 * @body {string} country - The customer's country
 * @body {string} business - The type of business (e.g., personal, company)
 * @body {string} project_description - The description of the project
 * @body {string} demo_links - The demo links
 * @body {Array} order - The order details
 */
exports.orderEmail = async (req, res) => {
  try {
    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      // configure your email provider here
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    // Get form data from request body
    const {
      name,
      email,
      phone,
      country,
      business,
      project_description,
      demo_links,
      order,
    } = req.body;
    // console.log(req.body);

    // Compose email message
    const message = {
      from: "no-replay@dotpotit.com",
      to: process.env.EMAIL,
      subject: "New order received",
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Country: ${country}
        Business: ${business}
        Project Description: ${project_description}
        Demo Links: ${demo_links}
        Order: ${JSON.stringify(order)}
      `,
    };

    // Send email
    await transporter.sendMail(message);

    // Email sent successfully
    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while sending the email",
    });
  }
};
