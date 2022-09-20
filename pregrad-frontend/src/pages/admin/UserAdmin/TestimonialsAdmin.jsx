import React, { useEffect, useState } from "react";
import "../../../components/admin/css/UserAdmin/TestimonialsAdminStyles.css";
import Student1 from "../../../img/home-banner/student1.png";
import { FaTrashAlt } from "react-icons/fa";

const TestimonialsAdmin = () => {

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const [info, setInfo] = useState({
    name: "",
    imagelink: "",
    college: "",
    description: "",
  });

  const handleForm = (e) => {
    const {name, value} = e.target;
    setInfo({
      ...info,
      [name]: value
    })
  }

  const submitForm = (e) => {
    e.preventDefault();
    setFormErrors(validate(info));
    setIsSubmit(true);
  }

  const validate = (values) => {
    
    const errors = {};

    if(!values.name){
      errors.name = "Name required";
    }else if(values.name.length < 2){
      errors.name = "Minimum 2 characters required";
    }else if(values.name.length > 18){
      errors.name = "Maximum 18 characters required";
    }

    if(!values.imagelink){
        errors.imagelink = "Image Link required"
    }

    if(!values.college){
      errors.college = "Company name required";
    }else if(values.college.length < 2){
      errors.college = "Minimum 2 characters required";
    }else if(values.college.length > 18){
      errors.college = "Maximum 18 characters required";
    }

    if(!values.description){
      errors.description = "Description required"
    }

    return errors;
  }

  useEffect(() => {
    if( Object.keys(formErrors).length === 0 && isSubmit ){
      console.log("Submitted")
    }
  }, [formErrors]);

  return (
    <div>
      <div className="main_box_testimonialsadmin">
        <div className="main_container_testimonialsadmin">
          <div className="top_section_testimonialsadmin">
            <h2>New Testimonial</h2>
          </div>
          <div className="mid_section_testimonialsadmin">
            <form>
              <div className="form_container_testimonialsadmin">
                <div className="form_box_testimonialsadmin">
                  <label>Name*</label>
                  <input type="text" name="name" value="" onChange={handleForm} placeholder="Enter Testimonial Name" />
                  <p className="errors_msg_testimonialsadmin">{formErrors.name}</p>
                </div>

                <div className="form_box_testimonialsadmin">
                  <label>Image Link*</label>
                  <input type="url" name="imagelink" value="" onChange={handleForm} placeholder="Enter Image Link" />
                  <p className="errors_msg_testimonialsadmin">{formErrors.imagelink}</p>
                </div>
                
                <div className="form_box_testimonialsadmin">
                  <label>College Name*</label>
                  <input type="text" name="college" value="" onChange={handleForm} placeholder="Enter College Name" />
                  <p className="errors_msg_testimonialsadmin">{formErrors.college}</p>
                </div>

                <div className="form_box_testimonialsadmin">
                  <label>Description*</label>
                  <textarea rows={5} name="description" value="" onChange={handleForm} placeholder="Enter Description ..."></textarea>
                  <p className="errors_msg_testimonialsadmin">{formErrors.description}</p>
                </div>
              </div>
            </form>
          </div>
          <div className="bottom_section_testimonialsadmin">
            <button
              onClick={submitForm}
              className="btn_primary_testimonialsadmin"
            >
              Post Testimonial
            </button>
          </div>
        </div>

        <div className="main_container_testimonialsadmin">
          <div className="top_section_testimonialsadmin">
            <h2>Previous Testimonials</h2>
          </div>

          <div className="testimonial_container_testimonialsadmin">
            <div className="testimonial_box_testimonialsadmin">
              <div className="testimonial_box_upper_section_testimonialsadmin">
                <img src={Student1} alt="testimonial" />
                <div className="testimonial_details_testimonialsadmin">
                  <h2>Gautam hopra</h2>
                  <h3>BVCOE DELHI</h3>
                  <p>Though the journey from applying for an internship to getting selected is quite exhausting but the Pregrad Team made the whole process smooth by always being available for any issues and proper guidance.</p>
                </div>
              </div>
              <div className="testimonial_box_bottom_section_testimonialsadmin">
                <button className="btn_delete_testimonialsadmin">
                  <FaTrashAlt classNmae="delete_icon_testimonialsadmin" />
                  Delete
                </button>
              </div>
            </div>

            <div className="testimonial_box_testimonialsadmin">
              <div className="testimonial_box_upper_section_testimonialsadmin">
                <img src={Student1} alt="testimonial" />
                <div className="testimonial_details_testimonialsadmin">
                  <h2>Gautam hopra</h2>
                  <h3>BVCOE DELHI</h3>
                  <p>Though the journey from applying for an internship to getting selected is quite exhausting but the Pregrad Team made the whole process smooth by always being available for any issues and proper guidance.</p>
                </div>
              </div>
              <div className="testimonial_box_bottom_section_testimonialsadmin">
                <button className="btn_delete_testimonialsadmin">
                  <FaTrashAlt classNmae="delete_icon_testimonialsadmin" />
                  Delete
                </button>
              </div>
            </div>

            <div className="testimonial_box_testimonialsadmin">
              <div className="testimonial_box_upper_section_testimonialsadmin">
                <img src={Student1} alt="testimonial" />
                <div className="testimonial_details_testimonialsadmin">
                  <h2>Gautam hopra</h2>
                  <h3>BVCOE DELHI</h3>
                  <p>Though the journey from applying for an internship to getting selected is quite exhausting but the Pregrad Team made the whole process smooth by always being available for any issues and proper guidance.</p>
                </div>
              </div>
              <div className="testimonial_box_bottom_section_testimonialsadmin">
                <button className="btn_delete_testimonialsadmin">
                  <FaTrashAlt classNmae="delete_icon_testimonialsadmin" />
                  Delete
                </button>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsAdmin;
