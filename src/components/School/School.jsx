import React, {useEffect, useState} from 'react'
import './School.css'
import oldgroup from '../../Images/old-group.jpg'
import oldschool from '../../Images/old-school.jpg'
import rpchsschool from '../../Images/rpchs-group.jpg'
import rpchsstudent from '../../Images/rpchs-student-group.jpg'

const School = ({ setnav, navold }) => {

  const [currentImageIndex, setcurrentImageIndex] = useState(0);

  const images = [oldgroup,oldschool,rpchsschool,rpchsstudent];

  useEffect(() => {
    if (navold === "landing-page") {
      setnav("10th 12th standard")
      console.log("school")
    }
  }, [navold, setnav]);

  useEffect(() => {
    const interval = setInterval(() => {setcurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);}, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className='school'>
      <div className="descrip-box">
      </div>
      <div className="img-scroll">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={index === currentImageIndex ? 'active' : ''}
          />
        ))}
      </div>
    </div>
  )
}

export default School