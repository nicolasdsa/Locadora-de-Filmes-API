const jwt = require("jsonwebtoken");

const authentication = (req, res, next) => {
  const tokenData = req.headers.authorization;

  if (!tokenData) {
    return res.status(401).send("Unauthorized");
  }

  const token = tokenData.split(" ")[1];

  try {
    const decoded = jwt.verify(token, "t3st4nd0");
    req.user = decoded;
    return next();
  } catch (err) {
    return res.status(401).send();
  }
};

module.exports = authentication;
