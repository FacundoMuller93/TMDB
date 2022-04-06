const express = require("express");
const router = express.Router();
const NewUser = require("../models/NewUser");
const passport = require("passport");
const user = require('./user');

router.use("/user", user)

module.exports = router;
