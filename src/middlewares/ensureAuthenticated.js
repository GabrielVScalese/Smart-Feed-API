const { verify } = require("jsonwebtoken");

module.exports = {
  ensureAuthenticated(req, res, next) {
    const authToken = req.headers.authorization;

    if (!authToken) return res.status(401).send({ message: "Unauthorized" });

    // const [, token] = authToken.split(" ");

    // console.log(token);

    try {
      const decoded = verify(authToken, process.env.SECRET_KEY);

      req.id = decoded["id"];
      return next();
    } catch (error) {
      return res.status(401).send({ message: "Invalid token" });
    }
  },
};
