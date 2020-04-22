const redisClient = require("./signin").redisClient;

const requireAuth = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    res.status(401).json("UnAuthorized");
  }
  return redisClient.get(authorization, (err, reply) => {
    if (err || !reply) {
      res.status(401).json("UnAuthorized");
    }
    return next();
  });
};

console.log("middleware!");
module.exports = {
  requireAuth,
};
