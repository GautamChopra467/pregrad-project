import React from 'react';
import "../../components/company/css/InternshipDetailStyles.css";
import HeaderAuth from '../../components/student/jsx/HeaderAuth';
import { BsFillBarChartFill, BsPeople, BsPlayCircle } from "react-icons/bs";
import { AiOutlineFieldTime, AiOutlineInfoCircle } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoCalendarClearOutline } from "react-icons/io5";
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { MdOutlinePeopleAlt, MdPeopleAlt } from "react-icons/md";

const InternshipDetail = ({theme, setTheme}) => {
    const skillsData = ["HTML", "CSS", "JS", "NodeJs", "ExpressJs"];

  return (
    <div>
      <HeaderAuth theme={theme} setTheme={setTheme} />

      <div className='main_container_internshipdetail'>
      <div className='details_container_internshipdetail'>
        <div className='top_section_internshipdetail'>
            <h2>Back-end Developer Internship in Delhi at Google</h2>
        </div>

        <div className='main_internship_container_internshipdetail'>
            <div className='internship_container_internshipdetail'>
              <div className='top_section_internship_internshipdetail'>
                <div className='left_section_internship_internshipdetail'>
                  <h2>Back-end Developer</h2>
                  <h4>Google</h4>
                </div>
                <div className='right_section_internship_internshipdetail'>
                  <div className='experience_icon_container_internshipdetail'>
                    <BsFillBarChartFill className="experience_icon_internshipdetail" />
                    <p>Beginner</p>
                    <AiOutlineInfoCircle className="info_icon_internshipdetail" />
                  </div>
                  <div className='remote_container_internshipdetail'>
                    <p>Remote</p>
                  </div>
                </div>
              </div>

              <div className='mid_section_internship_internshipdetail'>
                <div className='status_container_internship_internshipdetail'>
                <div className='experience_icon_container2_internshipdetail'>
                    <BsFillBarChartFill className="experience_icon_internshipdetail" />
                    <p>Beginner</p>
                    <AiOutlineInfoCircle className="info_icon_internshipdetail" />
                  </div>

                  <div className='remote_container2_internshipdetail'>
                    <p>Remote</p>
                  </div>
                </div>

                <div className='upper_mid_section_internshipdetail'>
                  {skillsData.map((value) => (
                  <div key={value} className="skill_section_internshipdetail">
                    <p>{value}</p>
                  </div>
                  ))}
                </div>

                <div className='lower_mid_section_internshipdetail'>
                  <div className='lower_top_internshipdetail'>
                    <HiOutlineLocationMarker className='general_icons_internshipdetail' />
                    <p>Delhi, India</p>
                  </div>

                  <div className='lower_bottom_internshipdetail'>
                    <div className='info_container_internshipdetail'>
                      <div className='info_upper_container_internshipdetail'>
                        <BsPlayCircle className='general_icons_internshipdetail' />
                        <p>START DATE</p>
                      </div>
                      <div className='info_lower_container_internshipdetail'>
                        <p>22 Aug' 2022</p>
                      </div>
                    </div>

                    <div className='info_container_internshipdetail'>
                      <div className='info_upper_container_internshipdetail'>
                        <IoCalendarClearOutline className='general_icons_internshipdetail' />
                        <p>DURATION</p>
                      </div>
                      <div className='info_lower_container_internshipdetail'>
                        <p>6 months</p>
                      </div>
                    </div>

                    <div className='info_container_internshipdetail'>
                      <div className='info_upper_container_internshipdetail'>
                        <FaRegMoneyBillAlt className='general_icons_internshipdetail' />
                        <p>STIPEND</p>
                      </div>
                      <div className='info_lower_container_internshipdetail'>
                        <p>6K - 10K</p>
                      </div>
                    </div>

                    <div className='info_container_internshipdetail'>
                      <div className='info_upper_container_internshipdetail'>
                        <AiOutlineFieldTime className='general_icons_internshipdetail' />
                        <p>MODE</p>
                      </div>
                      <div className='info_lower_container_internshipdetail'>
                        <p>5-6 hours / day</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='bottom_section_internship_internshipdetail'>
                <div className='bottom_upper_section_internshipdetail'>
                    <BsPeople className="applicants_icon_internshipdetail" />
                    <p>60 applicants</p>
                </div>
                <div className='bottom_lower_section_internshipdetail'>
                    <div className='line_internshipdetail'></div>

                    <h3>About the Internship</h3>
                    <div className='para_internshipdetail'>
                    <p>On one hand, you will get to work with Instructional Designers & Subject Matter Experts to create videos that teach complex concepts in a really simple and easy-to-understand manner; on the other hand, you will work with marketers and content writers to come up with engaging high impact brand videos for different campaigns.

Specifically, you will work on the following -

1. Participate in the studio and in-office video shoots.
2. Assist in audio recording, audio production, and editing.
3. Work on a wide variety of video projects ranging from animated videos, gifs, and reels, to live-shot videos, short films, documentaries, etc.
4. Constantly upgrade yourself with the latest technology in the field of video making and audio engineering.
5. Create trendy and engaging videos.</p>
                    </div>

                    <h4>Perks</h4>
                    <div className='perks_container_internshipdetail'>
                        <div className="skill_section_internshipdetail">
                            <p>Certificate</p>
                        </div>
                    </div>
                    <h4>Number of openings</h4>
                    <p>5</p>
                </div>



                <div className='bottom_lower_section_internshipdetail'>
                    <div className='line_internshipdetail'></div>

                    <h3>About the Company</h3>
                    <div className='para_internshipdetail'>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>

                    <h4>Location</h4>
                    <div className='perks_container_internshipdetail'>
                      <p>Delhi, India</p>
                    </div>
                    <h4>Company Representative</h4>
                    <p>Gautam Chopra&nbsp; |&nbsp; H.R</p>
                </div>
              </div>

              <div className='button_section_internshipdetail'>
                <button className='btn_primary_internshipdetail'>Apply Now</button>
              </div>
            </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default InternshipDetail;
