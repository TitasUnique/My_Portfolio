import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Experience.css'
import LearnElectronics from '../../Images/Experience_images/learnElectroics.png';
import Wipro from '../../Images/Experience_images/wipro.png';
import "../BgAnime/BgAnime.css"
const Experience = ({ navold }) => {
  return (
    <>
      <div className="main-time-div">

        <div className="bg-anime">
          <ul class="background">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>

        <Navbar navold={"black"} />

        <div className="timeline">

          <div className="exp-card1">
            <img className='Wipro-img' src={Wipro} alt="" />
            <div className="exp-textbox">
              <h2>Wipro Limited</h2>
              <small>May 2022 - Present</small>
              <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente alias laudantium perspiciatis quos sunt adipisci, aperiam quam libero soluta nostrum cum sit consequatur numquam sed ea consectetur accusamus mollitia architecto.</span>
            </div>
          </div>

          <div className="exp-card2">
            <img className='LE-img' src={LearnElectronics} alt="" />
            <div className="exp-textbox">
              <h2>LearnElectronnics India</h2>
              <small>March 2021 - July 2021</small>
              <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente alias laudantium perspiciatis quos sunt adipisci, aperiam quam libero soluta nostrum cum sit consequatur numquam sed ea consectetur accusamus mollitia architecto.</span>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Experience