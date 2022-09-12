import React from "react";
import { Route, Routes } from "react-router-dom";
import DashboardAdmin from "./UserAdmin/DashboardAdmin";
import SidebarAdmin from "../../components/admin/jsx/SidebarAdmin";
import Reports from "./UserAdmin/Reports";
import Verification from "./UserAdmin/Verification";

const InfoAdmin = ({theme, setTheme}) => {

  return (
    <SidebarAdmin  theme={theme} setTheme={setTheme}>
        <Routes>
            <Route exact path="/dashboard" element={<DashboardAdmin />}  />
            <Route exact path="/reports" element={<Reports />} />
            <Route exact path="/verification" element={<Verification />} />
        </Routes>
    </SidebarAdmin>
  )
}

export default InfoAdmin
