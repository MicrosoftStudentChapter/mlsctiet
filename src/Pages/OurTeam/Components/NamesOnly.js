import React from "react";
import styles from "./../Style/ourteam.module.css";
import data from "../data.json";


const NamesOnly=(props)=>{
    return(
   <>
   <div className={styles.namebox}>
    <ul className={styles.names}>
        <li className={styles.lis}>
            {props.naam}
        </li>
    </ul>
   </div>
   </>
    )
}

export default NamesOnly;