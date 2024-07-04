import styles from "../Style/yearSelector.module.css";

function YearSelector({ toggleShowYear }) {
  return (
    <div className={styles.yearDiv}>
      <div className={styles.yearButton} onClick={() => toggleShowYear(2023)}>
        20<br />23
      </div>
      <div className={styles.yearButton} onClick={() => toggleShowYear(2022)}>
        20<br />22
      </div>
      <div className={styles.yearButton} onClick={() => toggleShowYear(2021)}>
        20<br />21
      </div>
      <div className={styles.yearButton} onClick={() => toggleShowYear(2020)}>
        20<br />20
      </div>
      <div className={styles.yearButton} onClick={() => toggleShowYear(2019)}>
        20<br />19
      </div>
    </div>
  );
}

export default YearSelector;
