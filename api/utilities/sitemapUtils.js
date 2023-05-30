const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");
const Blog = require("../models/Blog");

async function generateSitemap() {
  const baseUrl = "https://dotpotit.com"; // Replace with your website's base URL

  // Fetch the routes or paths from your MERN application
  const routes = [
    "/", // Home route
    "/faq",
    "/reset-password/",
    "/apply",
    "/applym",
    "/about",
    "/contact",
    "/services",
    "/blog",
    "/privacyPolicy",
    "/terms-conditions",
    "/white-paper",
    "/confirmation",
    "/contact-center-services/cti",
    "/contact-center-services/email-marketing",
    "/contact-center-services/chat",
    "/contact-center-services/pd",
    "/contact-center-services/mobile-app",
    "/contact-center-services/collection",
    "/contact-center-services/customer-service",
    "/contact-center-services/ivr",
    "/contact-center-services/acd",
    "/partnership-model/fixed-price-model",
    "/partnership-model/hire-dedicated-model",
    "/partnership-model/on-site-development-model",
    "/key-features/ai-development",
    "/key-features/it-support",
    "/key-features/blockchain-development",
    "/key-features/website-design",
    "/key-features/mobile-app-development",
    "/key-features/cyber-security",
    "/key-features/website-development",
    "/key-features/dedicated-team",
    "/key-features/contact-center-support",
    "/who-we-works-with/startup-business",
    "/who-we-works-with/small-and-medium-business",
    "/who-we-works-with/enterprise-business",
    "/who-we-works-with/agencies-business",
    "/industries-we-serve/retail-ecommerce",
    "/industries-we-serve/education",
    "/industries-we-serve/healthcare",
    "/industries-we-serve/logistics",
    "/industries-we-serve/social-networking",
    "/industries-we-serve/real-estate",
    "/industries-we-serve/travel",
    "/industries-we-serve/food-and-restaurant",
    "/industries-we-serve/on-demand-solution",
    "/industries-we-serve/gaming",
    "/industries-we-serve/ai",
    "/industries-we-serve/web3",
    "/industries-we-serve/manufacturing",
    "/web-development/landing-page",
    "/web-development/portfolio-website",
    "/web-development/blog-website",
    "/web-development/e-commerce-website",
    "/web-development/custom-website",
  ];

  try {
    // Fetch blog slugs from the database
    const blogs = await Blog.find({}, "slug");

    blogs.forEach((blog) => {
      const route = `/blog/${blog.slug}`;
      routes.push(route);
    });

    let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
    sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    routes.forEach((route) => {
      const url = `${baseUrl}${route}`;
      sitemap += `<url><loc>${url}</loc></url>\n`;
    });

    sitemap += "</urlset>";

    const distFolder = path.join(__dirname, "../../client/dist");
    const sitemapPath = path.join(distFolder, "sitemap.xml");
    const robotsTxtPath = path.join(distFolder, "robots.txt");

    await fs.promises.writeFile(sitemapPath, sitemap);
    console.log("Sitemap generated successfully!");

    const robotsTxtContent = `User-agent: *\nDisallow:\nSitemap: ${baseUrl}/sitemap.xml`;
    await fs.promises.writeFile(robotsTxtPath, robotsTxtContent);
    console.log("robots.txt file generated successfully!");
  } catch (err) {
    console.error(err);
  }
}

module.exports = generateSitemap;
