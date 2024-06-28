import React from "react";
import styles from "./styles/home.module.css";
import sheild from "./Assets/mlsc-logo.png";
import SynthWave from "./Components/synthwave"
// import StarsCanvas from "./Components/Stars";
import MobV from "./Assets/Desktop/Mob.png";
import mlscpng from "./Assets/Desktop/mlscpng.png";
import {RemoveScrollBar} from 'react-remove-scroll-bar';
import Chatbot from "../../../components/Chatbot/chatbot"
// import Navbar from "../../../components/NavbarI/NavbarI"

const LandingPage = () => {
  return (
    <>
    <Chatbot/>
    <div className={styles.main}>
    <div className={styles.stars}>
    <RemoveScrollBar/>
    </div>
    <div className={styles.container}>
      <div className={styles.left}>
          <div className={styles.polygon}>
          <img src={sheild} className={styles.sheild} alt="Sheild" />
          <div className={styles.txt}>
          <img src={mlscpng} className={styles.stroke} alt="stroked-mlsc"/>
          </div>
              <div className={styles.txt1}>
          <img src={MobV} className={styles.mvmlsc} alt="Mobile view of MLSC"/>
          </div>
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
