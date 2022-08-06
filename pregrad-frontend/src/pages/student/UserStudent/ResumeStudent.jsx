import React,{useEffect,useState} from "react";
import "../../../components/student/css/UserStudent/ResumeStudentStyles.css";
import jsPDF from "jspdf";

const ResumeStudent = () => {
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

      const generatePDF = async () => {
        var doc = new jsPDF("p", "pt", "a4");
        doc.html(document.querySelector(".main_container_resumestudent"), {
            callback: function(pdf){
                // pdf.addImage(footer, "PNG", 110, 250, 354, 260)
                pdf.save("pregradresume.pdf");
            }
        })
        
      }

  return (
    <div className='resumestudent'>
        {/* <button onClick={generatePDF}>Download</button> */}
        <div className="main_container_resumestudent">
          {/* <div className="watermark_resumestudent">
            <h1>Pregrad</h1>
          </div> */}
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
                <a href="yo">https://cuvette.tech/app/student/https://cuvette.tech/app/student/</a>
                <a href="yo">https://cuvette.tech/app/student/https://cuvette.tech/app/student/</a>
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
                <a href="yo">https://cuvette.tech/app/student/</a>
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
  )
}

export default ResumeStudent
