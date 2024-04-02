import React,{useEffect} from "react";
import LandingPage from "./components/LandingPage/Landing";
import School from "./components/School/School";
import College from "./components/College/College";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import "./App.css";
import LocomotiveScroll from "locomotive-scroll";
import { BrowserRouter, Route, Routes } from "react-router-dom";


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
          <Route path="/My_Portfolio" element={<LandingPage/>} />
          <Route path="/school" element={<School/>} />
          <Route path="/college" element={<College/>}/>
          <Route path="/experience" element={<Experience/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;