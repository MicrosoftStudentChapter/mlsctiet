import styles from "../Style/yearSelector.module.css";

function YearSelector() {

  return (
    <div className={`${styles.yearDiv}`}>
      
      <div className={`${styles.yearButton}`}>
        20<br/>23
      </div>
      <div className={`${styles.yearButton}`}>
        20<br/>22
      </div>
      <div className={`${styles.yearButton}`}>
        20<br/>21
      </div> 
      <div className={`${styles.yearButton}`}>
        20<br/>20
      </div> 
      <div className={`${styles.yearButton}`}>
        20<br/>19
      </div> 
    </div>
  );
}

export default YearSelector;