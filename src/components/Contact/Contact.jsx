import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import Navbar from "../../components/Navbar/Navbar"
import "./Contact.css"
import myImage from "../../Images/contact_images/my-image.jpg"
import 'animate.css'

const Contact = () => {

  const form = useRef();

  const alert = (event) => {
    event.preventDefault();
    const name = event.target.user_name.value.trim();
    const email = event.target.user_email.value.trim();
    const message = event.target.message.value.trim();

    if (name && email && message) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        window.alert("Please enter a valid email address.");
        return;
      }
      emailjs.sendForm('service_cmyea8l', 'template_tju5l4a', form.current, {publicKey: '0LOTXzk6fob88s2Bs',})
      .then(
        () => {
          window.alert("Successfully submitted your response!");
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    } else {
      window.alert("Please provide all required information and then submit.");
    }
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
          <div className="text2 animate__animated animate__fadeInRight">As a React.js developer with 3.1 years of experience, I bring a strong foundation in web development, creating seamless, responsive, and user-friendly applications. My focus is on delivering high-quality, efficient solutions. I stay up to date with the latest industry trends, ensuring your project is built with modern, scalable technologies.</div>
        </div>
      </div>

      <div className="m-form">
        <h1>FEEDBACK</h1>
        <form ref={form} className="m-form1" onSubmit={(event) => alert(event)}>
          <input type="text" name="user_name" className='m-user' placeholder='Name' />
          <input type="email" name="user_email" className='m-user' placeholder='Email' />
          <textarea rows="5" cols="40" name="message" className='m-user' placeholder='Message' />
          <button type='submit' className='m-sub-button'>Send</button>
        </form>
      </div>

      <div className="con">
        <div className="header-name">
          <p>CONTACT ME</p>
        </div>

        <div className="line01"></div>

        <div className="details-me">

          <div className="st-address">
            <i className="fa-solid fa-location-dot" />
            <span>RANAGHAT, NADIA, WEST BENGAL</span>
          </div>

          <div className="ph-no">
            <i className="fa-solid fa-phone" />
            <span>7364833228</span>
          </div>

          <div className="mail-id">
            <i className="fa-solid fa-envelope" />
            <span>saha.titas.2016@gmail.com</span>
          </div>

        </div>

      </div>
    </>
  )
}

export default Contact