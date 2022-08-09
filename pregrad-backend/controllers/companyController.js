const Company = require('../models/companyModel')
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer')
const {google} = require('googleapis')
const Otp = require('../models/OtpVerifyModel')
const UserRegister = require("../models/userModel");


module.exports.registerCompany = async(req,res)=>{
  try{

  const {name,designation,email,companyname,phoneno,password} = req.body

  const user = await UserRegister.findOne({email})

  const company = await Company.findOne({email})

  if(user){
    res.send({
      message:"Already registered"
     })
  }
  else if(company){
     res.send({
      message:"Already registered"
     })
  }else{

     const hashPassword = await bcrypt.hash(password,10)

     const newCompany = await Company.create({
      name,
      designation,
      email,
      companyname,
      phoneno,
      password:hashPassword
     })
     await newCompany.save()

     res.send({
      message:"true"
     })
  }

}catch(err){
  console.log(err)
}
}



