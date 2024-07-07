import React, { useEffect } from 'react';
import "../components/animation.css"
import styles from "../components/makethon.module.css"
import groupImage from '../components/background.png';  

const Animation = () => {
  let i = 1;
  let mouseWheel = true;

  useEffect(() => {
    const handleMouseWheel = (e) => {
      if (!mouseWheel) {
        return false;
      }
      mouseWheel = false;
      setTimeout(function () {
        mouseWheel = true;
      }, 750); 

      e = window.event || e;
      const delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
      const h = window.innerHeight;
      const sections = document.getElementsByClassName("section");

      if (i <= sections.length && i >= 0) {
        
        if (delta < 0) {
          window.scrollTo({
            top: h * i,
            behavior: "smooth"
          });
          i++;
        } else {
          // Scrolling up
          window.scrollTo({
            top: h * i,
            behavior: "smooth"
          });
          i--;
        }
      } else {
        i = 1;
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
    };

    
    if (document.addEventListener) {
      document.addEventListener("mousewheel", handleMouseWheel, false); // IE9, Chrome, Safari, Opera
      document.addEventListener("DOMMouseScroll", handleMouseWheel, false); // Firefox
    } else {
      document.attachEvent("onmousewheel", handleMouseWheel); // IE 6/7/8
    }

    
    return () => {
      if (document.removeEventListener) {
        document.removeEventListener("mousewheel", handleMouseWheel, false);
        document.removeEventListener("DOMMouseScroll", handleMouseWheel, false);
      } else {
        document.detachEvent("onmousewheel", handleMouseWheel);
      }
    };
  }, []); 

  return (
    <>
    <div className="section">
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
        </div>
      </div>
    </div>
  
    <div className="section">
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


    </div>
  
    <div className="section">
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
  </>
  
  );
};

export default Animation;
