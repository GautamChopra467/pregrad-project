import React, { useEffect, useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/student/Home";
import Login from "./pages/student/Login";
import SignUp from "./pages/student/SignUp";
import Student from "./pages/student/Student";
import EmailVerify from "./pages/student/EmailVerify";
import OTPVerify from "./pages/student/OTPVerify";
import DetailsOne from "./pages/student/DetailsOne";
import ForgotPassword from "./pages/student/ForgotPassword";
import ResumeStudent from "./pages/student/UserStudent/ResumeStudent";

const App = () => {
  const [theme, setTheme] = useState("light-theme");

  useEffect(() => {
    document.body.className = theme;
  },[theme]);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home theme={theme} setTheme={setTheme}/>} />
        <Route exact path="/student/:id/*" element={<Student theme={theme} setTheme={setTheme}/>} />
        <Route exact path="/signup" element={<SignUp theme={theme} setTheme={setTheme}/>} />
        <Route exact path="/login" element={<Login theme={theme} setTheme={setTheme}/>} />
        <Route exact path="/emailverify/:type" element={<EmailVerify theme={theme} setTheme={setTheme}/>} />
        <Route exact path="/otpverify/:email/:type" element={<OTPVerify theme={theme} setTheme={setTheme}/>} />
        <Route exact path="/detailsone" element={<DetailsOne theme={theme} setTheme={setTheme}/>} />
        <Route exact path="/forgotpassword/:email" element={<ForgotPassword theme={theme} setTheme={setTheme}/>} />
        <Route exact path="/resume" element={<ResumeStudent />} />
        {/* <Route exact path="/internships" element={<Internships />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
