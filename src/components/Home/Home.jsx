import React from "react";
import { Typewriter } from 'react-simple-typewriter'
import './Home.css';
import Image1 from '../../Images/Home_Images/img1.jpg';
import Image2 from '../../Images/Home_Images/img2.jpg';
import Image3 from '../../Images/Home_Images/img3.jpg';
import Resume from '../../Images/Resume_Titas Saha.pdf';
const Home = () => {
  return (
    <div className="homeintro">
      <div className="h-left">
        <span>Hello! I Am</span>
        <span>Titas Saha</span>
        <div className="t-writter">
          <Typewriter className='t-writter' words={["React.JS Developement with Entry Level of Experience in Web Development", "Core Java with Intermediate Level of Experience in Coding", "UI/UX Designing with Entry Level of Experience in Web Designing"]} typeSpeed={40} deleteSpeed={20} delaySpeed={800} loop={false} />
        </div>
        <a className="h-button" href={Resume} target="_blank" rel="noopener noreferrer">View CV</a>
      </div>
      <div className="h-right">
        <div className="blur1"></div>
        <div className="blur2"></div>
        <div className="blur3"></div>
        <img className='h-image1' src={Image1} alt="" />
        <img className='h-image2' src={Image2} alt="" />
        <img className='h-image3' src={Image3} alt="" />
      </div>
    </div>
  );
};
export default Home;