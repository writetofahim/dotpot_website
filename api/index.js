const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRouter = require("./routes/authRoutes")
const blogRoutes = require("./routes/blogRoutes")
const userRoutes = require("./routes/userRoutes")
const c_client_response = require("./routes/c_client_response")

dotenv.config();

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("DB Connection Successfull"))
    .catch((err) => {
        console.error(err);
    });

app.use(express.json());

app.use("/api/auth", authRouter)
app.use("/api/user", userRoutes)
app.use("/api/blog", blogRoutes)
app.use("/api/client_responce", c_client_response)


app.listen(8800, () => {
    console.log("Backend server is running!");
});