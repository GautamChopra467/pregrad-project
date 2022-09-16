const UserRegister = require("../models/userModel");
const Otp = require('../models/OtpVerifyModel')
const Company = require('../models/companyModel')
const nodemailer = require('nodemailer')
const {google} = require('googleapis')
const bcrypt = require('bcryptjs')


const jwt = require('jsonwebtoken');

const maxAge = 3*24*60*60

const createToken =(id)=>{

  return jwt.sign({id},process.env.JWT_SECRET,{
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

module.exports.signup = async (req, res) => {

  const { name, email, password, mobile } = req.body;

  const company = await Company.findOne({email})

  if(company){
    res.send({ message: "User Already Registered" });
  }else{
    UserRegister.findOne({ email: email }, async (err, user) => {
      if (user) {
        res.send({ message: "User Already Registered" });
      } else {
        const UserData = new UserRegister({
          name: name,
          email: email,
          password: password,
          mobile: mobile,
        });
  
        await UserData.save((err) => {
          if (err) {
            res.send(err);
          } else {
            res.send({ message: "true" });
          }
        });
      }
    });
  }

};

module.exports.verifyEmail=async(req,res)=>{
try{

  const {email} = req.body

  const user = await UserRegister.findOne({email})
 const company = await Company.findOne({email})
 
  if(user)
  { 

    if(req.query.type == 'register')
    {
      if(user.verified == false)
      {
      sendOtpToVerify(user);
      res.send({ message: "true",type:"register" });
    }else{
      res.send({ message: "Already Verified" });
    }
    }else{
      if(user.verified == true)
      {
        sendOtpToVerify(user);
        res.send({ message: "true",type:"forgotpassword" });
    }else{
      res.send({ message: "Invalid" });
    }
    }
  }
  else if(company){

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

module.exports.verifyOtp = async(req,res)=>{
try{
  const {email,otp1,otp2,otp3,otp4} = req.body; 

const otp = `${otp1}`+`${otp2}`+`${otp3}`+`${otp4}`;

  const user = await Otp.findOne({email});

  if(user){
    if(user.expiredAt.getTime() < Date.now())
    {
      res.send({message:"Code Expired"});
      await Otp.deleteOne({email});

    }else{

      const validOtp = await bcrypt.compare(otp,user.otp);

      if(!validOtp){
        res.send({message:"Invalid Otp"})
        await Otp.deleteOne({email})
      }else{

        const student = await UserRegister.findOne({email});

        const company = await Company.findOne({email});

        if(student){

        await UserRegister.updateOne({email},{$set:{
          verified:true
        }})
         await Otp.deleteOne({email});
         res.send({message:"true"});
     }else if(company){
      await Company.updateOne({email},{$set:{
        verified:true
      }})
       await Otp.deleteOne({email});
       res.send({message:"true"});
    }
    }
  }
}else{
  res.send({message:"Invalid Email"});
}
}catch(err){
  console.log(err);
}

}

module.exports.login = async (req, res) => {
  try{  

    console.log("Welcome to Login");
   
  const {email, password} = req.body;
 
    const user = await UserRegister.login(email,password)

    if(!user)
    {
      const company = await Company.login(email,password)

      if(company){
          
        const token = createToken(company._id)

        res.cookie("jwt",token,{
          withCredentials:true,
          httpOnly:false,
          maxAge:maxAge*1000
        })

        res.send({usertype:"company",id:company._id,verified:company.detailFlag})

      }else{
       res.send({message:"Invalid Credentials"})
    }
  }
else{
    const token = createToken(user._id)

    res.cookie("jwt",token,{
      withCredentials:true,
      httpOnly:false,
      maxAge:maxAge*1000
    })

    res.send({usertype:"student",id:user._id,verified:user.detailFlag})
  }
}catch(err){
  console.log(err)
}
    
}

module.exports.newPassword = async(req,res)=>{
  try{ 

    const {email,password} = req.body

    const user = await UserRegister.findOne({email})

    const company = await Company.findOne({email})

    if(user){
      const salt = await bcrypt.genSalt(10)

      const hashPassword = await bcrypt.hash(password,salt)
  
      const updateduser = await UserRegister.findOneAndUpdate({email},{$set:{
       password:hashPassword
      }})

      res.send({message:"true"})
    }
    else if(company){

      const salt = await bcrypt.genSalt(10)

      const hashPassword = await bcrypt.hash(password,salt)
  
      const updatedcompnany = await Company.findOneAndUpdate({email},{$set:{
       password:hashPassword
      }})

      res.send({message:"true"})
    }

    


}catch(err){
  console.log(err)
}
}

module.exports.getUserDetails = async(req,res)=>{

  try{
    const {id} = req.params

    const user = await UserRegister.findOne({_id:id})
  
    if(user){
  
    res.send({
      name:user.name,
      email:user.email,
      verified:user.detailFlag
    })
  
  }else{
    res.send({message:"User not found"})
  }
  }catch(err){
    console.log(err)
  }
  

}