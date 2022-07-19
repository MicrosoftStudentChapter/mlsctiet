import React from "react";
import { useState } from "react";
import styles from '../styles/event2/event2.module.css';
import boxShadow from '../assets/Event2/BoxShadow.svg';
import blueGradient from '../assets/Event2/BlueGradient.svg';
import redGradient from '../assets/Event2/RedGradient.svg';
import crossVector from '../assets/Event2/CrossVector.svg';
import arrowVector from '../assets/Event2/Arrow.svg';
import arrowBackVector from '../assets/Event2/ArrowBack.svg';
import eventImage from '../assets/Event2/EventImage.svg';

const Event2 = ({title_main, desc, toggle, toggle2}) => {

    const [title, setTile] = useState(title_main);
    const [description, setDesc] = useState(desc);

    return (

        <div 
            className={styles.eventCard}
            onKeyDown = {(e) => {
                if(e.key === "Escape"){
                    toggle();
                }
            }}
        >

            {/* Container element */}

            <div className={styles.container}>
                {/* Arrow Vectors */}
                <div className={styles.cardTitle}>
                {title}
                </div>
                <img src={blueGradient} alt="" className={styles.gradientBlue} />
                <div className={styles.cardDescription}>
                {description}
                </div>
                <div>
                    <button onClick={() => {toggle();toggle2();}} style={{backgroundColor:"transparent"}}>
                        Close
                    </button>
                </div>
                {/* <img src={redGradient} alt="" className={styles.gradientRed} /> */}
            </div>
            {/* <img src={boxShadow} alt="" className={styles.containerShadow} /> */}

            {/* Vector corresponding to the event */}

            {/* <img src= {eventImage} alt={altText} className= {styles.eventImage}/> */}

            {/* Cross Vector */}

            {/* <img src= {crossVector} alt="" className= {styles.vectorCross} /> */}
            
        </div>

        
    );
}

export default Event2;