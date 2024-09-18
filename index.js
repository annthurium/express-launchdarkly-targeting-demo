const express = require("express");
const path = require("path");
const serveStatic = require("serve-static");
const app = express();

app.use(serveStatic(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(3000);
