import React from "react";
import style from './projects.module.css'

export default function Projects(){

    return(
        <>
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
                <p>Time Table Generator</p>
               </div>
               <div className={style.projectHeading}>
                <p>hello</p>
               </div>
               <div className={style.projectHeading}>
                <p>hello</p>
               </div>
               <div className={style.projectHeading}>
                <p>hello</p>
               </div>
               <div className={style.projectHeading}>
                <p>hello</p>
               </div>
               <div className={style.projectHeading}>
                <p>hello</p>
               </div>
            </div>
            </div>
       </>
    )
}