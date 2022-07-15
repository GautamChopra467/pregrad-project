import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../img/logo.png";
import ForgotPasswordLogo from "../img/forgotpassword-image.png";
import InstaLogo from "../img/instagram-logo.svg";
import LinkedinLogo from "../img/linkedin-logo.svg";
import YoutubeLogo from "../img/youtube-logo.svg";
import "../components/css/EmailOTPVerifyStyles.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsArrowRightShort } from "react-icons/bs";
import axios from "axios";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmpassword: ""
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
    console.log(formErrors)
    if( Object.keys(formErrors).length === 0 && isSubmit ){
      axios.post("http://localhost:8000/verifyemail/?type=forgotpassword", user)
      .then( res => {
        if(res.data.message === "true"){
          navigate("/newpassword");
        }else {
          setFormErrors({final: res.data.message})
        }
      });
    console.log("submitted");
    }else {
      console.log("alert")
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!values.email){
      errors.email = "Email required";
    }else if(!regex.test(values.email)){
      errors.email = "Incorrect Email Format";
    }

    if(!values.password){
        errors.password = "Password required";
    }else if(values.password.length < 6){
        errors.password = "Min 6 characters required";
    }else if(values.password.length > 12){
        errors.password = "Max 12 characters required";
    }

    if(!values.confirmpassword){
        errors.confirmpassword = "Confirm password required";
    }else if(values.confirmpassword !== values.password){
        errors.confirmpassword = "Confirm password didn't match password"
    }

    return errors;
  }


  return (
    <div>
      <div className="header">
        <div className="left_section">
          <Link to="/">
            <img src={Logo} alt="pregrad" />
          </Link>
          <Link to="/" className="intern">
            Contact
          </Link>
        </div>

        <div className={click ? "right_section active" : "right_section"}>
          <div className="abc">
            <Link to="/" className="intern2">
              Contact
            </Link>
          </div>
        </div>

        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: "#000" }} />
          ) : (
            <FaBars size={20} style={{ color: "#000" }} />
          )}
        </div>
      </div>

      <div className="main">
        <div className="left-part">
          <div className="top">
            <h2>Find Your Dream Job !</h2>
            <p>Sign Up to become a part of our community</p>
          </div>

          <div className="signup-banner">
            <img src={ForgotPasswordLogo} alt="Sign Up" />
          </div>

          <div className="social">
            <div className="social-logo">
              <a href="https://www.remove.bg/upload">
                <img src={InstaLogo} alt="Instagram" />
              </a>
            </div>
            <div className="social-logo">
              <a href="https://www.remove.bg/upload">
                <img src={LinkedinLogo} alt="Linkedin" />
              </a>
            </div>
            <div className="social-logo">
              <a href="https://www.remove.bg/upload">
                <img src={YoutubeLogo} alt="Youtube" />
              </a>
            </div>
          </div>
        </div>

        <div className="right-part">
          <div className="form-container">
            <div className="top">
              <h2>Verify Your Email Id</h2>
              <Link to="/signup">Create an account</Link>
            </div>

            <div className="line"></div>

            <div className="main-error-msg">
              <p>{formErrors.final}</p>
            </div>

            <div className="mid-part">
              <form>
                <div className="form-full">
                <div className="form-container-box">
                  <label>Email Address</label>
                  <input type="text" name="email" placeholder="Your Email Address" value={user.email} onChange={handleForm} />
                  <p className="errors-msg">{formErrors.email}</p>
                </div>

                <div className="form-container-box">
                    <label>Password</label>
                    <input type="password" name="password" placeholder="Enter new password" value={user.password} onChange={handleForm} />
                    <p className="errors-msg">{formErrors.password}</p>
                </div>

                <div className="form-container-box">
                    <label>Confirm Password</label>
                    <input type="text" name="confirmpassword" placeholder="Confirm password" value={user.confirmpassword} onChange={handleForm} />
                    <p className="errors-msg">{formErrors.confirmpassword}</p>
                </div>
                </div>

                <button type="submit" onClick={submitForm} className="create-button">
                  Change Password
                  <BsArrowRightShort size={27} style={{ color: '#fff' }} />
                </button> 
              </form>

              <div className="line"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
