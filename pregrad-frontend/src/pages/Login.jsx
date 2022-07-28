import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../img/logo.png";
import Logo2 from "../img/logo-white.png";
import LoginLogo from "../img/login-image.png";
import InstaLogo from "../img/instagram-logo.svg";
import LinkedinLogo from "../img/linkedin-logo.svg";
import YoutubeLogo from "../img/youtube-logo.svg";
import GoogleLogo from "../img/google-logo.svg";
import "../components/css/LoginStyles.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsArrowRightShort, BsMoonFill, BsSunFill } from "react-icons/bs";
import axios from "axios";

const Login = ({theme, setTheme}) => {
  const navigate = useNavigate();

  const toggleTheme = () => {
    if(theme === "light-theme"){
      setTheme("dark-theme");
    }else{
      setTheme("light-theme");
    }
  }

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

// const type = "forgotpassword" 

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const [user, setUser] = useState({
    email: "",
    password: ""
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
      axios.post("http://localhost:8000/login",
      { 
        ...user
      },{
        withCredentials:true
      })
      .then( res => {
        if(res.data.message === "true"){
          
          navigate(`/student/${res.data.id}`);
        }else {
          setFormErrors({final: res.data.message})
        }
      });
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
      errors.password = "Max 12 characters allowed";
    }

    return errors;
  }


  return (
    <div>
      <div className="header_login">
        <div className="left_section_login">
        {theme === "light-theme" && (
            <img src={Logo} alt="pregrad" />
          )}
          {theme === "dark-theme" && (
            <img src={Logo2} alt="pregrad" />
          )}
          <Link to="/" className="intern_login">
            Contact
          </Link>
        </div>

        <div className={click ? "right_section_login active_login" : "right_section_login"}>
          <div className="abc_login">
            <Link to="/" className="intern2_login">
              Contact
            </Link>
          </div>
          <div className="theme_icon_container_login" onClick={toggleTheme}>
            {
              theme==="light-theme" ? <BsMoonFill className="theme_icon_login" /> : <BsSunFill className="theme_icon_login" />
            }
          </div>
        </div>

        <div className="hamburger_login">
        <div className="theme_icon_container2_login" onClick={toggleTheme}>
            {
              theme==="light-theme" ? <BsMoonFill className="theme_icon2_login" /> : <BsSunFill className="theme_icon2_login" />
            }
          </div>
          {click ? (
            <FaTimes size={20} className="hamburger_icon_login" onClick={handleClick} />
          ) : (
            <FaBars size={20} className="hamburger_icon_login" onClick={handleClick} />
          )}
        </div>
      </div>

      <div className="main_login">
        <div className="left-part_login">
          <div className="top_login">
            <h2>Find Your Dream Job !</h2>
            <p>Sign Up to become a part of our community</p>
          </div>

          <div className="signup-banner_login">
            <img src={LoginLogo} alt="Sign Up" />
          </div>

          <div className="social_login">
            <div className="social-logo_login">
              <a href="https://www.remove.bg/upload">
                <img src={InstaLogo} alt="Instagram" />
              </a>
            </div>
            <div className="social-logo_login">
              <a href="https://www.remove.bg/upload">
                <img src={LinkedinLogo} alt="Linkedin" />
              </a>
            </div>
            <div className="social-logo_login">
              <a href="https://www.remove.bg/upload">
                <img src={YoutubeLogo} alt="Youtube" />
              </a>
            </div>
          </div>
        </div>

        <div className="right-part_login">
          <div className="form-container_login">
            <div className="top_login">
              <h2>Sign in</h2>
              <Link to="/signup">Create an account</Link>
            </div>

            <div className="line_login"></div>

            <div className="main-error-msg_login">
              <p>{formErrors.final}</p>
            </div>

            <div className="mid-part_login">
              <form>
                <div className="form-full_login">
                <div className="form-container-box_login">
                  <label>Email Address</label>
                  <input type="text" name="email" placeholder="Your Email Address" value={user.email} onChange={handleForm} />
                  <p className="errors-msg_login">{formErrors.email}</p>
                </div>

                <div className="form-container-box_login">
                  <label>Password</label>
                  <input type="password" name="password" placeholder="Enter Password" value={user.password} onChange={handleForm} />
                  <p className="errors-msg_login">{formErrors.password}</p>
                </div>

                <div className="container6_login">
                  <Link to='/emailverify/forgotpassword'>Forgot Password ?</Link>
                </div>
                </div>

                <button type="submit" onClick={submitForm} className="create-btn_login">
                  Login now
                  <BsArrowRightShort size={27} className="create-btn-logo_login" />
                </button> 

                <a className="google-btn_login" href="youtube.com">
                <img src={GoogleLogo} alt="" />
                  Login with Google
                </a> 
              </form>

              <div className="line_login"></div>

              <div className="bottom-part_login">
                <p>New to Pregrad ?&nbsp;</p>
                <Link to="/signup">Create an account</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
