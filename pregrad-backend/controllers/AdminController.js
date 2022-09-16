const Admin = require("../models/adminModel");
const bcrypt = require("bcryptjs");
const Company = require("../models/companyModel");

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

module.exports.AdminInfo = async(req,res)=>{

  try{

    const {id} = req.params;

    const adminInfo = await Admin.findById({_id:id});

   res.send(adminInfo);

  }
  catch(err){
    console.log(err);
  }
 

}

module.exports.verifiedCompany = async(req,res)=>{
  try{

    const {id} = req.params;

    const date = new Date();

    const admin = await Admin.findById({_id:id});

    req.body.map(async(e)=>{
      if(e.status === true){

         admin.Company_Verification.push({
            company_id:e._id,
            company_name:e.companyname,
            status:"Blocked",
            verifiedAt: date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+'T'+date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()

          })

        const company = await Company.findByIdAndUpdate({_id:e._id},{
          $set:{
            isAuthorized:"Blocked"
          }
        });
  
     
      }else if(e.status === false){

        admin.Company_Verification.push({
          company_id:e._id,
          company_name:e.companyname,
          status:"Verified",
          verifiedAt: date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+'T'+date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
        })

      const company = await Company.findByIdAndUpdate({_id:e._id},{
        $set:{
          isAuthorized:"Verified"
        }
      });

      }
    })
    await admin.save();

    res.send({status:true})
   
  }catch(err){
    console.log(err);
  }
}