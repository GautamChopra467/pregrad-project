import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../img/logo.png";
import "../css/HeaderStyles.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();

  const [click,setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [shadow,setShadow] = useState(false);
    const changeShadow = () => {
      if(window.scrollY >= 100){
        setShadow(true)
      }else{
        setShadow(false)
      }
    }

    window.addEventListener('scroll', changeShadow);

  return (
    <div className={shadow ? "header header_shadow" : "header"}>
      <div className="left_section">
          <Link to="/">
            <img src={Logo} alt="pregrad" />
          </Link>
        <Link to="/" className="intern">Top Internships</Link>
      </div>

      <div className={click ? "right_section active" : "right_section"}>
        <div className="abc">
          <Link to="/" className="intern2">Top Internships</Link>
        </div>
        <Link to="/">Are you a Company ?</Link>
        <div className="button_container">
          <button onClick={() => navigate("/login")} className="btn_light">Log in</button>
          <button onClick={() => navigate("/signup")} className="btn_primary">Sign Up</button>
        </div>
      </div>

      <div className="hamburger" onClick={handleClick}>
          {click ? (<FaTimes size={20} style={{ color: '#000' }}/>) :
          (<FaBars size={20} style={{ color: '#000' }}/>)}
      </div>
    </div>
  );
};

export default Header;
