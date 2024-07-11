import styles from "../Style/scroll.module.css";
import Cards from "./Card";

const cards = [
    { title: 'Akshat Nathani', copy: 'Core Member', button: 'facebook', image: '1517021897933-0e0319cfbc28' },
    { title: 'Preetinder', copy: 'Core Member', button: 'View Trips', image: '1533903345306-15d1c30952de' },
    { title: 'Desert Destinations', copy: 'It\'s the desert you\'ve always dreamed of', button: 'Book Now', image: '1545243424-0ce743321e11' },
    { title: 'Explore The Galaxy', copy: 'Seriously, straight up, just blast off into outer space today', button: 'Book Now', image: '1531306728370-e2ebd9d7bb99' }
  ];

function ScrollCenter({ currentYear }) {
  
  return (
    <>
     <div className={styles.scrollDiv}>
     <div className={styles.start}>
      <div className={styles.grid}>
      {cards.map((card, index) => (
        <Cards
          key={index}
          title={card.title}
          copy={card.copy}
          button={card.button}
          image={card.image}
        />
      ))}
      </div>
     </div>
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
