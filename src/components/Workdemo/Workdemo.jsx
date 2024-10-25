import React, { useEffect, useState } from "react";
import './WorkDemo.css';
import 'animate.css'
import Navbar from "../../components/Navbar/Navbar"

const images = [
  "https://images.pexels.com/photos/313690/pexels-photo-313690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/392018/pexels-photo-392018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1181248/pexels-photo-1181248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
];

const Workdemo = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isBlurActive, setIsBlurActive] = useState(false);

  useEffect(() => {
    // Image carousel effect
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

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

      // Adjust font size within the range
      newFontSize = Math.min(maxFontSize, newFontSize);
      newFontSize = Math.max(minFontSize, newFontSize);

      // Apply dynamic font size
      if (overlayText) {
        overlayText.style.fontSize = `${newFontSize}px`;
      }

      // Toggle blur effect and show scroll section based on scroll position
      if (scrollPosition > 8) {
        setIsBlurActive(true);
        scrollSection.classList.remove('hidden');
      } else {
        setIsBlurActive(false);
        scrollSection.classList.add('hidden');
      }
    };

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar navold={"black"} />
      <div className="card-section">
      <div className="academic animate__animated animate__slideInUp">ACADEMIC</div>
        <div className={`image-container ${isBlurActive ? 'blurred' : ''}`}>
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

export default Workdemo;

