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
      company_name,
    } = req.body;

    // Convert the order object to an HTML table
    const escapeHtml = (text) => {
      if (typeof text !== "string") {
        return "";
      }

      const map = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      };
      return text.replace(/[&<>"']/g, (m) => map[m]);
    };

    const escapeHtmlObject = (object) => {
      const escapedObject = {};
      for (const key in object) {
        if (object.hasOwnProperty(key)) {
          if (Array.isArray(object[key])) {
            escapedObject[key] = escapeHtmlArray(object[key]);
          } else {
            escapedObject[key] = escapeHtml(object[key]);
          }
        }
      }
      return escapedObject;
    };

    const escapeHtmlArray = (array) => {
      if (!Array.isArray(array)) {
        return [];
      }

      return array.map((item) => escapeHtmlObject(item));
    };

    const escapedName = escapeHtml(name);
    const escapedEmail = escapeHtml(email);
    const escapedPhone = escapeHtml(phone);
    const escapedCountry = escapeHtml(country);
    const escapedBusiness = escapeHtml(business);
    const escapedProjectDescription = escapeHtml(project_description);
    const escapedDemoLinks = escapeHtml(demo_links);
    const escapedOrder = escapeHtmlArray(order);
    const escapedCompanyName = escapeHtml(company_name);

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
        ${escapedOrder
          .map(
            (item) => `
            <tr>
              <td style="border: 1px solid black; padding: 10px; display: flex; align-items: center;">
                <img src="${escapeHtml(item.icon)}" alt="${escapeHtml(
              item.title
            )}" width="25" height="25" style="margin-right: 10px;">
                ${escapeHtml(item.title)}
              </td>
              <td style="border: 1px solid black; padding: 10px;">
                ${item.technologies
                  .map(
                    (technology) => `
                    <div style="display: flex; align-items: center; margin-bottom:5px;">
                      <img src="${escapeHtml(
                        technology.icon
                      )}" alt="${escapeHtml(
                      technology.title
                    )}" width="25" height="25" style="margin-right: 10px;">
                      ${escapeHtml(technology.title)}
                    </div>`
                  )
                  .join("")}
              </td>
              <td style="border: 1px solid black; padding: 10px;">
                ${item.addons
                  .map(
                    (addon) => `
                    <div style="display: flex; align-items: center; margin-bottom:5px;">
                      <img src="${escapeHtml(addon.icon)}" alt="${escapeHtml(
                      addon.title
                    )}" width="25" height="25" style="margin-right: 10px;">
                      ${escapeHtml(addon.title)}
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
      html: `
        <p>Name: ${escapedName}</p>
        <p>Email: ${escapedEmail}</p>
        <p>Phone: ${escapedPhone}</p>
        <p>Country: ${escapedCountry}</p>
        <p>Business: ${escapedBusiness}</p>
        <p>Company name: ${escapedCompanyName}</p>
        <p>Project Description: ${escapedProjectDescription}</p>
        <p>Demo Links: ${escapedDemoLinks}</p>
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
