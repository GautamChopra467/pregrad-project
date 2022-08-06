import React,{useEffect,useState} from "react";
import "../../../components/student/css/UserStudent/StudentProfileStyles.css";
import "../../../components/student/css/UserStudent/ResumeStudentStyles.css";
import ProfileBackground from "../../../img/profile-background.jpg";
import UserImage from "../../../img/profile-image.png";
import { BiDownload, BiEditAlt, BiLink } from "react-icons/bi";
import { Link, useNavigate,useParams } from "react-router-dom";
import axios from 'axios'
import {useCookies} from 'react-cookie'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import jsPDF from "jspdf"
import { FaRegFileVideo, FaTimes } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";

const StudentProfile = () => {

  const navigate = useNavigate()
  const {id} = useParams()
 const [cookies,setCookie,removeCookie] = useCookies([])

 const  [user,setUser] = useState({})

 const [Achievement,setAchievement] = useState([])
const [WorkExperience,setWorkExperience] = useState([])
const [Project,setProject] = useState([])
const [Education,setEducation] = useState([])

  const skillsData = [
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

  //Edit Form
  const domainsData = ["Front-End" , "Back-End", "Full Stack Software", "Mobile Engineering", "Product Management", "Data Scientist", "BUSINESS OPERATIONS", "MARKETING", "SALES AND BUSINESS DEVELOPMENT", "MEDIA, COMMUNICATIONS, PUBLIC RELATIONS", "DATA ANALYTICS", "FINANCE", "ARTS AND DESIGN", "DATABASE ADMINISTRATION", "EVENT PLANNING", "ECONOMICS AND POLICY"]
  // const skillsData = ["HTML", "CSS", "JS", "NodeJs", "ExpressJs", "MongoDB", "C++/C", "Java", "Python", "Bootstrap", "Figma", "Photoshop", "Illustrator"];

  // Domains
  const [domains, setDomains] = useState(domainsData);
  const [selectedDomains, setSelectedDomains] = useState([]);

  const handleDomain = (event) => {
    setSelectedDomains(current => [...current, event.target.value])
    setDomains(current => current.filter(domain => {
      return domain !== event.target.value;
    }))
  }

  const deleteDomain = (value) => {
    setSelectedDomains(current => current.filter(selectedDomain => {
      return selectedDomain !== value;
    }))
    setDomains(current => [...current, value])
  }

  // Skills
  const [skills, setSkills] = useState(skillsData);
  const [selectedSkills, setSelectedSkills] = useState([]);

  const handleSkill = (event) => {
    if(selectedSkills.length < 10){
      setSelectedSkills(current => [...current, event.target.value])
      setSkills(current => current.filter(skill => {
        return skill !== event.target.value;
      }))
    }else{
      console.log("error")
    }
  }

  const deleteSkill = (value) => {
    setSelectedSkills(current => current.filter(selectedSkill => {
      return selectedSkill !== value;
    }))
    setSkills(current => [...current, value])
  }



  const [isModal, setIsModal] = useState(false);

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const [data, setData] = useState({
    name: "",
    github: "",
    linkedin: "",
    instagram: "",
  });

  const handleForm = (e) => {
    const {name, value} = e.target;
    setData({
      ...data,
      [name]: value
    })
  }

  const submitForm = (e) => {
    e.preventDefault();
    setFormErrors(validate());
    setIsSubmit(true);
  }

  const validate = (values) => {
    const errors = {};

    if(!values.title){
      errors.title = "Name required";
    }else if(values.title.length < 3){
      errors.title = "Min 3 characters required";
    }

    return errors;
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
      {console.log(isModal)}
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

              <div className="profile_edit2_studentprofile" onClick={() => setIsModal(!isModal)}>
                  <BiEditAlt size={18} />
              </div>
            </div>

          </div>

          <div className="profile_user_details_studentprofile">
            <div className="user_image_studentprofile">
              G
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
                <div className="profile_edit_studentprofile" onClick={() => setIsModal(!isModal)}>
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
                {skillsData.map((value, id) => (
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
              {!Education.length && (
                <div className="add_content_box_studentprofile">
                  <div className='add_section1_logo_studentprofile'>
                    <FiFileText size={24} className="add_section1_icon_studentprofile" />
                  </div>
                  <Link to="/">Add Education Details</Link>
                  <p>Increase your <span>Profile Health</span></p>
                </div>
              )} 
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
              {!Achievement.length && (
                <div className="add_content_box_studentprofile">
                  <div className='add_section1_logo_studentprofile'>
                    <FiFileText size={24} className="add_section1_icon_studentprofile" />
                  </div>
                  <Link to="/">Add Achievement Details</Link>
                  <p>Increase your <span>Profile Health</span></p>
                </div>
              )} 
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
              {!WorkExperience.length && (
                <div className="add_content_box_studentprofile">
                  <div className='add_section1_logo_studentprofile'>
                    <FiFileText size={24} className="add_section1_icon_studentprofile" />
                  </div>
                  <Link to="/">Add Work Experience Details</Link>
                  <p>Increase your <span>Profile Health</span></p>
                </div>
              )}              
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
              {!Project.length && (
                <div className="add_content_box_studentprofile">
                  <div className='add_section1_logo_studentprofile'>
                    <FiFileText size={24} className="add_section1_icon_studentprofile" />
                  </div>
                  <Link to="/">Add Project Details</Link>
                  <p>Increase your <span>Profile Health</span></p>
                </div>
              )}   
            </div>
          </div>
        </div>
      </div>

      {isModal && (
          <div className='modal_backgound_studentprofile'>
          <div className='modal_container_studentprofile'>
            <div className='modal_top_section_studentprofile'>
              <h2>Edit Details</h2>
              <p className="errors_msg_studentprofile">{formErrors.others}</p>
            </div>
            <div className='modal_mid_section_studentprofile'>
              <form>
                <div className="form_box_studentprofile">
                  <label>Name</label>
                  <input type="text" name="name" placeholder="Title of Achievement" onChange={handleForm} />
                  <p className="errors_msg_studentprofile">{formErrors.title}</p>
                </div>

                <div className="form_box_studentprofile">
                <label> Which domain are you interested in working ?</label>

                <select onChange={handleDomain} className="select_studentprofile">
                  <option value="">Select</option>
                  {domains.map((val) => (
                    <option key={val} value={val}>{val}</option>
                  ))}
                </select>

                <div className="selected_domains_container_studentprofile">
                  {selectedDomains.map((val) => (
                    <div className="selected_domains_box_studentprofile" key={val}>
                      <p>{val}</p>
                      <FaTimes onClick={e => {deleteDomain(val)}} className="selected_domains_icon_studentprofile" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="form_box_studentprofile">
                <label> Enter your skills ?</label>
                
                <select onChange={handleSkill} className="select_studentprofile">
                  <option value="">Select</option>
                  {skills.map((val) => (
                    <option key={val} value={val}>{val}</option>
                  ))}
                </select>

                <div className="selected_domains_container_studentprofile">
                  {selectedSkills.map((val) => (
                    <div className="selected_domains_box_studentprofile" key={val}>
                      <p>{val}</p>
                      <FaTimes onClick={e => {deleteSkill(val)}} className="selected_domains_icon_studentprofile" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="form_box_studentprofile">
                <label>Github Link ( Optional )</label>
                <input type="url" name="github" value={data.github} onChange={handleForm} placeholder="Enter your github link" />
              </div>

              <div className="form_box_studentprofile">
                <label> Linkedin Link ( Optional )</label>
                <input type="url" name="linkedin" value={data.linkedin} onChange={handleForm} placeholder="Enter your linkedin link" />
                <p>{formErrors.github}</p>
              </div>

              <div className="form_box_studentprofile">
              <label> Instagram Link ( Optional )</label>
                <input type="url" name="instagram" value={data.instagram} onChange={handleForm} placeholder="Enter your Instagram link" />
              </div>

                <div className='modal_bottom_section_studentprofile'>
                  <button className='btn_light_studentprofile' onClick={() => setIsModal(!isModal)}>Cancel</button>
                  <button type='submit' onClick={submitForm} className='btn_primary_studentprofile'>Save Details</button>
                </div>
              </form>
            </div>       
          </div>
        </div>
        )}





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
