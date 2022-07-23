import React,{useEffect,useState} from "react";
import "../../components/css/UserStudent/StudentProfileStyles.css";
import ProfileBackground from "../../img/profile-background.jpg";
import UserImage from "../../img/profile-image.png";
import { BiEditAlt, BiLink } from "react-icons/bi";
import { useNavigate,useParams } from "react-router-dom";
import axios from 'axios'
import {useCookies} from 'react-cookie'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

const StudentProfile = () => {

  const navigate = useNavigate()
  const {id} = useParams()
 const [cookies,setCookie,removeCookie] = useCookies([])

 const  [user,setUser] = useState({})

 const [Achievement,setAchievement] = useState([])
const [WorkExperience,setWorkExperience] = useState([])
const [Project,setProject] = useState([])
const [Education,setEducation] = useState([])



  const skills = [
    "HTML",
    "CSS",
    "JS",
    "React",
    "Illustrator",
    "PHP",
    "JQuery",
    "NodeJs",
    "Figma",
    "Express",
  ];

  const getUserData = async()=>{
    const {data} = await axios.get(`http://localhost:8000/student/profile/${id}`)
    if(data.message == "true"){
    setAchievement(data.achievement)
    setProject(data.project)
    setWorkExperience(data.workexperience)
    setEducation(data.education)
  }
  }


  const getUserDetails= async()=>{
    const {data} = await axios.get(`http://localhost:8000/userDetails/${id}`)
    setUser(data)
  }



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
         
          navigate(`/student/${id}/profile`)
          getUserDetails()
          getUserData()
        }
      }
    }
    verifyUser()
  },[cookies,removeCookie,navigate])

  return (
    <div>
      <div className="sub_header_studentprofile">
        <h5>Profile</h5>
      </div>

      <div className="main_container_studentprofile">
        <div className="welcome_container_studentprofile">
          <div className="welcome_left_section_studentprofile">
            <h4>Hi, welcome back!</h4>
            <p>Your business dashboard template</p>
          </div>
          <div className="welcome_right_section_studentprofile">
            <h4>
              App <span>/ Profile</span>
            </h4>
          </div>
        </div>

        <div className="profile_container_studentprofile">
          <div className="profile_background_studentprofile">
            <img src={ProfileBackground} alt="background" />
            <div className="profile_edit2_studentprofile">
                <BiEditAlt size={18} />
            </div>
          </div>

          <div className="profile_user_details_studentprofile">
            <div className="user_image_studentprofile">
              <img src={UserImage} alt="user" />
            </div>
            <div className="profile_info_studentprofile">
              <div className="info_container_studentprofile">
                <div className="info_left_section_studentprofile">
                  <h5>{user.name}</h5>
                  <p>Full Stack Developer</p>
                </div>
                <div className="info_middle_section_studentprofile">
                  <h5>{user.email}</h5>
                </div>
              </div>

              <div className="profile_edit_studentprofile">
                <BiEditAlt size={20} />
              </div>
            </div>
          </div>
        </div>

        <div className="main_details_container_studentprofile">
          <div className="main_details_left_section_studentprofile">
            <div className="social_container_studentprofile card_studentprofile">
              <h4>Social Links</h4>
              <div className="line_studentprofile"></div>
              <div className="social_links_box_studentprofile">
                <AiFillGithub className="social_links_studentprofile" />
                <AiFillLinkedin className="social_links_studentprofile" />
                <AiFillInstagram className="social_links_studentprofile" />
              </div>
            </div>

            <div className="skills_container_studentprofile card_studentprofile">
              <h4>Skills</h4>
              <div className="line_studentprofile"></div>
              <div className="skills_box_studentprofile">
                {skills.map((value, id) => (
                  <div key={id} className="skill_section_studentprofile">
                    <p>{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="education_container_studentprofile card_studentprofile">
              <h4>Education</h4>
              <div className="line_studentprofile"></div>

   {        
    Education.map((edu)=>(
             <div className="education_info_box_studentprofile" key={edu._id}>
                <h3>{edu.university}</h3>
                <h5>{edu.degree},{edu.field}</h5>
                <p>{edu.start} - {edu.end}</p>
              </div>
    ))   
              }
            </div>

            <div className="achievements_container_studentprofile card_studentprofile">
              <h4>Achievements</h4>

              <div className="line_studentprofile"></div>
             {
              Achievement.map((achi)=>(
                <div className="achievements_info_box_studentprofile" key={achi._id}>
                <h3>{achi.title}</h3>
                <a href="">{achi.certificate}</a>
              </div>
              ))
              }
            </div>
          </div>

          <div className="main_details_right_section_studentprofile">
            <div className="workexperience_container_studentprofile card_studentprofile">
              <h4>Work Experience</h4>
              <div className="line_studentprofile"></div>
{        
    WorkExperience.map((work)=>(
      <div className="workexperience_details_box_studentprofile" key={work._id}>
      <h3>{work.companyname}</h3>
      <h5>{work.position} | {work.duration}</h5>
      <p>
      {work.role}  
      </p>
      <div className="skills_content_studentprofile">
        <ul>
          <li>{work.skills}</li>
        </ul>
      </div>
    </div>

    ))
            
}              
            </div>

            <div className="projects_container_studentprofile card_studentprofile">
              <h4>Projects</h4>
              <div className="line_studentprofile"></div>
{          
    Project.map((proj)=>(
<div className="projects_details_box_studentprofile">
                <h3>{proj.projecttitle}</h3>
                <p>
                {proj.description}
                </p>
                <a href={proj.projectlink}>
                  <BiLink size={24} color="#7840f2" />
                </a>
                <div className="skills_content_studentprofile">
                  <ul>
                    <li>{proj.skills}</li>
                  </ul>
                </div>
              </div>
    ))

}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
