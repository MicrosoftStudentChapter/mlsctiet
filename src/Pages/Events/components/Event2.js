import React, { useEffect } from "react";
import { useState } from "react";
import styles from '../styles/event2/event2.module.css';
import blueGradient from '../assets/Event2/BlueGradient.svg';
import eventImage from '../assets/Event2/EventImage.svg';

const Event2 = ({title_main, desc, toggle, toggle2}) => {

    const [title, setTile] = useState(title_main);
    const [description, setDesc] = useState(desc);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(()=>{
        if(window.innerWidth < 768){
            setIsMobile(true);
        }
    },[])

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
                        X
                    </button>
                </div>
                {/* <img src={redGradient} alt="" className={styles.gradientRed} /> */}
            </div>
            {/* <img src={boxShadow} alt="" className={styles.containerShadow} /> */}

            {/* Vector corresponding to the event */}

           {!isMobile && <img src= {eventImage} alt={"event"} className= {styles.eventImage}/>}

            {/* Cross Vector */}

            {/* <img src= {crossVector} alt="" className= {styles.vectorCross} /> */}
            
        </div>

        
    );
}

export default Event2;