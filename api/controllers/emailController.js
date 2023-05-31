const nodemailer = require("nodemailer");
const he = require("he");
const sanitizeHtml = require("sanitize-html");

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
      company_name,
    } = req.body;

    // Sanitize user input
    const sanitizedName = he.encode(name);
    const sanitizedEmail = he.encode(email);
    const sanitizedPhone = he.encode(phone);
    const sanitizedCountry = he.encode(country);
    const sanitizedBusiness = he.encode(business);
    const sanitizedProjectDescription = he.encode(project_description);
    const sanitizedDemoLinks = he.encode(demo_links);
    const sanitizedCompanyName = he.encode(company_name);

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
                  <img src="${he.encode(item.icon)}" alt="${he.encode(
                item.title
              )}" width="25" height="25" style="margin-right: 10px;">
                  ${he.encode(item.title)}
                </td>
                <td style="border: 1px solid black; padding: 10px;">
                  ${item.technologies
                    .map(
                      (technology) => `
                      <div style="display: flex; align-items: center; margin-bottom:5px;">
                        <img src="${he.encode(
                          technology.icon
                        )}" alt="${he.encode(
                        technology.title
                      )}" width="25" height="25" style="margin-right: 10px;">
                        ${he.encode(technology.title)}
                      </div>`
                    )
                    .join("")}
                </td>
                <td style="border: 1px solid black; padding: 10px;">
                  ${item.addons
                    .map(
                      (addon) => `
                      <div style="display: flex; align-items: center; margin-bottom:5px;">
                        <img src="${he.encode(addon.icon)}" alt="${he.encode(
                        addon.title
                      )}" width="25" height="25" style="margin-right: 10px;">
                        ${he.encode(addon.title)}
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
      from: "no-reply@dotpotit.com",
      to: process.env.EMAIL,
      subject: "New order received",
      html: sanitizeHtml(`
        <p>Name: ${sanitizedName}</p>
        <p>Email: ${sanitizedEmail}</p>
        <p>Phone: ${sanitizedPhone}</p>
        <p>Country: ${sanitizedCountry}</p>
        <p>Business: ${sanitizedBusiness}</p>
        <p>Company name: ${sanitizedCompanyName}</p>
        <p>Project Description: ${sanitizedProjectDescription}</p>
        <p>Demo Links: ${sanitizedDemoLinks}</p>
        <h3>Order:</h3>
        ${orderTable}
      `),
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
