const dotenv = require("dotenv").config();
const express = require("express");
const connectDB = require("./config/connectDB");
const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

const app = express();

// this is how middleware works
app.use(express.json())
const logger = (req, res, next) => {
    console.log("Middleware ran");
    console.log(req.method);
    next();
};

// creating routes
app.get("/", (req, res) => {
    res.send("Home page");
});

// create an errand
app.post("/api/errands", logger, async (req, res) => {
    console.log(req.body);
    res.send("Task created");
});


// capital letters when saving in .env file
// use process to reference what exists in .env file
const PORT = process.env.PORT || 5000;

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
     });
    })
    .catch((err) => console.log(err))
/*
This is a more "readable" way of understanding
how to connect to mongodb and then start server
const startServer = async () => {
try {
    await connectDB();
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
} catch (error) {
    console.log(error);
}
};

startServer();*/

