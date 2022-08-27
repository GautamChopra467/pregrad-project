import React, { useState,useEffect } from 'react';
import "../../../components/company/css/UserCompany/ApplicantsCompanyStyles.css";
import { FiFileText } from 'react-icons/fi';
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineFileSearch } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import axios from 'axios'
import NewApplicants from '../../../components/company/jsx/NewApplicants';
import ShortlistedApplicants from '../../../components/company/jsx/ShortlistedApplicants';
import HiredApplicants from '../../../components/company/jsx/HiredApplicants';

const ApplicantsCompany = () => {
  
    const navigate = useNavigate();

    var iid = window.location.search.substring(1).split("=")[1];
    
    const [isContent, setIsContent] = useState(true);

    const [showapplied,setShowApplied] = useState([])

    const [showshortlisted,setShortlisted] =  useState([])

    const [showhired,setHired] =  useState([])


    let [totalApplied,setTotalApplied] = useState(0)

    let [count,setCount] = useState(0)
 
         const showApplicants = async()=>{
              const {data} = await  axios.get(`http://localhost:8000/company/application/${iid}`)
                setShowApplied(data.appliedCandidates)
                setShortlisted(data.shortlistedCandidates)
                setHired(data.hiredCandidates)
                setTotalApplied(data.length)
         }

    useEffect(()=>{
      showApplicants()
},[])

 
  const [currentPage, setCurrentPage] = useState("new");

  return (
    <div>
      <div className='sub_header_applicantscompany'>
        <h5>Applicants <span>({showapplied.appliedCandidates === undefined ?0:showapplied.appliedCandidates.length})</span></h5>
      </div>

      <div className='current_page_section_applicantscompany'>
        <div onClick={() => setCurrentPage("new")}  className={currentPage === "new" ? 'new_current_section_applicantscompany active_applicantscompany' : 'new_current_section_applicantscompany'}>
          <p>Applied ({showapplied === undefined ?0:showapplied.length})</p>
        </div>
        <div className='line_applicantscompany'></div>
        <div onClick={() => setCurrentPage("shortlisted")} className={currentPage === "shortlisted" ? 'shortlisted_current_section_applicantscompany active_applicantscompany' : 'shortlisted_current_section_applicantscompany'}>
          <p>Shortlisted ({showshortlisted === undefined ?0:showshortlisted.length})</p>
        </div>
        <div className='line_applicantscompany'></div>
        <div onClick={() => setCurrentPage("hired")} className={currentPage === "hired" ? 'hired_current_section_applicantscompany active_applicantscompany' : 'hired_current_section_applicantscompany'}>
          <p>Hired ({showhired === undefined ?0:showhired.length})</p>
        </div>
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
          <>
          <div className='main_box_applicantscompany'>
          {currentPage === "new" && (
            <NewApplicants appliedCandidates={showapplied === undefined ? "":showapplied} showApplicants={showApplicants} appliedState={setShowApplied}/>
          )}

          {currentPage === "shortlisted" && (
            <ShortlistedApplicants shortlistedCandidates={showshortlisted === undefined ? "":showshortlisted} showApplicants={showApplicants} shortlistedState={setShortlisted}/>
          )}

          {currentPage === "hired" && (
            <HiredApplicants hiredCandidates={showhired === undefined ? "":showhired}/>
          )}
          </div>
          </>
          )
        }
      </div>
    </div>
  )
}

export default ApplicantsCompany



