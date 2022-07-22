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

    res.send({achievements:user.achievements})

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
    console.log("student created")
}

res.send({message:"true"})

}

module.exports.getProjectsInfo = async(req,res)=>{
    const {id} = req.params
  
    const student = await StudentInfo.findOne({id})

    res.send({project:student.project})
}

module.exports.deleteProject = async(req,res)=>{
    const {u_id,id} = req.params
try{

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

    data.set({
        projecttitle,
        description,
        projectlink
    })

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