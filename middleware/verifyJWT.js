const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyJWT = (req, res, next) => {
  const authorizationHeader =
    req.headers.authorization || req.headers.Authorization;
  if (!authorizationHeader?.startsWith("Bearer ")) return res.sendStatus(401);
  const token = authorizationHeader.split(" ")[1];
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, decoded) => {
    if (error) return res.sendStatus(403); // Forbidden
    req.user = decoded.userInfo.username;
    req.roles = decoded.userInfo.roles;
    next();
  });
};

module.exports = { verifyJWT };
