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
import {useSelector,useDispatch} from "react-redux" ;
import { fetchHealth } from "../../redux/reducers";

const Student = ({theme, setTheme}) => {
  const hp = useSelector(state => state.health) ;
  const dispatch = useDispatch() ;
  const navigate = useNavigate()

const {id} = useParams()

const  [user,setUser] = useState({})

// const [profilehealth,setprofileHealth] = useState(20)

  const [cookies, removeCookie] = useCookies([])

  const userHealthProfile = ()=>{
    dispatch(fetchHealth(id)) 
}

const getUserDetails = async()=>{
  const {data} = await axios.get(process.env.REACT_APP_SERVER_URL + `userDetails/${id}`) ;
  if(data.verified) 
  setUser(data)
  else if (data.message)
  navigate(`/*`) ;
}

useEffect(()=>{
  const verifyUser = async()=>{
    if(!cookies.jwt){
      navigate('/login') ;
    }else{
      const {data} = await axios.post(process.env.REACT_APP_SERVER_URL + `student`,{},{withCredentials:true}) 
      if(data.id !== id || data.status !== true){
        removeCookie("jwt") ;
        navigate('/login') ;
      }else{
         getUserDetails() ;
        userHealthProfile() ;
      }
    }
  }
  verifyUser()
},[hp])


  return ( 
    <Sidebar hp={hp} userHealthProfile={userHealthProfile} userinfo={user === undefined ?"":user} theme={theme} setTheme={setTheme}>
      <Routes>
        <Route exact path="/internships" element={<Internships />} />
        <Route exact path="/workexperience" element={<WorkExperience userHealthProfile={userHealthProfile}/>}/>
        <Route exact path="/projects" element={<Projects userHealthProfile={userHealthProfile}/>} />
        <Route exact path="/achievements" element={<Achievements userHealthProfile={userHealthProfile}/>} />
        <Route exact path="/education" element={<Education userHealthProfile={userHealthProfile}/>} />
        <Route exact path="/profile" element={<StudentProfile userinfo={user === undefined ?"":user} getUserDetails={getUserDetails}/>} />
        {/* <Route exact path="*" element={<Error404 />} /> */}
      </Routes>
    </Sidebar>
  );
};

export default Student;
