const express = require("express");
const router = express.Router();
const routeMiddleware = require('../../middlewares/route');
const authenticationMiddleware = require("../../middlewares/authentication");
const movies_units = require("./movies_units");

router.patch("/:id", authenticationMiddleware, routeMiddleware(movies_units.route));

module.exports = router;