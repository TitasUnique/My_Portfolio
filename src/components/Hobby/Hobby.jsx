import React, { useState } from 'react';
import './Hobby.css';

const Hobby = () => {
    const images = [
        { src: "https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", title: "Nike" },
        { src: "https://images.pexels.com/photos/1450332/pexels-photo-1450332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", title: "Puma" },
        { src: "https://images.pexels.com/photos/1307128/pexels-photo-1307128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", title: "Yeezy" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isScaling, setIsScaling] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleNext = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setIsScaling(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            setIsScaling(false);
            setIsAnimating(false);
        }, 1100);
    };

    const handlePrev = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setIsScaling(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => 
                (prevIndex - 1 + images.length) % images.length
            );
            setIsScaling(false);
            setIsAnimating(false);
        }, 1100);
    };

    return (
        <div className="carousel-container">
            <button className="carousel-button" onClick={handlePrev} disabled={isAnimating}>Left</button>
            <div className={`card ${isScaling ? 'scaling' : ''}`}>
                <img src={images[currentIndex].src} alt={images[currentIndex].title} />
                <h3>{images[currentIndex].title}</h3>
            </div>
            <button className="carousel-button" onClick={handleNext} disabled={isAnimating}>Right</button>
        </div>
    );
};

export default Hobby;


