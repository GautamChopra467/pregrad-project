import React,{useEffect,useState} from 'react';
import "../../components/company/css/InternshipDetailStyles.css";
import HeaderAuth from '../../components/student/jsx/HeaderAuth';
import { BsFillBarChartFill, BsPeople, BsPlayCircle } from "react-icons/bs";
import { AiOutlineFieldTime, AiOutlineInfoCircle } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoCalendarClearOutline } from "react-icons/io5";
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { MdOutlinePeopleAlt, MdPeopleAlt } from "react-icons/md";
import {useParams} from "react-router-dom"
import axios from 'axios'

const InternshipDetail = ({theme, setTheme}) => {

  const {i_id} = useParams()


  const [internship,setInternship] = useState({})

  const [internshipskills,setInternshipSkills] = useState([])

  const [internshipperks,setInternshipPerks] = useState({})

  const [internshipstipend,setInternshipStipend] = useState({})


    const skillsData = ["HTML", "CSS", "JS", "NodeJs", "ExpressJs"];

    useEffect(()=>{
      axios.get(`http://localhost:8000/company/internship/${i_id}`).then(({data})=>{
        setInternship(data) 
        setInternshipSkills(data.skills)
        setInternshipPerks(data.perks)
        setInternshipStipend(data.stipend)

      }) 
    },[]) 
 
  return ( 
    <div>
      <HeaderAuth theme={theme} setTheme={setTheme} />

        <div className='main_container_internshipdetail'>
      <div className='details_container_internshipdetail'>
        <div className='top_section_internshipdetail'>
            <h2>{internship.title} Developer Internship in Delhi at Google</h2>
        </div>

        <div className='main_internship_container_internshipdetail'>
            <div className='internship_container_internshipdetail'>
              <div className='top_section_internship_internshipdetail'>
                <div className='left_section_internship_internshipdetail'>
                  <h2>{internship.title}</h2>
                  <h4>Google</h4>
                </div>
                <div className='right_section_internship_internshipdetail'>
                  <div className='experience_icon_container_internshipdetail'>
                    <BsFillBarChartFill className="experience_icon_internshipdetail" />
                    <p>{internship.experience}</p>
                    <AiOutlineInfoCircle className="info_icon_internshipdetail" />
                  </div>
                  <div className='remote_container_internshipdetail'>
                    <p>{internship.jobtype}</p>
                  </div>
                </div>
              </div>

              <div className='mid_section_internship_internshipdetail'>
                <div className='status_container_internship_internshipdetail'>
                <div className='experience_icon_container2_internshipdetail'>
                    <BsFillBarChartFill className="experience_icon_internshipdetail" />
                    <p>{internship.experience}</p>
                    <AiOutlineInfoCircle className="info_icon_internshipdetail" />
                  </div>

                  <div className='remote_container2_internshipdetail'>
                    <p>{internship.jobtype}</p>
                  </div>
                </div> 

                <div className='upper_mid_section_internshipdetail'>
                  {internshipskills.map((value) => (
                  <div key={value} className="skill_section_internshipdetail">
                    <p>{value}</p>
                  </div>
                  ))} 
                </div>

                <div className='lower_mid_section_internshipdetail'>
                  <div className='lower_top_internshipdetail'>
                    <HiOutlineLocationMarker className='general_icons_internshipdetail' />
                    <p>Delhi, India</p>
                  </div>

                  <div className='lower_bottom_internshipdetail'>
                    <div className='info_container_internshipdetail'>
                      <div className='info_upper_container_internshipdetail'>
                        <BsPlayCircle className='general_icons_internshipdetail' />
                        <p>START DATE</p>
                      </div>
                      <div className='info_lower_container_internshipdetail'>
                        <p>{internship.startfrom}</p>
                      </div>
                    </div>

                    <div className='info_container_internshipdetail'>
                      <div className='info_upper_container_internshipdetail'>
                        <IoCalendarClearOutline className='general_icons_internshipdetail' />
                        <p>DURATION</p>
                      </div>
                      <div className='info_lower_container_internshipdetail'>
                        <p>{internship.duration} months</p>
                      </div>
                    </div>  

                    <div className='info_container_internshipdetail'>
                      <div className='info_upper_container_internshipdetail'>
                        <FaRegMoneyBillAlt className='general_icons_internshipdetail' />
                        <p>STIPEND</p>
                      </div>
                      <div className='info_lower_container_internshipdetail'>
                        <p>{internshipstipend.minimum} - {internshipstipend.maximum}</p>
                      </div>
                    </div>

                    <div className='info_container_internshipdetail'>
                      <div className='info_upper_container_internshipdetail'>
                        <AiOutlineFieldTime className='general_icons_internshipdetail' />
                        <p>MODE</p>
                      </div>
                      <div className='info_lower_container_internshipdetail'>
                        <p>{internship.jobmode}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='bottom_section_internship_internshipdetail'>
                <div className='bottom_upper_section_internshipdetail'>
                    <BsPeople className="applicants_icon_internshipdetail" />
                    <p>60 applicants</p>
                </div>
                <div className='bottom_lower_section_internshipdetail'>
                    <div className='line_internshipdetail'></div>

                    <h3>About the Internship</h3>
                    <div className='para_internshipdetail'>
                    <p>{internship.description}</p>
                    </div>

                    <h4>Perks</h4>
                    <div className='perks_container_internshipdetail'>
                    {
                    (internshipperks.certificate)?
                    <div className="skill_section_internshipdetail">
                      <p>Cerificate</p>
                    </div>:(
                    <div className="skill_section_internshipdetail" style={{display:'none'}}>
                      <p>Cerificate</p>
                    </div>)
                    }

{
                    (internshipperks.letter)?
                    <div className="skill_section_internshipdetail">
                      <p>Letter</p>
                    </div>:(
                    <div className="skill_section_internshipdetail" style={{display:'none'}}>
                      <p>Letter</p>
                    </div>)
                    }
                        {
                    (internshipperks.job)?
                    <div className="skill_section_internshipdetail">
                      <p>Job</p>
                    </div>:(
                    <div className="skill_section_internshipdetail" style={{display:'none'}}>
                      <p>Job</p>
                    </div>)
                    }
                        {
                    (internshipperks.bonus)?
                    <div className="skill_section_internshipdetail">
                      <p>Bonus</p>
                    </div>:(
                    <div className="skill_section_internshipdetail" style={{display:'none'}}>
                      <p>Bonus</p>
                    </div>)
                    }
                    </div>
                    <h4>Number of openings</h4>
                    <p>{internship.noofemployees}</p>
                </div>



                <div className='bottom_lower_section_internshipdetail'>
                    <div className='line_internshipdetail'></div>

                    <h3>About the Company</h3>
                    <div className='para_internshipdetail'>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>

                    <h4>Location</h4>
                    <div className='perks_container_internshipdetail'>
                      <p>Delhi, India</p>
                    </div>
                    <h4>Company Representative</h4>
                    <p>Gautam Chopra&nbsp; |&nbsp; H.R</p>
                </div>
              </div>

              <div className='button_section_internshipdetail'>
                <button className='btn_primary_internshipdetail'>Apply Now</button>
              </div>
            </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default InternshipDetail;
