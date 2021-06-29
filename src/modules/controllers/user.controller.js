const User = require("../../db/models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const secret = "randomSecretString";

const createUser = async (req, res) => {
  try {
    const { login, password } = req.body;

    const user = await User.findOne({ login });

    if (user) {
      return res.status(403).json({ error: "User with such login already available!" });
    }

    const hashPassword = await bcrypt.hash(password, 5);
    const newUser = await User.create({
      login: login,
      password: hashPassword,
    });

    const token = jwt.sign({ login }, secret);

    return res.json({
      user: {
        login: newUser.login,
        id: newUser._id
      },
      token,
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const loginUser = async (req, res) => {
  try {
    const { login, password } = req.body;

    const user = await User.findOne({ login });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const comparePasswords = bcrypt.compareSync(password, user.password);

    if (!comparePasswords) {
      return res.status(400).json({ error: "Wrong password" });
    }

    const token = jwt.sign({ login }, secret);

    return res.json({
      user: {
        login: user.login,
        id: user._id
      },
      token,
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

module.exports = {
  createUser,
  loginUser,
};
