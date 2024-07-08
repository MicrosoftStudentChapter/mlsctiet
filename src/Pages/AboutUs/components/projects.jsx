import React from "react";
import { forwardRef } from "react";
import style from './projects.module.css'
import Para from "./Cards";
import Peel from "./Peeling";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Image1 from '../assets/image1.jpg'
import Image2 from '../assets/image2.jpg'
import Image3 from '../assets/image3.jpg'
import Image4 from '../assets/image4.jpg'
import Image5 from '../assets/image5.jpg'
import Image6 from '../assets/image6.jpg'
gsap.registerPlugin(useGSAP);

const Projects = (props) => {
    const Images= [Image1, Image2, Image3, Image4, Image5, Image6];

    const container = useRef();
    const imgRef = useRef();
    const paraRef = useRef([]);
    let i = 0;
    const { contextSafe } = useGSAP({ scope: container });
    const onMouseEnter = contextSafe((event) => {
        gsap.from(imgRef.current,{x:-1000,y:-1000,immediateRender: false});
        gsap.to(imgRef.current,{backgroundImage: `url(${Images[event]})`, opacity:1});
        
        
      });
    
    const onMouseLeave = contextSafe(() => {
        gsap.to(imgRef.current,{backgroundImage: `url(${Image1})`, opacity:0});
        console.log("left");
      });

    return(
        <div className={style.grid} ref={container}>
            
            <div className={style.sticky}>
            
        <div className={style.mainProjectsContainer}>
        
        <div className={style.projectsContainer}>
        <Peel />
            <div className={style.leftSection}>
                <div className={style.projecth}>
                    <p>Projects:</p>
                </div>
                <div className={style.projectimagediv}>
                <div className={style.projectimg} ref={imgRef}>
                    Image here
                </div>
                </div>
            </div>
            <div className={style.rightSection}>
               <div className={style.projectHeading}>
               <p ref={el => (paraRef.current[0] =el)} onMouseEnter={() => onMouseEnter(0)} onMouseLeave={onMouseLeave} view={Image1}  > 1</p>
               </div>
               <div className={style.projectHeading}>
               <p onMouseEnter={() => onMouseEnter(1)} onMouseLeave={onMouseLeave} view={Image2} ref={el => (paraRef.current[1] =el)}> 2</p>
               </div>
               <div className={style.projectHeading}>
               <p onMouseEnter={() => onMouseEnter(2)} onMouseLeave={onMouseLeave} view={Image3} ref={el => (paraRef.current[2] =el)}> 3</p>

               </div>
               <div className={style.projectHeading}>
               <p onMouseEnter={() => onMouseEnter(3)} onMouseLeave={onMouseLeave} view={Image4} ref={el => (paraRef.current[3] =el)}> 4</p>

               </div>
               <div className={style.projectHeading}>
               <p onMouseEnter={() => onMouseEnter(4)} onMouseLeave={onMouseLeave} view={Image5} ref={el => (paraRef.current[4] =el)}> 5</p>

               </div>
               <div className={style.projectHeading}>
               <p onMouseEnter={() => onMouseEnter(5)} onMouseLeave={onMouseLeave} view={Image6} ref={el => (paraRef.current[5] =el)}> 6</p>

               </div>
            </div>
            </div>
        </div>
       </div>
       </div>
    )
};

export default Projects;