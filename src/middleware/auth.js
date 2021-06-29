const jwt = require("jsonwebtoken");
const User = require("../db/models/users");
const secret = "randomSecretString";

module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    const data = jwt.verify(token, secret);

    if (!data) {
      return res.status(401).send("Not authorized");
    }

    const user = await User.findOne({ login: data.login });

    if (!user) {
      return res.status(401).send("Not authorized");
    }

    req.user = user;
    console.log(req.user)
    next();
  } catch (error) {
    return res.status(401).send("Not authorized");
  }
};
