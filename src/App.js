import React, { useEffect } from "react";
import LandingPage from "./components/LandingPage/Landing";
import School from "./components/School/School";
import College from "./components/College/College";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import Workdemo from "./components/Workdemo/Workdemo";
import Hobby from "./components/Hobby/Hobby";
import AcademicProj from "./components/AcademicProj/Academic"
import PersonalProj from "./components/PersonalProj/Personalproj"
import WorkProj from "./components/WorkProj/Workproj"
import "./App.css";
import LocomotiveScroll from "locomotive-scroll";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
    return () => {
      locomotiveScroll.destroy();
    };
  }, []);
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/My_Portfolio" />} />
          <Route path="/My_Portfolio" element={<LandingPage />} />
          <Route path="/school" element={<School />} />
          <Route path="/college" element={<College />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/workdemo" element={<Workdemo />} />
          <Route path="/hobby" element={<Hobby />} />
          <Route path="/academic" element={<AcademicProj />} />
          <Route path="/personalproj" element={<PersonalProj />} />
          <Route path="/workproj" element={<WorkProj />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
