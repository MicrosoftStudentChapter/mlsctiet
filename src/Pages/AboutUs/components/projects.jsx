import React from "react";
import style from './projects.module.css'
import Para from "./Cards";

export default function Projects(){

    return(
        <div className={style.mainProjectsContainer}>
        <div className={style.projectsContainer}>
            
            <div className={style.leftSection}>
                <div className={style.projecth}>
                    <p>Projects:</p>
                </div>
                <div className={style.projectimagediv}>
                <div className={style.projectimg}>
                    Image here
                </div>
                </div>
            </div>
            <div className={style.rightSection}>
               <div className={style.projectHeading}>
               <Para text={"Time Table Generator"} />
               </div>
               <div className={style.projectHeading}>
               <Para text={"Hello"} />
               </div>
               <div className={style.projectHeading}>
               <Para text={"Hello"} />

               </div>
               <div className={style.projectHeading}>
               <Para text={"Hello"} />

               </div>
               <div className={style.projectHeading}>
               <Para text={"Hello"} />

               </div>
               <div className={style.projectHeading}>
<Para text={"Hello"} />

               </div>
            </div>
        </div>
       </div>
    )
}