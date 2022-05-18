const express = require("express");
const router = express.Router();
const signup = require("./signup");
const signin = require("./signin");
const routeMiddleware = require('../../middlewares/route');

router.post("/signup", routeMiddleware(signup));
router.post("/signin", routeMiddleware(signin));

module.exports = router;
