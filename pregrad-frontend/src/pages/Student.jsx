import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "../components/jsx/Sidebar";
import WorkExperience from "./UserStudent/WorkExperience";
import Education from "./UserStudent/Education";
import Internships from "./UserStudent/Internships";
import Projects from "./UserStudent/Projects";
import Achievements from "./UserStudent/Achievements";
import Certifications from "./UserStudent/Certifications";
import { useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom";
import axios from 'axios'
import {useCookies} from 'react-cookie'
import StudentProfile from "./UserStudent/StudentProfile";


const Student = ({theme, setTheme}) => {

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
        
        navigate(`/student/${id}`)
      }
    }
  }
  verifyUser()
},[])

  return (
    <Sidebar  userid={id} theme={theme} setTheme={setTheme}>
      <Routes>
        <Route exact path="/internships" element={<Internships/>} />
        <Route exact path="/workexperience" element={<WorkExperience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/education" element={<Education />} />
        <Route path="/profile" element={<StudentProfile />} />
      </Routes>
    </Sidebar>
  );
};

export default Student;

// var headers = new Headers();
// headers.append("X-CSCAPI-KEY", "Mjd0a0JZS3ltM0VzMnlTQzM2c0FFUzc0aDFybllDODdpSXJsQWJUVQ==");

// var requestOptions = {
//   method: "GET",
//   headers: headers,
//   redirect: "follow",
// };

// var req = unirest("GET", "https://www.universal-tutorial.com/api/getaccesstoken");

// req.headers({
//   "Accept": "application/json",
//   "api-token": "AuXnFjES43NqbdODZoc1anLtpO9op_9HsA7hqU56HJoxlbbNrMsUAzmsp6cqoZ0HhWQ",
//   "user-email": "abc@gmail.com"
// });

// const [place, setPlace] = useState([]);

// useEffect(() => {
//  const getPlace = async () => {
//   // const result = await fetch("https://api.countrystatecity.in/v1/countries/IN/states/MH/cities", requestOptions);
//   const result = await fetch("https://countriesnow.space/api/v0.1/countries/states");
//   const getloc = await result.json();
//   console.log(getloc.data);
//   setPlace(await getloc.data);
//  }

//  getPlace();
// },[])

// 2mStsA3c2RmKqNigYyUaaAnFm31khF_3OW_EGQZhD9AY54u2Er-fSFAU_FQU-LxpwZw

// https://countriesnow.space/api/v0.1/countries/states
