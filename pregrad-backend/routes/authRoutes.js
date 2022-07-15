const express = require("express");
const router = express.Router();
const { signup, login,verifyEmail,verifyOtp,newPassword} = require("../controllers/authControllers");

const {CheckUser} = require('../Middleware/AuthMiddleware')

router.route("/signup").post(signup);

router.route("/login").post(login);

router.route('/verifyemail').post(verifyEmail)

router.route('/verifyOtp').post(verifyOtp)

router.route('/student').post(CheckUser)

router.route('/newpassword').post(newPassword)

module.exports = router;