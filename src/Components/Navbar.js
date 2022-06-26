import React from "react";
import logo from '../Assets/mlsc_shield_new.png'

export default function Navbar(){
    return(
    <nav>
      <div className="left-nav">
      <img src={logo}/>
        <h2>MLSC</h2>
      </div>
      <div className="right-nav">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Alumni</a></li>
          <li><a href="#">Events</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Sponsors</a></li>

        </ul>
      </div>

    </nav>
    )
}