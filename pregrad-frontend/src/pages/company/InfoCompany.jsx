import React from "react";
import { Route, Routes } from "react-router-dom";
import SidebarCompany from "../../components/company/jsx/SidebarCompany";
import DashboardCompany from "./UserCompany/DashboardCompany";
import ListingsCompany from "./UserCompany/ListingsCompany";
import ProfileCompany from "./UserCompany/ProfileCompany";
import AddInternshipCompany from "./UserCompany/AddInternshipCompany";
import { useEffect } from "react";
import axios from 'axios'
import {useCookies} from 'react-cookie'
import { useNavigate,useParams } from 'react-router-dom';

const InfoCompany = ({theme, setTheme}) => {

  return (
    <SidebarCompany  theme={theme} setTheme={setTheme}>
        <Routes>
            <Route exact path="/dashboard" element={<DashboardCompany />}  />
            <Route exact path="/listings" element={<ListingsCompany />} />
            <Route exact path="/profile" element={<ProfileCompany />} />
            <Route exact path="/addinternship" element={<AddInternshipCompany />} />
        </Routes>
    </SidebarCompany>
  )
}

export default InfoCompany
