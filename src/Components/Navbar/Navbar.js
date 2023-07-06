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
    // if (!nav) {
    //     document.querySelector(".side-nav").style.width = "100vw";
    //     document.querySelector(".hamburger").style.display = "none";
    //     document.querySelector(".close-nav").style.display = "block";
    // } else {
    //     document.querySelector(".side-nav").style.width = "0";
    // }
    document.querySelector("body").style.overflow = "hidden";
    setNav(!nav);
    console.log("clicked", nav);
  }

  function closeNav() {
    // document.querySelector(".side-nav").style.width = "0";
    // document.querySelector(".side-navbar").style.display = "none";
    // document.querySelector(".hamburger").style.display = "flex";
    // document.querySelector(".close-nav").style.display = "none";
    document.querySelector("body").style.overflow = "";
    setNav(!nav);
  }
  if (!nav) {
    return (
      <>
        <nav className="navthingie">
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
            <li className="nav-item">
              <Link to="/gallery">Gallery</Link>
            </li>
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
        </nav>
        <div className="hamburger">
          <img src={HamburgerMenuIcon} onClick={openNav} alt="menu" />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="side-nav">
          <img
            src={CloseMenu}
            className="close-nav"
            onClick={closeNav}
            alt="close menu"
          />
          <ul className="side-navbar">
            <Link onClick={closeNav} to="/">
              <div className="nav-item">Home</div>
            </Link>
            <Link onClick={closeNav} to="/about">
              <div className="nav-item">About</div>
            </Link>

            <Link onClick={closeNav} to="/alumni">
              <div className="nav-item">Alumni</div>
            </Link>
            <Link onClick={closeNav} to="/community">
              <div className="nav-item">Community</div>
            </Link>
            <Link onClick={closeNav} to="/events">
              <div className="nav-item">Events</div>
            </Link>
            {/* <Link onClick={closeNav} to="/gallery"> */}
            {/* <div className="nav-item">
                        Gallery
                    </div> */}
            {/* </Link> */}
            <Link onClick={closeNav} to="/team">
              <div className="nav-item">Team</div>
            </Link>
            {/* <Link  onClick={closeNav} to="/projects">
                    <div className="nav-item">
                        Projects
                    </div>
                    </Link> */}
            <Link onClick={closeNav} to="/sponsors">
              <div className="nav-item">Sponsors</div>
            </Link>
          </ul>
        </div>
      </>
    );
  }
}
