// Card.jsx
import React from 'react';
import styles from '../Style/card.module.css';

const Card = ({ title, copy, button, image }) => {
  
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.copy}>{copy}</p>
        <button className={styles.btn}>{button}</button>
      </div>
    </div>
  );
};

export default Card;
