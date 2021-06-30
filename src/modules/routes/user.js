const express = require("express");
const router = express.Router();

const { createUser, loginUser } = require("../controllers/user.controller");

router.post("/create", createUser);

router.post("/sign", loginUser);

module.exports = router;
