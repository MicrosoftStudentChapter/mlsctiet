import React from 'react';
import styles from './makethon.module.css';
import groupImage from '../components/background.png';  


const Makeathon = () => {
  return (
    <>
      <div className={styles.p2}>
      
        <div className={styles.page}>
          <div className={styles.content}>
            <h1 className={styles.title}>Makeathon 6</h1>
            <p className={styles.about}>
              <span className={styles.aboutTitle}>(about)</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in rep
            </p>
            <div className={styles.imageContainer1}>
              <div className={styles.border1}></div>
              <img src={groupImage} alt="Group" className={styles.image1} />
           
            </div>
          </div>
          
          <div className={styles.imageContainer2}>
            <div className={styles.border2}></div>
            <img src={groupImage} alt="Group" className={styles.image2} />
          </div>
        </div>
      
      </div>
    </>
  );
 
};
 
export default Makeathon;

