import React from 'react'
import './Cards.css';
import Mycard from './Cardshown';
import Project from '../../Images/Crousel_images/project.png';
import Robot from '../../Images/Crousel_images/robot.png';
import Achieve from '../../Images/Crousel_images/Achievement.png';
import Certi from '../../Images/Crousel_images/Certification.png';
import Exp1 from '../../Images/Crousel_images/Experience02.png';
import Grad from '../../Images/Crousel_images/Graduation.png';
import Tech1 from '../../Images/Crousel_images/Tech01.png';
import Tech3 from '../../Images/Crousel_images/Technologyint.png';
import { Link } from 'react-router-dom'

const Cards = () => {
  const leftbtn = () => {
    let box = document.querySelector('.cards-container');
    console.dir(box);
    box.scrollLeft = box.scrollLeft - 600;
  }

  const rightbtn = () => {
    let box = document.querySelector('.cards-container');
    box.scrollLeft = box.scrollLeft + 600;
  }

  return (
    <div className='Cardsection'>
        <button className="left-btn" onClick={leftbtn}><h1>&gt;</h1></button>
        <button className="right-btn" onClick={rightbtn}><h1>&lt;</h1></button>
        
        <div className="cards-container">
            <Mycard name="Project" img={Robot} style01={{transform : "scale(1.1)"}} width01={{width : "40%"}} projname={"Fire Fighting Robot"} detail={"Arduino, Electronics, C Coding, Sensors, TeamLead"}/>
            <Link to="/college"><Mycard name = "Graduation" img={Grad} style01={{transform : "scale(1.1)"}} width01={{width : "44%"}} projname={"JISCE"} detail={"Electronics and Communication Engineering Department"}></Mycard></Link>
            <Mycard name="Project" img={Project} style01={{transform : "scale(1.2)"}} width01={{width : "64%"}} projname={"Online VCD System"} detail={"HTML, CSS, SQL, Tomcat Server, Java, JDBC, TeamLead"}/>
            <Mycard name="Experience" img={Exp1} style01={{transform : "scale(1)"}} width01={{width : "46%"}} projname={"Wipro Technologies"} detail={"Project Engineer, Java Developer, Frontend Developement"}/>
            <Mycard name="Project" img={Robot} style01={{transform : "scale(1.1)"}} width01={{width : "40%"}} projname={"Water Garbage Cleaner"} detail={"Arduino, Electronics, C Coding, Sensors, Chemistry, TeamLead"}/>
            <Mycard name="Technology" img={Tech1} style01={{transform : "scale(1.1)"}} width01={{width : "45%"}} projname={"Hands-on Experiences"} detail={"Java, ReactJS, Arduino, VS Code, Proteus, Eclipse IDE, Git"}/>
            <Mycard name="Project" img={Project} style01={{transform : "scale(1.2)"}} width01={{width : "64%"}} projname={"Smart Road"} detail={"Arduino, Electronics, Sensors, TeamLead"}/>
            <Mycard name="Experience" img={Tech3} style01={{transform : "scale(1.1)"}} width01={{width : "62%"}} projname={"LearnElectronics India"} detail={"Internship, Quiz Making, Data Upload, Product Review"}/>
            <Mycard name="Achievement" img={Achieve} style01={{transform : "scale(1.1)"}} width01={{width : "44%"}} projname={"Short Film"} detail={"Organised by JIS College HU Dept., 1st Runners up"}/>
            <Mycard name="Certification" img={Certi} style01={{transform : "scale(1.1)"}} width01={{width : "30%"}} projname={"Learning Stages"} detail={"Nagarro, JIS College, IIT Kharagpur, Coursera, Wipro"}/>
        </div>
    </div>
  )
}

export default Cards