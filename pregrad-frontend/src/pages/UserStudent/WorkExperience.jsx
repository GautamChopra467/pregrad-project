import React,{useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import {useCookies} from 'react-cookie'

const WorkExperience = () => {

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
        navigate('/student/workexperience')
      }
    }
  } 
  verifyUser()
  
},[cookies,removeCookie,navigate])

  return (
    <div>
      Work Experience
    </div>
  )
}

export default WorkExperience
