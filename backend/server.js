const dotenv = require("dotenv").config();
const express = require("express");
const connectDB = require("./config/connectDB");
const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
const Errand = require("./models/errandModel");
const errandRoute = require("./routes/errandRoute");


const app = express();

// middleware
// express is an upgrade from 'logger' bc it gives us access to data from body
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(errandRoute);

// creating routes
app.get("/", (req, res) => {
    res.send("Home page");
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

