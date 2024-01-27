import React from 'react'
import './Navbar.css'
const navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Titas</div>
      </div>

      <div className="n-right">
        <div className="n-list">
          <ul className='n-right-list-ul'>

            <li className="Edu-list">
              <a href="https://react.dev/">Education <i className="fa-solid fa-caret-down" /></a>
              <div className="sub-menu1">
                <ul>
                  <li><a href="https://react.dev/">10th Standard</a></li>
                  <li><a href="https://react.dev/">12th Standard</a></li>
                  <li><a href="https://react.dev/">Graduation</a></li>
                </ul>
              </div>
            </li>

            <li className='Exp-list'>
              <a href="https://react.dev/">Experiences</a>
              <div className="sub-menu2">
                <ul className='sub-menu2-ul'>
                  <li><a href="https://react.dev/">LearnElectronics India</a></li>
                  <li><a href="https://react.dev/">Wipro</a></li>
                </ul>
              </div>
            </li>

            <li className='Proj-list'>
              <a href="https://react.dev/">Projects</a>
              <div className="sub-menu3">
                <ul className='sub-menu3-ul'>
                  <li><a href="https://react.dev/">Academic Projects</a></li>
                  <li><a href="https://react.dev/">Work Projects</a></li>
                  <li><a href="https://react.dev/">Personal Projects</a></li>
                </ul>
              </div>
            </li>

            <li className='Work-list'>
              <a href="https://react.dev/">WorkDemo</a>
              <div className="sub-menu4">
                <ul className='sub-menu4-ul'>
                  <li><a href="https://react.dev/">Web Developement</a></li>
                  <li><a href="https://react.dev/">Coding Analysis</a></li>
                </ul>
              </div>
            </li>

            <li className='Other-list'>
              <a href="https://react.dev/">Others</a>
              <div className="sub-menu5">
                <ul className='sub-menu5-ul'>
                  <li><a href="https://react.dev/">Hobby</a></li>
                </ul>
              </div>
            </li>
            
          </ul>
        </div>
        <button className='button'>Contact</button>
      </div>
    </div>
  )
}

export default navbar
