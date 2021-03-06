const express = require("express");

const app = express();

// IGNORE THE SYNTAX, WILL BE EXPLAINED IN A COUPLE OF WEEKS
app.use(express.static("public"));

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/about", (request, response) => {
  response.sendFile(__dirname + "/views/about.html");
});

app.get("/contact", function (request, response) {
  response.sendFile(__dirname + "/views/contact.html");
});

app.listen(5500, () => {
  console.log(`SERVER RUNNING ON 5500`);
});
