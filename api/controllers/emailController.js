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
 * @body {Object} file - The attached file
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

    // Get the attached file
    // const file = req.files.file || null;

    // Convert the order object to an HTML table
    const orderTable = `
    <table style="border-collapse: collapse; width: 100%; border: 1px solid black; padding: 10px;">
      <thead>
        <tr>
          <th style="border: 1px solid black; padding: 10px;">Service</th>
          <th style="border: 1px solid black; padding: 10px;">Technologies</th>
          <th style="border: 1px solid black; padding: 10px;">Addons</th>
        </tr>
      </thead>
      <tbody>
        ${order
          .map(
            (item) => `
            <tr>
              <td style="border: 1px solid black; padding: 10px; display: flex; align-items: center;">
                <img src="${item.icon}" alt="${
              item.title
            }" width="25" height="25" style="margin-right: 10px;">
                ${item.title}
              </td>
              <td style="border: 1px solid black; padding: 10px;">
                ${item.technologies
                  .map(
                    (technology) => `
                    <div style="display: flex; align-items: center; margin-bottom:5px;">
                      <img src="${technology.icon}" alt="${technology.title}" width="25" height="25" style="margin-right: 10px;">
                      ${technology.title}
                    </div>`
                  )
                  .join("")}
              </td>
              <td style="border: 1px solid black; padding: 10px;">
                ${item.addons
                  .map(
                    (addon) => `
                    <div style="display: flex; align-items: center; margin-bottom:5px;">
                      <img src="${addon.icon}" alt="${addon.title}" width="25" height="25" style="margin-right: 10px;">
                      ${addon.title}
                    </div>`
                  )
                  .join("")}
              </td>
            </tr>
          `
          )
          .join("")}
      </tbody>
    </table>
  `;

    // Compose email message
    const message = {
      from: "no-replay@dotpotit.com",
      to: process.env.EMAIL,
      subject: "New order received",
      html: `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Country: ${country}</p>
        <p>Business: ${business}</p>
        <p>Project Description: ${project_description}</p>
        <p>Demo Links: ${demo_links}</p>
        <h3>Order:</h3>
        ${orderTable}
      `,
      // attachments: [
      //   {
      //     filename: file.name,
      //     content: file.data,
      //   },
      // ],
    };

    // Send email
    await transporter.sendMail(message);

    // Email sent successfully
    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(300).json({
      success: false,
      message: "An error occurred while sending the email",
    });
  }
};
