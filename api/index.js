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
const c_client_responseRoutes = require("./routes/c_client_responseRoutes")
const c_contactCenterServiceRoutes = require("./routes/c_contactCenterServiceRoutes")
const c_heroRoutes = require("./routes/c_heroRoutes")
const c_industryWeServeRoutes = require("./routes/c_industryWeServeRoutes")
const c_infoRoutes = require("./routes/c_infoRoutes")
const c_keyFeatureRouters = require("./routes/c_keyFeatureRouters")
const c_partnershipModelRoutes = require("./routes/c_partnershipModelRoutes")
const c_whoWeWorkWithRoutes = require("./routes/c_whoWeWorkWithRoutes")
const chatRoutes = require("./routes/chatRoutes");
const attachmentUpload = require("./middlewares/attachmentUpload");

dotenv.config();

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("DB Connection Successfull"))
    .catch((err) => {
        console.error(err);
    });

app.use(express.json());
app.use(cors());
app.use('/uploads/conversation', express.static(__dirname + '/uploads/conversation'));


const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
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
app.use("/api/chats", chatRoutes);
app.post("/api/upload", attachmentUpload, (req, res) => {
    if (req.files) {
        res.send(req.files)
    } else {
        res.send({ error: "File uploads failed" })
    }
})

// Components
app.use("/api/client_responce", c_client_responseRoutes)
app.use("/api/contact_center_service", c_contactCenterServiceRoutes)
app.use("/api/hero", c_heroRoutes)
app.use("/api/industry_we_erve", c_industryWeServeRoutes)
app.use("/api/info", c_infoRoutes)
app.use("/api/key_feature", c_keyFeatureRouters)
app.use("/api/partnership_model", c_partnershipModelRoutes)
app.use("/api/who_we_work_with", c_whoWeWorkWithRoutes)



server.listen(8800, () => {
    console.log("Backend server is running!");
});