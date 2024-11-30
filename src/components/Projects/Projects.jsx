import React, { useEffect, useState } from 'react'
import './Projects.css'
import Navbar from "../../components/Navbar/Navbar"

const Projects = ({ text, images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2500);

        return () => clearInterval(interval);
    }, [images.length]);

    useEffect(() => {
        const overlayText = document.querySelector('.overlay-text');
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
                <div className="head-text animate__animated animate__slideInUp">{text}</div>
                <div className="image-container">
                    <img src={images[currentImageIndex]} alt="project showcase" />
                </div>
                <div className="overlay-text">Projects</div>
            </div>
        </>
    );
}

export default Projects