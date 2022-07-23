const express = require("express");
const router = express.Router();
const { signup, login,verifyEmail,verifyOtp,newPassword,getUserDetails} = require("../controllers/authControllers");

const {CheckUser} = require('../Middleware/AuthMiddleware')

router.route("/signup").post(signup);

router.route("/login").post(login);

router.route('/verifyemail').post(verifyEmail)

router.route('/verifyOtp').post(verifyOtp)

router.route('/student').post(CheckUser)

router.route('/newpassword').post(newPassword)

router.route('/userDetails/:id').get(getUserDetails)

module.exports = router;