const fs = require("fs");
const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");
const { getAllUrls } = require("./path-utils"); // Replace with your utility function to get all app URLs

async function generateSitemap() {
  // Get all URLs of your app
  const urls = await getAllUrls();

  // Create a new sitemap stream
  const stream = new SitemapStream({ hostname: "https://dotpotit.com" }); // Replace with your app's URL

  // Create a writable stream
  const writeStream = fs.createWriteStream("./public/sitemap.xml");

  // Pipe the sitemap stream to the writable stream
  stream.pipe(writeStream);

  // Add each URL to the sitemap stream
  urls.forEach((url) => {
    stream.write({ url });
  });

  // End the stream
  stream.end();

  // Return a promise resolving when the stream is finished writing
  return streamToPromise(stream);
}

// Generate the sitemap
generateSitemap()
  .then(() => {
    console.log("Sitemap generated successfully!");
  })
  .catch((error) => {
    console.error("Error generating sitemap:", error);
  });
