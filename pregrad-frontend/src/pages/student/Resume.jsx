import React from 'react'
import HeaderAuth from '../../components/student/jsx/HeaderAuth';
import "../../components/student/css/ResumeStyles.css";
import "../../components/student/css/UserStudent/ResumeStudentStyles.css";
import ProfileBackground from "../../img/profile-background.jpg";
import { BiDownload, BiEditAlt, BiLink } from "react-icons/bi";
import { Link } from "react-router-dom";
import axios from 'axios'
import {useCookies} from 'react-cookie'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import jsPDF from "jspdf"
import { FaRegFileVideo, FaTimes } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";

const Resume = ({theme, setTheme}) => {
    let skillsData = [
        "HTML",
        "CSS",
        "JS",
        "React",
        "Illustrator",
        "PHP",
        "JQuery",
        "NodeJs",
        "Figma",
        "ExpressJs",
      ];

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
      <HeaderAuth theme={theme} setTheme={setTheme}/>

      <div className="main_container_resume">
        <div className="profile_container_resume">
          <div className="profile_background_resume">
            <img src={ProfileBackground} alt="background" />
            <div className="profile_edit2_container_resume">
                <div className="profile_edit4_resume" onClick={generatePDF} title="Download Resume">
                  <BiDownload size={20} />
                </div>

                <div className="profile_edit3_resume" title="Video Resume">
                  <FaRegFileVideo />
                </div>

              <div className="profile_edit2_resume">
                  <BiEditAlt size={18} />
              </div>
            </div>

          </div>

          <div className="profile_user_details_resume">
            <div className="user_image_resume">
              G
            </div>
            <div className="profile_info_resume">
              <div className="info_container_resume">
                <div className="info_left_section_resume">
                  <h5>Gautam Chopra</h5>
                  <p>WEB DEVELOPER</p>
                </div>
                <div className="info_middle_section_resume">
                  <h5>harshchopra467@gmail.com</h5>
                </div>
              </div>

              <div className="profile_edit_container_resume">
                <div className="profile_edit_resume">
                  <BiEditAlt />
                </div>

                <div className="profile_edit_resume" onClick={generatePDF} title="Download Resume">
                  <BiDownload />
                </div>

                <div className="profile_edit_resume" title="Download Video">
                  <FaRegFileVideo />
                </div>
              </div>

              
            </div>
          </div>
        </div>

        <div className="main_details_container_resume">
          <div className="main_details_left_section_resume">
            <div className="social_container_resume card_resume">
              <h4>Social Links</h4>
              <div className="line_resume"></div>
              <div className="social_links_box_resume">
                
                <AiFillGithub className="social_links_resume" />
                <AiFillLinkedin className="social_links_resume" />
                <AiFillInstagram className="social_links_resume" />
              </div>
            </div>

            <div className="skills_container_resume card_resume">
              <h4>Skills</h4>
              <div className="line_resume"></div>
              <div className="skills_box_resume">
                {skillsData.map((value) => (
                  <div key={value} className="skill_section_resume">
                    <p>{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="education_container_resume card_resume">
              <h4>Education</h4>
              <div className="line_resume"></div>
              
              <div className="education_info_box_resume">
                <h3>BVCOE</h3>
                <h5>BTECH, CSE</h5>
                <p>2020 - 2024</p>
              </div>
            </div>

            <div className="achievements_container_resume card_resume">
              <h4>Achievements</h4>

              <div className="line_resume"></div>
            
                <div className="achievements_info_box_resume">
                <h3>Hackathon</h3>
                <a href="yo">Certificate Link</a>
              </div> 
            </div>
          </div>

          <div className="main_details_right_section_resume">
            <div className="workexperience_container_resume card_resume">
              <h4>Work Experience</h4>
              <div className="line_resume"></div>
              <div className="workexperience_details_box_resume">
                <h3>Google</h3>
                <h5>Web Developer | 2 months</h5>
                <p>
                hkkkkkkkkk  
                </p>
                <div className="skills_content_resume">
                  <ul>
                    <li>HTML</li>
                  </ul>
                </div>
              </div>         
            </div>

            <div className="projects_container_resume card_resume">
              <h4>Projects</h4>
              <div className="line_resume"></div>
              <div className="projects_details_box_resume">
                <h3>Ambaram - Ecommerce Website</h3>
                <p>
                Good project 
                </p>
                <a href="yo">
                  <BiLink size={24} className="project_details_icon_resume" />
                </a>
                <div className="skills_content_resume">
                  <ul>
                    <li>JS</li>
                  </ul>
                </div>
              </div>  
            </div>
          </div>
        </div>
      </div>





      {/* RESUME */}

      {/* <div className='resumestudent'>
        <div className="main_container_resumestudent">
        <div className="profile_container_resumestudent">

          <div className="profile_user_details_resumestudent">
            <div className="user_image_resumestudent">
              <p>G</p>
            </div>
            <div className="profile_info_resumestudent">
              <div className="info_container_resumestudent">
                <div className="info_left_section_resumestudent">
                  <h5>{user.name}</h5>
                  {
                    studentDomain.map((domain)=>(
                      <p>{domain}</p>
                    ))
                  }
                </div>
                <div className="info_middle_section_resumestudent">
                  <h5>{user.email}</h5>
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
                <a href={studentSocialLink.github}>{studentSocialLink.github}</a>
                <a href={studentSocialLink.linkedin}>{studentSocialLink.linkedin}</a>
                <a href={studentSocialLink.instagram}>{studentSocialLink.instagram}</a>
              </div>
            </div>

            <div className="skills_container_resumestudent card_resumestudent">
              <h4>Skills</h4>
              <div className="line_resumestudent"></div>
              <div className="skills_box_resumestudent">
                {studentSkill.map((value) => (
                  <div key={value} className="skill_section_resumestudent">
                    <p>{value}</p>
                  </div>
                ))}
              </div>
            </div>
            {
              Education.length != 0?
              ( <div className="education_container_resumestudent card_resumestudent">
              <h4>Education</h4>
              <div className="line_resumestudent"></div>
       {
       Education.map((edu)=>(
        <div className="education_info_box_resumestudent" key={edu._id}>
                <h3>{edu.university}</h3>
                <h5>{edu.degree}, {edu.field}</h5>
                <p>{edu.start} - {edu.start} </p>
            </div>  
       ))
       }
              
            </div>
            )
            :""
                      
            }
                 { 
                   (Achievement.length!=0)?
              (
              <div className="achievements_container_resumestudent card_resumestudent">
              <h4>Achievements</h4>

              <div className="line_resumestudent"></div>
             {
              Achievement.map((achi)=>(
              <div className="achievements_info_box_resumestudent">
                <h3>{achi.title}</h3>
                <a href={achi.certificate}>{achi.certificate}</a>
              </div>
              ))
                
             } 
            </div>
            ):""
            }
          </div>

          <div className="main_details_right_section_resumestudent">
            {
              (WorkExperience.length != 0)?(
                <div className="workexperience_container_resumestudent card_resumestudent">
                <h4>Work Experience</h4>
                <div className="line_resumestudent"></div>
  
           { 
           WorkExperience.map((work)=>(
            <div className="workexperience_details_box_resumestudent">
            <h3>{work.companyname}</h3>
            <h5>{work.position} | {work.duration}</h5>
          <p>
         {work.role}
          </p>
          <div className="skills_content_resumestudent">
              <ul>
                  <li>{work.skills}</li>
              </ul>
          </div>
          </div>
           ))
          
          }
  
               
          </div>
              ):""
      
        }

            {
         
         Project.length !=0?(
          <div className="projects_container_resumestudent card_resumestudent">
     
              <h4>Projects</h4>
              <div className="line_resumestudent"></div>

            {
              Project.map((proj)=>(
              <div className="projects_details_box_resumestudent" key={proj._id}>
              <h3>{proj.projecttitle}</h3>
              <p>
              {proj.description} 
              </p>
              <a href={proj.projectlink}>
             {proj.projectlink}
              </a>
              <div className="skills_content_resumestudent">
                <ul>
                  <li>{proj.skills}</li>
                </ul>
              </div>
            </div>))
              }
  
            </div>
         ):""
        }
          </div>
        </div>
      </div>
    </div> */}
    </div>
  )
}

export default Resume
