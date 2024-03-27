import React from 'react'
import Navbar from "../../components/Navbar/Navbar"
import "./Contact.css"
import myImage from "../../Images/contact_images/my-image.jpg"
import 'animate.css'

const Contact = () => {
  return (
    <>
      <Navbar navold={"black"} />

      <div className="why-me">
        <div className="my-image-container">
          <img src={myImage} alt="" className='myImage' />
        </div>
        <div className="why-text">
          <div className="text1"><h1>WHY ME?</h1></div>
          <div className="text2 animate__animated animate__fadeInRight">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel</div>
        </div>
      </div>

      <div className="con">
        <div className="header-name">
          <p>CONTACT ME</p>
        </div>
        <div className="line01"></div>
        <div className="details-me">
          <div className="img-section">
            <i class="fa-solid fa-location-dot"></i>
            <i class="fa-solid fa-phone"></i>
            <i class="fa-solid fa-envelope"></i>
          </div>
          <div className="img-detail">
            <h3>PC STREET, BOSEPARA, RANAGHAT, NADIA, WEST BENGAL</h3>
            <h3>7364833228</h3>
            <h3>saha.titas.2016@gmail.com</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact