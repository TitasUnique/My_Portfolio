import React from 'react'
import './Terminal.css'
import wave from '../../Images/Terminal_Images/wave.png'
import instagram from '../../Images/Terminal_Images/instagram.png'
import linkedin from '../../Images/Terminal_Images/linkedin.png'
import github from '../../Images/Terminal_Images/github.png'

const Terminal = () => {
  
const alert = () => {
  window.alert("Successfully Submited");
}

  return (
    <div className='terminal-section'>
      <div className="bg-image">
        <img src={wave} alt="#" />
      </div>
      <div className="content">
        <div className="left">
          <h1>saha.titas.2016@gmail.com</h1>
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
          <div className="about-project">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel</div>
        </div>

        <div className="line"></div>

        <div className="right">
          <form className="form1">
            <input type="text" name="user_name" className='user' placeholder='Name' />
            <input type="email" name="user_email" className='user' placeholder='Email' />
            <textarea rows="5" cols="40" name="message" className='user' placeholder='Message' />
            <button className='t-button' onClick={()=> alert()}>Send</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Terminal