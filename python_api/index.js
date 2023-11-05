const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const Set = require("./models/set");
const User = require("./models/user");
const Question = require("./models/question");
const userRouter = require("./routes/user.route");
const dashboardRouter = require("./routes/dashboard.route");

const app = express();
const app_port = process.env.PORT || 8118;

app.use(require('express-status-monitor')());

// Connecting to MongoDB Atlas
mongoose.connect("mongodb://localhost:27017/hariomdb", { useNewUrlParser: true , useUnifiedTopology: true }, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Database connected Successfully!!!");
}).catch((err) => {
    console.log(err);
});

// Middleware---------------------------------------------------------------------------
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
    cors({
        origin: true,
        credentials: true,
    })
);

app.use("/python", userRouter);                     // for user side
app.use("/python/dashboard", dashboardRouter);      // for dashboard side

app.get("/", (_req, res) => {
    res.status(200).send("Hello from Backend....!!!");
});

//Listen command--------------------------------------------------------------
app.listen(app_port, function () {
    console.log("Server started on port: "+app_port);
});