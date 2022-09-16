module.exports = {

    detailsOne(req,res,next){
        const errors = {};
  
        if(!req.body.selectedCollege){
          errors.college = "College name required"
        }
    
        if(!req.body.selectedYear){
          errors.year = "Year of graduation required"
        }
    
        if(req.body.selectedDomains.length < 1){
          errors.domain = "Minimum 1 domain required"
        }
    
        if(req.body.selectedSkills.length < 3){
          errors.skills = "Minimum 3 skills required"
        }
    
        if(!req.body.selectedLocation){
          errors.location = "Work location required"
        }
    
        if(!req.body.linkedin){
          errors.linkedin = "Link required";
        }

        if(Object.keys(errors).length === 0){
            next();
          }else{
            return res.send({errors:errors});
          }
       
    },
    achievement(){
        const errors = {};

        const {title,certificate} = req.body;

        if(!title){
          errors.title = "Name required";
        }else if(title.length < 3){
          errors.title = "Min 3 characters required";
        }
    
        if(!certificate){
          errors.certificate = "Certificate link required";
        }

        if(Object.keys(errors).length === 0){
            next();
          }else{
            return res.send({errors:errors});
          }
       
    },
    projects(){

    },
    education(){

    },
    workexperience(){
   
    }
}