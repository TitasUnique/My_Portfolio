import React, { useState, useEffect } from "react";
import './Academic.css';
import 'animate.css'
import Project from "../../components/Projects/Projects"
import Button from "../NextBtn/NextBtn"
import PrDetails from "../../ProjDetails/ProjDetails";

const Images = [
  "https://images.pexels.com/photos/3862367/pexels-photo-3862367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/23533991/pexels-photo-23533991/free-photo-of-3d-printer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/5846174/pexels-photo-5846174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
];

const Htexts = [
  "GAS LEAKAGE DETECTION",
  "SMART ROAD",
  "WATER GARBAGE CLEANER",
  "FIRE FIGHTING ROBOT"
];

const Ptexts = [
  "Our Automated Gas Leakage Detection System enhances safety by detecting gas leaks and triggering automatic responses. Using the MQ-6 gas sensor, it identifies gases like LPG, hydrogen, and carbon monoxide, while an Arduino UNO controls its functions. When gas is detected, the system activates a buzzer alarm, deactivates the main power supply, and sends an alert via GSM to a designated contact. A water pump also activates to contain potential hazards, with the ability to protect both household and industrial environments. This comprehensive setup ensures timely alerts and mitigates risks, promoting safe use of LPG and reducing accident potential.",
  "Automatic Accident Detection System in Hill Areas reduces accident risks on hilly roads by monitoring vehicles and alerting drivers of potential collisions. Designed for challenging conditions—low visibility, bad weather, and natural hazards—this system detects accidents and sends an SOS message with GPS location to the nearest emergency responders if an accident occurs. Using high-quality cameras, GPS, GSM modules, IR sensors, and thermal cameras, it offers early detection, fast emergency response, and better road safety. The system is low-cost, efficient, and equipped with wireless connectivity to assist drivers in remote, disaster-prone areas.",
  "Our Eco-Robot Waste Cleaner addresses the persistent issue of water pollution due to waste dumped into rivers, streams, and reservoirs. Built to prevent flooding and reduce cleanup costs, this robot collects rubbish from water areas, operating manually via Bluetooth-controlled remote. Designed with a waterproof electronic casing, the robot features an Arduino module connected to a Bluetooth module and water driver module, allowing smooth navigation with mini water pumps and servo motors. Lightweight, it floats easily and maneuvers left, right, and forward. Cost-effective and controlled via a Bluetooth RC car driver app, this eco-robot can operate for up to 2 hours, efficiently handling substantial waste within small spaces.",
  "Our project, Blaze Bosom Buddy, is an advanced autonomous firefighting robot, designed to detect, navigate, and extinguish fires while minimizing human risk. Using fire sensors to locate flames and ultrasonic sensors (HC-SR04) for obstacle detection, it follows a clear path to the fire source. Upon reaching the fire, the robot automatically opens a water outlet to douse the flames, spraying until the fire is completely extinguished. The detection range is easily adjustable via potentiometers, allowing flexible operation in various environments. With a 2-hour battery backup, it operates effectively in both daylight and darkness, requiring no manual assistance and prioritizing both safety and efficiency in fire suppression tasks."
];

const Academic = () => {
  const [rotation, setrotation] = useState(0);
  const [HtextIndex, setHtextIndex] = useState(0);
  const [PtextIndex, setPtextIndex] = useState(0);
  const [textOpacity, setTextOpacity] = useState(1);
  const [ProjData, setProjData] = useState([]);

  const handelRotation = () => {
    setTextOpacity(0);

    setrotation(prevRotation => prevRotation + 90);
    setTimeout(() => {
      setHtextIndex(prevHindex => (prevHindex + 1) % Htexts.length);
      setPtextIndex(prevPindex => (prevPindex + 1) % Ptexts.length);
    }, 400);

    setTimeout(() => {
      setTextOpacity(1);
    }, 400);
  }

  useEffect(() => {
    setProjData(PrDetails.project.map(projects => projects));
  }, []);

  return (
    <>
      <Project text={"ACADEMIC"} images={Images} />
      <div className="proj-cards">
        <div className="proj-details">
          <h2 className="rotating-head-text" style={{ opacity: textOpacity }}>{Htexts[HtextIndex]}</h2>
          <p className="rotating-para-text" style={{ opacity: textOpacity }}>{Ptexts[PtextIndex]}</p>
        </div>
        <Button className="next_btn" handelRotation={() => handelRotation()}>Next</Button>
        <div className="proj-carousel">
          <div className="circle" style={{ transform: `rotate(${rotation}deg)` }}>
            <div className=" imge img1" style={{ transform: `rotate(${rotation}deg)` }}>
              <img className="Rot-im" src="https://images.pexels.com/photos/11579194/pexels-photo-11579194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="no" />
            </div>
            <div className=" imge img2" style={{ transform: `rotate(${rotation}deg)` }}>
              <img className="Norm-im" src="https://images.pexels.com/photos/159201/circuit-circuit-board-resistor-computer-159201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="no" />
            </div>
            <div className=" imge img3" style={{ transform: `rotate(${rotation}deg)` }}>
              <img className="Rot-im" src="https://images.pexels.com/photos/566862/pexels-photo-566862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="no" />
            </div>
            <div className=" imge img4" style={{ transform: `rotate(${rotation}deg)` }}>
              <img className="Norm-im" src="https://images.pexels.com/photos/4709369/pexels-photo-4709369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="no" />
            </div>
          </div>
        </div>
      </div>
      <div className="proj-card-bellow">
        {ProjData.map((projects, index) => (
          <div className="proj-box">
            <div className="proj-card">
              <img className="proj-card-image" src={projects.cardImage} alt="#" />
              <div className="proj-card-name">{projects.name}</div>
            </div>
            <div className="proj-card-links">
              <a href={projects.paperLink} target="_blank" rel="noopener noreferrer">
                <div className="proj-publish"><i className="fa-solid fa-book-open" style={{color: "#000000"}}></i></div>
              </a>
              <div className="proj-prototype-images"><i class="fa-solid fa-image" style={{color: "#000000"}}></i></div>
              <a href={projects.PdfLink} target="_blank" rel="noopener noreferrer">
                <div className="proj-pdf"><i class="fa-solid fa-file-pdf" style={{color: "#000000"}}></i></div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Academic;

