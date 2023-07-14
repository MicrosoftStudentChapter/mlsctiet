import React from "react";
import styles from "../../styles/event1/eventCard.module.css";
import cardImage from "../../assets/event1/images/card.svg";
import Lottie1 from "./Lottie";

function EventCard({
  tilt,
  data,
  icon,
  setShowDesc,
  toggle,
  setTitle,
  toggle2,
  setDescirption,
}) {
  if (data != undefined) {
    console.log(data);
    return (
      <div
        className={tilt ? styles.cardContainerTilt : styles.cardContainer}
        onClick={() => {
          toggle();
          toggle2();
          setTitle(data[0]);
          setDescirption(data[1]);
          console.log("title", data);
          setShowDesc(true);
        }}
      >
        <div className={styles.content}>
          <Lottie1 />
        </div>
        <div className={styles.title}>{data[0]}</div>
      </div>
    );
  }
}

export default EventCard;
