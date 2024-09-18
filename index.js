const express = require("express");
const path = require("path");
const serveStatic = require("serve-static");
const app = express();

app.use(serveStatic(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  res.send("Hello World");
});

const port = 3000;
app.listen(port, function (err) {
  if (err) console.log("Error in server setup");
  console.log(`Server listening on localhost:${port}`);
});
