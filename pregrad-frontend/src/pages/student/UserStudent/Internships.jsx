import React,{useEffect, useState} from 'react';
import "../../../components/student/css/UserStudent/InternshipsStyles.css";
import HeaderAuth from "../../../components/student/jsx/HeaderAuth";
import { BiHeading } from 'react-icons/bi';
import { useNavigate,useParams } from "react-router-dom";
import axios from 'axios'
import {useCookies} from 'react-cookie'



const Internships = () => {

  const navigate = useNavigate()
   const {id} = useParams()

  const [cookies,setCookie,removeCookie] = useCookies([]);

  const [currentPage, setCurrentPage] = useState("new-internships");

useEffect(()=>{
  const verifyUser = async()=>{
    if(!cookies.jwt){
      
      navigate('/login')
    }else{
      const {data} = await axios.post(`http://localhost:8000/student`,{},{withCredentials:true}) 
      if(data.id !== id || data.status !== true){
        removeCookie("jwt")
        navigate('/login')
      }else{
       
        navigate(`/student/${id}/internships`)
      }
    }
  }
  verifyUser()
},[cookies,removeCookie,navigate])

  return (
    <div>
      <div className='sub_header_internships'>
        <h5>Internships</h5>
      </div>
      <div className='current_page_section_internships'>
        <div onClick={() => setCurrentPage("new-internships")}  className={currentPage === "new-internships" ? 'left_current_section_internships active_internships' : 'left_current_section_internships'}>
          <p>New Internships</p>
        </div>
        <div className='line_internships'></div>
        <div onClick={() => setCurrentPage("applied")} className={currentPage === "applied" ? 'right_current_section_internships active_internships' : 'right_current_section_internships'}>
          <p>Applied</p>
        </div>
      </div>
      <div className='main_container_internships'>
        {currentPage === "new-internships" && (
          <BiHeading />
        )}

        {currentPage === "applied" && (
          <HeaderAuth />
        )}
      </div>
      
    </div>
  )
}

export default Internships;
