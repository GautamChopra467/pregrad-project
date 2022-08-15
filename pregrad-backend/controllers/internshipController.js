const Internship = require('../models/internshipModel')

module.exports.createInternship = async(req,res)=>{
try{
     const {id} =req.params

    console.log(req.body)

    const newinternship = await Internship.create({
     id,
     title:req.body.selectedTitles,
     noofemployees:req.body.info.positions,
     jobtype:req.body.selectedOfficeType,
     jobmode:req.body.selectedMode,
     description:req.body.info.about,
     duration:req.body.selectedDuration,
     perks:{
          letter:req.body.letterCheckbox,
          certificate:req.body.certiCheckbox,
          job:req.body.jobCheckbox,
          bonus:req.body.bonusCheckbox
     },
     stipend:{
          maximum:req.body.info.maxstipend,
          minimum:req.body.info.minstipend
     },
     skills:req.body.selectedSkills,
     experience:req.body.selectedExperience,
     startfrom:req.body.info.startdate
    })

    await newinternship.save()

}catch(err){
     console.log(err)
}
}

module.exports.Internship = async(req,res)=>{
try{ 
     const {id} =req.params;

     const internship = await Internship.findOne({_id:id});

     if(internship){
          res.send(internship);
     }else{
          res.send("No internship");
     }
}catch(err){
     console.log(err)
}
     
}


module.exports.singleInternship = async(req,res)=>{
     try{

          const {id} = req.params

          const internship = await Internship.findOne({_id:id}) 

          if(internship){

               res.send(internship)
          }else{
              res.send("No Internship")
          }

     }catch(err){
       console.log(err)
     }
}

module.exports.editInternship = async(req,res)=>{
     try{

          const {id} = req.params

          const internship = await Internship.findOneAndUpdate({_id:id},{
               $set:{
                 title:req.body.selectedTitles,
                 noofemployees:req.body.info.positions,
                 jobtype:req.body.selectedOfficeType,
                 jobmode:req.body.selectedMode,
                 description:req.body.info.about,
                 duration:req.body.selectedDuration,
        perks:{
           letter:req.body.letterCheckbox,
           certificate:req.body.certiCheckbox,
           job:req.body.jobCheckbox,
           bonus:req.body.bonusCheckbox
        },
        stipend:{
          maximum:req.body.info.maxstipend,
          minimum:req.body.info.minstipend
     },
     skills:req.body.selectedSkills,
     experience:req.body.selectedExperience,
     startfrom:req.body.info.startdate

               }
          })
          
     }catch(err){
          console.log(err)
     }

}

module.exports.closeInternship = async(req,res)=>{
     try{
          const {id} = req.params
          
          const internship = await Internship.findOneAndUpdate({_id:id},{
               $set:{
                    status:!req.body.status
               }
          },{
               new:true
          })

          res.send({message:"true"})

     }catch(err){
          console.log(err)
     }
    
}

module.exports.allInternship = async(req,res)=>{
   try{

     let {page,size} = req.query

     const limit = parseInt(size)

     const skip = (page-1)*size;

     const internships = await Internship.find({}).limit(limit).skip(skip)

     // internhips.id.length

     // company companyinfo

     //headquater , companyname  => internship

     if(internships){
          res.send(internships)
     }else{
          res.send("Server Error")
     }
   }catch(err){
     console.log(err)
   }  
     
}