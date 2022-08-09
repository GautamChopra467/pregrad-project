import React, { useState, useEffect } from 'react';
import { FiSettings } from 'react-icons/fi';
import { HiOutlinePencil } from "react-icons/hi";
import { MdOutlinePeopleAlt } from 'react-icons/md';
import { useNavigate, Link } from 'react-router-dom';
import "../../../components/company/css/UserCompany/DashboardCompanyStyles.css";

const DashboardCompany = () => {
  const navigate = useNavigate();

  // EDIT FORM
  const [isModal, setIsModal] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const locationData = ["Delhi, New Delhi", "Mumbai", "Chennai", "Jaipur", "Hyderabad"]
  const [selectedLocation, setSelectedLocation] = useState("");
 
  const handleLocation = (event) => {
    setSelectedLocation(event.target.value);
  }

  const [companyInfo, setCompanyInfo] = useState({
    name: "",
    companyname: "",
    designation: "",
    websitelink: "",
    mobile: ""
  });

  const handleForm = (e) => {
    const {name, value} = e.target;
    setCompanyInfo({
      ...companyInfo,
      [name]: value
    })
   
  }

  const submitForm = (e) => {
    e.preventDefault();
    setFormErrors(validate(companyInfo));
    setIsSubmit(true);
   
  }

  useEffect(() => {
    if( Object.keys(formErrors).length === 0 && isSubmit ){
      console.log("submitted")
    }
  },[formErrors]);

  const validate = (values) => {
    const errors = {};

    if(!values.name){
      errors.name = "Name Required"
    }else if(values.name.length < 3){
      errors.name = "Minimum 3 characters required"
    }else if(values.name.length > 18){
      errors.name = "Maximum 18 characters required";
    }

    if(!values.companyname){
      errors.companyname = "Company name required"
    }else if(values.companyname.length < 2){
      errors.companyname = "Minimum 2 characters required"
    }else if(values.companyname.length > 18){
      errors.companyname = "Maximum 18 characters required";
    }
    
    if(!values.designation){
      errors.designation = "Designation required"
    }else if(values.designation.length > 20){
      errors.designation = "Maximum 20 characters required";
    }

    if(!values.mobile){
      errors.mobile = "Mobile number required"
    }else if(values.mobile.length !== 10){
      errors.mobile = "Mobile number is Invalid";
    }

    if(!selectedLocation){
      errors.location = "Location required"
    }

    return errors;
  }

  return (
    <div>
      <div className='main_container_dashboardCompany'>
        <div className='left_section_container_dashboardCompany'>
          <div className='top_details_section_dashboardCompany'>
            <div className='left_details_section_dashboardCompany'>
              <div className='logo_container_dashboardCompany'>
                G
              </div>
              <div className='info_container_dashboardCompany'>
                <h2>Google</h2>
                <p>Private Organisation . Delhi, India</p>
              </div>
              <HiOutlinePencil className="edit_icon2_dashboardCompany" />
            </div>

            <div className='right_details_section_dashboardCompany'>
              <HiOutlinePencil className="edit_icon_dashboardCompany" />
              <button onClick={() => navigate("/company/info/profile")} className='btn_primary_profile_dashboardCompany'>View Profile</button>
            </div>
          </div>

          <div className='mid_details_section_dashboardCompany'>
            <div className='account_container_dashboardCompany'>
              <div className='top_box_account_dashboardCompany'>
                <div>
                  <FiSettings className='settings_icon_dashboardCompany' />
                  <h2>Account Settings</h2>
                </div>
                <p onClick={() => setIsModal(!isModal)}>Change</p>
              </div>
              <div className='bottom_box_account_dashboardCompany'>
                <p>Change your name, location, company type, etc. from here.</p>
              </div>
            </div>

            <div className='applicants_container_dashboardCompany'>
              <div className='top_box_applicants_dashboardCompany'>
                <div>
                  <MdOutlinePeopleAlt className='people_icon_dashboardCompany' />
                  <h2>New Applicants&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h2>
                </div>
                <Link to="/">View</Link>
              </div>
              <div className='bottom_box_applicants_dashboardCompany'>
                <p>Check new applicants applied for your internship post.&nbsp;&nbsp;&nbsp;&nbsp;</p>
              </div>
            </div>
          </div>
        </div>

        <div className='right_section_container_dashboardCompany'>
          <div className='top_tc_section_dashboardCompany'>
            <h2>Important T&C Update</h2>
            <p>If you hire any candidate from Pregrad, it is mandatory to Send Offer from the platform. If you do not do so, we may take some action and you won't be allowed to use our services further.</p>
          </div>
        </div>
      </div>


      {isModal && (
        
        <div className='modal_backgound_dashboardCompany'>
        <div className='modal_container_dashboardCompany'>
          <div className='modal_top_section_dashboardCompany'>
            <h2>Edit Account Details</h2>
            <p className="errors_msg_dashboardCompany">{formErrors.others}</p>
          </div>
 
          <div className='modal_mid_section_dashboardCompany'>
            <form>
              <div className="form_box_dashboardCompany">
                <label>Name</label>
                <input type="text" name="name" placeholder="Enter Your Name" onChange={handleForm} />
                <p className="errors_msg_dashboardCompany">{formErrors.name}</p>
              </div>
 
              <div className="form_box_dashboardCompany">
                <label>Company Name</label>
                <input type="text" name="companyname" placeholder="Enter Company Name" onChange={handleForm} />
                  <p className="errors_msg_dashboardCompany">{formErrors.companyname}</p>
              </div>
 
              <div className="form_box_dashboardCompany">
                <label>Designation</label>
                <input type="text" name="designation" placeholder="Enter Your Designation" onChange={handleForm} />
                <p className="errors_msg_dashboardCompany">{formErrors.designation}</p>
              </div>

              <div className="form_box_dashboardCompany">
                   <label>Location of Headquarters</label>
                   <select onChange={handleLocation} className="select_dashboardCompany">
                    <option value="">Enter Location</option> 
                    {locationData.map(val => (
                      <option key={val} value={val}>{val}</option>
                    ))}
                    </select>
                   <p className="errors_msg_dashboardCompany">{formErrors.location}</p>
                 </div>
 
                 <div className="form_box_dashboardCompany">
                   <label>Company Website Link</label>
                   <input type="url" name="websitelink" placeholder="Enter Website Link" onChange={handleForm} />
                   <p className="errors_msg_dashboardCompany">{formErrors.websitelink}</p>
                 </div>

                 <div className="form_box_dashboardCompany">
                   <label>Mobile Number</label>
                   <input type="number" name="mobile" placeholder="Enter Phone Number" onChange={handleForm} />
                   <p className="errors_msg_dashboardCompany">{formErrors.mobile}</p>
                 </div>
 
                 <div className='modal_bottom_section_dashboardCompany'>
                   <button onClick={() => setIsModal(!isModal)} className='btn_light_dashboardCompany'>Cancel</button>
                   <button type='submit' onClick={submitForm} className='btn_primary_dashboardCompany'>Save Details</button>
                 </div>
               </form>
          </div>
         </div>
      </div>
       
      )}
    </div>
  )
}

export default DashboardCompany;
