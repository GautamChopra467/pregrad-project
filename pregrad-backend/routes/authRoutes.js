const express = require("express");
const router = express.Router();
const passport = require('passport')
const jwt = require('jsonwebtoken')
const maxAge = 3*24*60*60
require('../config/passportGoogle')

const { signup, login,verifyEmail,verifyOtp,newPassword,getUserDetails} = require("../controllers/authControllers");

const {CheckUser} = require('../Middleware/AuthMiddleware')

const createToken =(id)=>{

    return jwt.sign({id},"AnuragPandey",{
      expiresIn:maxAge
    })  
  }
  
router.route("/signup").post(signup);

router.route("/login").post(login);

router.route('/verifyemail').post(verifyEmail)

router.route('/verifyOtp').post(verifyOtp)

router.route('/student').post(CheckUser)

router.route('/newpassword').post(newPassword)

router.route('/userDetails/:id').get(getUserDetails)

router.route('/auth/google').get(passport.authenticate('google',{
    scope:['profile','email']
}))

router.route('/auth/google/callback').get(passport.authenticate('google',{
    successRedirect:`/auth/google/success`,
    failureRedirect:"http://localhost:3000/login"
})) 

router.route('/auth/google/success').get((req,res,next)=>{

    const token = createToken(req.user._id)
    res.cookie("jwt",token,{
      withCredentials:true,
      httpOnly:false,
      maxAge:maxAge*1000
    })
    req.type = "google"
    req.token = token
next()

},CheckUser)

module.exports = router;