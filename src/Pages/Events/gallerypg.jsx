import React from 'react';
import styles from './gallerypg.module.css';
import groupImage from './image.png';  


const Gallerypg = () => {
  return (
    
    <>
      <div className={styles.p3}>
      <div className={styles.li}>
        <div className={styles.line}></div>
        <div className={styles.line1}></div>
        <h1 className={styles.title}>Makeathon 6</h1>
      </div>
        <div className={styles.page}>
          <div className={styles.content}>
          
            <div className={styles.imageContainer2}>
              <div className={styles.border2}></div>
              <img src={groupImage} alt="Group" className={styles.image2} />
           
            </div>
            <br>
            </br>
            
            <div className={styles.imageContainer2}>
              <div className={styles.border2}></div>
              <img src={groupImage} alt="Group" className={styles.image2} />
           
            </div>
          

          
            <div className={styles.imageContainer2}>
              <div className={styles.border2}></div>
              <img src={groupImage} alt="Group" className={styles.image2} />
           </div>
            
            
          </div>
          

        </div>
      
      </div>
    </>
  );
 
};
 
export default Gallerypg;