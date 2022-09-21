
module.exports = {

    testimonials(req,res,next){
 
        const errors = {};

        const {name,description,image_link,college_name} = req.body;

    if(!name){
      errors.name = "Name required";
    }else if(name.length < 2){
      errors.name = "Minimum 2 characters required";
    }else if(name.length > 18){
      errors.name = "Maximum 18 characters required";
    }

    if(!image_link){
        errors.imagelink = "Image Link required"
    }

    if(!college_name){
      errors.college = "Company name required";
    }else if(college_name.length < 2){
      errors.college = "Minimum 2 characters required";
    }else if(college_name.length > 18){
      errors.college = "Maximum 18 characters required";
    }

    if(!description){
      errors.description = "Description required"
    }

    if(Object.keys(errors).length === 0){
        next();
    }
    else{

        res.sned({errors:errors}) ;
    }
    }

}