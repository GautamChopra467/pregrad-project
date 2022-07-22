import React from "react";
import "../../components/css/UserStudent/StudentProfileStyles.css";
import ProfileBackground from "../../img/profile-background.jpg";
import UserImage from "../../img/profile-image.png";
import { BiEditAlt, BiLink } from "react-icons/bi";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

const StudentProfile = () => {
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
                  <h5>Gautam Chopra</h5>
                  <p>Full Stack Developer</p>
                </div>
                <div className="info_middle_section_studentprofile">
                  <h5>info@example.com</h5>
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
              <div className="education_info_box_studentprofile">
                <h3>Bharati Vidyapeeth's College of Engineering</h3>
                <h5>B.Tech, Computer Science Engineering</h5>
                <p>2020 - 2024</p>
              </div>
            </div>

            <div className="achievements_container_studentprofile card_studentprofile">
              <h4>Achievements</h4>
              <div className="line_studentprofile"></div>
              <div className="achievements_info_box_studentprofile">
                <h3>ISTE 2022 Hackathon</h3>
                <a href="">Certificate Link</a>
              </div>
            </div>
          </div>

          <div className="main_details_right_section_studentprofile">
            <div className="workexperience_container_studentprofile card_studentprofile">
              <h4>Work Experience</h4>
              <div className="line_studentprofile"></div>
              <div className="workexperience_details_box_studentprofile">
                <h3>Google Engage</h3>
                <h5>Full Stack Developer | 2 months</h5>
                <p>
                  This calculator converts pixels to the CSS unit REM. The
                  conversion is based on the default font-size of 16 pixel, but
                  can be changed.With the CSS rem unit you can define a size
                  relative to the font-size of the HTML root tag.The conversion
                  works of course in both directions, just change the opposite
                  input field.
                </p>
                <div className="skills_content_studentprofile">
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JS</li>
                  </ul>
                </div>
              </div>

              <div className="workexperience_details_box_studentprofile">
                <h3>Google Engage</h3>
                <h5>Full Stack Developer | 2 months</h5>
                <p>
                  This calculator converts pixels to the CSS unit REM. The
                  conversion is based on the default font-size of 16 pixel, but
                  can be changed.With the CSS rem unit you can define a size
                  relative to the font-size of the HTML root tag.The conversion
                  works of course in both directions, just change the opposite
                  input field.
                </p>
                <div className="skills_content_studentprofile">
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JS</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="projects_container_studentprofile card_studentprofile">
              <h4>Projects</h4>
              <div className="line_studentprofile"></div>
              <div className="projects_details_box_studentprofile">
                <h3>Ambaram : E-commerce</h3>
                <p>
                  Ambaram" is web application that provides a compelling user
                  experience has a large lists of products and provides lot of
                  offers. Responsive in all devices.At the beginning I designed
                  a basic layout of my website using Figma, then collected
                  necessary information related to the projects, made logos,
                  posters etc. Then I used HTML to make the basic structure and
                  later designed it using CSS then add some functionalities
                  using Javascript.1) Great user experience and awesome UI 2)
                  Content management capabilities 3) An integrated blog or
                  articles section.
                </p>
                <a href="">
                  <BiLink size={24} color="#7840f2" />
                </a>
                <div className="skills_content_studentprofile">
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JS</li>
                  </ul>
                </div>
              </div>

              <div className="projects_details_box_studentprofile">
                <h3>Ambaram : E-commerce</h3>
                <p>Ambaram" is web application that provides a compelling user experience has a large lists of products and provides lot of offers. Responsive in all devices.At the beginning I designed a basic layout of my website using Figma, then collected necessary information related to the projects, made logos, posters etc. Then I used HTML to make the basic structure and later designed it using CSS then add some functionalities using Javascript.1) Great user experience and awesome UI 2) Content management capabilities 3) An integrated blog or articles section.</p>
                <a href=""><BiLink size={24} color="#7840f2" /></a>
                <div className="skills_content_studentprofile">
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JS</li>
                  </ul>
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
