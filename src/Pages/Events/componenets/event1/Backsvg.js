import React from 'react'
import Uparrow from '../../assets/event1/images/uparrow.svg';
import Downarrow from '../../assets/event1/images/downarrow.svg';
import svgStyle from '../../styles/event1/backsvg.module.css';
import line from '../../assets/event1/images/line.svg';

function Backsvg() {
  return (
    <div>
        <img src={Uparrow} className={svgStyle.upArrow} />
        <img src={Downarrow} className={svgStyle.downArrow} />
        <img src={line} className={svgStyle.downline} />
        <img src={line} className={svgStyle.upline} />
    </div>
  )
}

export default Backsvg