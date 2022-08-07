import React,{useState} from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "../../components/student/jsx/Sidebar";
import WorkExperience from "./UserStudent/WorkExperience";
import Education from "./UserStudent/Education";
import Internships from "./UserStudent/Internships";
import Projects from "./UserStudent/Projects";
import Achievements from "./UserStudent/Achievements";
import { useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom";
import axios from 'axios'
import {useCookies} from 'react-cookie'
import StudentProfile from "./UserStudent/StudentProfile";


const Student = ({theme, setTheme}) => {

  const navigate = useNavigate()

const {id} = useParams()

const [profilehealth,setprofileHealth] = useState("20")

  const [cookies,setCookie,removeCookie] = useCookies([])

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
        navigate(`/student/${id}`)
        const userHealthProfile = ()=>{
          axios.get(`http://localhost:8000/student/profilehealth/${id}`).then(({data})=>{
            setprofileHealth(data.profileHealth)
          })
        }
        userHealthProfile()
      }
    }
  }
  verifyUser()
},[profilehealth])

  return (
    <Sidebar  profileHealth={profilehealth} userid={id} theme={theme} setTheme={setTheme}>
      <Routes>
        <Route exact path="/internships" element={<Internships  />} />
        <Route exact path="/workexperience" element={<WorkExperience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/education" element={<Education />} />
        <Route path="/profile" element={<StudentProfile />} />
      </Routes>
    </Sidebar>
  );
};

export default Student;
