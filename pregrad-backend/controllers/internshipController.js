const Internship = require('../models/internshipModel')

module.exports.createInternship = async(req,res)=>{
try{
     const {id} =req.params

     console.log(req.body)

     console.log(req.body.selectedOfficeType)

    const newinternship = await Internship.create({
     id,
     title:req.body.selectedTitles,
     noofemployees:req.body.info.position,
     jobtype:req.body.selectedOfficeType,
     jobmode:req.body.selectedMode,
     description:req.body.info.about,
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
    console.log("done")

}catch(err){
     console.log(err)
}
}