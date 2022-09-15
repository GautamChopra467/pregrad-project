import React from "react";
import { Route, Routes } from "react-router-dom";
import DashboardAdmin from "./UserAdmin/DashboardAdmin";
import SidebarAdmin from "../../components/admin/jsx/SidebarAdmin";
import Reports from "./UserAdmin/Reports";
import Verification from "./UserAdmin/Verification";
import ReportCandidates  from "./UserAdmin/ReportCandidates";

const InfoAdmin = ({theme, setTheme}) => {

  return (
    <SidebarAdmin  theme={theme} setTheme={setTheme}>
        <Routes>
            <Route exact path="/dashboard" element={<DashboardAdmin />}  />
            <Route exact path="/reports" element={<Reports />} />
            <Route exact path="/verification" element={<Verification />} />
            <Route exact path="/reports/candidates" element={<ReportCandidates  />} />
        </Routes>
    </SidebarAdmin>
  )
}

export default InfoAdmin
