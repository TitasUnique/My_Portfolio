import React from 'react'
import './Highlights.css'
import java from '../../Images/Highlight_images/java.png'
import arduino from '../../Images/Highlight_images/arduino.png'
import Bootstrap from '../../Images/Highlight_images/Bootstrap.png'
import css from '../../Images/Highlight_images/css.png'
import html from '../../Images/Highlight_images/html.png'
import javascript from '../../Images/Highlight_images/javascript.png'
import oops from '../../Images/Highlight_images/oops.png'
import react from '../../Images/Highlight_images/react.png'
const Highlights = () => {

  return (
    <div className='highlight'>
      <div className='highlight-text'><h1>Highlights</h1></div>

      <div className="cards-section" data-aos="zoom-in-down">
        <div className="box-container">
          <div className="box">
            <div className="pentagon-card pentagon-card-front">
              <img src={java} style={{ transform: "scale(0.7)", width: "80px", height: "80px" }} alt="#" />
            </div>
            <div className=" pentagon-card pentagon-card-back">
              <h1 className='text-java'>JAVA</h1>
            </div>
          </div>
        </div>

        <div className="box-container">
          <div className="box">
            <div className="circle-card circle-card-front">
              <img src={css} style={{ "padding-top": "14px", width: "54px", height: "61px" }} alt="#" />
            </div>
            <div className="circle-card circle-card-back">
              <h1 className="text-css">CSS</h1>
            </div>
          </div>
        </div>

        <div className="box-container">
          <div className="box">
            <div className="diamond-card diamond-card-front">
              <img src={javascript} style={{ "padding-top": "9px", transform: "scale(0.7)", width: "64px", height: "74px", rotate: "-45deg" }} alt="#" />
            </div>
            <div className="diamond-card diamond-card-back">
              <h1 className="text-javascript">JavaScript</h1>
            </div>
          </div>
        </div>

        <div className="box-container">
          <div className="box">
            <div className="square-card square-card-front">
              <img src={arduino} style={{ transform: "scale(0.7)", width: "80px", height: "80px" }} alt="#" />
            </div>
            <div className="square-card square-card-back">
              <h1 className="text-arduino">Arduino</h1>
            </div>
          </div>
        </div>

        <div className="box-container">
          <div className="box">
            <div className="pentagon-card pentagon-card-front">
              <img src={oops} style={{ "padding-top": "7px", transform: "scale(0.8)", width: "77px", height: "80px" }} alt="#" />
            </div>
            <div className="pentagon-card pentagon-card-back">
              <h1 className="text-oops">OOPS</h1>
            </div>
          </div>
        </div>

        <div className="box-container">
          <div className="box">
            <div className="circle-card circle-card-front">
              <img src={Bootstrap} style={{ transform: "scale(0.9)", width: "64px", height: "55px" }} alt="#" />
            </div>
            <div className="circle-card circle-card-back">
              <h1 className="text-Bootstrap">Bootstrap</h1>
            </div>
          </div>
        </div>

        <div className="box-container">
          <div className="box">
            <div className="diamond-card diamond-card-front">
              <img src={html} style={{ "padding-top": "9px", transform: "scale(0.7)", width: "64px", height: "74px", rotate: "-45deg" }} alt="#" />
            </div>
            <div className="diamond-card diamond-card-back">
              <h1 className="text-html">HTML</h1>
            </div>
          </div>
        </div>

        <div className="box-container">
          <div className="box">
            <div className="square-card square-card-front">
              <img src={react} style={{ transform: "scale(0.7)", width: "87px", height: "81px" }} alt="#" />
            </div>
            <div className="square-card square-card-back">
              <h1 className="text-react">ReactJs</h1>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Highlights