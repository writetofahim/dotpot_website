const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
// const https = require("https");
// const { Server } = require("socket.io");
const cors = require("cors");
const morgan = require("morgan");
const winston = require("./config/winston");
// const csrf = require("csurf"); // Import csurf middleware
const helmet = require("helmet"); // Import helmet middleware
const cookieParser = require("cookie-parser");
const csurf = require("csurf");

const authRouter = require("./routes/authRoutes");
const blogRoutes = require("./routes/blogRoutes");
const userRoutes = require("./routes/userRoutes");
const jobRoutes = require("./routes/jobRoutes");
const jobApplicationRoutes = require("./routes/jobApplicationRoutes");
const clientReviewRoutes = require("./routes/clientReviewRoutes");
const ourPartnerRoutes = require("./routes/ourPartnerRoutes");
const serviceRoutes = require("./routes/serviceRoutes");
const socialMediaRoutes = require("./routes/socialMediaRoutes");
const teamMemberRoutes = require("./routes/teamMemberRoutes");
const workRoutes = require("./routes/workRoutes");
const orderRoutes = require("./routes/orderRoutes");
const uploadRoutes = require("./routes/uploadRoutes");
const c_client_responseRoutes = require("./routes/c_client_responseRoutes");
const c_contactCenterServiceRoutes = require("./routes/c_contactCenterServiceRoutes");
const c_heroRoutes = require("./routes/c_heroRoutes");
const c_industryWeServeRoutes = require("./routes/c_industryWeServeRoutes");
const c_infoRoutes = require("./routes/c_infoRoutes");
const c_keyFeatureRouters = require("./routes/c_keyFeatureRouters");
const c_partnershipModelRoutes = require("./routes/c_partnershipModelRoutes");
const c_whoWeWorkWithRoutes = require("./routes/c_whoWeWorkWithRoutes");
const chatRoutes = require("./routes/chatRoutes");
const loggerRoutes = require("./routes/loggerRoutes");
const colorRoutes = require("./routes/colorRoutes");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull"))
  .catch((err) => {
    console.error(err);
  });

app.use(cors());
app.use(express.json());
app.use(morgan("combined", { stream: winston.stream }));

// Use Helmet!
app.use(helmet());

// error handler
app.use(function (err, req, res, next) {
  // Log the error with Winston logging
  winston.error(
    `${err.status || 500} - ${err.message} - ${req.originalUrl} - ${
      req.method
    } - ${req.ip}`
  );

  // Set a default error message for the response
  let errorMessage = "Internal Server Error";

  // Check if the error is a custom application error with a message
  if (err.message) {
    errorMessage = err.message;
  }

  // Send an error response to the client
  const errorResponse = {
    error: errorMessage,
  };

  // Only include the error details in the response during development
  if (req.app.get("env") === "development") {
    errorResponse.details = err;
  }

  res.status(err.status || 500);
  res.send("Server error");
});

// app.use(cors({
//     origin: ["http://localhost:5173", "http://localhost:5174", "http://dotpotit.com","http://dotpotit.com/admin", "https://dotpotit.com", "https://dotpotit.com/admin", "https://dotpot-admin.vercel.app"]
//   }));

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "My API",
      version: "1.0.0",
      description: "My RESTful API",
    },
    servers: [
      {
        url: "http://localhost:8800",
      },
    ],
  },
  apis: ["*.js"],
};

app.use(
  "/uploads/conversation",
  express.static(__dirname + "/uploads/conversation")
);
app.use("/uploads", express.static(__dirname + "/uploads"));
app.use("/uploads/blogs", express.static(__dirname + "/uploads/blogs"));
app.use("/uploads/response", express.static(__dirname + "/uploads/response"));

// const server = https.createServer(app);
// const io = new Server(server, {
//   cors: {
//     origin: [
//       "http://localhost:5173",
//       "http://localhost:5174",
//       "http://dotpotit.com",
//       "http://dotpotit.com/admin",
//       "https://dotpotit.com",
//       "https://dotpotit.com/admin",
//       "https://dotpot-admin.vercel.app",
//       "https://admin-red-xi.vercel.app/",
//     ],
//     methods: ["GET", "POST"],
//   },
// });
// // const io = require("socket.io")(server);

// global.io = io;

// io.on("connection", (socket) => {
//   console.log(`User Connected for chat: ${socket.id}`);

//   socket.on("join_room", (data) => {
//     socket.join(data);
//   });

//   socket.on("send_message", (data) => {
//     socket.to(data.room).emit("receive_message", data);
//   });
// });

// Enable cookie parsing
app.use(cookieParser());

// Set up CSRF protection middleware
app.use(csurf({ cookie: true }));

// Make the CSRF token available to your views
app.use(function (req, res, next) {
  res.locals.csrfToken = req.csrfToken();
  next();
});

app.use("/api/auth", authRouter);
app.use("/api/user", userRoutes);
app.use("/api/blog", blogRoutes);
app.use("/api/client_review", clientReviewRoutes);
app.use("/api/chats", chatRoutes);
app.use("/api/job", jobRoutes);
app.use("/api/job_application", jobApplicationRoutes);
app.use("/api/our_partner", ourPartnerRoutes);
app.use("/api/service", serviceRoutes);
app.use("/api/socialmedia", socialMediaRoutes);
app.use("/api/team_member", teamMemberRoutes);
app.use("/api/work", workRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/send-email", require("./routes/emailRoutes"));

// Components
app.use("/api/client_response", c_client_responseRoutes);
app.use("/api/contact_center_service", c_contactCenterServiceRoutes);
app.use("/api/hero", c_heroRoutes);
app.use("/api/industry_we_serve", c_industryWeServeRoutes);
app.use("/api/info", c_infoRoutes);
app.use("/api/key_feature", c_keyFeatureRouters);
app.use("/api/partnership-model", c_partnershipModelRoutes);
app.use("/api/who_we_work_with", c_whoWeWorkWithRoutes);
app.use("/api/colors", colorRoutes);

// Logger
app.use("/api/logger", loggerRoutes);

// serve static files
app.use(express.static(__dirname));
app.use("*.css", (req, res, next) => {
  res.set("Content-Type", "text/css");
  next();
});

// swagger doc
const { swaggerServe, swaggerSetup } = require("./config");
const generateSitemap = require("./utilities/sitemapUtils");
app.use("/api-docs", swaggerServe, swaggerSetup);

const port = 8800;

app.listen(port, () => {
  console.log("Backend server is running! on port ", port);
  generateSitemap();
});
