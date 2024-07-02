import YearSelector from "./YearSelector";
import styles from "../Style/page.module.css";
import Bg from "./bg";

function Page() {

  return (
    <>
      <div className={`${styles.background}`}>
        <Bg/>
        <YearSelector/> 
      </div>
    </>
    
  );
}

export default Page;