import React, { useState } from 'react';
import "../../../components/admin/css/UserAdmin/ReportsStyles.css";
import { FiFileText } from 'react-icons/fi';
import PageLoader from "../../../img/page-loader.gif";
import { Link } from 'react-router-dom';
import { AiOutlineFileSearch } from 'react-icons/ai';


const Reports= () => {

  const [isPageLoading, setIsPageLoading] = useState(false);
  const [isContent, setIsContent] = useState(true);


  return (
    <div>
      <div className='sub_header_verification'>
        <h5>New Reports <span>(0)</span></h5>
      </div>
      
      {isPageLoading ? (
        <div className='page_loading_container_verification'>
          <img src={PageLoader} alt="Loading" />
        </div>
      ) : (
        <div className='main_container_verification'>
          <div className='main_box_verification'>
            
          {isContent ?  (
            <div className='student_box_verification'>
            <div className='top_section_student_verification'>
              <h2>Google</h2>
              <div className='top_left_section_verification'>
                <Link target="_blank" to="/" className='reports_link_verification'>
                  <p>View Reports</p>
                </Link>
                <Link target="_blank" to={`/resume`}>
                  <div className='search_icon_container_verification'>
                    <AiOutlineFileSearch className="search_icon_verification" />
                  </div>
                </Link>
              </div>
            </div>
            <div className='mid_section_verification'>
                <div className='mid_top_section_verification'>
                  <div>
                    <input type="radio" />
                    <label></label>
                    <p>Allow</p>
                  </div>
                  <div>
                    <input type="radio" />
                    <label></label>
                    <p>Block</p>
                  </div>
                </div>
            </div>       
        </div>
          ) : (
            <div className='add_section1_verification'>
              <div className='add_section1_logo_verification'>
                <FiFileText size={30} className="add_section1_icon_verification" />
              </div>
              <div className='add_section1_details_verification'>
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

export default Reports
