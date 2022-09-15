import React, { useState } from 'react';
import "../../../components/admin/css/UserAdmin/ReportCandidatesStyles.css";
import { FiFileText } from 'react-icons/fi';
import PageLoader from "../../../img/page-loader.gif";
import { Link } from 'react-router-dom';
import { AiOutlineFileSearch } from 'react-icons/ai';


const ReportCandidates  = () => {

  const [isPageLoading, setIsPageLoading] = useState(false);
  const [isContent, setIsContent] = useState(true);


  return (
    <div>
      <div className='sub_header_reportcandidates '>
        <h5>Report Candidates <span>(0)</span></h5>
      </div>

      {isPageLoading ? (
        <div className='page_loading_container_reportcandidates '>
          <img src={PageLoader} alt="Loading" />
        </div>
      ) : (
        <div className='main_container_reportcandidates '>
          <div className='main_box_reportcandidates '>
            
          {isContent ?  (
            <div className='student_box_reportcandidates '>
            <div className='top_section_student_reportcandidates '>
              <h2>Gautam Chopra</h2>
              <Link target="_blank" to={`/resume`}>
              <div className='search_icon_container_reportcandidates '>
                <AiOutlineFileSearch className="search_icon_reportcandidates " />
              </div>
              </Link>
            </div>
            <div className='mid_section_reportcandidates '>
              <p><span>Report Reason - </span>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown ...</p>
            </div>       
        </div>
          ) : (
            <div className='add_section1_reportcandidates '>
              <div className='add_section1_logo_reportcandidates '>
                <FiFileText size={30} className="add_section1_icon_reportcandidates " />
              </div>
              <div className='add_section1_details_reportcandidates '>
                <h2>No new companies available</h2>
                <p>No companies have been registered yet.</p>
              </div>
            </div>
          )}
          </div>
         
      </div>
      )}
    </div>
  )
}

export default ReportCandidates  
