import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../img/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { MdLogout } from "react-icons/md";
import "../css/HeaderUserStyles.css";

const HeaderUser = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [isLogoutMenu, setIsLogoutMenu] = useState(false);

  return (
    <div className="headerUser">
      <div className="left_section_headerUser">
        <Link to="/">
          <img src={Logo} alt="pregrad" />
        </Link>
      </div>

      <div className={click ? "right_section_headerUser active" : "right_section_headerUser"}>
        <div className="menu_headerUser">
          <Link to="/" className="intern_headerUser">
            Home
          </Link>

          <div className="user_details_container_headerUser" onClick={() => setIsLogoutMenu(!isLogoutMenu)}>
            <div className="user_avavtar_headerUser">G</div>
            <p>Gautam</p>
            { isLogoutMenu ? <RiArrowDropUpLine size={29} style={{ color: "#000" }} /> : <RiArrowDropDownLine size={29} style={{ color: "#000" }} />}
          </div>

          { isLogoutMenu && (
            <div className="logout_container_headerUser">
            <Link to="/">Logout <MdLogout /></Link>
         </div>
          ) }
        </div>
      </div>

      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <>
          <div className="user_avavtar_headerUser">G</div>
          <div className="logout_container_headerUser">
            <div>
                <Link to="/">Home</Link>
            </div>
            <div>
            <Link to="/login">Logout <MdLogout /></Link>
            </div>
         </div>
          </>
        ) : (
            <>
          <div className="user_avavtar_headerUser">G</div>
          
         </>
        )}
      </div>
    </div>
  );
};

export default HeaderUser;
