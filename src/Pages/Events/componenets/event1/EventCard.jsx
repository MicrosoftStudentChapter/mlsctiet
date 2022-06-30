import React from 'react'
import styles from '../../styles/event1/eventCard.module.css';
import cardImage from '../../assets/event1/images/card.svg'

function EventCard() {
  return (
    <div className={styles.cardContainer}>
        <div className={styles.content}>
            <img src={cardImage} className={styles.imageTemp} alt="Card" />
        </div>
        <div className={styles.title}>IDEATHON</div>
    </div>
  )
}

export default EventCard