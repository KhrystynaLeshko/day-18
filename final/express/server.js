// uses the express.js framework
const { request } = require("express");
const express = require("express");

// creates an instance of an express server
const app = express();

// makes the public folder "publically available" for everything - whenever we render the html the path to everything inside public is, as if it was on the same level
// @example:
// /public
//    /style.css
// views
//    /index.html
//       /<link rel="stylesheet" href="/style.css" /> We do this instead of `href="../public/style.css"
app.use(express.static("public"));

// takes care of a normal request on the home page
app.get("/", (request, response) => {
  response.sendFile(__dirname, +"/views/index.html");
});

// takes care of a normal request on the about page
app.get("/about", (request, response) => {
  response.sendFile(__dirname, +"/views/about.html");
});

app.listen(3000, () => {
  console.log(`Listening on port 3000`);
});
