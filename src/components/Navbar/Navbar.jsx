import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = ({ navold }) => {

  const [Mnav, SetMnav] = useState(false);

  return (
    <>
      <div className="mob-nav">
        <button className={`nav-mob-btn ${Mnav === true ? 'cross' : 'bars'}`} onClick={() => { SetMnav(!Mnav) }}>{Mnav === true ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}</button>
        <div className="mob-name"><Link to="/My_Portfolio">Titas</Link></div>
        <Link to="/contact"><button className='mob-contact'><i className="fa-solid fa-address-book"></i></button></Link>
      </div>
      
      <div className={`n-wrapper ${Mnav === true ? 'mob-wrapper-show' : 'mob-wrapper-off'}`}>
        <div className="n-left">
          <div className="n-name"><Link to="/My_Portfolio">Titas</Link></div>
        </div>

        <div className="n-right">
          <div className="nav-blur"></div>
          <ul className='n-right-main-ul'>
            <li className={`mob-ul ${navold === "white" ? "edulist-white" : "edulist-black"}`}>
              <span>Education<i className="fa-solid fa-arrow-right"></i></span>
              <ul className='sub-menu1-ul'>
                <li><Link to="/school">10th Standard</Link></li>
                <li><Link to="/school">12th Standard</Link></li>
                <li><Link to="/college">Graduation</Link></li>
              </ul>
            </li>

            <li className={`mob-ul ${navold === "white" ? "explist-white" : "explist-black"}`}>
              <span>Experiences<i className="fa-solid fa-arrow-right"></i></span>
              <ul className='sub-menu2-ul'>
                <li><Link to="/experience">Tech India</Link></li>
                <li><Link to="/experience">Wipro</Link></li>
                <li><Link to="/experience">LearnElectronics India</Link></li>
              </ul>
            </li>

            <li className={`mob-ul ${navold === "white" ? "projlist-white" : "projlist-black"}`}>
              <span>Projects<i className="fa-solid fa-arrow-right"></i></span>
              <ul className='sub-menu3-ul'>
                <li><Link to="/academic">Academic Projects</Link></li>
                <li><Link to="/workproj">Work Projects</Link></li>
                <li><Link to="/personalproj">Personal Projects</Link></li>
              </ul>
            </li>

            <li className={`mob-ul ${navold === "white" ? "worklist-white" : "worklist-black"}`}>
              <span>Resources<i className="fa-solid fa-arrow-right"></i></span>
              <ul className='sub-menu4-ul'>
                <li><Link to="/workdemo">Technology Topics</Link></li>
                <li><a href="https://react.dev/">Electronics</a></li>
              </ul>
            </li>

            <li className={`mob-ul ${navold === "white" ? "otherlist-white" : "otherlist-black"}`}>
              <span>Others<i className="fa-solid fa-arrow-right"></i></span>
              <ul className='sub-menu5-ul'>
                  <li><Link to="/hobby">Certificates</Link></li>
                  <li><Link to="/hobby">Hobby</Link></li>
              </ul>
            </li>
          </ul>

          <Link className='nav-button' to="/contact" >Contact</Link>
        </div>
      </div>
    </>
  )
}

export default Navbar