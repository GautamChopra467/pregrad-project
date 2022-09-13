import React,{useEffect,useState} from 'react';
import "../../components/company/css/InternshipDetailStyles.css";
import HeaderAuth from '../../components/student/jsx/HeaderAuth';
import { BsFillBarChartFill, BsPeople, BsPlayCircle } from "react-icons/bs";
import { AiOutlineFieldTime, AiOutlineInfoCircle } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoCalendarClearOutline } from "react-icons/io5";
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { MdOutlinePeopleAlt, MdOutlineReportGmailerrorred, MdPeopleAlt, MdReport } from "react-icons/md";
import {useParams} from "react-router-dom"
import axios from 'axios'
import ReactTooltip from 'react-tooltip';

const InternshipDetail = ({theme, setTheme}) => {

  const {i_id} = useParams()

  var cid = window.location.search.substring(1).split("=")[1];

  const [internship,setInternship] = useState({})

  const [internshipskills,setInternshipSkills] = useState([])

  const [internshipperks,setInternshipPerks] = useState({})

  const [internshipstipend,setInternshipStipend] = useState({})

  const [companydetails,setCompanyDetails] = useState({})

  const [companyInfoDetails,setCompanyInfoDetails] = useState({})

    const skillsData = ["HTML", "CSS", "JS", "NodeJs", "ExpressJs"];

    const getInternship = ()=>{
      axios.get(`http://localhost:8000/company/internship/${i_id}`).then(({data})=>{
     
        setInternship(data) 
        setInternshipSkills(data.skills)
        setInternshipPerks(data.perks)
        setInternshipStipend(data.stipend)

      }) 
    }

    const getCompanyInfo = ()=>{
      axios.get(`http://localhost:8000/company/getcompanyinfo/${cid}`).then(({data})=>{
      setCompanyDetails(data)
    })
    }
    
     const getCompanyDetails = ()=>{
      axios.get(`http://localhost:8000/company/getcompanydetails/${cid}`).then(({data})=>{
        setCompanyInfoDetails(data)
    }) 
     }

     const [info, setInfo] = useState({
      description: ""
    })

    const handleForm = (event) => {
      const {name, value} = event.target;
      setInfo({
        ...info,
        [name]: value
      })
    }
  
  const [isModal, setIsModal] = useState(false);
  const [error, setError] = useState("");
  const [option1, setOption1] = useState(false);
  const [option2, setOption2] = useState(false);
  const [option3, setOption3] = useState(false);
  const [option4, setOption4] = useState(false);
    
  const submitReport = async(e)=>{
    e.preventDefault()  
    console.log(option1, ".",option2, ".",option3, ".",option4, ".", info)
    if(option1 || option2 || option3 || option4){
      setError("")
    }else {
      setError("Reason required")
    }
  }

    useEffect(()=>{
      getInternship()
      getCompanyInfo()
      getCompanyDetails()
    },[]) 
 
  return ( 
    <div>
      <HeaderAuth theme={theme} setTheme={setTheme} />

        <div className='main_container_internshipdetail'>
      <div className='details_container_internshipdetail'>
        <div className='top_section_internshipdetail'>
            <h2>{internship.title} Developer Internship in {companyInfoDetails.headquaters} at {companydetails.companyname}</h2>
        </div>

        <div className='main_internship_container_internshipdetail'>
            <div className='internship_container_internshipdetail'>
              <div className='top_section_internship_internshipdetail'>
                <div className='left_section_internship_internshipdetail'>
                  <h2>{internship.title}</h2>
                  <h4>{companydetails.companyname}</h4>
                </div>
                <div className='right_section_internship_internshipdetail'>
                  <div className={internship.experience === "Beginner" ? 'experience_icon_container_internshipdetail beginner_internshipdetail' : (internship.experience === "Intermediate" ? 'experience_icon_container_internshipdetail intermediate_internshipdetail' : 'experience_icon_container_internshipdetail expert_internshipdetail')}>
                    <BsFillBarChartFill className="experience_icon_internshipdetail" />
                    <p>{internship.experience}</p>
                    {internship.experience === "Beginner" && (
                       <AiOutlineInfoCircle  currentitem="false" className="info_icon_internshipdetail" data-tip="The applicant should have<br /> atleast 1 project" />
                    )}

                    {internship.experience === "Intermediate" && (
                       <AiOutlineInfoCircle  currentitem="false" className="info_icon_internshipdetail" data-tip="The candidate should have<br /> atleast 1 work experience OR 2 projects" />
                    )}
                    
                    {internship.experience === "Expert" && (
                       <AiOutlineInfoCircle  currentitem="false" className="info_icon_internshipdetail" data-tip="The candidate should have<br /> atleast 1 work experience AND 2 projects" />
                    )}
              
                    <ReactTooltip place="bottom" data-background-color="#1e272e" effect="solid" delayShow={800} data-event-off="click" multiline={true} />
                  </div>
                  <div className='remote_container_internshipdetail'>
                    <p>{internship.jobtype}</p>
                  </div>
                  <div className='report_icon_container_internshipdetail'>
                    <MdOutlineReportGmailerrorred onClick={() => setIsModal(!isModal)} className="report_icon_internshipdetail" />
                  </div>
                </div>
              </div>

              <div className='mid_section_internship_internshipdetail'>
                <div className='status_container_internship_internshipdetail'>
                <div className={internship.experience === "Beginner" ? 'experience_icon_container2_internshipdetail beginner_internshipdetail' : (internship.experience === "Intermediate" ? 'experience_icon_container2_internshipdetail intermediate_internshipdetail' : 'experience_icon_container2_internshipdetail expert_internshipdetail')}>
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
                    <p>{companyInfoDetails.headquaters}</p>
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
                   <p>{companyInfoDetails.description}</p>
                    </div>

                    <h4>Location</h4>
                    <div className='perks_container_internshipdetail'>
                   <p>{companyInfoDetails.headquaters}</p>
                    </div>
                    <h4>Company Representative</h4>
                    <p>{companydetails.name}&nbsp; |&nbsp; {companydetails.designation}</p>
                </div>
              </div>

              {/* <div className='button_section_internshipdetail'>
                <button className='btn_primary_internshipdetail'>Apply Now</button>
              </div> */}
            </div>
        </div>
      </div>
      </div>


      {isModal && (
        <div className='modal_backgound_internshipdetail'>
          <div className='modal_container2_internshipdetail'>
            <div className='modal_top_section_internshipdetail'>
              <h2>Report “Front End” internship?</h2>
              <p>We are sorry to hear that you are reporting an internship. Can you tell us why?</p>
              {/* <p className="errors_msg_internshipdetail">{formErrors.others}</p> */}
            </div>
   
            <div className='modal_mid_section_internshipdetail'>
              <form>
                <div className="form_box_internshipdetail">
                    <div className="checkbox_container_internshipdetail">
                      <input type="checkbox" id="cb1" onClick={() => setOption1(!option1)} />
                      <label htmlFor="cb1"></label>
                      <p>False Information</p>
                    </div>
                    <div className="checkbox_container_internshipdetail">
                      <input type="checkbox" id="cb2" onClick={() => setOption2(!option2)} />
                      <label htmlFor="cb2"></label>
                      <p>Filled this position outside Pregrad</p>
                    </div>
                    <div className="checkbox_container_internshipdetail">
                      <input type="checkbox" id="cb3" onClick={() => setOption3(!option3)} />
                      <label htmlFor="cb3"></label>
                      <p>We are not hiring for this role anymore</p>
                    </div>
                    <div className="checkbox_container_internshipdetail">
                      <input type="checkbox" id="cb4" onClick={() => setOption4(!option4)} />
                      <label htmlFor="cb4"></label>
                      <p>Didn’t recieve good candidates for the internship</p>
                    </div>
                    <p className='errors_msg_internshipdetail'>{error}</p>
                  </div>
  
                  <div className="form_box_internshipdetail">
                  <textarea name="description" rows={4} placeholder="Anything you want to add" onChange={handleForm}></textarea>      
                </div>
  
                <div className='modal_bottom_section_internshipdetail'>
                   <button onClick={() => setIsModal(!isModal)} className='btn_light_internshipdetail'>Cancel</button>
                   <button type='submit' onClick={submitReport} className='btn_primary_internshipdetail'>Close Internship</button>
                </div>
              </form>
            </div>
           </div>
        </div>
      )}
    </div>
  )
}

export default InternshipDetail;
