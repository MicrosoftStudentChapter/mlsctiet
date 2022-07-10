import React from "react";
import styles from '../styles/event2/event2.module.css';

const Event2 = () => {

    let title = "TITLE";
    let description = "Description";
    return (
        <div className={styles.eventCard}>
            <div className={styles.container}>
                <div className={styles.cardTitle}>
                {title}
                </div>
                {/* <img src="../assets/Event2/BlueGradient.svg" alt="" className="gradient" id="gradientBlue" /> */}
                <div className={styles.cardDescription}>
                {description}
                </div>
                {/* <img src="../assets/Event2/RedGradient.svg" alt="" className="gradient" id="gradientRed"/> */}
            </div>
            {/* <img src="../assets/Event2/BoxShadow.svg" alt="" className="boxShadow" /> */}
        </div>
    );
}

export default Event2;