import React, { useEffect, useState } from "react";
import './Workproj.css';
import 'animate.css'
import Navbar from "../../components/Navbar/Navbar";

const images = [
  "https://images.pexels.com/photos/313690/pexels-photo-313690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/392018/pexels-photo-392018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1181248/pexels-photo-1181248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
];

const Workproj = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isBlurActive, setIsBlurActive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const overlayText = document.querySelector('.overlay-text');
    const scrollSection = document.querySelector('.scroll-section');
    const minFontSize = 290;
    const maxFontSize = 330;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      let newFontSize = maxFontSize - scrollPosition / 2;
      newFontSize = Math.min(maxFontSize, newFontSize);
      newFontSize = Math.max(minFontSize, newFontSize);
      if (overlayText) {
        overlayText.style.fontSize = `${newFontSize}px`;
      }
      if (scrollPosition > 8) {
        setIsBlurActive(true);
        scrollSection.classList.remove('hidden');
      } else {
        setIsBlurActive(false);
        scrollSection.classList.add('hidden');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar navold={"black"} />
      <div className="card-section">
        <div className="academic work animate__animated animate__slideInUp">WORK</div>
        <div className={`image-container ${isBlurActive ? 'blurred' : ''}`}>
        {/* <div className="image-container"> */}
          <img src={images[currentImageIndex]} alt="project showcase" />
        </div>
        <div className="overlay-text">Projects</div>
      </div>
      <div id="scrollSection" className="scroll-section hidden">
        <p>This is the new element that appears on scroll.</p>
      </div>
    </>
  );
}

export default Workproj;

