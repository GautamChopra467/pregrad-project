import React, { useState } from 'react';
import "../../../components/company/css/UserCompany/ApplicantsCompanyStyles.css";
import { FiFileText } from 'react-icons/fi';
import { useNavigate } from "react-router-dom";
import { AiOutlineFileSearch } from "react-icons/ai";

const ApplicantsCompany = () => {
  
    const navigate = useNavigate();
    
    const [isContent, setIsContent] = useState(true);

    const [accepted, setAccepted] = useState(false);
    const [rejected, setRejected] = useState(false);

    const changeAccepted = () => {
      setAccepted(!accepted) 
      setRejected(false)
      setStatusClassName("student_box_applicantscompany accept_applicantscompany")
      if(accepted === true && rejected === false){
        console.log("hii")
        setStatusClassName("student_box_applicantscompany")
      }





      // console.log("1",accepted, rejected)
      // setAccepted(!accepted) 
      // setRejected(false)
      // setStatusClassName("student_box_applicantscompany accept_applicantscompany")
      // if(rejected === true && accepted === false){
      //   setStatusClassName("student_box_applicantscompany")
      // }
    }

    const changeRejected = () => {
      console.log("2",accepted, rejected)
      setRejected(!rejected)
      setAccepted(false)
      setStatusClassName("student_box_applicantscompany reject_applicantscompany")
      if(rejected === true && accepted === false){
        setStatusClassName("student_box_applicantscompany")
      }
    }

    const [status, setStatus] = useState("none");
    const [statusClassName, setStatusClassName] = useState("student_box_applicantscompany")

    const checkStatusClassName = () => {
      if(status == "none"){
         setStatusClassName("student_box_applicantscompany")       
      }
      if(status == "accept"){
        
      }else {
        
      }
    }

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
            <div className={statusClassName}>
                <div className='top_section_student_applicantscompany'>
                  <h2>Gautam Chopra</h2>
                  <div className='search_icon_container_applicantscompany'>
                    <AiOutlineFileSearch className="search_icon_applicantscompany" />
                  </div>
                </div>
                <div className='mid_section_applicantscompany'>
                <div className='mid_top_section_applicantscompany'>
                      <div>
                        <input type="checkbox" id="cb1" onClick={changeAccepted} checked={accepted} />
                        <label for="cb1"></label>
                        <p>Accept</p>
                      </div>
                      <div>
                        <input type="checkbox" id="cb2" onClick={changeRejected} checked={rejected} />
                        <label for="cb2"></label>
                        <p>Reject</p>
                      </div>
                    </div>
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
