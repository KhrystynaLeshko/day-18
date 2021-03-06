const express = require("express");

const app = express();

app.set("view engine", "hbs");

// (req, res)
const user1 = {
  name: "Gizem",
};
app.get("/", (request, response) => {
  response.render("index", { user: user1, page: { title: "Home Page" } });
  //   response.sendFile(__dirname + "/views/index.hbs");
});

app.get("/about", (req, res) => {
  res.render("about", {
    page: { title: "The About Page where you learn stuff" },
  });
});

app.get("/work", (req, res) => {
  res.render("work");
});

app.listen(5500, () => {
  console.log(`Server listening on port 5500`);
});
