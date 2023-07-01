import React from "react";
import styles from "./styles/home.module.css";
import sheild from "./mlsc-logo.png";
import bottom from "./Bottom.png";
<<<<<<< HEAD
import content from "./mlsc.png";
import stroke from "./mlsc-stroke.png";
import blue from "./mlsc-blue-stroke.png";
=======
import udlogo from "./udlogo.png";
>>>>>>> 1aa79c2fc9b839bc8ff31e11c1069e3e404341cb

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
