import React from 'react';
import "../../../components/company/css/AppliedInternshipContainerStyles.css";
import { Link, useNavigate } from "react-router-dom";
import { BsFillBarChartFill } from "react-icons/bs";
import { AiOutlineInfoCircle } from "react-icons/ai";

const AppliedInternshipContainer = () => {
    const navigate = useNavigate();

    const skillsData = ["HTML", "CSS", "JS", "NodeJs", "ExpressJs"];
  return (
    <div>
      <div className='internship_container_appliedinternship'>
          <div className='top_section_internship_appliedinternship'>
            <div className='left_section_internship_appliedinternship'>
              <h2>Front-End</h2>
              <h4>Google</h4>
            </div>
            <div className='right_section_internship_appliedinternship'>
              <div className='experience_icon_container_appliedinternship'>
                <BsFillBarChartFill className="experience_icon_appliedinternship" />
                <p>Beginner</p>
                <AiOutlineInfoCircle className="info_icon_appliedinternship" />
              </div>
              <div className={true ? 'active_icon_container' : 'false_icon_container'}>
                <p>{true ? "Active" : "Closed"}</p>
              </div>
            </div>
          </div>

          <div className='mid_section_internship_appliedinternship'>
            <div className='status_container_appliedinternship'>
              <div className='experience_icon_container2_appliedinternship'>
                <BsFillBarChartFill className="experience_icon_appliedinternship" />
                <p>Beginner</p>
                <AiOutlineInfoCircle className="info_icon_appliedinternship" />
              </div>

              <div className={true ? 'active_icon2_container' : 'false_icon2_container'}>
                <p>{true ? "Active" : "Closed"}</p>
              </div>
            </div>

            <div className='upper_mid_section_appliedinternship'>
              <div className="skill_section_appliedinternship">
                <p>Applied</p>
              </div>
            </div>
          </div>

          <div className='bottom_section_internship_appliedinternship'>
            <p>Applied on 2nd Aug' 2022</p>
            <button onClick={() => navigate(`/company/internship`)} className='btn_primary_appliedinternship'>View Details</button>
          </div>

        </div>
    </div>
  )
}

export default AppliedInternshipContainer
