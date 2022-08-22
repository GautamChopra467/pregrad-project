import React, { useState,useEffect } from 'react';
import "../../../components/company/css/UserCompany/ApplicantsCompanyStyles.css";
import { FiFileText } from 'react-icons/fi';
import { useNavigate } from "react-router-dom";
import { AiOutlineFileSearch } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import axios from 'axios'

const ApplicantsCompany = () => {
  
    const navigate = useNavigate();

    var iid = window.location.search.substring(1).split("=")[1];
    
    const [isContent, setIsContent] = useState(true);

    const [showapplied,setShowApplied] = useState([])

    let [totalApplied,setTotalApplied] = useState(0)

    let [count,setCount] = useState(0)
 
    const changeAccepted = (id) => {
      setShowApplied(showapplied.map((e)=>{
        if(e.id === id){
         if(e.status === true){
          setCount(--count)
           return {...e,status:false,class:"student_box_applicantscompany accept_applicantscompany"}
         }else{
           return {...e,status:false,class:"student_box_applicantscompany accept_applicantscompany"}
         }
        }else{
           return e;
        }
    }))
         }
    
         const showApplicants = async()=>{

              const {data} = await  axios.get(`http://localhost:8000/company/application/${iid}`)
                setShowApplied(data.candidates)
                setTotalApplied(data.length)

         }

    useEffect(()=>{
      showApplicants()
},[])


    const changeRejected = (id) => {
      setShowApplied(showapplied.map((e)=>{
         if(e.id === id){
          if(e.status === true){
            return {...e,status:undefined,class:"student_box_applicantscompany"}
          }else{
            setCount(++count)
            return {...e,status:true,class:"student_box_applicantscompany reject_applicantscompany"}
          }
         }else{
            return e;
         }
     }))
    }

    const deleteRejectedApplicant = async()=>{

        const {data} = await axios.put(`http://localhost:8000/company/rejectedapplicants/${iid}`,[
          ...showapplied
      ])
      if(data.status){
        showApplicants()
        setCount(0)
      }
}

  return (
    <div>
      <div className='sub_header_applicantscompany'>
        <h5>Applicants <span>({totalApplied})</span></h5>
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
           {
            showapplied.map((application)=>(
              (application.internshipstatus === "Rejected"?"":(
                <div className={application.status == undefined ? "student_box_applicantscompany":(application.status == true?application.class:application.class)} key={application.id}>
                <div className='top_section_student_applicantscompany'>
                  <h2>{application.name}</h2>
                  <div className='search_icon_container_applicantscompany'>
                    <AiOutlineFileSearch className="search_icon_applicantscompany" />
                  </div>
                </div>
                <div className='mid_section_applicantscompany'>
                <div className='mid_top_section_applicantscompany'>
                      <div>
                        <input type="radio" id={`accept${application.id}`} name={`${application.id}`} onClick={()=>changeAccepted(application.id)} value={`accept${application.id}`} />
                        <label htmlFor={`accept${application.id}`}></label>
                        <p>Accept</p>
                      </div>
                      <div>
                        <input type="radio" id={`reject${application.id}`} name={`${application.id}`} onClick={()=>changeRejected(application.id)} value={`reject${application.id}`} disabled={(application.status === undefined)?false:(application.status === true)?true:false}/>
                        <label htmlFor={`reject${application.id}`}></label>
                        <p>Reject</p>
                      </div>
                    </div>
                </div>       
            </div>
              ))
            ))
            }
          </div>
          <div className='delete_box_applicantscompany' onClick={deleteRejectedApplicant}>
            <FaTrashAlt className="delete_icon_applicantscompany" />
            <p>Delete Rejected Ones  ({count})</p>
          </div>
          </>
          )
        }
      </div>
    </div>
  )
}

export default ApplicantsCompany