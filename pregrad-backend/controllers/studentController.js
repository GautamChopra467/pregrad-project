const StudentInfo = require('../models/UserInfoModel')
const UserRegister = require("../models/userModel");
const Internship = require("../models/internshipModel")
const Company = require('../models/companyModel')

//Achievement Functions

module.exports.studentAchievement = async(req,res)=>{

    const {id,title,certificate} = req.body
  const student = await StudentInfo.findOne({id})
 if(student)
 {
    const updateStudent = await StudentInfo.updateOne({
        id,
        'achievements.certificate':{
            '$ne':certificate
        },
        'achievements.title':{
            '$ne':title
        }
    },{$addToSet:{
        achievements:[{
            title,
            certificate
        }]
    }})

    if(updateStudent.modifiedCount != 1)
    {
        res.send({
            message:"You cannot add duplicate information"
        })
        return;
    }

 }else{
    const newStudentInfo = await StudentInfo.create({
        id,
        achievements:[{
            title,
        certificate
    }]
    })

    await newStudentInfo.save()
 }

 res.send({message:"true"})
   
}

module.exports.getAchievementInfo = async(req,res)=>{

    const {id} = req.params

    const  user = await StudentInfo.findOne({id})
    if(user != null)
    {
    res.send({achievements:user.achievements,message:"true"})
    }else{
        res.send({message:"false"})
    }
}

module.exports.deleteAchievement = async(req,res)=>{
try{
    const {u_id,id} = req.params
    const user = await StudentInfo.updateOne({
        id:u_id
    },{$pull:{
        achievements:{
            _id:id
        }
    }})
    res.send({message:"true"})

}catch(err){
    console.log(err)
}
}


module.exports.updateAchievement = async(req,res)=>{
   try{
    const {u_id,id} = req.params

    const user = await StudentInfo.findOne({id:u_id})

    const data = await user.achievements.id(id)

    res.send(data)

}catch(err){
    console.log(err)
}
}

module.exports.updatedAchievement = async(req,res)=>{
    try{
        const {u_id,id} = req.params

        const errors = {};

    const {title,certificate} = req.body

    if(!title){
        errors.title = "Name required";
    }else if(title.length < 3){
        errors.title = "Min 3 characters required";
    }
    if(!certificate){
        errors.certificate = "Certificate link required";
    }
    

    const user = await StudentInfo.findOne({id:u_id})

    const data = await user.achievements.id(id)

    data.set(req.body)

    await user.save()
    
    res.send({achievements:user.achievements,errors:errors})

}catch(err){
    console.log(err)
}

}

// Project Functions 

module.exports.studentProject = async(req,res)=>{
  try{

       const {id,projecttitle,description,skills,projectlink} = req.body
   
   const student = await StudentInfo.findOne({id})

  if(student){
   const updateStudent= await StudentInfo.updateOne({
    id,
    'project.projecttitle':{
        '$ne':projecttitle
    },
    'project.projectlink':{
        '$ne':projectlink
    }
   },{$addToSet:{
       project:[{
        projecttitle,
        description,
        skills,
        projectlink
       }]
    }})

    if(updateStudent.modifiedCount != 1)
    {
        res.send({
            message:"You cannot add duplicate information"
        })
        return;
    }
    

}else{
    const newStudentInfo = await StudentInfo.create({
        id,
        project:[{
            projecttitle,
            description,
            skills,
            projectlink
           }]
    })
    await newStudentInfo.save()
}

res.send({message:"true"})

  }catch(err){
    console.log(err)
  }


}

module.exports.getProjectsInfo = async(req,res)=>{
    const {id} = req.params
  
    const student = await StudentInfo.findOne({id})

    if(student != null)
    {
        res.send({project:student.project,message:"true"})
    }
    else{
        res.send({message:"false"})
    }
}

module.exports.deleteProject = async(req,res)=>{
    try{
    const {u_id,id} = req.params

    const student = await StudentInfo.updateOne({
        id:u_id
    },{$pull:{
        project:{
            _id:id
        }
    }})
    res.send({message:"true"})

}catch(err){
    console.log(err)
}
}

module.exports.updatedProject = async(req,res)=>{

    try{
        const {u_id,id} = req.params
        const errors = {}
        const {projecttitle,description,projectlink,skills} = req.body
        
         if(!projecttitle ){
           errors.projecttitle = "Title Required";
         }
         if(!description){
                errors.description = "Description required";
         }
         if(skills.length < 3){
            errors.skills = "Minimum 3 skills required";
         }
         if(!projectlink){
            errors.projectlink = "Project Link required";
         }

      

    const user = await StudentInfo.findOne({id:u_id})

    const data = await user.project.id(id)

    data.set(req.body)

    await user.save()
    
    res.send({project:user.project,errors:errors})

}catch(err){
    console.log(err)
}


}

module.exports.updateProject = async(req,res)=>{
    try{
        const {u_id,id} = req.params
     

        const user = await StudentInfo.findOne({id:u_id})
    
        const data = await user.project.id(id)
    
        res.send(data)
    
    }catch(err){
        console.log(err)
    }
}

// Education function

module.exports.studentEducation = async(req,res)=>{

const {id,university,field,start,end,degree} = req.body

const student =await StudentInfo.findOne({id})

if(student){

    const updateEducation = await StudentInfo.updateOne({
        id,
        'education.degree':{
            '$ne':degree
        },
        'education.field':{
            '$ne':field
        }
    },{$addToSet:{
      education:[{
        university,
        field,
        degree,
        end,
        start
    }]
    }})

    if(updateEducation.modifiedCount != 1)
    {
        res.send({
            message:"You cannot add duplicate information"
        })
        return;
    }

}else{
    const newStudentInfo = await StudentInfo.create({
        id,
        education:[{
        university,
        field,
        degree,
        end,
        start
    }]
    })

    await newStudentInfo.save()
}

res.send({message:"true"})
 
}


module.exports.getEducationInfo = async(req,res)=>{
    
    const {id} = req.params

    const  student = await StudentInfo.findOne({id})

    if(student != null)
    {
         res.send({education:student.education,message:"true"})

    }else{
        res.send({message:"false"})
    }
}

module.exports.deleteEducation = async(req,res)=>{
    try{
        const {u_id,id} = req.params
    
        const student = await StudentInfo.updateOne({
            id:u_id
        },{$pull:{
            education:{
                _id:id
            }
        }})
        res.send({message:"true"})
    
    }catch(err){
        console.log(err)
    }
}

module.exports.updatedEducation = async(req,res)=>{

    try{
        const {u_id,id} = req.params

        const errors = {};

        const {university,field,end,start,degree} = req.body
    
        if(!university){
            errors.university = "Name required";
        }
        if(!field){
                errors.field = "Field of study required";
        }
        if(!end){
            errors.end = "End year required";
        }
        else if(end.length !== 4 || (!Number.isInteger(parseFloat(end))) || (isNaN(end))){
            errors.end = "Invalid Year";
          }
        if(!start){
            errors.start = "Start year required";
        }
        else if(start.length !== 4 || (!Number.isInteger(parseFloat(start))) || (isNaN(start))){
            errors.start = "Invalid Year";
          }
        if(!degree){
            errors.degree = "Degree required";
        }
       

    const user = await StudentInfo.findOne({id:u_id})

    const data = await user.education.id(id)

    data.set(req.body)

    await user.save()
    
    res.send({education:user.education,errors:errors})

}catch(err){
    console.log(err)
}



}


module.exports.updateEducation = async(req,res)=>{
    try{
        const {u_id,id} = req.params
    
        const user = await StudentInfo.findOne({id:u_id})
    
        const data = await user.education.id(id)
    
        res.send(data)
    
    }catch(err){
        console.log(err)
    }
}

// workexperiene function

module.exports.studentWorkExperience = async(req,res)=>{

    const {id,companyname,websitelink,position,skills,role,duration} = req.body

const student =await StudentInfo.findOne({id})

    if(student){

        const updateExperience = await StudentInfo.updateOne({
            id,
            'workexperience.companyname':{
                '$ne':companyname
            },
            'workexperience.websitelink':{
                '$ne':websitelink
            },
            
        },{$addToSet:{
            workexperience:[{
            companyname,
            websitelink,
            position,
            skills,
            role,
            duration
        }]
        }})
    
        if(updateExperience.modifiedCount != 1)
    {
        res.send({
            message:"You cannot add duplicate information"
        })
        return;
    }

    }else{
        const newStudentInfo = await StudentInfo.create({
            id,
            workexperience:[{
                companyname,
                websitelink,
                position,
                skills,
                role,
                duration
        }]
        })
    
        await newStudentInfo.save()
    }
    
    res.send({message:"true"})
    
}

module.exports.getWorkExperienceInfo = async(req,res)=>{

    const {id} = req.params

    const  student = await StudentInfo.findOne({id})

    if(student != null)
    {
    res.send({workexperience:student.workexperience,message:"true"})
    }else{
        res.send({message:"false"})
    }
}

module.exports.deleteWorkExperience = async(req,res)=>{
    try{
        const {u_id,id} = req.params
    
        const student = await StudentInfo.updateOne({
            id:u_id
        },{$pull:{
            workexperience:{
                _id:id
            }
        }})
        res.send({message:"true"})
    
    }catch(err){
        console.log(err)
    }

}

module.exports.updatedWorkExperience = async(req,res)=>{
    try{
        const {u_id,id} = req.params
        const errors = {}
        const {companyname,websitelink,position,skills,role,duration} = req.body

        if(!companyname){
            errors.companyname = "Name required";
          }
          if(!websitelink){
                 errors.websitelink = "Website Link required";
          }
          if(skills.length < 3){
             errors.skills = "Minimum 3 skills required";
          }
          if(!position){
             errors.position = "Position of responsibility required";
          }
          if(!role){
            errors.role = "Description of role required";
          }
          if(!duration){
            errors.duration = "Duration required";
          }
          else if(duration < 1){
            errors.duration = "Duration should be greater than 1"
          }else if(!Number.isInteger(parseFloat(duration))){
            errors.duration = "Duration should not be in decimal"
          }

    const user = await StudentInfo.findOne({id:u_id})

    const data = await user.workexperience.id(id)

    data.set(req.body)

    await user.save()
    
    res.send({workexperience:user.workexperience,errors:errors})

}catch(err){
    console.log(err)
}
}

module.exports.updateWorkExperience = async(req,res)=>{
    try{
        const {u_id,id} = req.params
    
        const user = await StudentInfo.findOne({id:u_id})
    
        const data = await user.workexperience.id(id)
    
        res.send(data)
    
    }catch(err){
        console.log(err)
    }
}      

//all Student Info

module.exports.allStudentData= async(req,res)=>{
    const {id} = req.params

    const student = await StudentInfo.findOne({id})

    if(student != null)
    {
    res.send({
        achievement:student.achievements,
        education:student.education,
        project:student.project,
        workexperience:student.workexperience,
        skills:student.skills,
        domain:student.domain,
        socialLink:student.socialLinks,
        videolink:student.video,
        message:"true"
    })
    }else{
        res.send({message:"false"})
    }

}

//detailsOne function

module,exports.detailsOne = async(req,res)=>{
    try{
        const {id} = req.params

        const student = await StudentInfo.findOne({id})

        if(student){

           const updateStudent = await StudentInfo.updateOne({id},{
               $set:{
                skills:req.body.selectedSkills,
                domain:req.body.selectedDomains,
                socialLinks:req.body.socialLink,
                location:req.body.selectedLocation,
                video:req.body.video
               }
           })

        }else{
            const newStudent = await StudentInfo.create({
                id,
                skills:req.body.selectedSkills,
                domain:req.body.selectedDomains,
                socialLinks:req.body.socialLink,
                location:req.body.selectedLocation
            })

            await newStudent.save()
        }

        const user = await UserRegister.findByIdAndUpdate({_id:id},{
            $set:{
                detailFlag:true
            }
        },{
            new:true
          })

        res.send({message:"true",verified:user.detailFlag})
       
    }catch(err){
        console.log(err)
    }
    
}

// Profile Health

module.exports.profileHealth = async(req,res)=>{
    try{
        const {id} =req.params

        const student = await StudentInfo.findOne({id})
    
        let projectScore = 0,workScore = 0,AchiScore = 0,EduScore=0,profileScore=20;

        if(student){
            
          if(student.project.length >3){
            projectScore = 30;
          }else{
            projectScore = student.project.length*10;
          }

          if(student.education.length >1){
            EduScore = 5;
          }else{
            EduScore =student.education.length*5;
          }

          if(student.achievements.length > 2){
            AchiScore = 20;
          }else{
            AchiScore =student.achievements.length*10;
          }
          if(student.workexperience.length >1){
            workScore = 10;
          }else{
            workScore =student.workexperience.length*10;
          }

          profileScore += EduScore+projectScore+AchiScore+workScore
          
        }
       const updatedStudentProfile = await StudentInfo.updateOne({id},{
        $set:{
            profilescore: profileScore
        }
    })

        res.send({profileHealth:student.profilescore})

    }catch(err){
        console.log(err)
    }
}

// edit profile

module.exports.editProfileDetails = async(req,res)=>{
  try{
    const {id} = req.params
     console.log(req.body.links)
    const student = await StudentInfo.findOne({id})

    if(student){
        const upadateStudentInfo = await StudentInfo.updateOne({id},{
            $set:{
                socialLinks:req.body.links,
                skills:req.body.selectedSkills,
                domain:req.body.selectedDomains,

            }
        })
    }

    const registerStudent = await UserRegister.findOne({_id:id})

        if(registerStudent){
           const updateregisterStudent = await UserRegister.updateOne({_id:id},{
            $set:{
               name:req.body.data.name
            }
           })

        }

        res.send("Updated")
}catch(err){
    console.log(err)
}
}

// update student and internship applied

module.exports.appliedInternship = async(req,res)=>{
    try{

        const {id} = req.params
        
        const studentinfo = await StudentInfo.findOne({id});
       
        // if(studentinfo.applied.find((e)=>e === req.body.iid) !== undefined){
        //   return res.send("Already Applied")
        // }
        // else{
          
            const student = await StudentInfo.findOneAndUpdate({id},{
                $push:{
                    applied:req.body.iid
                }
            },{
                new:true
            })

            const internship = await Internship.findOneAndUpdate({_id:req.body.iid},{
                $push:{
                    applied:{
                        id,
                        status:"Applied"
                    }
                }
            },{
                new:true
            })
            res.send("Applied")
        // }
    }catch(err){
        console.log(err)
    }

}

// update student and internship applied

module.exports.getappliedInternship = async(req,res)=>{
try{

    const {id} = req.params

    const internshipapplied = await StudentInfo.findOne({id})

    var appliedintern = [];

    for(let i=0;i<internshipapplied.applied.length;i++){

        const internship = await Internship.findOne({_id:internshipapplied.applied[i]})

        const company = await Company.findOne({_id:internship.id})

        appliedintern.push({...internship,companyname:company.companyname})

    }

    res.send(appliedintern)


}catch(err){
console.log(err)
}
    
}