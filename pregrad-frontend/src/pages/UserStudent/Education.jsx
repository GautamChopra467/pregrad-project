import React, { useState, useEffect } from 'react';
import "../../components/css/UserStudent/EducationStyles.css";
import { FiFileText } from "react-icons/fi";
import { BiEditAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import {useCookies} from 'react-cookie'


const Education = () => {

  const navigate = useNavigate()

  const [cookies,setCookie,removeCookie] = useCookies([])

  const [isContent, setIsContent] = useState(false);
  const [isModal, setIsModal] = useState(false);

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const [user, setUser] = useState({
    collegename: "",
    field: "",
    degree: "",
    startyear: "",
    endyear: ""
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
    const verifyUser = async()=>{
      if(!cookies.jwt){
      
        navigate('/login')
      }else{
        const {data} = await axios.post(`http://localhost:8000/student`,{},{withCredentials:true}) 
        if(!data.status){
          removeCookie("jwt")
          navigate('/login')
        }else{
       
          navigate('/student/education')
        }
      }
    }
    verifyUser()
    if( Object.keys(formErrors).length === 0 && isSubmit ){
      // console.log("submitted");
    }else {
      // console.log("alert")
    }
  }, [formErrors,cookies,removeCookie,navigate]);

  const validate = (values) => {
    const errors = {};

    if(!values.collegename){
      errors.collegename = "Name required";
    }

    if(!values.field){
      errors.field = "Field of study required";
    }

    if(!values.degree){
      errors.degree = "Degree required";
    }

    if(!values.startyear){
      errors.startyear = "Start year required";
    }

    if(!values.endyear){
      errors.endyear = "End year required";
    }

    return errors;
  }

  return (
    <div>
      <div className='sub_header_education'>
        <h5>Education</h5>
      </div>

      <div className='main_container_education'>
          {!isContent ? (
            <div className='add_section1_education'>
              <div className='add_section1_logo_education'>
              <FiFileText size={30} />
              </div>
              <div className='add_section1_details_education'>
                <h2>Add Education Details</h2>
                <p>Add your school / college information</p>
              </div>
              <button className='btn_light_education' onClick={() => setIsModal(!isModal)}>+ Add New</button>
            </div>
          ) : (
            <>
            <div className='add_section2_education'>
              <div className='add_section2_left_education'>
              <div className='add_section2_logo_education'>
                <FiFileText size={26} />
              </div>
              <div className='add_section2_details_education'>
                <h2>Add Education Details</h2>
                <p>Add your school / college information</p>
              </div>
              </div>
              <button className='btn_light_education' onClick={() => setIsModal(!isModal)}>+ Add New</button>
            </div>

            <div className='content_container_education'>
              <div className='top_section_content_education'>
                <h4>Ambaram Store</h4>
                <div className='content_logo_education'>
                  <BiEditAlt size={22} color='#7840f2' />
                </div>
              </div>

              <div className='bottom_section_content_education'>
                <a href='you' alt="Link">field Link</a>
              </div>
            </div>
            </>
          )}
        </div>

        {isModal && (
          <div className='modal_backgound_education'>
          <div className='modal_container_education'>
            <div className='modal_top_section_education'>
              <h2>Education Details</h2>
            </div>

            <div className='modal_mid_section_education'>
              <form>
                <div className="form_box_education">
                  <label>University / College Name</label>
                  <input type="text" name="collegename" placeholder="Enter college name" value={user.collegename}  onChange={handleForm} />
                  <p className="errors_msg_education">{formErrors.collegename}</p>
                </div>

                <div className="form_box_education">
                  <label>Field of Study</label>
                  <input type="text" name="field" placeholder="Enter your field" value={user.field}  onChange={handleForm} />
                  <p className="errors_msg_education">{formErrors.field}</p>
                </div>

                <div className="form_box_education">
                  <label>Degree</label>
                  <input type="text" name="degree" placeholder="Enter your degree" value={user.degree}  onChange={handleForm} />
                  <p className="errors_msg_education">{formErrors.degree}</p>
                </div>

                <div className="form_box_education">
                  <label>Start Year</label>
                  <input type="text" name="startyear" placeholder="Enter start year" value={user.startyear}  onChange={handleForm} />
                  <p className="errors_msg_education">{formErrors.startyear}</p>
                </div>

                <div className="form_box_education">
                  <label>End Year</label>
                  <input type="text" name="endyear" placeholder="Enter end year" value={user.endyear}  onChange={handleForm} />
                  <p className="errors_msg_education">{formErrors.endyear}</p>
                </div>

                <div className='modal_bottom_section_education'>
                  <button className='btn_light_education' onClick={() => setIsModal(!isModal)}>Cancel</button>
                  <button type='submit' onClick={submitForm} className='btn_primary_education'>Save Details</button>
                </div>
              </form>
            </div>

            
          </div>
        </div>
        )}

    </div>
  )
}

export default Education;
