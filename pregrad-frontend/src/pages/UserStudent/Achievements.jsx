import React, { useState, useEffect } from 'react';
import "../../components/css/UserStudent/AchievementsStyles.css";
import { FiFileText } from "react-icons/fi";
import { BiEditAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import {useCookies} from 'react-cookie';
import { MdOutlineDelete } from "react-icons/md";

const Achievements = () => {
  
  const navigate = useNavigate()

  const [cookies,setCookie,removeCookie] = useCookies([])
  
  
  const [isContent, setIsContent] = useState(true);
  const [isModal, setIsModal] = useState(false);

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const [achievements, setAchievements] = useState({
    title: "",
    certificate: ""
  });

  const handleForm = (e) => {
    const {name, value} = e.target;
    setAchievements({
      ...achievements,
      [name]: value
    })
    console.log(name, value)
  }

  const submitForm = (e) => {
    e.preventDefault();
    setFormErrors(validate(achievements));
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
       
          navigate('/student/achievements')
        }
      }
    }
    verifyUser()

    if( Object.keys(formErrors).length === 0 && isSubmit ){
     const {data} = axios.post("http://localhost:8000/student/achievements",{
      ...achievements
     })
    }else {
      // console.log("alert")
    }
  }, [formErrors,cookies,removeCookie,navigate]);

  const validate = (values) => {
    const errors = {};

    if(!values.title){
      errors.title = "Name required";
    }else if(values.title.length < 3){
      errors.title = "Min 3 characters required";
    }

    if(!values.certificate){
      errors.certificate = "Certificate link required";
    }

    return errors;
  }

  return (
    <div>
      <div className='sub_header_achievements'>
        <h5>Achievments</h5>
      </div>

      <div className='main_container_achievements'>
      
          {!isContent ? (
            <div className='add_section1_achievements'>
              <div className='add_section1_logo_achievements'>
              <FiFileText size={30} />
              </div>
              <div className='add_section1_details_achievements'>
                <h2>Add Achievements/ Extracurricular Activity</h2>
                <p>Add your achievements of Hackathons, NGO services, Exam ranks, Clubs, etc.</p>
              </div>
              <button className='btn_light_achievements' onClick={() => setIsModal(!isModal)}>+ Add New</button>
            </div>
          ) : (
            <>
            <div className='add_section2_achievements'>
              <div className='add_section2_left_achievements'>
              <div className='add_section2_logo_achievements'>
                <FiFileText size={26} />
              </div>
              <div className='add_section2_details_achievements'>
                <h2>Add Achievements/ Extracurricular Activity</h2>
                <p>Add your achievements of Hackathons, NGO services, Exam ranks, Clubs, etc.</p>
              </div>
              </div>
              <button className='btn_light_achievements' onClick={() => setIsModal(!isModal)}>+ Add New</button>
            </div>

            <div className='content_container_achievements'>
              <div className='top_section_content_achievements'>
                <h4>Ambaram Store</h4>
                <div className='content_logo_container_achievements'>
                <div className='content_logo_achievements'>
                  <BiEditAlt size={22} color='#7840f2' />
                </div>
                <div className='content_logo_achievements'>
                  <MdOutlineDelete size={22} color='#ef233c' />
                </div>
                </div>
              </div>

              <div className='bottom_section_content_achievements'>
                <a href='you' alt="Link">Certificate Link</a>
              </div>
            </div>
            </>
          )}
        </div>

        {isModal && (
          <div className='modal_backgound_achievements'>
          <div className='modal_container_achievements'>
            <div className='modal_top_section_achievements'>
              <h2>Achievements</h2>
            </div>

            <div className='modal_mid_section_achievements'>
              <form>
                <div className="form_box_achievements">
                  <label>Title</label>
                  <input type="text" name="title" placeholder="Title of Achievement" value={achievements.title}  onChange={handleForm} />
                  <p className="errors_msg_achievements">{formErrors.title}</p>
                </div>

                <div className="form_box_achievements">
                  <label>Certificate Link</label>
                  <input type="url" name="certificate" placeholder="Certification Link" value={achievements.certificate}  onChange={handleForm} />
                  <p className="errors_msg_achievements">{formErrors.certificate}</p>
                </div>

                <div className='modal_bottom_section_achievements'>
                  <button className='btn_light_achievements' onClick={() => setIsModal(!isModal)}>Cancel</button>
                  <button type='submit' onClick={submitForm} className='btn_primary_achievements'>Save Details</button>
                </div>
              </form>
            </div>

            
          </div>
        </div>
        )}

    </div>
  )
}

export default Achievements
