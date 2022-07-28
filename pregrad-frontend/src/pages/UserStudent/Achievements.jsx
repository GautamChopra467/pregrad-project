import React, { useState, useEffect } from 'react';
import "../../components/css/UserStudent/AchievementsStyles.css";
import { FiFileText } from "react-icons/fi";
import { BiEditAlt } from "react-icons/bi";
import { useNavigate,useParams } from "react-router-dom";
import axios from 'axios'
import {useCookies} from 'react-cookie';
import { MdOutlineDelete } from "react-icons/md";

const Achievements = () => {
  
  const navigate = useNavigate()

  const {id} = useParams()


  const [cookies,setCookie,removeCookie] = useCookies([])
  
  const [editform,seteditform] = useState("")
  
  const [isContent, setIsContent] = useState(true);
  const [isModal, setIsModal] = useState(false);

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

const [editachievement,setEditAchievement] = useState({})


  const [achievements, setAchievements] = useState({
    title: "",
    certificate: "",
    id:id
  });

const [studentachi,setStudentachi] = useState([])

  const handleForm = (e) => {
    const {name, value} = e.target;
    setAchievements({
      ...achievements,
      [name]: value
    })
  }

  const updateForm = (e)=>{
    const {name, value} = e.target;
    setEditAchievement({
      ...editachievement,
      [name]: value
    })
  }

  const submitForm = (e) => {
    e.preventDefault();
    setFormErrors(validate(achievements));
    setIsSubmit(true);
    setIsModal(!isModal) 
  }

  const getAchievements = ()=>{
    axios.get(`http://localhost:8000/student/getachievements/${id}`).then((res)=>{
      if(res.data.message === "true"){
      setStudentachi(res.data.achievements)
      }
    }).catch((err)=>{
      console.log(err)
    })

  }

  useEffect(() => {

    const verifyUser = async()=>{
      if(!cookies.jwt){
        navigate('/login')
      }else{
        const {data} = await axios.post(`http://localhost:8000/student`,{},{withCredentials:true}) 
        if(data.id !== id || data.status !== true){
          removeCookie("jwt")
          navigate('/login')
        }else{
          navigate(`/student/${id}/achievements`)
          getAchievements()
        }
      }
    }
    verifyUser()
   
    if( Object.keys(formErrors).length === 0 && isSubmit ){
      axios.post("http://localhost:8000/student/achievements",{
       ...achievements
      }).then(res=>{
        if(res.data.message === "true"){
          // setIsModal(!isModal) 
          getAchievements()
        }
      })
     }else { 
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

 const deleteAchievement = async(u_id,a_id)=>{
  
 const {data} = await axios.delete(`http://localhost:8000/student/deleteachievement/${u_id}/${a_id}`)
 
 if(data.message === "true")
 {
  getAchievements()
 }

 }

const editAchievement = async(u_id,a_id)=>{
  setIsModal(!isModal) 
  seteditform("edit")
  const {data} = await axios.get(`http://localhost:8000/student/updateachievement/${u_id}/${a_id}`)
  setEditAchievement(data)
}

  const setStateValue = ()=>{
    setIsModal(!isModal)
    seteditform("addnew")

  }


  const UpdatedAchievement = async(e,u_id)=>{
    e.preventDefault();
   
    const {data} = await axios.put(`http://localhost:8000/student/updatedachievement/${u_id}/${editachievement._id}`,{
      ...editachievement
    })
     setStudentachi(data.achievements)
     setIsModal(!isModal)
     getAchievements()
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
              <FiFileText size={30} className="add_section1_icon_achievements" />
              </div>
              <div className='add_section1_details_achievements'>
                <h2>Add Achievements/ Extracurricular Activity</h2>
                <p>Add your achievements of Hackathons, NGO services, Exam ranks, Clubs, etc.</p>
              </div>
              <button className='btn_light_achievements' onClick={() => setStateValue()}>+ Add New</button>
            </div>
          ) : (
            <>
            <div className='add_section2_achievements'>
              <div className='add_section2_left_achievements'>
              <div className='add_section2_logo_achievements'>
                <FiFileText size={26} className="add_section2_icon_achievements" />
              </div>
              <div className='add_section2_details_achievements'>
                <h2>Add Achievements/ Extracurricular Activity</h2>
                <p>Add your achievements of Hackathons, NGO services, Exam ranks, Clubs, etc.</p>
              </div>
              </div>
              <button className='btn_light_achievements' onClick={() => setStateValue()}>+ Add New</button>
            </div>
            {
              studentachi.map(stu=>(
                <div className='content_container_achievements' key={stu._id}>
                <div className='top_section_content_achievements'>
                  <h4>{stu.title}</h4>
                  <div className='content_logo_container_achievements'  >
                  <div className='content_logo_achievements' onClick={()=>editAchievement(id,stu._id)}>
                    <BiEditAlt size={22} className="content_icon_achievements" />
                  </div>
                  <div className='content_logo_achievements' onClick={()=>deleteAchievement(id,stu._id)}>
                    <MdOutlineDelete size={22} color='#ef233c' />
                  </div>
                  </div>
                </div>
  
                <div className='bottom_section_content_achievements'>
                  <a href={stu.certificate} alt="Link">Certificate Link</a>
                </div>
              </div>
              ))
              
            }
            </>
          )}
        </div>

        {isModal && (
          <div className='modal_backgound_achievements'>
          <div className='modal_container_achievements'>
            <div className='modal_top_section_achievements'>
              <h2>Achievements</h2>
            </div>
{ editform === "addnew"?(
  
            <div className='modal_mid_section_achievements'>
              <form>
                <div className="form_box_achievements">
                  <label>Title</label>
                  <input type="text" name="title" placeholder="Title of Achievement" onChange={handleForm} />
                  <p className="errors_msg_achievements">{formErrors.title}</p>
                </div>

                <div className="form_box_achievements">
                  <label>Certificate Link</label>
                  <input type="url" name="certificate" placeholder="Certification Link"  onChange={handleForm} />
                  <p className="errors_msg_achievements">{formErrors.certificate}</p>
                </div>

                <div className='modal_bottom_section_achievements'>
                  <button className='btn_light_achievements' onClick={() => setIsModal(!isModal)}>Cancel</button>
                  <button type='submit' onClick={submitForm} className='btn_primary_achievements'>Save Details</button>
                </div>
              </form>
            </div>
 

):(
<div className='modal_mid_section_achievements'>
<form>
  <div className="form_box_achievements">
    <label>Title</label>
    <input type="text" name="title" placeholder="Title of Achievement" value={editachievement.title || ''}  onChange={updateForm} />
    <p className="errors_msg_achievements">{formErrors.title}</p>
  </div>

  <div className="form_box_achievements">
    <label>Certificate Link</label>
    <input type="url" name="certificate" placeholder="Certification Link" value={editachievement.certificate || ''}  onChange={updateForm} />
    <p className="errors_msg_achievements">{formErrors.certificate}</p>
  </div>

  <div className='modal_bottom_section_achievements'>
    <button className='btn_light_achievements' onClick={() => setIsModal(!isModal)}>Cancel</button>
    <button type='submit' onClick={(e)=>UpdatedAchievement(e,id)} className='btn_primary_achievements'>Save Details</button>
  </div>
</form>
</div>


)
}            
          </div>
        </div>
        )}

    </div>
  )
}

export default Achievements
