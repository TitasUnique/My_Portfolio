import React from 'react'
import './Highlights.css'
import Json from '../../Images/Highlight_images/Json.png'
import Jira from '../../Images/Highlight_images/Jira.png'
import git from '../../Images/Highlight_images/git.png'
import css from '../../Images/Highlight_images/css.png'
import html from '../../Images/Highlight_images/html.png'
import javascript from '../../Images/Highlight_images/javascript.png'
import NextJS from '../../Images/Highlight_images/NextJS.png'
import react from '../../Images/Highlight_images/react.png'
const Highlights = () => {

  return (
    <div className='highlight'>
      <div className='highlight-text'><h1>Highlights</h1></div>

      <div className="cards-section" data-aos="zoom-in-down">
        <div className="box-container">
          <div className="box">
            <div className=" H-card pentagon-card pentagon-card-front">
              <img className="mob-img-4" src={Json} alt="#" />
            </div>
            <div className=" H-card pentagon-card pentagon-card-back">
              <span className='text-java'>JSON</span>
            </div>
          </div>
        </div>

        <div className="box-container">
          <div className="box">
            <div className="H-card circle-card circle-card-front">
              <img className="mob-img-4" src={css} alt="#" />
            </div>
            <div className="H-card circle-card circle-card-back">
              <span className="text-css">CSS</span>
            </div>
          </div>
        </div>

        <div className="box-container">
          <div className="box">
            <div className="H-card diamond-card diamond-card-front">
              <img className="mob-img-3" src={javascript} alt="#" />
            </div>
            <div className="H-card diamond-card diamond-card-back">
              <span className="text-javascript">JavaScript</span>
            </div>
          </div>
        </div>

        <div className="box-container">
          <div className="box">
            <div className="H-card square-card square-card-front">
              <img className="mob-img-4" src={git} alt="#" />
            </div>
            <div className="H-card square-card square-card-back">
              <span className="text-arduino">Git</span>
            </div>
          </div>
        </div>

        <div className="box-container">
          <div className="box">
            <div className="H-card pentagon-card pentagon-card-front">
              <img className="mob-img-4" src={NextJS} alt="#" />
            </div>
            <div className="H-card pentagon-card pentagon-card-back">
              <span className="text-oops">Next.JS</span>
            </div>
          </div>
        </div>

        <div className="box-container">
          <div className="box">
            <div className="H-card circle-card circle-card-front">
              <img className="mob-img-4" src={Jira} alt="#" />
            </div>
            <div className="H-card circle-card circle-card-back">
              <span className="text-Bootstrap" style={{ fontSize: "1.5rem" }}>Jira</span>
            </div>
          </div>
        </div>

        <div className="box-container">
          <div className="box">
            <div className="H-card diamond-card diamond-card-front">
              <img className="mob-img-3" src={html} alt="#" />
            </div>
            <div className="H-card diamond-card diamond-card-back">
              <span className="text-html">HTML</span>
            </div>
          </div>
        </div>

        <div className="box-container">
          <div className="box">
            <div className="H-card square-card square-card-front">
              <img className="mob-img-4" src={react} alt="#" />
            </div>
            <div className="H-card square-card square-card-back">
              <span className="text-react">React.JS</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Highlights