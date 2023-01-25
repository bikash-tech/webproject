const express = require('express');
const app = express();
const path = require("path");
const hbs = require('hbs');
const port = process.env.PORT || 3000;

// public static path
const staticPath = path.join(__dirname, "../public");
// use static page
app.use(express.static(staticPath));

const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// views
app.set('view engine', 'hbs')
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Routing
app.get("/", (req, res) => {
    res.render("index");
})

app.get("/about", (req, res) => {
    res.render("about");
})

app.get("/weather", (req, res) => {
    res.render("weather");
})

// universal error page if path not found
app.get("*", (req, res) => {
    res.render("404error");
})

app.listen(port, () => {
    console.log(`listening to the port at ${port}`);
})