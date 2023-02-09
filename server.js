// Dependencies
const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const router = require("./controllers");

// creating a handlebar instance
const hbs = exphbs.create({});

// Sets up the express app
const app = express();
const PORT = process.env.PORT || 3001;

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// mount the routers for api and views
app.use(router);

// Starts the server and will display message in Integrated Terminal
app.listen(PORT, () => {
  console.log("Now listening");
});
