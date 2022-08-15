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

const InternshipContainerStudent = ({internship}) => {

    const ref = useRef();

    const navigate = useNavigate();

    const {id} = useParams()

    const skillsData = ["HTML", "CSS", "JS", "NodeJs", "ExpressJs"];
   
    const [modalId,setModalId] = useState()

    const [status,setStatus] = useState(true)

    const [companyname,setCompanyname] = useState()

    const [headquaters,setHeadquaters] = useState()


const callforname = (id)=>{
   
    axios.get(`http://localhost:8000/company/getcompanyinfo/${id}`).then(({data})=>{
        setCompanyname(data.companyname)
    })

    return companyname

}

const callforheadquaters = (id)=>{
   
    axios.get(`http://localhost:8000/company/getcompanydetails/${id}`).then(({data})=>{
        setHeadquaters(data.headquaters)
    })

    return headquaters

}

const applyInternship = (iid)=>{

    axios.post(`http://localhost:8000/student/appliedinternship/${id}`,{
        iid
    })

}

  return (
    <>
    {
      internship.map((intern)=>(
      <div  key={intern._id}>
          <div className='internship_container_listingscompany'>
          <div className='top_section_internship_listingscompany'>
            <div className='left_section_internship_listingscompany'>
              <h2>{intern.title}</h2>
              <h4>{callforname(intern.id)}</h4>
            </div>
            <div className='right_section_internship_listingscompany'>
              <div className='experience_icon_container_listingscompany'>
                <BsFillBarChartFill className="experience_icon_listingscompany" />
                <p>{intern.experience}</p>
                <AiOutlineInfoCircle className="info_icon_listingscompany" />
              </div>
              <div className={(intern.status) ? 'active_icon_container' : 'false_icon_container'}>
                <p>{(intern.status) ? "Active" : "Closed"}</p>
              </div>
            </div>
          </div>

          <div className='mid_section_internship_listingscompany'>
            <div className='status_container_listingscompany'>
              <div className='experience_icon_container2_listingscompany'>
                <BsFillBarChartFill className="experience_icon_listingscompany" />
                <p>{intern.experience}</p>
                <AiOutlineInfoCircle className="info_icon_listingscompany" />
              </div>

              <div className={(intern.status) ? 'active_icon2_container' : 'false_icon2_container'}>
                <p>{(intern.status) ? "Active" : "Closed"}</p>
              </div>
            </div>

            <div className='upper_mid_section_listingscompany'>
              {intern.skills.map((value) => (
              <div key={value} className="skill_section_listingscompany">
                <p>{value}</p>
              </div>
              ))}
            </div>

            <div className='lower_mid_section_listingscompany'>
              <div className='lower_top_listingscompany'>
                <HiOutlineLocationMarker className='general_icons_listingscompany' />
                <p>{callforheadquaters(intern.id)}</p>
              </div>
 
              <div className='lower_bottom_listingscompany'>
                <div className='info_container_listingscompany'>
                  <div className='info_upper_container_listingscompany'>
                    <BsPlayCircle className='general_icons_listingscompany' />
                    <p>START DATE</p>
                  </div>
                  <div className='info_lower_container_listingscompany'>
                    <p>{intern.startfrom}</p>
                  </div>
                </div>

                <div className='info_container_listingscompany'>
                  <div className='info_upper_container_listingscompany'>
                    <IoCalendarClearOutline className='general_icons_listingscompany' />
                    <p>DURATION</p>
                  </div>
                  <div className='info_lower_container_listingscompany'>
                    <p>{intern.duration} months</p>
                  </div>
                </div>

                <div className='info_container_listingscompany'>
                  <div className='info_upper_container_listingscompany'>
                    <FaRegMoneyBillAlt className='general_icons_listingscompany' />
                    <p>STIPEND</p>
                  </div>
                  <div className='info_lower_container_listingscompany'>
                    <p>{intern.stipend.minimum} - {intern.stipend.maximum}</p>
                  </div>
                </div>

                <div className='info_container_listingscompany'>
                  <div className='info_upper_container_listingscompany'>
                    <AiOutlineFieldTime className='general_icons_listingscompany' />
                    <p>MODE</p>
                  </div>
                  <div className='info_lower_container_listingscompany'>
                    <p>{intern.jobmode}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='bottom_section_internship_listingscompany'>
           {(intern.status)?<button className='btn_primary_listingscompany' onClick={()=>applyInternship(intern._id)}>Apply</button>:<button className='btn_primary_listingscompany'>Closed</button>} 
            <Link to={`/company/internship/${intern._id}?cid=${intern.id}`}>View details &gt;</Link>
          </div>

        </div>        
    </div>
))
}
</>
  )
}

export default InternshipContainerStudent
