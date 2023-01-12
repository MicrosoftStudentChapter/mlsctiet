import React, { useState } from "react";
import logo from "../../Assets/mlsc_shield_new.png";
import HamburgerMenuIcon from "../../Assets/hamburger.svg";
import CloseMenu from "../../Assets/close.svg";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  console.log(nav);

  function openNav() {
    if (!nav) {
      document.querySelector(".side-nav").style.width = "100vw";
      document.querySelector(".hamburger").style.display = "none";
      document.querySelector(".close-nav").style.display = "block";

      
    } else {
      document.querySelector(".side-nav").style.width = "0";
    }
    setNav(!nav);
    console.log("clicked", nav);
  }

  function closeNav() {
    document.querySelector(".side-nav").style.width = "0";
    document.querySelector(".hamburger").style.display = "flex";
    document.querySelector(".close-nav").style.display = "none";
    setNav(!nav);
  }

  return (
    <>
      <nav>
        <div className="left-nav">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
          <h2>MLSC</h2>
        </div>
        
        <ul className="right-nav">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">About</Link>
          </li>
          {/* <li className="nav-item">
            <Link to="/alumni">Alumni</Link>
          </li> */}
          <li className="nav-item">
            <Link to="/community">Community</Link>
          </li>
          <li className="nav-item">
            <Link to="/events">Events</Link>
          </li>
          {/* <li className="nav-item">
            <Link to="/gallery">Gallery</Link>
          </li> */}
          <li className="nav-item">
            <Link to="/team">Team</Link>
          </li>
          {/* <li className="nav-item">
            <Link to="/projects">Projects</Link>
          </li> */}
          <li className="nav-item">
            <Link to="/sponsors">Sponsors</Link>
          </li>
        </ul>
        <div className="hamburger">
          <img src={HamburgerMenuIcon} onClick={openNav} alt="menu" />
        </div>
      </nav>
      <div className="side-nav">
        <img
          src={CloseMenu}
          className="close-nav"
          onClick={closeNav}
          alt="close menu"
        />
        <ul className="side-navbar">
          <li className="nav-item">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/alumni">Alumni</Link>
          </li>
          <li className="nav-item">
            <Link to="/community">Community</Link>
          </li>
          <li className="nav-item">
            <Link to="/events">Events</Link>
          </li>
          <li className="nav-item">
            <Link to="/gallery">Gallery</Link>
          </li>
          <li className="nav-item">
            <Link to="/team">Team</Link>
          </li>
          <li className="nav-item">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="nav-item">
            <Link to="/sponsors">Sponsors</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
