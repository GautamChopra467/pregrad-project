import React, { useEffect, useState, useRef } from 'react';
import "../../company/css/UserCompany/ListingsCompanyStyles.css";
import { Link, useNavigate,useParams } from "react-router-dom";
import { BsFillBarChartFill, BsPlayCircle } from "react-icons/bs";
import { AiOutlineFieldTime, AiOutlineInfoCircle } from "react-icons/ai";
import { HiOutlineLocationMarker, HiOutlinePencil } from "react-icons/hi";
import { IoCalendarClearOutline } from "react-icons/io5";
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { FiClipboard } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import axios from 'axios'

const InternshipContainerStudent = ({internship,getAppliedInternship}) => {

    const ref = useRef();

    const navigate = useNavigate();

    const {id} = useParams()

    const skillsData = ["HTML", "CSS", "JS", "NodeJs", "ExpressJs"];


const applyInternship = (iid)=>{

    axios.post(`http://localhost:8000/student/appliedinternship/${id}`,{
        iid
    })
    getAppliedInternship()
}

  return (
    <>

      {
        (internship == undefined)?"":internship.map((intern)=>(

          <div key={intern._doc._id}>
              <div className='internship_container_listingscompany'>
              <div className='top_section_internship_listingscompany'>
                <div className='left_section_internship_listingscompany'>
                  <h2>{intern._doc.title}</h2>
                  <h4>{intern.companyname}</h4>
                </div>
                <div className='right_section_internship_listingscompany'>
                  <div className='experience_icon_container_listingscompany'>
                    <BsFillBarChartFill className="experience_icon_listingscompany" />
                     <p>{intern._doc.experience}</p>
                    <AiOutlineInfoCircle className="info_icon_listingscompany" />
                  </div>
                  <div className={(intern._doc.status) ? 'active_icon_container' : 'false_icon_container'}>
                    <p>{(intern._doc.status) ? "Active" : "Closed"}</p>
                   </div>
                </div>
              </div>
    
              <div className='mid_section_internship_listingscompany'>
                <div className='status_container_listingscompany'>
                  <div className='experience_icon_container2_listingscompany'>
                    <BsFillBarChartFill className="experience_icon_listingscompany" />
                    <p>{intern._doc.experience}</p>
                    <AiOutlineInfoCircle className="info_icon_listingscompany" />
                  </div>
                  <div className={(intern._doc.status) ? 'active_icon2_container' : 'false_icon2_container'}>
                    <p>{(intern._doc.status) ? "Active" : "Closed"}</p>
                   </div>
                </div>
    
                 <div className='upper_mid_section_listingscompany'>
                  {intern._doc.skills.map((value) => (
                  <div key={value} className="skill_section_listingscompany">
                    <p>{value}</p>
                  </div>
                  ))}
                </div>
                <div className='lower_mid_section_listingscompany'>
                  <div className='lower_top_listingscompany'>
                    <HiOutlineLocationMarker className='general_icons_listingscompany' />
                    <p>{intern.headquaters}</p>
                  </div>
     
                  <div className='lower_bottom_listingscompany'>
                    <div className='info_container_listingscompany'>
                      <div className='info_upper_container_listingscompany'>
                        <BsPlayCircle className='general_icons_listingscompany' />
                        <p>START DATE</p>
                      </div>
                      <div className='info_lower_container_listingscompany'>
                        <p>{intern._doc.startfrom}</p>
                      </div>
                    </div>
    
                    <div className='info_container_listingscompany'>
                      <div className='info_upper_container_listingscompany'>
                        <IoCalendarClearOutline className='general_icons_listingscompany' />
                        <p>DURATION</p>
                      </div>
                      <div className='info_lower_container_listingscompany'>
                        <p>{intern._doc.duration} months</p>
                      </div>
                    </div>
    
                    <div className='info_container_listingscompany'>
                      <div className='info_upper_container_listingscompany'>
                        <FaRegMoneyBillAlt className='general_icons_listingscompany' />
                        <p>STIPEND</p>
                      </div>
                      <div className='info_lower_container_listingscompany'>
                        <p>{intern._doc.stipend.minimum} - {intern._doc.stipend.maximum}</p>
                      </div>
                    </div>
    
                    <div className='info_container_listingscompany'>
                      <div className='info_upper_container_listingscompany'>
                        <AiOutlineFieldTime className='general_icons_listingscompany' />
                        <p>MODE</p>
                      </div>
                      <div className='info_lower_container_listingscompany'>
                        <p>{intern._doc.jobmode}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='bottom_section_internship_listingscompany'>
               {(intern._doc.status)?<button className='btn_primary_listingscompany' onClick={()=>applyInternship(intern._doc._id)}>Apply</button>:<button className='btn_primary_listingscompany'>Closed</button>} 
                <Link to={`/company/internship/${intern._doc._id}?cid=${intern._doc.id}`}>View details &gt;</Link>
              </div>
    
            </div>        
        </div>
        ))
      }

    </>
  )
}

export default InternshipContainerStudent
