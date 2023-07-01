import React from "react";
import styles from "./styles/home.module.css";
import sheild from "./mlsc-logo.png";
import bottom from "./Bottom.png";
import content from "./mlsc.png";
import stroke from "./mlsc-stroke.png";
import blue from "./mlsc-blue-stroke.png";

const LandingPage = () => {
  return (
    <div className={styles.container}>

      <div className={styles.left}>
        <div className={styles.polygon}>
          <img src={sheild} className={styles.sheild} alt="Sheild" />
          <img src={blue} className={styles.blue} alt="blue-stroked-mlsc"/>
          <img src={stroke} className={styles.stroke} alt="stroked-mlsc"/>
          <img src={content} className={styles.content} alt="mlsc" />
          <img src={bottom} className={styles.bottom} alt="Bottom" />
          

          
          {/* <p className={styles.mobileTitle}>MICROSOFT LEARN STUDENT CHAPTER</p> */}
        </div>
      </div>

      <div className={styles.right}>
        {/* <div className={styles.microsoft}>MICROSOFT</div>
        <div className={styles.learn}>LEARN STUDENT</div>
        <div className={styles.chapter}>CHAPTER</div> */}
    
      </div>
 
    </div>
   
  );
};

export default LandingPage;
