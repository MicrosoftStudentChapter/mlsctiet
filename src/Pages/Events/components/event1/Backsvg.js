import React from 'react'
import Uparrow from '../../assets/event1/images/uparrow.svg';
import Downarrow from '../../assets/event1/images/downarrow.svg';
import svgStyle from '../../styles/event1/backsvg.module.css';
import line from '../../assets/event1/images/line.svg';

function Backsvg() {
  return (
    <div>
        <img src={Uparrow} className={svgStyle.upArrow} alt="upArrow" />
        <img src={Downarrow} className={svgStyle.downArrow} alt="downArrow" />
        <img src={line} className={svgStyle.downline} alt="downline" />
        <img src={line} className={svgStyle.upline} alt="upline" />
    </div>
  )
}

export default Backsvg