import React, { useEffect } from 'react'
import Uparrow from '../../assets/event1/images/uparrow.svg';
import Downarrow from '../../assets/event1/images/downarrow.svg';
import svgStyle from '../../styles/event1/backsvg.module.css';
import line from '../../assets/event1/images/line.svg';
import cross from '../../assets/Event2/CrossVector.svg';

function Backsvg({rem, mob}) {

  useEffect(()=>{
    console.log(mob)
    rem = !rem;
  },[mob])
  if(mob){
    return(
      <div>
        <img src={Uparrow} className={svgStyle.upArrow} alt="upArrow" />
        <img src={Downarrow} className={svgStyle.downArrow} alt="downArrow" />
      </div>
    )
  }
  return (
    <div>
        <img src={Uparrow} className={svgStyle.upArrow} alt="upArrow" />
        {!rem && <img src={Downarrow} className={svgStyle.downArrow} alt="downArrow" />}
        {!rem &&(<img src={line} className={svgStyle.downline} alt="downline" />)}
        {!rem &&(<img src={line} className={svgStyle.upline} alt="upline" />)}
        {rem && (<img src={cross} className={svgStyle.cross} alt="downArrow" />)}
    </div>
  )
}

export default Backsvg