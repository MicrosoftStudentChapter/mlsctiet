import React from 'react';
import styles from './makethon.module.css';
import groupImage from '../components/background.png';  


const Makeathon = () => {
  return (
    <>
      <div className={styles.p2}>
      
        <div className={styles.page}>
          <div className={styles.content}>
            <div className={styles.parent1}>
            <h1 className={styles.title}>Makeathon 6</h1>
            <p className={styles.about1}>
              <span className={styles.aboutTitle}>(about)</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in rep
            </p>
            </div>
            <div className={styles.imageContainer1}>
              
              <div className={styles.border1}>
                <div className={styles.animate1}></div>
              </div>
              <img src={groupImage} alt="Group" className={styles.image1} />         
              
            </div>
          </div>

          <div className={styles.content2}>   
            <div className={styles.imageContainer2}>
              <div className={styles.border2}>
                <div className={styles.animate2}></div>
              </div>
              <img src={groupImage} alt="Group" className={styles.image2} />         
            </div>
            <div className={styles.parent2}>
              <h1 className={styles.title2}>Makeathon 5</h1>
              <p className={styles.about2}>
                <span className={styles.aboutTitle}>(about)</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in rep
              </p>
            </div>
          </div>


          <div className={styles.content}>
            <div className={styles.parent3}>
            <h1 className={styles.title}>Makeathon 4</h1>
            <p className={styles.about1}>
              <span className={styles.aboutTitle}>(about)</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in rep
            </p>
            </div>
            <div className={styles.imageContainer1}>
              <div className={styles.border1}>
                <div className={styles.animate1}></div>
              </div>
              <img src={groupImage} alt="Group" className={styles.image1} />         
            </div>
          </div>



          
          

        </div>
      
      </div>
    </>
  );
 
};
 
export default Makeathon;

