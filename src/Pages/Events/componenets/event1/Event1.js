import React, { useState } from 'react'
import styles from '../../styles/event1/event1.module.css'
import Backsvg from './Backsvg';
import EventsCarousel from './Carousel';
import YearSelector from './YearSelector';

function Event1() {

  const [year, setYear] = useState(21);

  const yearWiseData = {
    22 : ["Ideadthon 1#22", "Ideathon 2#22", "Ideathon 3#22", "Ideathon 4#22"],
    21 : ["Ideadthon 1#21", "Ideathon 2#21", "Ideathon 3#21", "Ideathon 4#21"],
    20 : ["Ideadthon 1#20", "Ideathon 2#20", "Ideathon 3#20", "Ideathon 4#20"]
  }

  const [data, setData] = useState(yearWiseData[year]);

  return (
    <div className={styles.body}>
      <div>
        <div className={styles.back}>
          <Backsvg />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <YearSelector chngYear={setYear} chngData={setData} yearData={yearWiseData} />
        </div>
        <div className={styles.mid}>
          <div className={styles.carousel}>
            <EventsCarousel yearData={data} />
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.text}>
            <div className={styles.heading}>
              EVENTS
            </div>
            <div className={styles.subhead}>
              @ MLSC
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Event1;
