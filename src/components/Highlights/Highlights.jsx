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
            <div className=" H-card pentagon-card pentagon-card-front">
              <img src={java} style={{ width: "4vw", height: "4vw" }} alt="#" />
            </div>
            <div className=" H-card pentagon-card pentagon-card-back">
              <span className='text-java'>JAVA</span>
            </div>
          </div>
        </div>

        <div className="box-container">
          <div className="box">
            <div className="H-card circle-card circle-card-front">
              <img src={css} style={{ "padding-top": "1vw", width: "4vw", height: "4vw" }} alt="#" />
            </div>
            <div className="H-card circle-card circle-card-back">
              <span className="text-css">CSS</span>
            </div>
          </div>
        </div>

        <div className="box-container">
          <div className="box">
            <div className="H-card diamond-card diamond-card-front">
              <img src={javascript} style={{ width: "3vw", height: "3vw", rotate: "-45deg" }} alt="#" />
            </div>
            <div className="H-card diamond-card diamond-card-back">
              <span className="text-javascript">JavaScript</span>
            </div>
          </div>
        </div>

        <div className="box-container">
          <div className="box">
            <div className="H-card square-card square-card-front">
              <img src={arduino} style={{ width: "4vw", height: "4vw" }} alt="#" />
            </div>
            <div className="H-card square-card square-card-back">
              <span className="text-arduino">Arduino</span>
            </div>
          </div>
        </div>

        <div className="box-container">
          <div className="box">
            <div className="H-card pentagon-card pentagon-card-front">
              <img src={oops} style={{ "padding-top": "1vw", width: "4vw", height: "4vw" }} alt="#" />
            </div>
            <div className="H-card pentagon-card pentagon-card-back">
              <span className="text-oops">OOPS</span>
            </div>
          </div>
        </div>

        <div className="box-container">
          <div className="box">
            <div className="H-card circle-card circle-card-front">
              <img src={Bootstrap} style={{ width: "4vw", height: "4vw" }} alt="#" />
            </div>
            <div className="H-card circle-card circle-card-back">
              <span className="text-Bootstrap">Bootstrap</span>
            </div>
          </div>
        </div>

        <div className="box-container">
          <div className="box">
            <div className="H-card diamond-card diamond-card-front">
              <img src={html} style={{ width: "3vw", height: "3vw", rotate: "-45deg" }} alt="#" />
            </div>
            <div className="H-card diamond-card diamond-card-back">
              <span className="text-html">HTML</span>
            </div>
          </div>
        </div>

        <div className="box-container">
          <div className="box">
            <div className="H-card square-card square-card-front">
              <img src={react} style={{width: "4vw", height: "4vw" }} alt="#" />
            </div>
            <div className="H-card square-card square-card-back">
              <span className="text-react">ReactJs</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Highlights