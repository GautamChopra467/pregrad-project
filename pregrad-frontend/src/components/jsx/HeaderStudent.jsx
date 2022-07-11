import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../img/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { MdLogout } from "react-icons/md";
import { CgMenuRight } from "react-icons/cg"
import { FaRegUser } from "react-icons/fa"
import "../css/HeaderStudentStyles.css";

const HeaderStudent = (props) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [isLogoutMenu, setIsLogoutMenu] = useState(false);

  return (
    <div className="headerStudent">
      <div className="left_section_headerStudent">
        {window.innerWidth < 940 ? (<CgMenuRight size={30} color="#7840f2" onClick={() => props.setIsOpenSidebar(!props.isOpenSidebar)} />
) : ""}
        {!props.isOpenSidebar && (
          <Link to="/">
          <img src={Logo} alt="pregrad" />
        </Link>
        )}
      </div>

      <div className={click ? "right_section_headerStudent active" : "right_section_headerStudent"}>
        <div className="menu_headerStudent">
          <Link to="/" className="intern_headerStudent">
            Home
          </Link>

          <div className="user_details_container_headerStudent" onClick={() => setIsLogoutMenu(!isLogoutMenu)}>
            <div className="user_avavtar_headerStudent">G</div>
            <p>Gautam</p>
            { isLogoutMenu ? <RiArrowDropUpLine size={29} style={{ color: "#000" }} /> : <RiArrowDropDownLine size={29} style={{ color: "#000" }} />}
          </div>

          { isLogoutMenu && (
            <div className="logout_container_headerStudent">
              <div className="logout_items_headerStudent"><Link to="/">Profile <div> <FaRegUser /></div></Link></div>
              <div className="logout_items_headerStudent"><Link to="/">Logout <div> <MdLogout /></div></Link></div>
         </div>
          ) }
        </div>
      </div>

      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <>
          <div className="user_avavtar_headerStudent">G</div>
          <div className="logout_container_headerStudent">
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
          <div className="user_avavtar_headerStudent">G</div>
          
         </>
        )}
      </div>
    </div>
  )
}

export default HeaderStudent;
