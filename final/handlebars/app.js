const express = require("express");

const app = express();

// defines a `rendering-engine`. Since we are moving away from plain html, we need to define.
// It sets a default view folder on `views`.
app.set("view engine", "hbs");

const user = {
  name: "Hugo",
  in: "Dubai",
  from: "France",
};

app.get("/", (req, res) => {
  // renders the index.hbs file, and passes to the template a `user` object
  res.render("index", { user });
});

app.listen(3002, () => {
  console.log("Running on port 3002");
});
