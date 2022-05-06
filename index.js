const express = require("express");
const server = express();
const authRouter = require("./services/auth");
const movies = require("./services/movies/movies");
const movies_units = require("./services/movies_units/movies_units");
const authenticationMiddleware = require("./middlewares/authentication");
const bodyParser = require("body-parser");
const database = require("./utils/database");

server.use(bodyParser.json());

server.listen(3000, async () => {
  await database.init();
  console.log("We are live!");
});

server.use("/auth", authRouter);
server.get("/movies", authenticationMiddleware, movies);
server.patch("/movies_units/:id", movies_units);
