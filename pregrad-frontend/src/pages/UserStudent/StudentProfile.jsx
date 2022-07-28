import React,{useEffect,useState} from "react";
import "../../components/css/UserStudent/StudentProfileStyles.css";
import "../../components/css/UserStudent/ResumeStudentStyles.css"
import ProfileBackground from "../../img/profile-background.jpg";
import UserImage from "../../img/profile-image.png";
import { BiDownload, BiEditAlt, BiLink } from "react-icons/bi";
import { useNavigate,useParams } from "react-router-dom";
import axios from 'axios'
import {useCookies} from 'react-cookie'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import jsPDF from "jspdf"
import { FaRegFileVideo } from "react-icons/fa";

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
    if(data.message === "true"){
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
        if(data.id !== id || data.status !== true){
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

  const generatePDF = async () => {
    var doc = new jsPDF("p", "pt", "a4");
    doc.html(document.querySelector(".main_container_resumestudent"), {
        callback: function(pdf){
            pdf.save("pregradresume.pdf");
        }
    })
  }

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
            <div className="profile_edit2_container_studentprofile">
                <div className="profile_edit4_studentprofile" onClick={generatePDF} title="Download Resume">
                  <BiDownload size={20} />
                </div>

                <div className="profile_edit3_studentprofile" title="Video Resume">
                  <FaRegFileVideo />
                </div>

              <div className="profile_edit2_studentprofile">
                  <BiEditAlt size={18} />
              </div>
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

              <div className="profile_edit_container_studentprofile">
                <div className="profile_edit_studentprofile">
                  <BiEditAlt />
                </div>

                <div className="profile_edit_studentprofile" onClick={generatePDF} title="Download Resume">
                  <BiDownload />
                </div>

                <div className="profile_edit_studentprofile" onClick={generatePDF} title="Download Resume">
                  <FaRegFileVideo />
                </div>
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
                <a href={achi.certificate}>Certificate Link</a>
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
                  <BiLink size={24} className="project_details_icon_studentprofile" />
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

      





     {/* Resume */}

      <div className='resumestudent'>
        <div className="main_container_resumestudent">
        <div className="profile_container_resumestudent">

          <div className="profile_user_details_resumestudent">
            <div className="user_image_resumestudent">
              <p>G</p>
            </div>
            <div className="profile_info_resumestudent">
              <div className="info_container_resumestudent">
                <div className="info_left_section_resumestudent">
                  <h5>Gautam</h5>
                  <p>Full Stack Developer</p>
                </div>
                <div className="info_middle_section_resumestudent">
                  <h5>harshchopra467@gmail.com</h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="main_details_container_resumestudent">
          <div className="main_details_left_section_resumestudent">
            <div className="social_container_resumestudent card_resumestudent">
              <h4>Social Links</h4>
              <div className="line_resumestudent"></div>
              <div className="social_links_box_resumestudent">
                <a href="yo">https://cuvette.tech/app/student/</a>
                <a href="yo">https://cuvette.tech/app/student/</a>
                <a href="yo">https://cuvette.tech/app/student/</a>
              </div>
            </div>

            <div className="skills_container_resumestudent card_resumestudent">
              <h4>Skills</h4>
              <div className="line_resumestudent"></div>
              <div className="skills_box_resumestudent">
                {skills.map((value, id) => (
                  <div key={id} className="skill_section_resumestudent">
                    <p>{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="education_container_resumestudent card_resumestudent">
              <h4>Education</h4>
              <div className="line_resumestudent"></div>

          
    
             <div className="education_info_box_resumestudent">
                <h3>Bharati Vidyapeeth's College of Engineering</h3>
                <h5>Btech, CSE</h5>
                <p>2020 - 2024</p>
             </div>  
              
            </div>

            <div className="achievements_container_resumestudent card_resumestudent">
              <h4>Achievements</h4>

              <div className="line_resumestudent"></div>
             
                <div className="achievements_info_box_resumestudent">
                <h3>WEB DEVELOPMENT CERTIFICATE</h3>
                <a href="yo">https://cuvette.tech/app/student/https://cuvette.tech/app/student/</a>
              </div>
              
            </div>
          </div>

          <div className="main_details_right_section_resumestudent">
            <div className="workexperience_container_resumestudent card_resumestudent">
              <h4>Work Experience</h4>
              <div className="line_resumestudent"></div>

          <div className="workexperience_details_box_resumestudent">
          <h3>Google</h3>
        <h5>Web Developer| 2 months</h5>
        <p>
        puzzles, used various API's to make quizes, dictionary and
translator.  
        </p>
        <div className="skills_content_resumestudent">
            <ul>
                <li>HTML, CSS</li>
            </ul>
        </div>
        </div>

             
        </div>

            <div className="projects_container_resumestudent card_resumestudent">
              <h4>Projects</h4>
              <div className="line_resumestudent"></div>

            <div className="projects_details_box_resumestudent">
                <h3>AMBARAM -E-Commerce Website</h3>
                <p>
                "Ambaram" is web application that provides a compelling user
experience has a large lists of products and provides lot of offers.
Responsive in all devices. 
                </p>
                <a href="yo">
                https://cuvette.tech/app/student/https://cuvette.tech/app/student/
                </a>
                <div className="skills_content_resumestudent">
                  <ul>
                    <li>CSS, JS</li>
                  </ul>
                </div>
              </div>
  
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default StudentProfile;
