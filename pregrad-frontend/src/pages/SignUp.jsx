import React, { useEffect, useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import Logo from "../img/logo.png";
import SignUpLogo from "../img/signup-image.png";
import InstaLogo from "../img/instagram-logo.svg";
import LinkedinLogo from "../img/linkedin-logo.svg";
import YoutubeLogo from "../img/youtube-logo.svg";
import GoogleLogo from "../img/google-logo.svg";
import "../components/css/SignUpStyles.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsArrowRightShort, BsMoonFill, BsSunFill } from "react-icons/bs";
import axios from "axios";

const SignUp = ({theme, setTheme}) => {
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

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [checkboxCheck, setCheckboxCheck] = useState(false);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
    mobile: "",
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
      axios.post("http://localhost:8000/signup", user)
      .then( res => {
        if(res.data.message === "true"){
          navigate("/emailverify");
        }else {
          setFormErrors({final: res.data.message});
        }
      });
    }else {
      console.log("alert")
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!values.name){
      errors.name = "Name required";
    }else if(values.name.length < 2){
      errors.name = "Minimum 2 characters required";
    }

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

    if(!values.confirmpassword){
      errors.confirmpassword = "Confirm Password required";
    }else if(values.confirmpassword !== values.password){
      errors.confirmpassword = "Confirm password didn't match password";
    }

    if(!values.mobile){
      errors.mobile = "Mobile number required"
    }else if(values.mobile.length !== 10){
      errors.mobile = "Mobile number is Invalid";
    }

    if(!checkboxCheck){
      errors.checkbox = "Accept Terms & Conditions to Continue";
    }

    return errors;
  }

  return (
    <div>
      <div className="header_signup">
        <div className="left_section_signup">
          <Link to="/">
            <img src={Logo} alt="pregrad_signup" />
          </Link>
          <Link to="/" className="intern_signup">
            Contact
          </Link>
        </div>

        <div className={click ? "right_section_signup active_signup" : "right_section_signup"}>
          <div className="abc_signup">
            <Link to="/" className="intern2_signup">
              Contact
            </Link>
          </div>
          <div className="theme_icon_container_signup" onClick={toggleTheme}>
            {
              theme==="light-theme" ? <BsMoonFill className="theme_icon_signup" /> : <BsSunFill className="theme_icon_signup" />
            }
          </div>
        </div>

        <div className="hamburger_signup">
          <div className="theme_icon_container2_signup" onClick={toggleTheme}>
            {
              theme==="light-theme" ? <BsMoonFill className="theme_icon2_signup" /> : <BsSunFill className="theme_icon2_signup" />
            }
          </div>
          {click ? (
            <FaTimes size={20} className="hamburger_icon_signup" onClick={handleClick} />
          ) : (
            <FaBars size={20} className="hamburger_icon_signup" onClick={handleClick} />
          )}
        </div>
      </div>

      <div className="main_signup">
        <div className="left-part_signup">
          <div className="top_signup">
            <h2>Find Your Dream Job !</h2>
            <p>Sign Up to become a part of our community</p>
          </div>

          <div className="signup-banner_signup">
            <img src={SignUpLogo} alt="Sign Up" />
          </div>

          <div className="social_signup">
            <div className="social-logo_signup">
              <a href="https://www.remove.bg/upload">
                <img src={InstaLogo} alt="Instagram" />
              </a>
            </div>
            <div className="social-logo_signup">
              <a href="https://www.remove.bg/upload">
                <img src={LinkedinLogo} alt="Linkedin" />
              </a>
            </div>
            <div className="social-logo_signup">
              <a href="https://www.remove.bg/upload">
                <img src={YoutubeLogo} alt="Youtube" />
              </a>
            </div>
          </div>
        </div>

        <div className="right-part_signup">
          <div className="form-container_signup">
            <div className="top_signup">
              <h2>Create Account</h2>
              <Link to="/login">Sign In</Link>
            </div>

            <div className="line_signup"></div>

            <div className="main-msg_signup">
              <p>{formErrors.final}</p>
            </div>

            <div className="mid-part_signup">
              <form onSubmit={submitForm}>
                <div className="form-main-box_signup">
                <div className="form-box_signup box1_signup">
                  <label>Name</label>
                  <input type="text" name="name" placeholder="Your name" value={user.name} onChange={handleForm} />
                  <p className="errors-msg_signup">{formErrors.name}</p>
                </div>

                <div className="form-box_signup box2_signup">
                  <label>Email Address</label>
                  <input type="email" name="email" placeholder="Your Email Address" value={user.email} onChange={handleForm} />
                  <p className="errors-msg_signup">{formErrors.email}</p>
                </div>

                <div className="form-box_signup box3_signup">
                  <label>Password</label>
                  <input type="password" name="password" placeholder="Enter Password" value={user.password} onChange={handleForm} />
                  <p className="errors-msg_signup">{formErrors.password}</p>
                </div>

                <div className="form-box_signup box4_signup">
                  <label>Confirm Password</label>
                  <input type="password" name="confirmpassword" placeholder="Confirm Password" value={user.confirmpassword} onChange={handleForm} />
                  <p className="errors-msg_signup">{formErrors.confirmpassword}</p>
                </div>

                <div className="form-box_signup box5_signup">
                  <label style={{paddingBottom: "5px"}}>Mobile Number</label>
                  <input type="text" name="mobile" placeholder="Your mobile number" value={user.mobile} onChange={handleForm} />
                  <p className="errors-msg_signup">{formErrors.mobile}</p>
                </div>

                <div className="box6_signup">
                  <div>
                  <input type="checkbox" id="cb1" onClick={() => setCheckboxCheck(!checkboxCheck)} />
                  <label for="cb1"></label>
                  <p>I agree to <a href="youtube.com">Terms and Conditions</a></p>
                  </div>
                  <p className="errors-msg_signup">{formErrors.checkbox}</p>
                </div>
                </div>

                <button type="submit" onClick={submitForm} className="create-btn_signup">
                  Create New Account
                  <BsArrowRightShort size={27} className="create-btn-logo_signup" />
                </button> 

                <a className="google-btn_signup" href="youtube.com">
                <img src={GoogleLogo} alt="" />
                  Signup with Google
                </a> 
              </form>

              <div className="line_signup"></div>

              <div className="bottom-part_signup">
                <p>Have an account ? </p>
                <Link to="/login">&nbsp;Login Now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
