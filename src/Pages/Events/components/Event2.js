import React, { useEffect } from "react";
import { useState } from "react";
import styles from '../styles/event2/event2.module.css';
import blueGradient from '../assets/Event2/BlueGradient.svg';
import eventImage from '../assets/Event2/EventImage.svg';
import cross from '../assets/Event2/cross.svg';

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
                console.log(e);
                if(e.key === "Esc"){
                    toggle();
                }
            }}
        >
          <div className={styles.container}>
                <div className={styles.cardTitle}>
                {title}
                </div>
                <img src={blueGradient} alt="" className={styles.gradientBlue} />
                <div className={styles.cardDescription}>
                {description}
                </div>
                <div className={styles.footer}>
                    <button onClick={() => {toggle();toggle2();}} className={styles.cross}>
                        <img src={cross} className={styles.crossImg}/>
                    </button>
                </div>
            </div>
           {/* {!isMobile && <img src= {eventImage} alt={"event"} className= {styles.eventImage}/>} */}
        </div>
    );
}

export default Event2;