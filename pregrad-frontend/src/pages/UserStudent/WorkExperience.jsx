import React, { useState, useEffect } from 'react';
import "../../components/css/UserStudent/WorkExperienceStyles.css";
import { FiFileText } from "react-icons/fi";
import { BiEditAlt } from "react-icons/bi";

const WorkExperience = () => {
  const [isContent, setIsContent] = useState(true);
  const [isModal, setIsModal] = useState(false);

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const [user, setUser] = useState({
    companyname: "",
    position: "",
    duration: "",
    websitelink: "",
    skills: ""
  });

  const handleForm = (e) => {
    const {name, value} = e.target;
    setUser({
      ...user,
      [name]: value
    })
    console.log(name, value)
  }

  const submitForm = (e) => {
    e.preventDefault();
    setFormErrors(validate(user));
    setIsSubmit(true);
  }

  useEffect(() => {
    console.log(formErrors)
    if( Object.keys(formErrors).length === 0 && isSubmit ){
      console.log("submitted");
    }else {
      console.log("alert")
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};

    if(!values.companyname){
      errors.companyname = "Name required";
    }

    if(!values.position){
      errors.position = "Position of responsibility required";
    }

    if(!values.duration){
      errors.duration = "Duration required";
    }

    if(!values.websitelink){
      errors.websitelink = "Website Link required";
    }

    if(!values.skills){
      errors.skills = "Skills required";
    }

    return errors;
  }

  return (
    <div>
      <div className='sub_header_workexperience'>
        <h5>Work Experience</h5>
      </div>

      <div className='main_container_workexperience'>
        {console.log(window)}
          {!isContent ? (
            <div className='add_section1_workexperience'>
              <div className='add_section1_logo_workexperience'>
              <FiFileText size={30} />
              </div>
              <div className='add_section1_details_workexperience'>
                <h2>Add Work Experience Details</h2>
                <p>Add your school / college information</p>
              </div>
              <button className='btn_light_workexperience' onClick={() => setIsModal(!isModal)}>+ Add New</button>
            </div>
          ) : (
            <>
            <div className='add_section2_workexperience'>
              <div className='add_section2_left_workexperience'>
              <div className='add_section2_logo_workexperience'>
                <FiFileText size={26} />
              </div>
              <div className='add_section2_details_workexperience'>
                <h2>Add Work Experience Details</h2>
                <p>Add your school / college information</p>
              </div>
              </div>
              <button className='btn_light_workexperience' onClick={() => setIsModal(!isModal)}>+ Add New</button>
            </div>

            <div className='content_container_workexperience'>
              <div className='top_section_content_workexperience'>
                <h4>Google Engage</h4>
                <div className='content_logo_workexperience'>
                  <BiEditAlt size={22} color='#7840f2' />
                </div>
              </div>

              <div className='bottom_section_content_workexperience'>
                <h4>B.Tech, Computer Science Engineering</h4>
                <h3>2020 - 2024</h3>
              </div>
            </div>
            </>
          )}
        </div>

        {isModal && (
          <div className='modal_backgound_workexperience'>
          <div className='modal_container_workexperience'>
            <div className='modal_top_section_workexperience'>
              <h2>Work Experience Details</h2>
            </div>

            <div className='modal_mid_section_workexperience'>
              <form>
                <div className="form_box_workexperience">
                  <label>Company Name</label>
                  <input type="text" name="companyname" placeholder="Enter company name" value={user.companyname}  onChange={handleForm} />
                  <p className="errors_msg_workexperience">{formErrors.companyname}</p>
                </div>

                <div className="form_box_workexperience">
                  <label>Position Of Responsibility</label>
                  <input type="text" name="position" placeholder="Enter your position" value={user.position}  onChange={handleForm} />
                  <p className="errors_msg_workexperience">{formErrors.position}</p>
                </div>

                <div className="form_box_workexperience">
                  <label>Duration</label>
                  <input type="text" name="duration" placeholder="Enter duration" value={user.duration}  onChange={handleForm} />
                  <p className="errors_msg_workexperience">{formErrors.duration}</p>
                </div>

                <div className="form_box_workexperience">
                  <label>Company Website Link</label>
                  <input type="url" name="starear" placeholder="Enter website link" value={user.websitelink}  onChange={handleForm} />
                  <p className="errors_msg_workexperience">{formErrors.websitelink}</p>
                </div>

                <div className="form_box_workexperience">
                  <label>Skills Used</label>
                  <input type="text" name="skills" placeholder="Enter your skills" value={user.skills}  onChange={handleForm} />
                  <p className="errors_msg_workexperience">{formErrors.skills}</p>
                </div>

                <div className='modal_bottom_section_workexperience'>
                  <button className='btn_light_workexperience' onClick={() => setIsModal(!isModal)}>Cancel</button>
                  <button type='submit' onClick={submitForm} className='btn_primary_workexperience'>Save Details</button>
                </div>
              </form>
            </div>

            
          </div>
        </div>
        )}

    </div>
  )
}

export default WorkExperience;
