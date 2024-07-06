import styles from "../Style/scroll.module.css";

function ScrollCenter({ currentYear }) {
  return (
    <>
     <div className={styles.scrollDiv}>
     <div className={styles.start}></div>
      {currentYear === 2019 && (
        <div>
          2019
          <div className={styles.two}></div>
          <div className={styles.one}></div>
          <div className={styles.three}></div>
        </div>
      )}
      {currentYear === 2020 && (
        <div>
          2020
          <div className={styles.three}></div>
          <div className={styles.one}></div>
          <div className={styles.two}></div>
        </div>
      )}
      {currentYear === 2021 && (
        <div >
          2021
          <div className={styles.one}></div>
          <div className={styles.two}></div>
          <div className={styles.three}></div>
        </div>
      )}
      {currentYear === 2022 && (
        <div >
          2022
          <div className={styles.two}></div>
          <div className={styles.one}></div>
          <div className={styles.three}></div>
        </div>
      )}
      {currentYear === 2023 && (
        <div >
          2023
          <div className={styles.two}></div>
          <div className={styles.one}></div>
          <div className={styles.three}></div>
        </div>
      )}
    </div>
    </>
  );
}

export default ScrollCenter;
