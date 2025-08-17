import YearSelector from "./YearSelector";
import styles from "../Style/page.module.css";
import Bg from "./bg";
import ScrollCenter from "./ScrollCenter";
import { useState } from "react";

function Page() {
  const [currentYear, setCurrentYear] = useState(2024);

  const toggleShowYear = (year) => {
    if (currentYear === year) return;
    setCurrentYear(year);
  };

  return (
    <>
      <div className={styles.background}>
        <Bg />
        <YearSelector 
          toggleShowYear={toggleShowYear}
        />
        <ScrollCenter currentYear={currentYear} />
      </div>
    </>
  );
}

export default Page;
