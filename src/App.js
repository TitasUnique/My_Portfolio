import React from "react";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./components/LandingPage/Landing";
import School from "./components/School/School";
import "./App.css";
import LocomotiveScroll from 'locomotive-scroll';
import {BrowserRouter, Route, Routes} from 'react-router-dom';


function App() {
const locomotiveScroll = new LocomotiveScroll();
// const [navigatePage, setNavigatePage] = useState("");

  return (
      // <Navbar navigatePage1={navigatePage} setNavigatePage1={setNavigatePage}/>
      // {navigatePage === "" ?<LandingPage/>:<School />}
      <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/My_Portfolio" element={<LandingPage/>} />
          <Route path="/school" element={<School/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
