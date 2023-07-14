import React from "react";
import Navbar from "./Components/Navbar";
import Graphics from "./Components/Graphics";
import styles from "./Style/ourteam.module.css";

const OurTeam = () => {
  return (
    <section className={styles.ourteam}>
      <div className={styles.heading}>Our Team</div>
      <Graphics />
      <Navbar />
      
    </section>
  );
};

export default OurTeam;
