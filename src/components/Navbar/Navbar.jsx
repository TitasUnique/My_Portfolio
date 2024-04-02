import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = ({navold}) => {

  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name"><Link to="/My_Portfolio">Titas</Link></div>
      </div>

      <div className="n-right">
        <ul className='n-right-main-ul'>
          <li className={navold === "white" ? "edulist-white": "edulist-black"}>
            <Link to="/school">Education<i className="fa-solid fa-arrow-right i-tag"></i></Link>
              <ul className='sub-menu1-ul'>
                <li><Link to="/school">10th Standard</Link></li>
                <li><Link to="/school">12th Standard</Link></li>
                <li><Link to="/college">Graduation</Link></li>
              </ul>
          </li>

          <li className={navold === "white" ? "explist-white": "explist-black"}>
            <Link to="/experience">Experiences
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
              <ul className='sub-menu2-ul'>
                <li><Link to="/experience">LearnElectronics India</Link></li>
                <li><Link to="/experience">Wipro</Link></li>
              </ul>
          </li>

          <li className={navold === "white" ? "projlist-white": "projlist-black"}>
            <a href="https://react.dev/">Projects
              <i className="fa-solid fa-arrow-right"></i>
            </a>
              <ul className='sub-menu3-ul'>
                <li><a href="https://react.dev/">Academic Projects</a></li>
                <li><a href="https://react.dev/">Work Projects</a></li>
                <li><a href="https://react.dev/">Personal Projects</a></li>
              </ul>
          </li>

          <li className={navold === "white" ? "worklist-white": "worklist-black"}>
            <a href="https://react.dev/">WorkDemo
              <i className="fa-solid fa-arrow-right"></i>
            </a>
              <ul className='sub-menu4-ul'>
                <li><a href="https://react.dev/">Web Developement</a></li>
                <li><a href="https://react.dev/">Coding Analysis</a></li>
              </ul>
          </li>

          <li className={navold === "white" ? "otherlist-white": "otherlist-black"}>
            <a href="https://react.dev/">Others
              <i className="fa-solid fa-arrow-right"></i></a>
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
  )
}

export default Navbar