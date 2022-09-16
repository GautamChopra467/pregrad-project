const Admin = require("../models/adminModel");
const bcrypt = require("bcryptjs");

module.exports.registerAdmin = async(req,res)=>{

   const {name,password,email} = req.body;

   const admin = await Admin.findOne({email});

   if(admin){
     return res.send({message:"Admin already registered"});
   }
   else{

    const hashPassword = await bcrypt.hash(password,10);

      const newAdmin = new Admin({
        name,
        password:hashPassword,
        email
      })

      await newAdmin.save();

      return res.send({ message: "true" });
   }
   
} 