const Company = require('../models/companyModel')
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer')
const {google} = require('googleapis')
const Otp = require('../models/OtpVerifyModel')

const maxAge = 3*24*60*60

const createToken =(id)=>{

  return jwt.sign({id},"AnuragPandey",{
    expiresIn:maxAge
  })


}

const oAuth2Client = new google.auth.OAuth2(process.GOOGLE_CLIENTID,process.env.GOOGLE_SECRET,process.REDIRECT_URI)
oAuth2Client.setCredentials({refresh_token:process.env.REFRESH_TOKEN})


const transporter = nodemailer.createTransport({
  service:"gmail",
  auth:{
    type:"OAuth2",
    user:process.env.AUTH_EMAIL,
    clientId:process.env.GOOGLE_CLIENTID,
    clientSecret:process.env.GOOGLE_SECRET,
    refreshToken:process.env.REFRESH_TOKEN
  }
})

module.exports.registerCompany = async(req,res)=>{
  try{
  const {name,designation,email,companyname,establish,phoneno,password} = req.body

  const company = await Company.findOne({email})

  if(company){
     res.send({
      status:"false"
     })
  }else{

     const hashPassword = await bcrypt.hash(password,10)

     const newCompany = await Company({
      name,
      designation,
      email,
      companyname,
      establish,
      phoneno,
      password:hashPassword
     })
     await newCompany.save()

     res.send({
      status:"true"
     })
  }

}catch(err){
  console.log(err)
}
}

module.exports.verifyEmail=async(req,res)=>{
  try{
  
    const {email} = req.body
  
    const company = await Company.findOne({email})
  
    if(company)
    { 
  
      if(req.query.type == 'register')
      {
        if(company.verified == false)
        {
        sendOtpToVerify(company);
        res.send({ message: "true",type:"register" });
      }else{
        res.send({ message: "Already Verified" });
      }
      }else{
        if(company.verified == true)
        {
          sendOtpToVerify(company);
          res.send({ message: "true",type:"forgotpassword" });
      }else{
        res.send({ message: "Invalid" });
      }
      }
    }
    else{
      res.send({ message: "Please Enter a register Email Id" });
  }
  }catch(err){
    console.log(err)
  }
  }

module.exports.loginCompany = async(req,res)=>{

  const {email,password} = req.body
 
  const company = await Company.findOne({email})

  if(company){

    const validPassword = await bcrypt.compare(password,company.password)
    if(validPassword)
    {
      const token = createToken(company._id)

      res.cookie("jwt",token,{
        withCredentials:true,
        httpOnly:false,
        maxAge:maxAge*1000
      })
      res.send({
               status:"true"
            })
      res.send({message:"true",id:company._id})
    }
  }

}

const sendOtpToVerify = async({email})=>{
 
  try{
 
    const otp = Math.floor(Math.random()*(10000-1000)+1000)
    const expiredAt = Date.now()+3600000

    const mailOptions={
      from:process.env.AUTH_EMAIL,
      to:email,
      subject:"Please Verify Your Email",
      html:`<p>Please Enter the ${otp} in the app to verify your email address and complete the registeration process</p>
      <p>The code expires in 1 hour</p>`
    }

const newUser = await Otp.create({email,otp,createdAt:Date.now(),expiredAt})

const result = await transporter.sendMail(mailOptions)

  }catch(err){
    console.log(err)
  }

}

module.exports.verifyOtp = async(req,res)=>{
  try{
    const {email,otp1,otp2,otp3,otp4} = req.body 
  
  const otp = `${otp1}`+`${otp2}`+`${otp3}`+`${otp4}`
  
    const user = await Otp.findOne({email})
  
    if(user){
      if(user.expiredAt.getTime() < Date.now())
      {
        res.send({message:"Code Expired"})
        await Otp.deleteOne({email})
  
      }else{
  
        const validOtp = await bcrypt.compare(otp,user.otp)
  
        if(!validOtp){
          res.send({message:"Invalid Otp"})
        }else{
          await Company.updateOne({email},{$set:{
            verified:true
          }})
           await Otp.deleteOne({email})
           res.send({message:"true"})
        }
      }
    }
  }catch(err){
    console.log(err)
  } 
  }

module.exports.newPassword = async(req,res)=>{
    try{ 
      const {email,password} = req.body
  
     const salt = await bcrypt.genSalt(10)
     const hashPassword = await bcrypt.hash(password,salt)
  
  const user = await Company.findOneAndUpdate({email},{$set:{
    password:hashPassword
  }})
  
  res.send({message:"true"})
  }catch(err){
    console.log(err)
  }
  }