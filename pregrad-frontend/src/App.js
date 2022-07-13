import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Student from "./pages/Student";
import EmailVerify from "./pages/EmailVerify";
import OTPVerify from "./pages/OTPVerify";
import DetailsOne from "./pages/DetailsOne";
import HeaderUser from "./components/jsx/HeaderUser";
// import Sidebar from "./components/jsx/Sidebar";
// import WorkExperience from "./pages/UserStudent/WorkExperience";
// import Education from "./pages/UserStudent/Education";
// import Internships from "./pages/UserStudent/Internships";
// import Projects from "./pages/UserStudent/Projects";
// import Achievements from "./pages/UserStudent/Achievements";
// import Certifications from "./pages/UserStudent/Certifications";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/student/*" element={<Student />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/emailverify" element={<EmailVerify />} />
        <Route exact path="/otpverify/:email" element={<OTPVerify />} />
        <Route exact path="/detailsone" element={<DetailsOne />} />
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
