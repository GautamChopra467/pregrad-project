import React, { useState ,useEffect} from 'react';
import "../../../components/company/css/UserCompany/ListingsCompanyStyles.css";
import { FiFileText } from 'react-icons/fi';
import { useNavigate,useParams } from "react-router-dom";
import InternshipContainerCompany from '../../../components/company/jsx/InternshipContainerCompany';
import axios from 'axios'
import {useCookies} from 'react-cookie'

const ListingsCompany = () => {

  const navigate = useNavigate();

  const {id} = useParams()

  const [internships,setInternships] = useState([])

  const [cookies,setCookie,removeCookie] = useCookies([])

  const [isContent, setIsContent] = useState(true);

  const getInternship = ()=>{
    axios.get(`http://localhost:8000/company/getinternships/${id}`).then(({data})=>{
     setInternships(data)
    })
 }

  useEffect(()=>{
    if(!cookies.jwt){
      navigate('/login')
    }else{
      axios.post(`http://localhost:8000/company`,{},{
        withCredentials:true,
      }).then(({data})=>{
        if(data.id != id){
          removeCookie("jwt")
          navigate('/login')
        }else{ 
           navigate(`/company/info/${id}/listings`)
           getInternship()
        }
      })
  }
},[cookies,removeCookie,navigate])

  return (
    <div>
      <div className='sub_header_listingscompany'>
        <h5>My Listings <span>({internships.length})</span></h5>
      </div>

      <div className='main_container_listingscompany'>
        {!isContent ? (
          <div className='add_section1_listingscompany'>
          <div className='add_section1_logo_listingscompany'>
          <FiFileText size={30} className="add_section1_icon_listingscompany" />
          </div>
          <div className='add_section1_details_listingscompany'>
            <h2>No Listings</h2>
            <p>Add new internship to find your intern.</p>
          </div>
          <button className='btn_primary_listingscompany' onClick={() => navigate(`/company/info/${id}/addinternship`)}>+ Add New</button>
        </div>
        ) : (
          <div className='main_box_listingscompany'>
            <div className='main_details_container_listingscompany'>
              <InternshipContainerCompany internship={internships}/>            
            {/* <InternshipContainerCompany /> */}
          </div>


          <div className='right_section_container_listingscompany'>
            <div className='top_tc_section_listingscompany'>
              <h2>Important T&C Update</h2>
              <p>If you hire any candidate from Pregrad, it is mandatory to Send Offer from the platform. If you do not do so, we may take some action and you won't be allowed to use our services further.</p>
            </div>
        </div>
          </div>
        )}
      </div>

    </div>
  )
}

export default ListingsCompany
