import React, { useEffect, useState, useRef } from 'react';
import "../css/UserCompany/ListingsCompanyStyles.css";
import { Link, useNavigate } from "react-router-dom";
import { BsFillBarChartFill, BsPlayCircle } from "react-icons/bs";
import { AiOutlineFieldTime, AiOutlineInfoCircle } from "react-icons/ai";
import { HiOutlineLocationMarker, HiOutlinePencil } from "react-icons/hi";
import { IoCalendarClearOutline } from "react-icons/io5";
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { FiClipboard } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

const InternshipContainerCompany = () => {
    const ref = useRef();
    const navigate = useNavigate();

    const skillsData = ["HTML", "CSS", "JS", "NodeJs", "ExpressJs"];

    const [isModal, setIsModal] = useState(false);

    const [isModal2, setIsModal2] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);

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
  
    const submitForm = (e) => {
      e.preventDefault();
      setIsSubmit(true);
    }

    useEffect(() => {
      if(isSubmit){
        console.log("submitted")
      }
    })

    const [option1, setOption1] = useState(false);
  const [option2, setOption2] = useState(false);
  const [option3, setOption3] = useState(false);
  const [option4, setOption4] = useState(false);


    useEffect(() => {
      const checkIfClickedOutside = e => {
        if (isModal && ref.current && !ref.current.contains(e.target)) {
          setIsModal(false)
        }
      }
      document.addEventListener("click", checkIfClickedOutside)
  
      return () => {
        document.removeEventListener("click", checkIfClickedOutside)
      }
    }, [isModal])

  return (
    <div>
      <div className='internship_container_listingscompany'>
              <div className='top_section_internship_listingscompany'>
                <div className='left_section_internship_listingscompany'>
                  <h2>Back-end Developer</h2>
                  <h4>Google</h4>
                </div>
                <div className='right_section_internship_listingscompany' ref={ref}>
                  <div className='experience_icon_container_listingscompany'>
                    <BsFillBarChartFill className="experience_icon_listingscompany" />
                    <p>Beginner</p>
                    <AiOutlineInfoCircle className="info_icon_listingscompany" />
                  </div>
                  <div className={false ? 'active_icon_container' : 'false_icon_container'}>
                    <p>{false ? "Active" : "Closed"}</p>
                  </div>
                  <div className='dots_icon_container_listingscompany'>
                    <BiDotsVerticalRounded onClick={() => setIsModal(!isModal)} className="dots_icon_listingscompany" />
                  </div>
                  {isModal && (
                    <div className='modal_container_listingscompany'>
                      <div className='modal_box_listingscompany'>
                        <FiClipboard className="modal_icon_listingscompany" />
                        <p onClick={() => navigate("/company/internship")}>View Details</p>
                      </div>

                      <div className='modal_box_listingscompany'>
                        <HiOutlinePencil className="modal_icon_listingscompany" />
                        <p>Edit Internship</p>
                      </div>

                      <div className='modal_box_listingscompany'>
                        <IoMdClose className="modal_icon_listingscompany" />
                        <p onClick={() => setIsModal2(!isModal2)}>Close Internship</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className='mid_section_internship_listingscompany'>
                <div className='status_container_listingscompany'>
                  <div className='experience_icon_container2_listingscompany'>
                    <BsFillBarChartFill className="experience_icon_listingscompany" />
                    <p>Beginner</p>
                    <AiOutlineInfoCircle className="info_icon_listingscompany" />
                  </div>

                  <div className={true ? 'active_icon2_container' : 'false_icon2_container'}>
                    <p>{true ? "Active" : "Closed"}</p>
                  </div>
                </div>

                <div className='upper_mid_section_listingscompany'>
                  {skillsData.map((value) => (
                  <div key={value} className="skill_section_listingscompany">
                    <p>{value}</p>
                  </div>
                  ))}
                </div>

                <div className='lower_mid_section_listingscompany'>
                  <div className='lower_top_listingscompany'>
                    <HiOutlineLocationMarker className='general_icons_listingscompany' />
                    <p>Delhi, India</p>
                  </div>

                  <div className='lower_bottom_listingscompany'>
                    <div className='info_container_listingscompany'>
                      <div className='info_upper_container_listingscompany'>
                        <BsPlayCircle className='general_icons_listingscompany' />
                        <p>START DATE</p>
                      </div>
                      <div className='info_lower_container_listingscompany'>
                        <p>22 Aug' 2022</p>
                      </div>
                    </div>

                    <div className='info_container_listingscompany'>
                      <div className='info_upper_container_listingscompany'>
                        <IoCalendarClearOutline className='general_icons_listingscompany' />
                        <p>DURATION</p>
                      </div>
                      <div className='info_lower_container_listingscompany'>
                        <p>6 months</p>
                      </div>
                    </div>

                    <div className='info_container_listingscompany'>
                      <div className='info_upper_container_listingscompany'>
                        <FaRegMoneyBillAlt className='general_icons_listingscompany' />
                        <p>STIPEND</p>
                      </div>
                      <div className='info_lower_container_listingscompany'>
                        <p>6K - 10K</p>
                      </div>
                    </div>

                    <div className='info_container_listingscompany'>
                      <div className='info_upper_container_listingscompany'>
                        <AiOutlineFieldTime className='general_icons_listingscompany' />
                        <p>MODE</p>
                      </div>
                      <div className='info_lower_container_listingscompany'>
                        <p>5-6 hours / day</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='bottom_section_internship_listingscompany'>
                <button onClick={() => navigate("/company/info/applicants")} className='btn_primary_listingscompany'>View Applications (0)</button>
                <Link to="/company/internship">View details &gt;</Link>
              </div>
            </div>

            {isModal2 && (
        
        <div className='modal_backgound_listingscompany'>
        <div className='modal_container2_listingscompany'>
          <div className='modal_top_section_listingscompany'>
            <h2>Close “Back-end Developer” internship?</h2>
            <p>We are sorry to hear that you are deleting your internship. Can you tell us why?</p>
            {/* <p className="errors_msg_listingscompany">{formErrors.others}</p> */}
          </div>
 
          <div className='modal_mid_section_listingscompany'>
            <form>
              <div className="form_box_listingscompany checkbox_container_listingscompany">
                  <div>
                    <input type="checkbox" id="cb1" onClick={() => setOption1(!option1)} />
                    <label for="cb1"></label>
                    <p>Filled this position on Pregrad</p>
                  </div>
                  <div>
                    <input type="checkbox" id="cb2" onClick={() => setOption2(!option2)} />
                    <label for="cb2"></label>
                    <p>Filled this position outside Pregrad</p>
                  </div>
                  <div>
                    <input type="checkbox" id="cb3" onClick={() => setOption3(!option3)} />
                    <label for="cb3"></label>
                    <p>We are not hiring for this role anymore</p>
                  </div>
                  <div>
                    <input type="checkbox" id="cb4" onClick={() => setOption4(!option4)} />
                    <label for="cb4"></label>
                    <p>Didn’t recieve good candidates for the internship</p>
                  </div>
                </div>

                <div className="form_box_listingscompany">
                <textarea name="about" rows={4} placeholder="Anything you want to add" value={info.description} onChange={handleForm}></textarea>
                
              </div>

              <div className='modal_bottom_section_listingscompany'>
                 <button onClick={() => setIsModal2(!isModal2)} className='btn_light_listingscompany'>Cancel</button>
                 <button type='submit' onClick={submitForm} className='btn_primary_listingscompany'>Close Internship</button>
              </div>
            </form>
          </div>
         </div>
      </div>
       
      )}
    </div>
  )
}

export default InternshipContainerCompany
