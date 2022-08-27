import React,{useEffect, useState} from 'react';
import "../../../components/student/css/UserStudent/InternshipsStyles.css";
import { BiHeading } from 'react-icons/bi';
import { useNavigate,useParams } from "react-router-dom";
import axios from 'axios'
import {useCookies} from 'react-cookie'
import AppliedInternshipContainer from '../../../components/company/jsx/AppliedInternshipContainer';
import InternshipContainerStudent from '../../../components/student/jsx/InternshipContainerStudent';
import PageLoader from "../../../img/page-loader.gif";


const Internships = () => {


  const navigate = useNavigate()

   const {id} = useParams()

   const [companyid,setCompanyId] = useState()

   const [internships,setInternships] = useState([])

   const [appliedinternship,setappliedInternship] = useState([])

  const [cookies,setCookie,removeCookie] = useCookies([]);

  const [currentPage, setCurrentPage] = useState("new-internships");

  const [isPageLoading, setIsPageLoading] = useState(false);


const getAllInterships = ()=>{
  axios.get(`http://localhost:8000/company/allinternships/${id}`).then(({data})=>{
    console.log(data)
    setInternships(data)
    setTimeout(() => {
      setIsPageLoading(false)
    },800)
  })
}

const getAppliedInternship = ()=>{
   axios.get(`http://localhost:8000/student/getappliedinternship/${id}`).then(({data})=>{
    setappliedInternship(data)
    setTimeout(() => {
      setIsPageLoading(false)
    },800)
  })
}

useEffect(()=>{
  const verifyUser = async()=>{
    if(!cookies.jwt){
      
      navigate('/login')
    }else{
      const {data} = await axios.post(`http://localhost:8000/student`,{},{withCredentials:true}) 
      if(data.id !== id || data.status !== true){
        removeCookie("jwt")
        navigate('/login')
      }else{
        setIsPageLoading(true)
        navigate(`/student/${id}/internships`)
        getAllInterships()
        getAppliedInternship()
      }
    }
  }
  verifyUser()
},[cookies,removeCookie,navigate])

  return (
    <div>
      <div className='sub_header_internships'>
        <h5>Internships</h5>
      </div>
      <div className='current_page_section_internships'>
        <div onClick={() => setCurrentPage("new-internships")}  className={currentPage === "new-internships" ? 'left_current_section_internships active_internships' : 'left_current_section_internships'}>
          <p>New Internships</p>
        </div>
        <div className='line_internships'></div>
        <div onClick={() => setCurrentPage("applied")} className={currentPage === "applied" ? 'right_current_section_internships active_internships' : 'right_current_section_internships'}>
          <p>Applied</p>
        </div>
      </div>
      {isPageLoading ? (
        <div className='page_loading_container_internships'>
          <img src={PageLoader} alt="Loading" />
        </div>
      ) : (
        <div className='main_container_internships'>
        {currentPage === "new-internships" && (
          <InternshipContainerStudent internship={(internships==undefined)?"":internships} getAllInterships={getAllInterships}/>
        )}

        {currentPage === "applied" && (
            <AppliedInternshipContainer appliedinternship={appliedinternship} getAppliedInternship={getAppliedInternship}/>
        )}
        </div>
      )}
      
    </div>
  )
}

export default Internships;
