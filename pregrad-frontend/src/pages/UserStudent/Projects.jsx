import React, { useState, useEffect } from 'react';
import "../../components/css/UserStudent/ProjectsStyles.css";
import { FiFileText } from "react-icons/fi";
import { BiEditAlt } from "react-icons/bi";
import { MdOutlineDelete } from "react-icons/md";

const Projects = () => {
  const [isContent, setIsContent] = useState(true);
  const [isModal, setIsModal] = useState(false);

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const [user, setUser] = useState({
    projecttitle: "",
    projectdescription: "",
    skills: "",
    projectlink: ""
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

    if(!values.projecttitle){
      errors.projecttitle = "Title required";
    }

    if(!values.projectdescription){
      errors.projectdescription = "Description required";
    }

    if(!values.skills){
      errors.skills = "Skills required";
    }

    if(!values.projectlink){
      errors.projectlink = "Project Link required";
    }

    return errors;
  }

  return (
    <div>
      <div className='sub_header_projects'>
        <h5>Projects</h5>
      </div>

      <div className='main_container_projects'>
          {!isContent ? (
            <div className='add_section1_projects'>
              <div className='add_section1_logo_projects'>
              <FiFileText size={30} />
              </div>
              <div className='add_section1_details_projects'>
                <h2>Add Project Details</h2>
                <p>Projects that you have worked on before</p>
              </div>
              <button className='btn_light_projects' onClick={() => setIsModal(!isModal)}>+ Add New</button>
            </div>
          ) : (
            <>
            <div className='add_section2_projects'>
              <div className='add_section2_left_projects'>
              <div className='add_section2_logo_projects'>
                <FiFileText size={26} />
              </div>
              <div className='add_section2_details_projects'>
                <h2>Add Project Details</h2>
                <p>Projects that you have worked on before</p>
              </div>
              </div>
              <button className='btn_light_projects' onClick={() => setIsModal(!isModal)}>+ Add New</button>
            </div>

            <div className='content_container_projects'>
              <div className='top_section_content_projects'>
                <h4>E-commerce Website</h4>
                <div className='content_logo_container_projects'>
                  <div className='content_logo_projects'>
                    <BiEditAlt size={22} color='#7840f2' />
                  </div>
                  <div className='content_logo_projects'>
                    <MdOutlineDelete size={22} color='#ef233c' />
                  </div>
                </div>
              </div>

              <div className='bottom_section_content_projects'>
                <p>"Ambaram" is web application that provides a compelling user experience has a large lists of products and provides lot of offers. Responsive in all devices.</p>
                <a href='yo'>Project Link</a>
              </div>

              <div className='skills_content_projects'>
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
          <div className='modal_backgound_projects'>
          <div className='modal_container_projects'>
            <div className='modal_top_section_projects'>
              <h2>Project Details</h2>
            </div>

            <div className='modal_mid_section_projects'>
              <form>
                <div className="form_box_projects">
                  <label>Project Title</label>
                  <input type="text" name="projecttitle" placeholder="Enter project title" value={user.projecttitle}  onChange={handleForm} />
                  <p className="errors_msg_projects">{formErrors.projecttitle}</p>
                </div>

                <div className="form_box_projects">
                  <label>Description of Project</label>
                  <input type="text" name="projectdescription" placeholder="Enter projectdescription" value={user.projectdescription}  onChange={handleForm} />
                  <p className="errors_msg_projects">{formErrors.projectdescription}</p>
                </div>

                <div className="form_box_projects">
                  <label>Skills Used</label>
                  <input type="text" name="skills" placeholder="Enter skills" value={user.skills}  onChange={handleForm} />
                  <p className="errors_msg_projects">{formErrors.skills}</p>
                </div>

                <div className="form_box_projects">
                  <label>Project Link</label>
                  <input type="url" name="projectlink" placeholder="Enter project link" value={user.projectlink}  onChange={handleForm} />
                  <p className="errors_msg_projects">{formErrors.projectlink}</p>
                </div>

                <div className='modal_bottom_section_projects'>
                  <button className='btn_light_projects' onClick={() => setIsModal(!isModal)}>Cancel</button>
                  <button type='submit' onClick={submitForm} className='btn_primary_projects'>Save Details</button>
                </div>
              </form>
            </div>

            
          </div>
        </div>
        )}

    </div>
  )
}

export default Projects;
