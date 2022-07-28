const Internship = require('../models/internshipModel')

module.exports.createInternship = async(req,res)=>{

     const {title,role,noofemployees,jobtype,description,perks,stipend,noofhours,skills,expiresAt,status,experience} = req.body

     const internship = await Internship.findOne({email})



}