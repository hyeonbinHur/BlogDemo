const express = require("express");
const router = express.Router();
const api = require("../handler/user_api.js");

router.post("/user/sign-up", api.signup_user); //sign-up
router.post("/user/sign-in", api.signin_user); //sign-in

module.exports = router;
