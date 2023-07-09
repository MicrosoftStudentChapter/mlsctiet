import React from "react";
import styles from "./styles/home.module.css";
import sheild from "./Assets/mlsc-logo.png";
import content from "./Assets/Desktop/mlsc.png";
import stroke from "./Assets/Desktop/mlsc-stroke.png";
import blue from "./Assets/Desktop/mlsc-blue-stroke.png";
import SynthWave from "./Components/synthwave"
import StarsCanvas from "./Components/Stars";
import MobV from "./Assets/Desktop/Mob.png";

const LandingPage = () => {
  return (
    <>
    <div className={styles.main}>
    <div className={styles.stars}>
    <StarsCanvas/>
    </div>
    <div className={styles.container}>
      <div className={styles.left}>
          <div className={styles.polygon}>
          <img src={sheild} className={styles.sheild} alt="Sheild" />
          <div className={styles.txt}>
          <img src={blue} className={styles.blue} alt="blue-stroked-mlsc"/>
          <img src={stroke} className={styles.stroke} alt="stroked-mlsc"/>
          <img src={content} className={styles.content} alt="mlsc"/>
          </div>
          <img src={MobV} className={styles.mvmlsc} alt="Mobile view of MLSC"/>
          <img src={sheild} className={styles.udlogo} alt="Upside Down Logo" />
        </div>
      </div>
      
      <SynthWave/>
    </div>
    </div>
    </>
    
  );
};

export default LandingPage;
