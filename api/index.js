const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRouter = require("./routes/authRoutes")
const blogRoutes = require("./routes/blogRoutes")
const userRoutes = require("./routes/userRoutes")
const c_client_responseRoutes = require("./routes/c_client_responseRoutes")
const c_contactCenterServiceRoutes = require("./routes/c_contactCenterServiceRoutes")
const c_heroRoutes = require("./routes/c_heroRoutes")
const c_industryWeServeRoutes = require("./routes/c_industryWeServeRoutes")

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

// Components
app.use("/api/client_responce", c_client_responseRoutes)
app.use("/api/contact_center_service", c_contactCenterServiceRoutes)
app.use("/api/hero", c_heroRoutes)
app.use("/api/industry_we_erve", c_industryWeServeRoutes)


app.listen(8800, () => {
    console.log("Backend server is running!");
});