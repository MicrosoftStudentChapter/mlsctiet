import React from 'react';
import ReactDOM from 'react-dom/client';
import styles from "./styles/aboutus.module.css";
//import App from './App';
import pic from './assets/aboutus.jpg';
import t from './assets/mlsclogo.png';
//import Navbar from "./components/Navbar/Navbar";
//import { BrowserRouter as Router,} from "react-router-dom";

  
const AboutUs = () => {
  return (
    
      
    
        <div className={styles.About}>
            
            <img className={styles.teamimage} src={pic}/>

            <div className={styles.redline}></div>
            
            <div className={styles.heading}>ABOUT US</div>

            <section className={styles.text}>
                <div className={styles.side}>
                    <img className={styles.imm} src={t}/>
                </div>
                <div className={styles.main}>
                    We at Microsoft Learn Student Chapter believe that youth encompassed with appropriate technology holds the potential to revolutionize the world we perceive today and we have done a fair share in that through multiple events organised over the years. Microsoft Learn Student Chapter was institutionalized by the virtue of providing students a systemic platform for cultivating technical skills and a spirit of teamwork. Our vision is to create a community of computer enthusiasts with a mindset of development.
                </div>
            </section>
            
        </div>    
        

   
  )
};

export default AboutUs;