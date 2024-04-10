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
      </div>
      
      <div className={`n-wrapper ${Mnav === true ? 'mob-wrapper-show' : 'mob-wrapper-off'}`}>
        <div className="n-left">
          <div className="n-name"><Link to="/My_Portfolio">Titas</Link></div>
        </div>

        <div className="n-right">
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
                <li><Link to="/experience">LearnElectronics India</Link></li>
                <li><Link to="/experience">Wipro</Link></li>
              </ul>
            </li>

            <li className={`mob-ul ${navold === "white" ? "projlist-white" : "projlist-black"}`}>
              <span>Projects<i className="fa-solid fa-arrow-right"></i></span>
              <ul className='sub-menu3-ul'>
                <li><a href="https://react.dev/">Academic Projects</a></li>
                <li><a href="https://react.dev/">Work Projects</a></li>
                <li><a href="https://react.dev/">Personal Projects</a></li>
              </ul>
            </li>

            <li className={`mob-ul ${navold === "white" ? "worklist-white" : "worklist-black"}`}>
              <span>WorkDemo<i className="fa-solid fa-arrow-right"></i></span>
              <ul className='sub-menu4-ul'>
                <li><a href="https://react.dev/">Web Developement</a></li>
                <li><a href="https://react.dev/">Coding Analysis</a></li>
              </ul>
            </li>

            <li className={`mob-ul ${navold === "white" ? "otherlist-white" : "otherlist-black"}`}>
              <span>Others<i className="fa-solid fa-arrow-right"></i></span>
              <ul className='sub-menu5-ul'>
                <li>
                  <a href="https://react.dev/">Hobby</a>
                </li>
              </ul>
            </li>
          </ul>

          <Link className='button' to="/contact" >Contact</Link>
        </div>
      </div>
    </>
  )
}

export default Navbar