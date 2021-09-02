require('dotenv').config();
const mongoose =  require("mongoose");
const express = require("express");
const drinks = require("./routes/drinks.routes.js");
const orderedDrinks = require("./routes/orderedDrinks.routes.js");
const home = require("./routes/index.routes.js");
const bodyParser =  require("body-parser");
const ejs = require("ejs");

const app = express();
const port = 8000;

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log('connected to DB'));

//body-parser config;
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get("/", (req, res) => {
    res.render('index.ejs');
});

app.listen(port, () => {
    console.log(`Application is listening at port ${port}`);
});

//register the enpoints
app.use("/home", home);
app.use("/api/drinks", drinks);
app.use("/api/orderedDrinks", orderedDrinks);