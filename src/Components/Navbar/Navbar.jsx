import React from 'react'
import logo from '../../Assets/mlsc_shield_new.png'
import './Navbar.css'
import { Link } from "react-router-dom";

export default function Navbar() {

  
  return (
    <>
    <nav>
      {/* NavBar MLSC logo */}
      <div className="left-nav">
        <img src={logo} />
        <h2>MLSC</h2>
      </div>

      {/* NavBar Menu icons */}
      <div className="right-nav">
        <ul>
          <li className='nav-item'>
            <Link to='/about' className='nav-links'>About</Link>
          </li>
          <li className='nav-item'>
            <Link to='/alumni' className='nav-links'>Alumni</Link>
          </li>
          <li className='nav-item'>
            <Link to='/community' className='nav-links'>Community</Link>
          </li>
          <li className='nav-item'>
            <Link to='/events' className='nav-links'>Events</Link>
          </li>
          <li className='nav-item'>
            <Link to='/gallery' className='nav-links'>Gallery</Link>
          </li>
          <li className='nav-item'>
            <Link to='/team' className='nav-links'>Team</Link>
          </li>
          <li className='nav-item'>
            <Link to='/projects' className='nav-links'>Projects</Link>
          </li>
          <li className='nav-item'>
            <Link to='/sponsors' className='nav-links'>Sponsors</Link>
          </li>
        </ul>
      </div>

    </nav>
    </>
  )
}