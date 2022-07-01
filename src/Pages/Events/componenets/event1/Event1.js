import React from 'react'
import styles from '../../styles/event1/event1.module.css'
import Backsvg from './Backsvg';
import EventsCarousel from './Carousel';
import YearSelector from './YearSelector';

function Event1() {
  return (
    <div className={styles.body}>
      <div className={styles.back}>
        <Backsvg />
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <YearSelector />
        </div>
        <div className={styles.mid}>
          <div className={styles.carousel}>
            <EventsCarousel />
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
