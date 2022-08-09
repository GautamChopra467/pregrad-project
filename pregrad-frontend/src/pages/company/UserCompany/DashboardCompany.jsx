import React from 'react';
import { FiSettings } from 'react-icons/fi';
import { HiOutlinePencil } from "react-icons/hi";
import { MdOutlinePeopleAlt } from 'react-icons/md';
import { useNavigate, Link } from 'react-router-dom';
import "../../../components/company/css/UserCompany/DashboardCompanyStyles.css";

const DashboardCompany = () => {
  const navigate = useNavigate();

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
                <Link to="/">Change</Link>
              </div>
              <div className='bottom_box_account_dashboardCompany'>
                <p>Change your name, company type, etc. from here.</p>
              </div>
            </div>

            <div className='applicants_container_dashboardCompany'>
              <div className='top_box_applicants_dashboardCompany'>
                <div>
                  <MdOutlinePeopleAlt className='people_icon_dashboardCompany' />
                  <h2>New Applicants&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h2>
                </div>
                <Link to="/">View</Link>
              </div>
              <div className='bottom_box_applicants_dashboardCompany'>
                <p>Check new applicants applied for your internship post.</p>
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
    </div>
  )
}

export default DashboardCompany;
