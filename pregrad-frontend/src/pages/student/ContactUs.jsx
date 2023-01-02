import React from "react";
import "../../components/student/css/ContactUsStyles.css";
import Header from "../../components/student/jsx/Header";
import ContactImage from "../../img/contact.png";
import { RiMapPin2Line } from "react-icons/ri";
import { FiPhoneCall, FiMail, FiTwitter } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";
import Footer from "../../components/student/jsx/Footer";

const ContactUs = ({theme, setTheme}) => {
  return (
    <div>
      <Header theme={theme} setTheme={setTheme} />

      <div className="main_container_contactus">
        <div className="heading_section_contactus">
            <h1>Contact Us</h1>
            <p>Any question or remarks? Just write us a message!</p>
        </div>


        <div className="main_box_contactus">
          <div className="left_section_contactus">
            <div className="left_top_section_contactus">
              <h1>Contact Information</h1>
              <p>Fill up the form and our Team will get back to you within 24 hours.</p>
            </div>

            <div className="left_middle_section_contactus">
                <div className="contact_container_contactus">
                    <FiPhoneCall className="contact_icon_contactus" />
                    <p>+91 8800527540</p>
                </div>
                <div className="contact_container_contactus">
                    <FiMail className="contact_icon_contactus" />
                    <p>ankursaxena@pregrad.in</p>
                </div>
                <div className="contact_container_contactus">
                    <RiMapPin2Line className="contact_icon_contactus" />
                    <p>G-9, 1st Floor, Sector-6 Noida-201307</p>
                </div>
            </div>

            <div className="left_bottom_section_contactus">
                <div className="social_icons_container_contactus">
                    <div className="social_icon_box_contactus">
                        <a href="hjj"><FaFacebookF className="social_icon1_contactus" /></a>
                    </div>
                    <div className="social_icon_box_contactus">
                        <a href="hjj"><FiTwitter className="social_icon2_contactus" /></a>
                    </div>
                    <div className="social_icon_box_contactus">
                        <a href="hjj"><AiOutlineInstagram className="social_icon3_contactus" /></a>
                    </div>
                    <div className="social_icon_box_contactus">
                        <a href="hjj"><AiOutlineLinkedin className="social_icon4_contactus" /></a>
                    </div>
                </div>

                <div className="image_container_contactus">
                    <img src={ContactImage} alt="contact" />
                </div>
            </div>
          </div>

          <div className="right_section_contactus">
            <form action="https://formsubmit.co/harshchopra467@gmail.com" method="POST">
                <div className="form_container_contactus">
                    <div className="form_group_box_contactus">
                        <div className="form_box_contactus">
                            <label>Name</label>
                            <input type="text" name="name" placeholder="Enter Your Name" />
                        </div>
                        <div className="form_box_contactus">
                            <label>Phone Number</label>
                            <input type="tel" name="phoneno" placeholder="Enter Your Phone Number" />
                        </div>
                    </div>
                    <div className="form_box_contactus">
                        <label>Email</label>
                        <input type="email" name="email" placeholder="Enter Your Email" />
                    </div>
                    <div className="hidden_form_box_contactus">
                        <input type="hidden" name="_next" value="http://localhost:3000/" />
                    </div>
                    <div className="hidden_form_box_contactus">
                        <input type="hidden" name="_captcha" value="false" />
                    </div>
                    <div className="hidden_form_box_contactus">
                        <input type="hidden" name="_template" value="table"></input>
                    </div>
                    <div className="form_box_contactus">
                        <label>Messsage</label>
                        <textarea type="text" name="description" rows={6} placeholder="Write Your Message..." />
                    </div>
                    <div className="button_box_contactus">
                        <button className="create_btn_signup">Send Message</button>
                    </div>
                </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;
