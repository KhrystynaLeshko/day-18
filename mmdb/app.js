const express = require("express");
const allOfThoseMovies = require("./movies.json");

const app = express();
app.set("view engine", "hbs");

const fakeUser = {
  name: "Hugo",
  age: 18,
  canWatchAllMovies: true,
  isStudent: true,
  favorites: [{ title: "Pokemon" }],
};

const fakeUser2 = {
  name: "Gizem",
  age: 21,
  canWatchAllMovies: true,
  favorites: [],
  isStudent: false,
};

app.get("/", (req, res) => {
  res.render("index", { user: fakeUser, movies: allOfThoseMovies });
});

app.listen(5500, () => {
  console.log(`Listening on port 5500`);
});
