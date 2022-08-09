import React, { useState, useEffect } from "react";
import "../../components/company/css/DetailsOneCompanyStyles.css";
import { BsArrowRightShort } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import HeaderAuth from "../../components/student/jsx/HeaderAuth";

const DetailsOneCompany = ({ theme, setTheme }) => {

    const typeData = ["StartUp", "Private Limited Company", "Public Company", "Business Corporation", "Government Agency", "Not Registered Organisation"]
  const [selectedType, setSelectedType] = useState("");
 
  const handleType = (event) => {
    setSelectedType(event.target.value);
  }

  const locationData = ["Delhi, New Delhi", "Mumbai", "Chennai", "Jaipur", "Hyderabad"]
  const [selectedLocation, setSelectedLocation] = useState("");
 
  const handleLocation = (event) => {
    setSelectedLocation(event.target.value);
  }

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const type = "register"

  const [user, setUser] = useState({
    linkedin: "",
    companylink: "",
    year: "",
    about: "",
  });

  const handleForm = (e) => {
    const {name, value} = e.target;
    setUser({
      ...user,
      [name]: value
    })
  }

  const submitForm = (e) => {
    e.preventDefault();
    setFormErrors(validate(user));
    setIsSubmit(true);
  }

  useEffect(() => {
    if( Object.keys(formErrors).length === 0 && isSubmit ){
      console.log("submitted");
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};

    if(!values.linkedin){
      errors.linkedin = "Linkedin Id required";
    }

    if(!selectedType){
        errors.type = "Company type required"
    }

    if(!values.year){
        errors.year = "Year of establishment required"
    }else if(values.year.length !== 4){
        errors.year = "Invalid Year"
    }

    if(!selectedLocation){
        errors.location = "Location required"
    }

    if(!values.about){
      errors.about = "About company required"
    }

    return errors;
  }

  return (
    <div>
      <HeaderAuth theme={theme} setTheme={setTheme} />

      <div className="main_detailsOneCompany">
        <div className="greeting_container_detailsOneCompany">
          <div className="greeting_box_detailsOneCompany">
            <div className="greeting_left_section_detailsOneCompany">
              <h4>Welcome to Pregrad</h4>
              <p>
                <span>Gautam, (Google)</span> build your profile to join our
                community.
              </p>
            </div>

            <div className="greeting_right_section_detailsOneCompany">
              <button onClick={submitForm} className="btn_primary_detailsOneCompany">
                Submit{" "}
                <BsArrowRightShort
                  size={27}
                  className="btn_primary_logo_detailsOneCompany"
                />
              </button>
            </div>
          </div>
        </div>

        <div className="form_container_detailsOneCompany">
          <form>
            <div className="form_main_box_detailsOneCompany">
              <div className="form_box_detailsOneCompany box1_detailsOneCompany">
                 <label><FaLinkedin size={22} />Linkedin*</label>
                 <input type="url" name="linkedin" placeholder="Your Linkedin Id" value={user.linkedin} onChange={handleForm} />
                 <p className="errors-msg_detailsOneCompany">{formErrors.linkedin}</p>
              </div>

              <div className="form_box_detailsOneCompany">
                 <label>Website Link</label>
                 <input type="url" name="companylink" placeholder="Your Website Link" value={user.companylink} onChange={handleForm} />
                 <p className="errors-msg_detailsOneCompany">{formErrors.companylink}</p>
              </div>

              <div className="form_box_detailsOneCompany">
                 <label>Type of Company*</label>
                 <select onChange={handleType} className="select_detailsOneCompany">
                  <option value="other" disabled selected hidden>Enter Type of Company</option> 
                  {typeData.map(val => (
                    <option key={val} value={val}>{val}</option>
                  ))}
                 </select>
                 <p className="errors-msg_detailsOneCompany">{formErrors.type}</p>
              </div>

              <div className="form_box_detailsOneCompany">
                 <label>Established In* (Year)</label>
                 <input type="text" name="year" placeholder="Year of Establishment" value={user.year} onChange={handleForm} />
                 <p className="errors-msg_detailsOneCompany">{formErrors.year}</p>
              </div>
              
              <div className="form_box_detailsOneCompany">
                 <label>Location of Headquarters*</label>
                 <select onChange={handleLocation} className="select_detailsOneCompany">
                  <option value="" disabled selected hidden>Enter Location</option> 
                  {locationData.map(val => (
                    <option key={val} value={val}>{val}</option>
                  ))}
                 </select>
                 <p className="errors-msg_detailsOneCompany">{formErrors.location}</p>
              </div>
            </div>
            <div className="form_box_detailsOneCompany box2_detailsOneCompany">
                 <label>About Company*</label>
                 <textarea rows={7} name="about" value={user.about} placeholder="Explain what your company does..." onChange={handleForm}></textarea>
                 <p className="errors-msg_detailsOneCompany">{formErrors.about}</p>
              </div>
          </form>

          <button onClick={submitForm} className="btn_primary_detailsOneCompany">
            Submit{" "} <BsArrowRightShort size={27} className="btn_primary_logo_detailsOneCompany"/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailsOneCompany;
