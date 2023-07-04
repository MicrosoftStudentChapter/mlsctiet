import React from "react";
import styles from "./styles/home.module.css";
import sheild from "./mlsc-logo.png";
import bottom from "./Bottom.png";
import content from "./mlsc.png";
import stroke from "./mlsc-stroke.png";
import blue from "./mlsc-blue-stroke.png";
import udlogo from "./udlogo.png";
import SynthWave from "./Components/synthwave"


const LandingPage = () => {
  return (
    
    <div className={styles.container}>
      <div className={styles.left}>
          <div className={styles.polygon}>
          <img src={sheild} className={styles.sheild} alt="Sheild" />
          <div className={styles.txt}>
          <img src={blue} className={styles.blue} alt="blue-stroked-mlsc"/>
          <img src={stroke} className={styles.stroke} alt="stroked-mlsc"/>
          <img src={content} className={styles.content} alt="mlsc"/>
          </div>
          {/* <img src={udlogo} className={styles.udlogo} alt="Upside Down Logo" /> */}
          <img src={sheild} className={styles.udlogo} alt="Upside Down Logo" />
         </div> 
      </div>
      
      <SynthWave/>
    </div>
   
    
  );
};

export default LandingPage;
