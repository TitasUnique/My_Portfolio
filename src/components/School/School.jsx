import React, {useEffect, useState} from 'react'
import './School.css'
import 'animate.css'
import oldgroup from '../../Images/School_images/old-group.jpg'
import oldschool from '../../Images/School_images/old-school.jpg'
import rpchsschool from '../../Images/School_images/rpchs-group.jpg'
import rpchsstudent from '../../Images/School_images/rpchs-student-group.jpg'
import Navbar from "../../components/Navbar/Navbar";
const School = () => {

  const [currentImageIndex, setcurrentImageIndex] = useState(0);

  const images = [oldgroup,oldschool,rpchsschool,rpchsstudent];

  useEffect(() => {
    const interval = setInterval(() => {setcurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);}, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
    <Navbar navold={"white"}/>
    <div className='school'>
      <div className="name animate__animated animate__zoomInDown">PAL CHOWDHURY HIGH SCHOOL</div>
      <div className="descrip-box">
      </div>
      <div className="img-scroll">
        {images.map((image, index) => (
          <img key={index} src={image} alt="" className={index === currentImageIndex ? 'active' : ''} />
        ))}
      </div>
    </div>
    </>
  )
}

export default School