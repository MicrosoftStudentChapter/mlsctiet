import React from 'react'
import styles from '../../styles/event1/eventCard.module.css';
import cardImage from '../../assets/event1/images/card.svg'

function EventCard({tilt, title, icon, setShowDesc, toggle, setTitle, toggle2, setDescirption}) {
  return (
    <div 
      className={(tilt)?styles.cardContainerTilt:styles.cardContainer}
      onClick={() =>{
        toggle();
        toggle2();
        setTitle(title);
        setDescirption(title);
        setShowDesc(true);
      } }
    >
        <div className={styles.content}>
            <img src={cardImage} className={styles.imageTemp} alt="Card" />
        </div>
        <div className={styles.title}>{title}</div>
    </div>
  )
}

export default EventCard