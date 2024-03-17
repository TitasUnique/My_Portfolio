import React,{useState, useEffect} from "react";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./components/LandingPage/Landing";
import School from "./components/School/School";
import College from "./components/College/College";
import "./App.css";
import LocomotiveScroll from "locomotive-scroll";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  // const locomotiveScroll = new LocomotiveScroll();
    const [navold, setnav] = useState("landing-page");
    useEffect(() => {
      const locomotiveScroll = new LocomotiveScroll();
      return () => {
        locomotiveScroll.destroy();
      };
    }, []);
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar navold={navold} setnav={setnav}/>
        <Routes>
          <Route path="/My_Portfolio" element={<LandingPage navold={navold} setnav={setnav}/>} />
          <Route path="/school" element={<School navold={navold} setnav={setnav}/>} />
          <Route path="/college" element={<College navold={navold} setnav={setnav}/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
