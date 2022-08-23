import React, { useState, useEffect } from 'react';
import "../../../components/student/css/UserStudent/EducationStyles.css";
import { FiFileText } from "react-icons/fi";
import { BiEditAlt } from "react-icons/bi";
import { useNavigate,useParams } from "react-router-dom";
import { MdOutlineDelete } from 'react-icons/md';
import axios from 'axios'
import {useCookies} from 'react-cookie'


const Education = () => {

  const navigate = useNavigate()

   const {id} = useParams()

  const [cookies,setCookie,removeCookie] = useCookies([])

  const [isContent, setIsContent] = useState(true);
  const [isModal, setIsModal] = useState(false);

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const [editeducation,setEditEducation] = useState({})

  const [editform,seteditform] = useState("")

  const [education, setEducation] = useState({
    university: "",
    field: "",
    degree: "",
    start: "",
    end: "",
    id:id
  });

  const [studentedu,setStudentedu] = useState([])

  const updateForm = (e)=>{
    const {name, value} = e.target;
    setEditEducation({
      ...editeducation,
      [name]: value
    })
  }


  const handleForm = (e) => {
    const {name, value} = e.target;
    setEducation({
      ...education,
      [name]: value
    })
    
  }

  const submitForm = (e) => {
    e.preventDefault();
    setFormErrors(validate(education));
    setIsSubmit(true);
  }

  const getEducation = async()=>{
    
        const {data} = await axios.get(`http://localhost:8000/student/geteducation/${id}`)
          if(data.message === "true")
          {  
           setStudentedu(data.education)
          }

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
       
          navigate(`/student/${id}/education`)
          getEducation()
        }
      }
    }
    verifyUser()
    if( Object.keys(formErrors).length === 0 && isSubmit ){
     axios.post(`http://localhost:8000/student/education`,{
       ...education
     }).then((res)=>{
       if(res.data.message === "true")
       {
        setIsModal(!isModal);
        getEducation()
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

    if(!values.university){
      errors.university = "Name required";
    }

    if(!values.field){
      errors.field = "Field of study required";
    }

    if(!values.degree){
      errors.degree = "Degree required";
    }

    if(!values.start){
      errors.start = "Start year required";
    }

    if(!values.end){
      errors.end = "End year required";
    }

    return errors;
  }

const deleteEducation = async(u_id,e_id)=>{

  const {data} = await axios.delete(`http://localhost:8000/student/deleteeducation/${u_id}/${e_id}`)
 
  if(data.message === "true")
  {
    getEducation()
  }
 

}

const UpdatedEducation = async(e,u_id)=>{
  e.preventDefault();
   
  const {data} = await axios.put(`http://localhost:8000/student/updatededucation/${u_id}/${editeducation._id}`,{
    ...editeducation
  })
  setStudentedu(data.education)
   setIsModal(!isModal)
   getEducation()
}

const editEducation = async(u_id,e_id)=>{
  setIsModal(!isModal) 
  seteditform("edit")
  const {data} = await axios.get(`http://localhost:8000/student/updateeducation/${u_id}/${e_id}`)
  setEditEducation(data)

}

const setStateValue = ()=>{
  setIsModal(!isModal)
  seteditform("addnew")

}

const Cancel = ()=>{
  // Object.keys(formErrors).forEach(key=>{
  //   formErrors[key] = "";
  // })
  setIsModal(!isModal)
  setIsSubmit(false)
  setFormErrors({}) 
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
              <FiFileText size={30} className="add_section1_icon_education" />
              </div>
              <div className='add_section1_details_education'>
                <h2>Add Education Details</h2>
                <p>Add your school / college information</p>
              </div>
              <button className='btn_light_education' onClick={() => setStateValue()}>+ Add New</button>
            </div>
          ) : (
            <>
            <div className='add_section2_education'>
              <div className='add_section2_left_education'>
              <div className='add_section2_logo_education'>
                <FiFileText size={26} className="add_section2_icon_education" />
              </div>
              <div className='add_section2_details_education'>
                <h2>Add Education Details</h2>
                <p>Add your school / college information</p>
              </div>
              </div>
              <button className='btn_light_education' onClick={() => setStateValue()}>+ Add New</button>
            </div>

           { 
           
           studentedu.map(edu=>(
            <div className='content_container_education' key={edu._id}>
              <div className='top_section_content_education'>
                <h4>{edu.university}</h4>
                <div className='content_logo_container_education'>
                <div className='content_logo_education' onClick={()=>editEducation(id,edu._id)}>
                  <BiEditAlt size={22} className="content_icon_education" />
                </div>
                <div className='content_logo_education'>
                  <MdOutlineDelete size={22} color='#ef233c' onClick={()=>deleteEducation(id,edu._id)}/>
                </div>
                </div>
              </div>

              <div className='bottom_section_content_education'>
              <h4>{edu.degree}, {edu.field}</h4>
                <h3>{edu.start} - {edu.end}</h3>
              </div>
            </div>
           ))
            }
            </>
          )}
        </div>

        {isModal && (
          <div className='modal_backgound_education'>
          <div className='modal_container_education'>
            <div className='modal_top_section_education'>
              <h2>Education Details</h2>
            <p className="errors_msg_education">{formErrors.others}</p>
            </div>
            {
   editform === "addnew"?(
            <div className='modal_mid_section_education'>
              <form>
                <div className="form_box_education">
                  <label>University / College Name</label>
                  <input type="text" name="university" placeholder="Enter college name"   onChange={handleForm} />
                  <p className="errors_msg_education">{formErrors.university}</p>
                </div>

                <div className="form_box_education">
                  <label>Field of Study</label>
                  <input type="text" name="field" placeholder="Enter your field"   onChange={handleForm} />
                  <p className="errors_msg_education">{formErrors.field}</p>
                </div>

                <div className="form_box_education">
                  <label>Degree</label>
                  <input type="text" name="degree" placeholder="Enter your degree"   onChange={handleForm} />
                  <p className="errors_msg_education">{formErrors.degree}</p>
                </div>

                <div className="form_box_education">
                  <label>Start Year</label>
                  <input type="text" name="start" placeholder="Enter start year"  onChange={handleForm} />
                  <p className="errors_msg_education">{formErrors.start}</p>
                </div>

                <div className="form_box_education">
                  <label>End Year</label>
                  <input type="text" name="end" placeholder="Enter end year"  onChange={handleForm} />
                  <p className="errors_msg_education">{formErrors.end}</p>
                </div>

                <div className='modal_bottom_section_education'>
                  <button className='btn_light_education' onClick={Cancel}>Cancel</button>
                  <button type='submit' onClick={submitForm} className='btn_primary_education'>Save Details</button>
                </div>
              </form>
            </div>
            ):(
              <div className='modal_mid_section_education'>
              <form>
                <div className="form_box_education">
                  <label>University / College Name</label>
                  <input type="text" name="university" placeholder="Enter college name" value={editeducation.university || ''}  onChange={updateForm} />
                  <p className="errors_msg_education">{formErrors.university}</p>
                </div>
              <div className="form_box_education">
              <label>Field of Study</label>
              <input type="text" name="field" placeholder="Enter your field" value={editeducation.field || ''}  onChange={updateForm} />
              <p className="errors_msg_education">{formErrors.field}</p>
            </div>

            <div className="form_box_education">
              <label>Degree</label>
              <input type="text" name="degree" placeholder="Enter your degree" value={editeducation.degree || ''}  onChange={updateForm} />
              <p className="errors_msg_education">{formErrors.degree}</p>
            </div>

            <div className="form_box_education">
              <label>Start Year</label>
              <input type="text" name="start" placeholder="Enter start year" value={editeducation.start || ''}  onChange={updateForm} />
              <p className="errors_msg_education">{formErrors.start}</p>
            </div>

            <div className="form_box_education">
              <label>End Year</label>
              <input type="text" name="end" placeholder="Enter end year" value={editeducation.end || ''}  onChange={updateForm} />
              <p className="errors_msg_education">{formErrors.end}</p>
            </div>

            <div className='modal_bottom_section_education'>
              <button className='btn_light_education' onClick={Cancel}>Cancel</button>
              <button type='submit' onClick={(e)=>UpdatedEducation(e,id)}  className='btn_primary_education'>Save Details</button>
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

export default Education;
