import React from "react";
import styles from "./../Style/ourteam.module.css";
import linkedin from "./../Assets/linkedin.png";
import data from "../data.json";

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
  <a href={props.linkedin_acc}>
    <img src={linkedin} alt="LinkedIn" />
  </a>
</button>

      </div>
    </>
  );
};

export default Card;
