import React, { useState, useEffect } from 'react';
import { FiSettings } from 'react-icons/fi';
import { HiOutlinePencil } from "react-icons/hi";
import { MdOutlinePeopleAlt } from 'react-icons/md';
import { useNavigate, Link } from 'react-router-dom';
import "../../../components/company/css/UserCompany/DashboardCompanyStyles.css";

const DashboardCompany = () => {
  const navigate = useNavigate();

  // EDIT FORM 1
  const [isModal, setIsModal] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const locationData = ["Delhi, New Delhi", "Mumbai", "Chennai", "Jaipur", "Hyderabad"]
  const [selectedLocation, setSelectedLocation] = useState("");
 
  const handleLocation = (event) => {
    setSelectedLocation(event.target.value);
  }

  const typeData = ["StartUp", "Private Limited Company", "Public Company", "Business Corporation", "Government Agency", "Not Registered Organisation"]
  const [selectedType, setSelectedType] = useState("");
 
  const handleType = (event) => {
    setSelectedType(event.target.value);
  }

  const [companyInfo, setCompanyInfo] = useState({
    linkedinlink: "",
    websitelink: "",
    about: ""
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

  const validate = (values) => {
    const errors = {};

    if(!values.linkedinlink){
      errors.linkedinlink = "Linkedin Id required"
    }

    if(!selectedLocation){
      errors.location = "Location required"
    }

    if(!selectedType){
      errors.type = "Company Type required"
    }

    if(!values.about){
      errors.about = "About company required"
    }

    return errors;
  }


  // EDIT FORM 2
  const [isModal2, setIsModal2] = useState(false);
  const [formErrors2, setFormErrors2] = useState({});
  const [isSubmit2, setIsSubmit2] = useState(false);

  const [accountInfo, setAccountInfo] = useState({
    name: "",
    companyname: "",
    designation: "", 
    mobile: "",
  });

  const handleForm2 = (e) => {
    const {name, value} = e.target;
    setAccountInfo({
      ...accountInfo,
      [name]: value
    })
   
  }

  const submitForm2 = (e) => {
    e.preventDefault();
    setFormErrors2(validate2(accountInfo));
    setIsSubmit2(true);
   
  }

  const validate2 = (values) => {
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

    return errors;
  }


  useEffect(() => {
    if( Object.keys(formErrors).length === 0 && isSubmit ){
      console.log("submitted")
    }

    if(Object.keys(formErrors2).length == 0 && isSubmit2){
      console.log("submitted2")
    }
  },[formErrors, formErrors2]);

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
              <HiOutlinePencil onClick={() => setIsModal(!isModal)} className="edit_icon2_dashboardCompany" />
            </div>

            <div className='right_details_section_dashboardCompany'>
              <HiOutlinePencil onClick={() => setIsModal(!isModal)} className="edit_icon_dashboardCompany" />
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
                <p onClick={() => setIsModal2(!isModal2)}>Change</p>
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
            <h2>Edit Profile</h2>
            <p className="errors_msg_dashboardCompany">{formErrors.others}</p>
          </div>
 
          <div className='modal_mid_section_dashboardCompany'>
            <form>
              <div className="form_box_dashboardCompany">
                <label>Linkedin*</label>
                <input type="url" name="linkedinlink" placeholder="Linkedin Id" onChange={handleForm} />
                <p className="errors_msg_dashboardCompany">{formErrors.linkedinlink}</p>
              </div>

              <div className="form_box_dashboardCompany">
                <label>Website Link</label>
                <input type="url" name="websitelink" placeholder="Your Website Link" onChange={handleForm} />
                <p className="errors_msg_dashboardCompany">{formErrors.websitelink}</p>
              </div>

              <div className="form_box_dashboardCompany">
                   <label>Location of Headquarters</label>
                   <select onChange={handleLocation} className="select_dashboardCompany">
                    <option value="" disabled selected hidden>Enter Location</option> 
                    {locationData.map(val => (
                      <option key={val} value={val}>{val}</option>
                    ))}
                    </select>
                   <p className="errors_msg_dashboardCompany">{formErrors.location}</p>
              </div>

              <div className="form_box_dashboardCompany">
                   <label>Type of Company*</label>
                   <select onChange={handleType} className="select_dashboardCompany">
                    <option value="" disabled selected hidden>Choose Type of Company</option> 
                    {typeData.map(val => (
                      <option key={val} value={val}>{val}</option>
                    ))}
                    </select>
                   <p className="errors_msg_dashboardCompany">{formErrors.type}</p>
              </div>


              <div className="form_box_dashboardCompany">
                <label>Established In* (Year)</label>
                <input readOnly type="number" name="year" placeholder="Year of Establishment" onChange={handleForm} />
              </div>

              <div className='form_box_dashboardCompany'>
                <label>About Company*</label>
                <textarea rows="7" name="about" onChange={handleForm} placeholder="Explain what your company does..."></textarea>
                <p className="errors_msg_dashboardCompany">{formErrors.about}</p>
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


      {isModal2 && (

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
                <input type="text" name="name" placeholder="Enter Your Name" onChange={handleForm2} />
                <p className="errors_msg_dashboardCompany">{formErrors2.name}</p>
              </div>

              <div className="form_box_dashboardCompany">
                <label>Company Name</label>
                <input type="text" name="companyname" placeholder="Enter Company Name" onChange={handleForm2} />
                <p className="errors_msg_dashboardCompany">{formErrors2.companyname}</p>
              </div>

      <div className="form_box_dashboardCompany">
        <label>Designation</label>
        <input type="text" name="designation" placeholder="Enter Your Designation" onChange={handleForm2} />
        <p className="errors_msg_dashboardCompany">{formErrors2.designation}</p>
      </div>

         <div className="form_box_dashboardCompany">
           <label>Mobile Number</label>
           <input type="number" name="mobile" placeholder="Enter Phone Number"/>
           <p className="errors_msg_dashboardCompany">{formErrors2.mobile}</p>
         </div>

         <div className='form_box_dashboardCompany'>
          <label>Email Address</label>
          <input readOnly value="harshchopra467@gmail.com" type="email"></input>
         </div>

         <div className='modal_bottom_section_dashboardCompany'>
           <button onClick={() => setIsModal2(!isModal2)} className='btn_light_dashboardCompany'>Cancel</button>
           <button type='submit' onClick={submitForm2} className='btn_primary_dashboardCompany'>Save Details</button>
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
