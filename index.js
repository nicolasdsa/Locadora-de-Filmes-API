const express = require("express");
const server = express();
const authRouter = require("./services/auth");
const bodyParser = require("body-parser");

server.use(bodyParser.json());

server.listen(3000, () => {
  console.log("We are live!");
});

server.use("/auth", authRouter);

