import React from 'react';
import "../../../components/company/css/UserCompany/ProfileCompanyStyles.css";
import ProfileBackground from "../../../img/profile-background.jpg";
import { BsLinkedin } from "react-icons/bs";

const ProfileCompany = () => {
  return (
    <div>
      <div className="main_container_profilecompany">
        <div className="welcome_container_profilecompany">
          <div className="welcome_left_section_profilecompany">
            <h4>Hi, welcome back!</h4>
            <p>Your Profile</p>
          </div>
          <div className="welcome_right_section_profilecompany">
            <h4>
              App <span>/ Profile</span>
            </h4>
          </div>
        </div>

        <div className="profile_container_profilecompany">
          <div className="profile_background_profilecompany">
            <img src={ProfileBackground} alt="background" />
            <div className="profile_edit2_container_profilecompany">
              <div className="profile_edit2_profilecompany">
                  <BsLinkedin size={18} />
              </div>
            </div>
          </div>

          <div className="profile_user_details_profilecompany">
            <div className="user_image_profilecompany">
              G
            </div>
            <div className="profile_info_profilecompany">
              <div className="info_container_profilecompany">
                <div className="info_left_section_profilecompany">
                  <h5>Google</h5>
                  <p>Private Organisation</p>
                </div>
                <div className="info_middle_section_profilecompany">
                  <h5>harshchopra467@gmail.com</h5>
                </div>
              </div>

              <div className="profile_edit_container_profilecompany">
                <div className="profile_edit_profilecompany">
                  <BsLinkedin />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='main_details_container_profilecompany'>
          <div className='main_details_left_section_profilecompany'>
            <div className='card_profilecompany'>
              <h4>Representative</h4>
              <div className="line_profilecompany"></div>
              <div className='owner_details_container'>
                <h3>Gautam Chopra</h3>
                <p>H.R.</p>
              </div>
            </div>
          </div>

          <div className='main_details_right_section_profilecompany'>
            <div className='card_profilecompany'>
            <h4>About Company</h4>
              <div className="line_profilecompany"></div>
              <div className='owner_details_container'>
                <h3>Location | Established In</h3>
                <p>Delhi, India | From 2002</p>
              </div>
            </div>
          </div>
        </div>

        <div className='card_profilecompany'>
              <h4>Description of Company</h4>
              <div className="line_profilecompany"></div>
              <div className='owner_details_container'>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
              </div>
            </div>
      </div>
    </div>
  )
}

export default ProfileCompany
