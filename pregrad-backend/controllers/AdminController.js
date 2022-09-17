const Admin = require("../models/adminModel");
const bcrypt = require("bcryptjs");
const Company = require("../models/companyModel");
const Internship = require("../models/internshipModel");
const Student = require("../models/userModel");

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

module.exports.reportedInternship = async(req,res)=>{
 
  try{

    const reported = await Internship.find({});

    let reportedArray = [];

    reported.map((e)=>{
      if(e.reports.length>0){
        reportedArray.push(e);
      }
    })
   res.send(reportedArray);

  }catch(err){
    console.log(err);
  }
  
}

module.exports.reports = async(req,res)=>{

  try{
    const {i_id} = req.params;

    const report = await Internship.findById({_id:i_id});

    report.reports.map(async(e,i)=>{
        const student = await Student.findById({_id:e.student_id});
        e["name"] = student.name;
    })

    await report.save();

    res.send(report.reports);

  }catch(err){
    console.log(err);
  }
}

module.exports.VerifiedRepotedInternship = async(req,res)=>{

  try{

    const reported = req.body;

    const date = new Date();

    const {id} = req.params;

    const admin = await Admin.findById({_id:id});

    reported.map(async(e)=>{
      if(e.flag === true){

        admin.reports.push({
          internship_id:e._id,
          internship_title:e.title,
          status:"Blocked",
          verifiedAt: date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+'T'+date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
        })

        const internship = await Internship.findByIdAndUpdate({_id:e._id},{
          $set:{
            reports:[],
            isBlocked:true
          }
        })
      }
      else if(e.flag === false){

        admin.reports.push({
          internship_id:e._id,
          internship_title:e.title,
          status:"Allowed",
          verifiedAt: date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+'T'+date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()

        })

        const internship = await Internship.findByIdAndUpdate({_id:e._id},{
          $set:{
            reports:[],
            isBlocked:false
          }
        })
      }
      })

      await admin.save();

      res.send({status:true})

  }catch(err){
     console.log(err);
  }

}