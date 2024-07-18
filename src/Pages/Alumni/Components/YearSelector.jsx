import React, { useState } from 'react';
import styles from "../Style/yearSelector.module.css";


// JSON data for years
const yearData = [
  { year: 2023 },
  { year: 2022 }
  // { year: 2020 },
  // { year: 2019 }
];

function YearSelector({ toggleShowYear }) {
  const [selectedYear, setSelectedYear] = useState(2023);
  const handleYearClick = (year) => {
    setSelectedYear(year);
    toggleShowYear(year);
  };

  return (
    <div className={styles.yearDiv}>
      {yearData.map((item, index) => (
        <div
          key={index}
          className={`${styles.yearButton} ${selectedYear === item.year ? styles.selected : ''}`}
          onClick={() => handleYearClick(item.year)}
        >
          20<br />{item.year % 100}
        </div>
      ))}
    </div>
  );
}

export default YearSelector;