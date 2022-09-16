import React from "react";
import Lottie from "lottie-react";
import back from './backlottie.json';
import styles from '../../styles/event1/backsvg.module.css';


const Lottie2 = () => {
    return(
        
        <Lottie animationData={back} loop={true} />

    );
}

export default Lottie2;