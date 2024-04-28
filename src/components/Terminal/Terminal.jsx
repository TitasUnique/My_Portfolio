import React, { useRef } from 'react'
import './Terminal.css'
import emailjs from '@emailjs/browser';
import instagram from '../../Images/Terminal_Images/instagram.png'
import linkedin from '../../Images/Terminal_Images/linkedin.png'
import github from '../../Images/Terminal_Images/github.png'

const Terminal = () => {

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
  <div className='terminal-section'>
    <div className="bg-image">
    </div>
    <div className="content">
      <div className="left">
        <span className="span-mail">saha.titas.2016@gmail.com</span>
        <div className="link-image">
          <a href="https://github.com/TitasUnique">
            <img src={github} alt="#" />
          </a>
          <a href="https://www.linkedin.com/in/titas-saha-64713b20a/">
            <img src={linkedin} alt="#" />
          </a>
          <a href="https://www.instagram.com/saha_titu_09/">
            <img src={instagram} alt="#" />
          </a>
        </div>
        <div className="about-project">This Project is still under development stage. So there will be many webpages & elements that will won't work properly. Please have patience. If you want to see this project's code then go to my github account & look for 'My-Portfolio' repository.</div>
      </div>

      <div className="line"></div>

      <div className="right">
        <form ref={form} className="form1" onSubmit={(event) => alert(event)}>
          <input type="text" name="user_name" className='user' placeholder='Name' />
          <input type="email" name="user_email" className='user' placeholder='Email' />
          <textarea rows="5" cols="40" name="message" className='user' placeholder='Message' />
          <button type='submit' className='t-button'>Send</button>
        </form>
      </div>
      <div className="right2">
        <div className="about-project2">This Project is still under development stage. So there will be many webpages & elements that will won't work properly. Please have patience. If you want to see this project's code then go to my github account & look for 'My-Portfolio' repository.</div>
      </div>
    </div>
  </div>
)
}

export default Terminal