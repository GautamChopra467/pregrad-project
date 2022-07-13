import React,{useEffect} from 'react';
import "../../components/css/UserStudent/CertificationsStyles.css"
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import {useCookies} from 'react-cookie'
const Certifications = () => {

  const navigate = useNavigate()

  const [cookies,setCookie,removeCookie] = useCookies([])

useEffect(()=>{
  const verifyUser = async()=>{
    if(!cookies.jwt){
    
      navigate('/login')
    }else{
      const {data} = await axios.post(`http://localhost:8000/student`,{},{withCredentials:true}) 
      if(!data.status){
        removeCookie("jwt")
        navigate('/login')
      }else{
      
        navigate('/student/certifications')
      }
    }
  }
  verifyUser()
},[cookies,removeCookie,navigate])


  return (
    <div style={{ width: "100%"}}>
      <div className='sub_header_certifications'>
        <h5>Certifications</h5>
      </div>

      <div className='section_certifications'>
        
      </div>
    </div>
  )
}

export default Certifications;
