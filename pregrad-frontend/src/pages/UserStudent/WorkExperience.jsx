import React, { useState, useEffect } from 'react';
import "../../components/css/UserStudent/WorkExperienceStyles.css";
import { FiFileText } from "react-icons/fi";
import { BiEditAlt } from "react-icons/bi";
import { MdOutlineDelete } from "react-icons/md"

const WorkExperience = () => {
  const [isContent, setIsContent] = useState(false);
  const [isModal, setIsModal] = useState(false);

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const [user, setUser] = useState({
    companyname: "",
    position: "",
    role: "",
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
    
    if(!values.role){
      errors.role = "Description of role required";
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
              <FiFileText size={30} className="add_section1_icon_workexperience" />
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
                <FiFileText size={26} className="add_section2_icon_workexperience" />
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
                <div className='content_logo_container_workexperience'>
                <div className='content_logo_workexperience'>
                  <BiEditAlt size={22} className="content_icon_workexperience" />
                </div>
                <div className='content_logo_workexperience'>
                  <MdOutlineDelete size={22} color='#ef233c' />
                </div>
                </div>
              </div>

              <div className='bottom_section_content_workexperience'>
                <h4>Full Stack Developer</h4>
                <h3>2 months</h3>
                <p>This calculator converts pixels to the CSS unit REM. The conversion is based on the default font-size of 16 pixel, but can be changed.

With the CSS rem unit you can define a size relative to the font-size of the HTML root tag.

The conversion works of course in both directions, just change the opposite input field.</p>
              </div>

              <div className='skills_content_workexperience'>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JS</li>
                </ul>
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
                  <label>Describe Your Role (in 70-100 words)</label>
                  <textarea type="text" name="role" placeholder="Enter your skills" value={user.role}  onChange={handleForm} />
                  <p className="errors_msg_workexperience">{formErrors.role}</p>
                </div>

                <div className="form_box_workexperience">
                  <label>Duration</label>
                  <input type="text" name="duration" placeholder="Enter duration" value={user.duration}  onChange={handleForm} />
                  <p className="errors_msg_workexperience">{formErrors.duration}</p>
                </div>

                <div className="form_box_workexperience">
                  <label>Company Website Link</label>
                  <input type="url" name="websitelink" placeholder="Enter website link" value={user.websitelink}  onChange={handleForm} />
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
