import React, { useState, useEffect } from 'react'
import './College.css'
import 'animate.css'
import CollegeDays1 from '../../Images/College_images/CollegeDays01.jpg'
import CollegeDays2 from '../../Images/College_images/CollegeDays02.jpg'
import Hatsoff from '../../Images/College_images/hatsoff_ceremony.jpg'
import FirstDay from '../../Images/College_images/FirstDay.jpg'
import Industry from '../../Images/College_images/First_Industrial_Visit.jpg'
import Ilovejis1 from '../../Images/College_images/ILoveJis.jpg'
import Ilovejis2 from '../../Images/College_images/I_Love_Jis.jpg'
import Lastday from '../../Images/College_images/LastDay.jpg'
import jistech from '../../Images/College_images/jistech_group.jpg'
import Navbar from "../../components/Navbar/Navbar"

const College = () => {

  const [currentImageIndex, setcurrentImageIndex] = useState(0);

  const images = [Ilovejis1, CollegeDays1, CollegeDays2, Hatsoff, Ilovejis2, FirstDay, Industry, Lastday, jistech];

  useEffect(() => {
    const interval = setInterval(() => { setcurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length); }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <div className='college'>
        <div className="college-back-img"></div>
        <Navbar navold={"white"} />
        <div className="content-college">
          <div className="collegeName animate__animated animate__zoomInDown">JIS COLLEGE OF ENGINEERING, KALYANI</div>
          <div className="college-down">
            <div className="college-descrip-box">At JIS College of Engineering, my college journey has been a defining chapter. Immersed in the dynamic field of ECE, I've been shaped by inspiring mentors and collaborative peers. Grateful for invaluable learnings and enduring friendships, I step forward confidently, equipped for future challenges and opportunities.</div>
            <div className="college-img-scroll">
              {images.map((image, index) => (
                <img key={index} src={image} alt="" className={index === currentImageIndex ? 'active' : ''} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default College