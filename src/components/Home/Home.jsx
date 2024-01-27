import React from "react";
import ReactTyped from "react-typed";
import './Home.css';
import Image1 from '../../Images/img1.jpg';
import Image2 from '../../Images/img2.jpg';
import Image3 from '../../Images/img3.jpg';
import Resume from '../../Images/Resume_Titas Saha.pdf';
const Home = () => {
  return (
    <div className="homeintro">
      <div className="h-left">
        <span>Hello! I Am</span>
        <span>Titas Saha</span>
        <div className="t-writter">
          <ReactTyped strings={["Frontend Developement with Entry Level of Experience in Web Designing", "Java Developement with Intermediate Level of Experience in Coding"]} typeSpeed={40} backSpeed={20} backDelay={600} loop />
        </div>
        <a href={Resume}>
          <button className="h-button">Download CV</button>
        </a>
      </div>
      <div className="h-right">
          <img src={Image1} alt="" />
          <img src={Image2} alt="" />
          <img src={Image3} alt="" />
          <div className="blur1"></div>
          <div className="blur2"></div>
          <div className="blur3"></div>
        </div>
    </div>
  );
};
export default Home;