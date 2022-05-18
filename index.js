const express = require("express");
const server = express();
const authRouter = require("./services/auth");
const moviesRouter = require("./services/movies");
const movies_unitsRouter = require("./services/movies_units");
const bodyParser = require("body-parser");
const database = require("./utils/database");

server.use(bodyParser.json());

server.listen(3000, async () => {
  await database.init();
  console.log("We are live!");
});

server.use("/auth", authRouter);
server.use("/movies", moviesRouter);
server.use("/movies_units", movies_unitsRouter);
