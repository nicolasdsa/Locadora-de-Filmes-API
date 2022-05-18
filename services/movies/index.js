const express = require("express");
const router = express.Router();
const routeMiddleware = require('../../middlewares/route');
const authenticationMiddleware = require("../../middlewares/authentication");
const movies = require("./movies");

router.get("/", authenticationMiddleware, routeMiddleware(movies.route));

module.exports = router;