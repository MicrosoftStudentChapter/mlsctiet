import React from 'react'
import logo from '../../Assets/mlsc_shield_new.png'
import './Navbar.css'
import {HiOutlineMenu} from 'react-icons/hi'
import { useState } from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <>
    <nav>
      {/* Hamburger displayed with media query */}
      <div className='hamburger'>
        <HiOutlineMenu size="40px"
        onClick={() =>{
          setOpen(!open);
          console.log(open);
        } 
        }
        />
        
      </div>

      {/* NavBar MLSC logo */}
      <div className="left-nav">
        <Link to="/">
        <img src={logo} alt="Logo"/>
        </Link>
        <h2>MLSC</h2>
      </div>

      {/* NavBar Menu icons */}
        <ul className='right-nav'>
          <li className='nav-item'>
            <Link to='/about'>About</Link>
          </li>
          <li className='nav-item'>
            <Link to='/alumni'>Alumni</Link>
          </li>
          <li className='nav-item'>
            <Link to='/community'>Community</Link>
          </li>
          <li className='nav-item'>
            <Link to='/events'>Events</Link>
          </li>
          <li className='nav-item'>
            <Link to='/gallery'>Gallery</Link>
          </li>
          <li className='nav-item'>
            <Link to='/team'>Team</Link>
          </li>
          <li className='nav-item'>
            <Link to='/projects'>Projects</Link>
          </li>
          <li className='nav-item'>
            <Link to='/sponsors'>Sponsors</Link>
          </li>
        </ul>


    </nav>
    </>
  )
}