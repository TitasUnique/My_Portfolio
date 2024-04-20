import React from 'react'
import Navbar from "../../components/Navbar/Navbar"
import "./Contact.css"
import myImage from "../../Images/contact_images/my-image.jpg"
import 'animate.css'

const Contact = () => {

  const alert = () => {
    window.alert("Successfully Submited Your Response !");
  }
  return (
    <>
      <Navbar navold={"black"} />

      <div className="why-me">
        <div className="my-image-container">
          <img src={myImage} alt="" className='myImage' />
        </div>
        <div className="why-text">
          <div className="text1"><span>WHY ME?</span></div>
          <div className="text2 animate__animated animate__fadeInRight">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel</div>
        </div>
      </div>

      <div className="m-form">
        <h1>FEEDBACK</h1>
        <form className="m-form1">
          <input type="text" name="user_name" className='m-user' placeholder='Name' />
          <input type="email" name="user_email" className='m-user' placeholder='Email' />
          <textarea rows="5" cols="40" name="message" className='m-user' placeholder='Message' />
          <button className='m-sub-button' onClick={() => alert()}>Send</button>
        </form>
      </div>

      <div className="con">
        <div className="header-name">
          <p>CONTACT ME</p>
        </div>

        <div className="line01"></div>

        <div className="details-me">

          <div className="st-address">
            <i class="fa-solid fa-location-dot" />
            <span>PC STREET, BOSEPARA, RANAGHAT, NADIA, WEST BENGAL</span>
          </div>

          <div className="ph-no">
            <i class="fa-solid fa-phone" />
            <span>7364833228</span>
          </div>

          <div className="mail-id">
            <i class="fa-solid fa-envelope" />
            <span>saha.titas.2016@gmail.com</span>
          </div>

        </div>

      </div>
    </>
  )
}

export default Contact