const express = require("express");
const path = require("path");
const serveStatic = require("serve-static");

const app = express();

const ld = require("@launchdarkly/node-server-sdk");
require("dotenv").config();

const sdkKey = process.env.LAUNCHDARKLY_SDK_KEY;
const ldClient = ld.init(sdkKey);

app.use(serveStatic(path.join(__dirname, "public")));

app.get("/", async function (req, res) {
  const context = {
    kind: "user",
    key: "user-key-123abcde",
    email: "biz@face.dev",
  };
  const showStudentVersion = await ldClient.variation(
    "show-student-version",
    context,
    false
  );
  let fileName;
  if (showStudentVersion) {
    fileName = "student.html";
  } else {
    fileName = "enterprise.html";
  }
  res.redirect(fileName);
});

const port = 3000;
const server = app.listen(port, function (err) {
  if (err) console.log("Error in server setup");
  console.log(`Server listening on http://localhost:${port}`);
});

process.on("SIGTERM", () => {
  debug("SIGTERM signal received: closing HTTP server");
  ld.close();
  server.close(() => {
    debug("HTTP server closed");
    ldClient.close();
  });
});
