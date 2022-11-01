import React from "react";
import styles from "./../Style/ourteam.module.css";
import linkedin from "./../Assets/linkedin.png";
const Card = (props) => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.card__body}>
          <img src={props.img} className={styles.card__image} />
        </div>
        <center>
          <h2 className={styles.card__title}>{props.title}</h2>
        </center>

        <button className={styles.card__btn}>
          <img src={linkedin} />
        </button>
      </div>
    </>
  );
};

export default Card;
