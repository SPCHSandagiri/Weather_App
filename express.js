const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Welcome</h1>");
});

app.get("/api", (req, res) => {
  res.send("this is api");
});

app.get("/help", (req, res) => {
  res.send("this is a help page");
});

app.get("*", (req, res) => {
  res.send("this page cannot find ");
});

app.listen(3000, () => console.log("3000 port working perfect"));
