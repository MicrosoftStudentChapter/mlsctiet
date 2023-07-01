import React from "react";
import styles from "./styles/home.module.css";
import sheild from "./mlsc-logo.png";
import bottom from "./Bottom.png";
import udlogo from "./udlogo.png";

const LandingPage = () => {
  return (
    <div className={styles.container}>

      <div className={styles.left}>
        <div className={styles.polygon}>
          <img src={sheild} className={styles.sheild} alt="Sheild" />
          <img src={bottom} className={styles.bottom} alt="Bottom" />
          <img src={udlogo} className={styles.udlogo} alt="Upside Down Logo" />
          
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
