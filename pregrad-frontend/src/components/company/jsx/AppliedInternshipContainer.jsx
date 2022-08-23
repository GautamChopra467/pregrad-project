import React,{useEffect,useState} from 'react';
import "../../../components/company/css/AppliedInternshipContainerStyles.css";
import { Link, useNavigate,useParams } from "react-router-dom";
import { BsFillBarChartFill } from "react-icons/bs";
import { AiOutlineInfoCircle } from "react-icons/ai";


const AppliedInternshipContainer = ({appliedinternship,getAppliedInternship}) => {

  const {id} = useParams()

    const navigate = useNavigate();

    const skillsData = ["HTML", "CSS", "JS", "NodeJs", "ExpressJs"];

    useEffect(()=>{
      getAppliedInternship()
    },[])


  return (
   <>
   {
     (appliedinternship == undefined)?"":appliedinternship.map((applied)=>(
      <div key={applied._doc._id}>
      <div className='internship_container_appliedinternship'>
          <div className='top_section_internship_appliedinternship'>
            <div className='left_section_internship_appliedinternship'>
              <h2>{applied._doc.title}</h2>
              <h4>{applied.companyname}</h4>
            </div>
            <div className='right_section_internship_appliedinternship'>
              <div className='experience_icon_container_appliedinternship'>
                <BsFillBarChartFill className="experience_icon_appliedinternship" />
                <p>{applied._doc.experience}</p>
                <AiOutlineInfoCircle className="info_icon_appliedinternship" />
              </div>
              <div className={(applied._doc.status) ? 'active_icon_container_appliedinternship' : 'false_icon_container_appliedinternship'}>
                <p>{(applied._doc.status) ? "Active" : "Closed"}</p>
              </div>
            </div>
          </div>

          <div className='mid_section_internship_appliedinternship'>
            <div className='status_container_appliedinternship'>
              <div className='experience_icon_container2_appliedinternship'>
                <BsFillBarChartFill className="experience_icon_appliedinternship" />
                <p>{applied._doc.experience}</p>
                <AiOutlineInfoCircle className="info_icon_appliedinternship" />
              </div>

              <div className={(applied._doc.status) ? 'active_icon2_container_appliedinternship' : 'false_icon2_container'}>
                <p>{(applied._doc.status) ? "Active" : "Closed"}</p>
              </div>
            </div>

            <div className='upper_mid_section_appliedinternship'>
              <div className="skill_section_appliedinternship">
                {
                applied._doc.applied.map((value)=>(
                  <p>{(value.id == id)?value.status:""}</p>
                ))
              }
              </div>
            </div>
          </div>

          <div className='bottom_section_internship_appliedinternship'>
            <p>Applied on 2nd Aug' 2022</p>
            <button onClick={() => navigate(`/company/internship/${applied._doc._id}?cid=${applied._doc.id}`)} className='btn_primary_appliedinternship'>View Details</button>
          </div>

        </div>
    </div>
     ))
   }

   </>
  )
}

export default AppliedInternshipContainer
