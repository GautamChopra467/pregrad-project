import React, { useEffect, useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Student from "./pages/Student";
import EmailVerify from "./pages/EmailVerify";
import OTPVerify from "./pages/OTPVerify";
import DetailsOne from "./pages/DetailsOne";
import HeaderUser from "./components/jsx/HeaderUser";
import ForgotPassword from "./pages/ForgotPassword";

const App = () => {
  const [theme, setTheme] = useState("light-theme");

  useEffect(() => {
    document.body.className = theme;
  },[theme]);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/student/:id/*" element={<Student />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/emailverify/:type" element={<EmailVerify />} />
        <Route exact path="/otpverify/:email/:type" element={<OTPVerify />} />
        <Route exact path="/detailsone" element={<DetailsOne />} />
        <Route exact path="/forgotpassword/:email" element={<ForgotPassword />} />
        {/* <Route exact path="/internships" element={<Internships />} /> */}
      </Routes>
      {/* <Sidebar>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/internships" element={<Internships />} />
          <Route path="/workexperience" element={<WorkExperience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/education" element={<Education />} />
        </Routes>
      </Sidebar> */}
    </BrowserRouter>
  );
};

export default App;
