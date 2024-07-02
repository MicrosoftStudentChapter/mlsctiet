import React from "react";
import styles from "./Style/page.module.css";

const Alumni = () => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.content}`}>
        <div className={`${styles.para}`}>
          <div className={`${styles.triangle}`}></div>
          <p>A legacy of innovation</p>
        </div>
        <div className={`${styles.arrow}`}></div>
      </div>
      <div className={`${styles.innerContainer}`}>
        <div className={`${styles.legacy}`}>
          <div>
            <p>A legacy of innovation</p>
          </div>
          <div>
            <div className={`${styles.circle}`}></div>
            <div className={`${styles.circle1}`}></div>
            <div className={`${styles.circle}`}></div>
          </div>
          <div className={`${styles.horizontalLine}`}>
          </div>
          <div className={`${styles.innerinnerContainer}`}>
            <div className={`${styles.maincontent}`}>
              <div className={`${styles.grid}`}></div>
              <div className={`${styles.verticalline}`}></div>
              <div className={`${styles.horizontalline}`}></div>
              <div className={`${styles.alumniText}`}>Alumni</div>
            </div>
          </div>
          <div className={`${styles.txt}`}>
            <p>A legacy of innovation</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alumni;
