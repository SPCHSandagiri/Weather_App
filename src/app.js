const axios = require("axios");
const geo = require("../utils/geo");
const express = require("express");
const path = require("node:path");
const hbs = require("hbs");

const app = express();

const templatePath = path.join(__dirname, "../template");
const patialPath = path.join(__dirname, "../template/patials");

app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(patialPath);


const publicDirPath = path.join(__dirname, "../public");
// console.log(publicDirPath);
app.use(express.static(publicDirPath));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/help", (req, res) => {
  res.render("help");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/weather", (req, res) => {
  if (!req.query.location) {
    res.send("Location not found");
  }

  geo(req.query.location)
    .then(data => {
      res.send(data);
    })
    .catch(error => {
      res.send(error);
    });

  app.get("*", (req, res) => {
    res.render("404");
  });
});

app.listen(3000, () => console.log("Port 3000 working perfect"));
