import React,{useEffect} from 'react';
import { useNavigate,useParams } from "react-router-dom";
import axios from 'axios'
import {useCookies} from 'react-cookie'



const Internships = () => {

  const navigate = useNavigate()
   const {id} = useParams()

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
       
        navigate(`/student/${id}/internships`)
      }
    }
  }
  verifyUser()
},[cookies,removeCookie,navigate])

  return (
    <div>
      Internships
    </div>
  )
}

export default Internships;
