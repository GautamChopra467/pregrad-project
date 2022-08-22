import React, { useState, useEffect } from 'react';
import "../../../components/student/css/UserStudent/WorkExperienceStyles.css";
import { FiFileText } from "react-icons/fi";
import { BiEditAlt } from "react-icons/bi";
import { MdOutlineDelete } from "react-icons/md"
import { useNavigate,useParams } from "react-router-dom";
import axios from 'axios'
import {useCookies} from 'react-cookie'
const WorkExperience = () => {

  const navigate = useNavigate()
   const {id} = useParams()
  const [cookies,setCookie,removeCookie] = useCookies([])

  const [editform,seteditform] = useState("")

  const [isContent, setIsContent] = useState(true);
  const [isModal, setIsModal] = useState(false);
  const [isModalDelete, setIsModalDelete] = useState(false);

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const [editworkexperience,setEditWorkExperience] = useState({})

  const [studentwork,setStudentwork] = useState([])

  const [workexperience, setWorkExperience] = useState({
    companyname: "",
    position: "",
    role: "",
    duration: "",
    websitelink: "",
    skills: "",
    id:id
  });

  const handleForm = (e) => {
    const {name, value} = e.target;
    setWorkExperience({
      ...workexperience,
      [name]: value
    })
  }

  const updateForm = (e)=>{
    const {name, value} = e.target;
    setEditWorkExperience({
      ...editworkexperience,
      [name]: value
    })
  }

  const submitForm = (e) => {
    e.preventDefault();
    setFormErrors(validate(workexperience));
    setIsSubmit(true);
    
  }

  const getWorkExperience = ()=>{
    axios.get(`http://localhost:8000/student/getworkexperience/${id}`).then((res)=>{
      if(res.data.message === "true"){  
    setStudentwork(res.data.workexperience)
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
         
          navigate(`/student/${id}/workexperience`)
          getWorkExperience()
        }
      }
    }
    verifyUser()
    if( Object.keys(formErrors).length === 0 && isSubmit ){
     axios.post(`http://localhost:8000/student/workexperience`,{
      ...workexperience
     }).then((res)=>{
      if(res.data.message === "true")
      {
        setIsModal(!isModal)
        getWorkExperience()
      }else if(res.data.message === "You cannot add duplicate information"){
        setFormErrors(validate(res.data.message));
       }
     })
    }
  }, [formErrors,cookies,removeCookie,navigate]);

  const validate = (values) => {
    const errors = {};

    if(values == "You cannot add duplicate information"){
      errors.others = "You cannot add duplicate information";
      return errors
    }

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

  const setStateValue = ()=>{
    setIsModal(!isModal)
    seteditform("addnew")

  }

const editWorkExperience = async(u_id,w_id)=>{
  setIsModal(!isModal) 
  seteditform("edit")
  const {data} = await axios.get(`http://localhost:8000/student/updateworkexperience/${u_id}/${w_id}`)
  setEditWorkExperience(data)
}
 
const deleteWorkExperience = async(u_id,w_id)=>{
  const {data} = await axios.delete(`http://localhost:8000/student/deleteworkexperience/${u_id}/${w_id}`)
 
  if(data.message === "true")
  {
   getWorkExperience()
  }
}

const UpdatedWorExperience = async(e,u_id)=>{
  e.preventDefault();
   
  const {data} = await axios.put(`http://localhost:8000/student/updatedworkexperience/${u_id}/${editworkexperience._id}`,{
    ...editworkexperience
  })
  setStudentwork(data.workexperience)
   setIsModal(!isModal)
   getWorkExperience()
}

const Cancel = ()=>{
  // Object.keys(formErrors).forEach(key=>{
  //   formErrors[key] = "";
  // })
  setIsModal(!isModal) 
}

  return (
    <div>
      <div className='sub_header_workexperience'>
        <h5>Work Experience</h5>
      </div>

      <div className='main_container_workexperience'>
          {!isContent ? (
            <div className='add_section1_workexperience'>
              <div className='add_section1_logo_workexperience'>
              <FiFileText size={30} className="add_section1_icon_workexperience" />
              </div>
              <div className='add_section1_details_workexperience'>
                <h2>Add Work Experience Details</h2>
                <p>Add your school / college information</p>
              </div>
              <button className='btn_light_workexperience' onClick={() => setStateValue()}>+ Add New</button>
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
              <button className='btn_light_workexperience' onClick={() => setStateValue()}>+ Add New</button>
            </div>
{
  studentwork.map(work=>(
    <div className='content_container_workexperience' key={work._id}>
              <div className='top_section_content_workexperience'>
                <h4>{work.companyname}</h4>
                <div className='content_logo_container_workexperience'>
                <div className='content_logo_workexperience' onClick={()=>editWorkExperience(id,work._id)}>
                  <BiEditAlt size={22} className="content_icon_workexperience" />
                </div>
                <div className='content_logo_workexperience' onClick={()=>setIsModalDelete(!isModalDelete)}>
                  <MdOutlineDelete size={22} color='#ef233c' />
                </div>
                </div>
              </div>

              <div className='bottom_section_content_workexperience'>
                <h4>{work.position}</h4>
                <h3>{work.duration}</h3>
                <p>{work.role}</p>
                <a href={work.websitelink}>Website Link</a>
              </div>

              <div className='skills_content_workexperience'>
                <ul>
                  <li>{work.skills}</li>
                </ul>
              </div>

              {/* {
                  isModalDelete && (
                    <div className='modal2_background_workexperience'>
                      {console.log("hello")}
                      <div className='modal2_box_workexperience'>
                        <h3>Are you sure you want to delete this Education ?</h3>
                        <div className='modal2_button_container_workexperience'>
                          <button className='btn_light_workexperience' onClick={() => setIsModalDelete(!isModalDelete)}>Cancel</button>
                          <button className='btn_cancel_workexperience'>Delete</button>
                        </div>
                      </div>
                    </div>
                  )
                } */}
            </div>
  ))
            }
            </>
          )}
        </div>

        {isModal && (
          <div className='modal_backgound_workexperience'>
          <div className='modal_container_workexperience'>
            <div className='modal_top_section_workexperience'>
              <h2>Work Experience Details</h2>
              <p className="errors_msg_workexperience">{formErrors.others}</p>
            </div>
{
  editform === "addnew"?(
            <div className='modal_mid_section_workexperience'>
              <form>
                <div className="form_box_workexperience">
                  <label>Company Name</label>
                  <input type="text" name="companyname" placeholder="Enter company name" onChange={handleForm} />
                  <p className="errors_msg_workexperience">{formErrors.companyname}</p>
                </div>

                <div className="form_box_workexperience">
                  <label>Position Of Responsibility</label>
                  <input type="text" name="position" placeholder="Enter your position"   onChange={handleForm} />
                  <p className="errors_msg_workexperience">{formErrors.position}</p>
                </div>

                <div className="form_box_workexperience">
                  <label>Describe Your Role (in 70-100 words)</label>
                  <textarea type="text" name="role" placeholder="Enter your skills" onChange={handleForm} />
                  <p className="errors_msg_workexperience">{formErrors.role}</p>
                </div>

                <div className="form_box_workexperience">
                  <label>Duration</label>
                  <input type="text" name="duration" placeholder="Enter duration" onChange={handleForm} />
                  <p className="errors_msg_workexperience">{formErrors.duration}</p>
                </div>

                <div className="form_box_workexperience">
                  <label>Company Website Link</label>
                  <input type="url" name="websitelink" placeholder="Enter website link"   onChange={handleForm} />
                  <p className="errors_msg_workexperience">{formErrors.websitelink}</p>
                </div>

                <div className="form_box_workexperience">
                  <label>Skills Used</label>
                  <input type="text" name="skills" placeholder="Enter your skills"   onChange={handleForm} />
                  <p className="errors_msg_workexperience">{formErrors.skills}</p>
                </div>

                <div className='modal_bottom_section_workexperience'>
                  <button className='btn_light_workexperience' onClick={Cancel}>Cancel</button>
                  <button type='submit' onClick={submitForm} className='btn_primary_workexperience'>Save Details</button>
                </div>
              </form>
            </div>
            ):(
              <div className='modal_mid_section_workexperience'>
              <form>
                <div className="form_box_workexperience">
                  <label>Company Name</label>
                  <input type="text" name="companyname" placeholder="Enter company name" value={editworkexperience.companyname || ''}  onChange={updateForm} />
                  <p className="errors_msg_workexperience">{formErrors.companyname}</p>
                </div>

                <div className="form_box_workexperience">
                  <label>Position Of Responsibility</label>
                  <input type="text" name="position" placeholder="Enter your position" value={editworkexperience.position || ''}  onChange={updateForm} />
                  <p className="errors_msg_workexperience">{formErrors.position}</p>
                </div>

                <div className="form_box_workexperience">
                  <label>Describe Your Role (in 70-100 words)</label>
                  <textarea type="text" name="role" placeholder="Enter your skills" value={editworkexperience.role || ''}  onChange={updateForm} />
                  <p className="errors_msg_workexperience">{formErrors.role}</p>
                </div>

                <div className="form_box_workexperience">
                  <label>Duration</label>
                  <input type="text" name="duration" placeholder="Enter duration" value={editworkexperience.duration || ''}  onChange={updateForm} />
                  <p className="errors_msg_workexperience">{formErrors.duration}</p>
                </div>

                <div className="form_box_workexperience">
                  <label>Company Website Link</label>
                  <input type="url" name="websitelink" placeholder="Enter website link" value={editworkexperience.websitelink || ''}  onChange={updateForm} />
                  <p className="errors_msg_workexperience">{formErrors.websitelink}</p>
                </div>

                <div className="form_box_workexperience">
                  <label>Skills Used</label>
                  <input type="text" name="skills" placeholder="Enter your skills" value={editworkexperience.skills || ''}  onChange={updateForm} />
                  <p className="errors_msg_workexperience">{formErrors.skills}</p>
                </div>

                <div className='modal_bottom_section_workexperience'>
                  <button className='btn_light_workexperience' onClick={Cancel}>Cancel</button>
                  <button type='submit' onClick={(e)=>UpdatedWorExperience(e,id)} className='btn_primary_workexperience'>Save Details</button>
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

export default WorkExperience;

// deleteWorkExperience(id,work._id)