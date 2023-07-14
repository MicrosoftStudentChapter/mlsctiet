import React from 'react'
import StyleCSS from "./Style/Style.module.css" 
import Errorr from "../Errorpage/Assets/Error.png"
import Error4 from "../Errorpage/Assets/Error4.png"
import Face from "../Errorpage/Assets/Face.png"
import RC from "../Errorpage/Assets/RC.png"
import LC from "../Errorpage/Assets/LC.png"
import Downtri from "../Errorpage/Assets/Downtri.png"
import Uptri from "../Errorpage/Assets/UPtri.png"

function Error() {
  return (
     <div>
      
    <div className={StyleCSS.hello}>  
       {/* <img className={StyleCSS.Image} src={Errorr} alt="MLSC GROUP" />    */}
       {/* <img className={StyleCSS.Image2} src={Error4} alt="MLSC Group" />  */}
      <img className={StyleCSS.LC} src={LC} alt="MLSC GROUP"/>
     <img className={StyleCSS.Uptri} src={Uptri} alt="MLSC GROUP"/>
     <img className={StyleCSS.Face} src={Face} alt="MLSC GROUP"/>
     <img className={StyleCSS.Downtri} src={Downtri} alt="MLSC GROUP"/>
     <img className={StyleCSS.RC} src={RC} alt="MLSC GROUP"/> 
     
     
     <div className={StyleCSS.Text}>
     <h1 className={StyleCSS.head1}>Error-404</h1>
     
     <p className={StyleCSS.head2}>You were not supposed to be here but since you reached,<br/>let's ponder on the question of <br/>"Why HTML is the best coding language?"</p> 
  </div>
  </div>  
  </div>
  )
}

export default Error

