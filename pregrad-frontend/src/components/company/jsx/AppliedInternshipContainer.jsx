import React,{useEffect,useState} from 'react';
import "../../../components/company/css/AppliedInternshipContainerStyles.css";
import { Link, useNavigate,useParams } from "react-router-dom";
import { BsFillBarChartFill } from "react-icons/bs";
import { AiOutlineInfoCircle } from "react-icons/ai";
import ReactTooltip from 'react-tooltip';


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
              <div className={applied._doc.experience === "Beginner" ? 'experience_icon_container_appliedinternship beginner_appliedinternship' : (applied._doc.experience === "Intermediate" ? 'experience_icon_container_appliedinternship intermediate_appliedinternship' : 'experience_icon_container_appliedinternship expert_appliedinternship')}>
                <BsFillBarChartFill className="experience_icon_appliedinternship" />
                <p>{applied._doc.experience}</p>
                {applied._doc.experience === "Beginner" && (
                       <AiOutlineInfoCircle  currentitem="false" className="info_icon_listingscompany" data-tip="The candidate should have<br /> atleast 1 project" />
                    )}

                    {applied._doc.experience === "Intermediate" && (
                       <AiOutlineInfoCircle  currentitem="false" className="info_icon_listingscompany" data-tip="The candidate should have<br /> either 1 work experience OR 2 projects" />
                    )}
                    
                    {applied._doc.experience === "Expert" && (
                       <AiOutlineInfoCircle  currentitem="false" className="info_icon_listingscompany" data-tip="The candidate should have<br /> both 1 work experience AND 2 projects" />
                    )}
              
                    <ReactTooltip place="bottom" data-background-color="#1e272e" effect="solid" delayShow={800} data-event-off="click" multiline={true} />
                  

              </div>
              <div className={(applied._doc.status) ? 'active_icon_container_appliedinternship' : 'false_icon_container_appliedinternship'}>
                <p>{(applied._doc.status) ? "Active" : "Closed"}</p>
              </div>
            </div>
          </div>

          <div className='mid_section_internship_appliedinternship'>
            <div className='status_container_appliedinternship'>
              <div className={applied._doc.experience === "Beginner" ? 'experience_icon_container2_appliedinternship beginner_appliedinternship' : (applied._doc.experience === "Intermediate" ? 'experience_icon_container2_appliedinternship intermediate_appliedinternship' : 'experience_icon_container2_appliedinternship expert_appliedinternship')}>
                <BsFillBarChartFill className="experience_icon_appliedinternship" />
                <p>{applied._doc.experience}</p>
                <AiOutlineInfoCircle className="info_icon_appliedinternship" />
              </div>

              <div className={(applied._doc.status) ? 'active_icon2_container_appliedinternship' : 'false_icon2_container'}>
                <p>{(applied._doc.status) ? "Active" : "Closed"}</p>
              </div>
            </div>

            <div className='upper_mid_section_appliedinternship'>
              {/* <div className="skill_section_appliedinternship">
                {
                applied._doc.applied.map((value)=>(
                  <p>{(value.id == id)?value.status:""}</p>
                ))
              }
              </div> */}
              {
                applied._doc.applied.map((value)=>(
                  (value.id === id) ? (<div className={value.status === "Applied" ? "skill_section_appliedinternship applied_status_appliedinternship" : (
                    value.status === "Hired" ? "skill_section_appliedinternship accepted_status_appliedinternship" : (value.status === "Rejected" ? "skill_section_appliedinternship rejected_status_appliedinternship" : "skill_section_appliedinternship shortlisted_status_appliedinternship")
                  ) }>
                    <p>{value.status}</p>
                  </div>) : ("")
                  
                ))
              }
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
