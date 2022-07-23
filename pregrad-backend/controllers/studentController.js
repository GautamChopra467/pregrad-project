const StudentInfo = require('../models/UserInfoModel')

module.exports.studentAchievement = async(req,res)=>{

    const {id,title,certificate} = req.body
  const student = await StudentInfo.findOne({id})
 if(student)
 {
    const updateStudent = await StudentInfo.updateOne({
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

    const {title,certificate} = req.body
    

    const user = await StudentInfo.findOne({id:u_id})

    const data = await user.achievements.id(id)

    data.set(req.body)

    await user.save()
    
    res.send({achievements:user.achievements})

}catch(err){
    console.log(err)
}

}

// Project Functions 

module.exports.studentProject = async(req,res)=>{
   const {id,projecttitle,description,skills,projectlink} = req.body
   
   const student = await StudentInfo.findOne({id})

  if(student){
   const updateStudent= await StudentInfo.updateOne({
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
    // console.log("student created")
}

res.send({message:"true"})

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
        const {projecttitle,description,projectlink,skills} = req.body
    

    const user = await StudentInfo.findOne({id:u_id})

    const data = await user.project.id(id)

    data.set(req.body)

    await user.save()
    
    res.send({project:user.project})

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
        'education.university':{
            '$ne':university
        },
        'education.degree':{
            '$ne':degree
        },
        'education.field':{
            '$ne':field
        },
        'education.start':{
            '$ne':start
        },
        'education.end':{
            '$ne':end
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
        const {university,field,end,start,degree} = req.body
    

    const user = await StudentInfo.findOne({id:u_id})

    const data = await user.education.id(id)

    data.set(req.body)

    await user.save()
    
    res.send({education:user.education})

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

        const updateEducation = await StudentInfo.updateOne({
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
        const {companyname,websitelink,position,skills,role,duration} = req.body
    

    const user = await StudentInfo.findOne({id:u_id})

    const data = await user.workexperience.id(id)

    data.set(req.body)

    await user.save()
    
    res.send({workexperience:user.workexperience})

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
        message:"true"
    })
    }else{
        res.send({message:"false"})
    }

}