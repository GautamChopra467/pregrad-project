import React,{useEffect, useState} from 'react';
import "../../../components/student/css/UserStudent/InternshipsStyles.css";
import HeaderAuth from "../../../components/student/jsx/HeaderAuth";
import { BiHeading } from 'react-icons/bi';
import { useNavigate,useParams } from "react-router-dom";
import axios from 'axios'
import {useCookies} from 'react-cookie'
import AppliedInternshipContainer from '../../../components/company/jsx/AppliedInternshipContainer';
import InternshipContainerStudent from '../../../components/student/jsx/InternshipContainerStudent';


const Internships = () => {

  const navigate = useNavigate()

   const {id} = useParams()

   const [companyid,setCompanyId] = useState()

   const [internships,setInternships] = useState([])

   const [appliedinternhsipid,setappliedInternshipId] = useState()

  //  const [companydetails,setCompanyDetails] = useState({})

  // const [companyInfoDetails,setCompanyInfoDetails] = useState({})

  const [cookies,setCookie,removeCookie] = useCookies([]);

  const [currentPage, setCurrentPage] = useState("new-internships");

//   const getInternship = ()=>{
//     axios.get(`http://localhost:8000/company/getinternships/${id}`).then(({data})=>{
//       console.log(data)
//      setInternships(data)
//     })
//  }

//  const getCompanyInfo = ()=>{
//   axios.get(`http://localhost:8000/company/getcompanyinfo/${id}`).then(({data})=>{
//     console.log(data)

//   setCompanyDetails(data)
// })
// }

//  const getCompanyDetails = ()=>{
//   axios.get(`http://localhost:8000/company/getcompanydetails/${id}`).then(({data})=>{
//     console.log(data)

//     setCompanyInfoDetails(data)
// }) 
//  }

const getAllInterships = ()=>{
  axios.get(`http://localhost:8000/company/allinternships?page=1&size=2`).then(({data})=>{
    setInternships(data)
  })
}

const getAppliedInternship = ()=>{
  axios.get(`http://localhost:8000/student/getappliedinternship/${id}`).then(({data})=>{
    setappliedInternshipId(data)
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
       
        navigate(`/student/${id}/internships`)
        getAllInterships()
        getAppliedInternship()
        // getCompanyInfo()
        // getCompanyDetails()
        // getInternship()
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
      <div className='main_container_internships'>
        {currentPage === "new-internships" && (
          // "ha yhi hu"
          <InternshipContainerStudent internship={internships} />
        )}

        {currentPage === "applied" && (
          appliedinternhsipid.map((applied)=>(
            // console.log(applied)
            <AppliedInternshipContainer id={applied}/>
          ))
        )}
      </div>
      
    </div>
  )
}

export default Internships;
