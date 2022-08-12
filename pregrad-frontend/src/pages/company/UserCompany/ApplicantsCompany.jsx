import React, { useState } from 'react';
import "../../../components/company/css/UserCompany/ApplicantsCompanyStyles.css";
import { FiFileText } from 'react-icons/fi';
import { useNavigate } from "react-router-dom";

const ApplicantsCompany = () => {
    const navigate = useNavigate();
    
    const [isContent, setIsContent] = useState(true);
  return (
    <div>
      <div className='sub_header_applicantscompany'>
        <h5>Applicants <span>(1)</span></h5>
      </div>

      <div className='main_container_applicantscompany'>
        {!isContent ? (
          <div className='add_section1_applicantscompany'>
          <div className='add_section1_logo_applicantscompany'>
          <FiFileText size={30} className="add_section1_icon_applicantscompany" />
          </div>
          <div className='add_section1_details_applicantscompany'>
            <h2>No applicants available</h2>
            <p>No applicants have applied for this internship yet.</p>
          </div>
          <button className='btn_primary_applicantscompany' onClick={() => navigate("/company/info/addinternship")}>Post New Internship</button>
        </div>
        ) : (
          <div className='main_box_applicantscompany'>
            <div className='student_box_applicantscompany'>
                <div className='top_section_student_applicantscompany'>
                    <h2>Gautam Chopra</h2>
                </div>
            </div>
          </div>
          )
        }
      </div>
    </div>
  )
}

export default ApplicantsCompany
