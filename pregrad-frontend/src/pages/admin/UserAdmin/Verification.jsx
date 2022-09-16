import React, { useState,useEffect } from 'react';
import "../../../components/admin/css/UserAdmin/VerificationStyles.css";
import { FiFileText } from 'react-icons/fi';
import PageLoader from "../../../img/page-loader.gif";
import { Link } from 'react-router-dom';
import { AiOutlineFileSearch } from 'react-icons/ai';
import {useCookies} from 'react-cookie'
import {useNavigate,useParams}  from "react-router-dom"
import axios from "axios"

const Verification = () => {

  const navigate = useNavigate();

  const {id} = useParams();

  const [isPageLoading, setIsPageLoading] = useState(false);
  const [isContent, setIsContent] = useState(true);
  const [cookies,setCookie,removeCookie] = useCookies([])


  const getUnAuthorizedCompany = ()=>{
     axios.get(`http://localhost:8000/company/unauthorized`).then(({data})=>{
      console.log(data);
     })
  }

  useEffect(()=>{
    const verifyUser = async()=>{
      if(!cookies.jwt){
        console.log("Not found");
        navigate('/login')
      }else{

        const {data} = await axios.post(`http://localhost:8000/admin/checkadmin`,{},{withCredentials:true}) 
        if(data.id !== id || data.status !== true){
          console.log("Not found inside");
          removeCookie("jwt")
          navigate('/login')
        }else{
          getUnAuthorizedCompany();
        }
      }
    }
    verifyUser()
  },[cookies,removeCookie,navigate])

  return (
    <div>
      <div className='sub_header_verification'>
        <h5>New Companies <span>(0)</span></h5>
      </div>

      {isPageLoading ? (
        <div className='page_loading_container_projects'>
          <img src={PageLoader} alt="Loading" />
        </div>
      ) : (
        <div className='main_container_verification'>
          <div className='main_box_verification'>
            
          {isContent ?  (
            <div className='student_box_applicantscompany'>
            <div className='top_section_student_applicantscompany'>
              <h2>Google</h2>
              <Link target="_blank" to={`/resume`}>
              <div className='search_icon_container_applicantscompany'>
                <AiOutlineFileSearch className="search_icon_applicantscompany" />
              </div>
              </Link>
            </div>
            <div className='mid_section_applicantscompany'>
            <div className='mid_top_section_applicantscompany'>
                  <div>
                    <input type="radio" />
                    <label></label>
                    <p>Accept</p>
                  </div>
                  <div>
                    <input type="radio" />
                    <label></label>
                    <p>Reject</p>
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

export default Verification
