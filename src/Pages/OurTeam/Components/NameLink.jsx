import React from "react";
import styles from "../Style/core&exe.module.css";
import data from "../data.json";


const NamesLink=(props)=>{
    return(
   <>
   <div className={styles.namebox}>
    <ul className={styles.names}>
        <li className={styles.lis}>
          <a href={props.linkedin_acc} className={styles.link}>
            {props.naam}
          </a>
        </li>
    </ul>
   </div>
   </>
    )
}

export default NamesLink;