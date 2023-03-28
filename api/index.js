const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors")

const authRouter = require("./routes/authRoutes")
const blogRoutes = require("./routes/blogRoutes")
const userRoutes = require("./routes/userRoutes")
const jobRoutes = require("./routes/jobRoutes")
const jobApplicationRoutes = require("./routes/jobApplicationRoutes")
const clientReviewRoutes = require("./routes/clientReviewRoutes")
const ourPartnerRoutes = require("./routes/ourPartnerRoutes")
const serviceRoutes = require("./routes/serviceRoutes")
const socialMediaRoutes = require("./routes/socialMediaRoutes")
const teamMemberRoutes = require("./routes/teamMemberRoutes")
const workRoutes = require("./routes/workRoutes")
const orderRoutes = require("./routes/orderRoutes")
const uploadRoutes = require("./routes/uploadRoutes")
const c_client_responseRoutes = require("./routes/c_client_responseRoutes")
const c_contactCenterServiceRoutes = require("./routes/c_contactCenterServiceRoutes")
const c_heroRoutes = require("./routes/c_heroRoutes")
const c_industryWeServeRoutes = require("./routes/c_industryWeServeRoutes")
const c_infoRoutes = require("./routes/c_infoRoutes")
const c_keyFeatureRouters = require("./routes/c_keyFeatureRouters")
const c_partnershipModelRoutes = require("./routes/c_partnershipModelRoutes")
const c_whoWeWorkWithRoutes = require("./routes/c_whoWeWorkWithRoutes")
const chatRoutes = require("./routes/chatRoutes");

dotenv.config();

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("DB Connection Successfull"))
    .catch((err) => {
        console.error(err);
    });

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173", "http://localhost:5174", "https://dotpotit.com", "https://dotpotit.com/admin"]
  }));
app.use('/uploads/conversation', express.static(__dirname + '/uploads/conversation'));
app.use('/uploads', express.static(__dirname + '/uploads'));
app.use('/uploads/blogs', express.static(__dirname + '/uploads/blogs'));
app.use('/uploads/response', express.static(__dirname + '/uploads/response'));


const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: ["http://localhost:5173", "http://localhost:5174", "https://dotpotit.com", "https://dotpotit.com/admin"],
        methods: ["GET", "POST"],
    },
});

global.io = io;

io.on("connection", (socket) => {
    console.log(`User Connected for chat: ${socket.id}`);

    socket.on("join_room", (data) => {
        socket.join(data);
    });

    socket.on("send_message", (data) => {
        socket.to(data.room).emit("receive_message", data);
    });
});


app.use("/api/auth", authRouter)
app.use("/api/user", userRoutes)
app.use("/api/blog", blogRoutes)
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
app.use("/api/upload", uploadRoutes)

// Components
app.use("/api/client_response", c_client_responseRoutes)
app.use("/api/contact_center_service", c_contactCenterServiceRoutes)
app.use("/api/hero", c_heroRoutes)
app.use("/api/industry_we_serve", c_industryWeServeRoutes)
app.use("/api/info", c_infoRoutes)
app.use("/api/key_feature", c_keyFeatureRouters)
app.use("/api/partnership_model", c_partnershipModelRoutes)
app.use("/api/who_we_work_with", c_whoWeWorkWithRoutes)

const port = 8800

server.listen(port, () => {
    console.log("Backend server is running! on port ", port);
});