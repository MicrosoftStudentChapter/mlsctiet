import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import style from "./projects.module.css";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

gsap.registerPlugin(useGSAP);

const Peel = () => {
    const { peel } = style;
    useGSAP(() => {

      let tl = gsap.timeline({
        scrollTrigger: {
            trigger: `.${peel}`,
                       
            start: 'top bottom', // when the top of the trigger hits the top of the viewport
            end: 'bottom 100%',
            markers: true,
            toggleActions: "restart pause reverse pause",
            
            
            // x:1000,
            // y:900,
            // rotate:360,
            // duration:5,
            // delay:1,
            // ease:"power2.out",
        
            // end after scrolling 500px beyond the start
            scrub: 2, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
            
        }
    } );
    tl.to(`.${peel}`, {
      
      opacity: 1,
      clipPath: 'polygon(0% 0%, 100% 0%, 0% 0%, 0% 100%)',
      
    })
    // .to(`.${boxT}`,{
    //   stagger:1,
    //   opacity: 1,
    //   x:300,
    //   fontSize:'3rem',
    //   color:"coral",
    //   padding:'1%'


    // }, '-=2')
    
    // add animations and labels to the timeline
    

        // const boxes = gsap.utils.toArray(`.${box}`);
        // boxes.forEach(box => {
        //   gsap.to(box, { 
        //     x:300,
        //     y:600,
        //     rotate:180,
        //     duration:5,
        //     delay:1,
        //     ease:"power1.out",
            
        //   }, { scope: container })
        // });

        // gsap.to(`.${box}`, {
            // x:1000,
            // y:900,
            // rotate:360,
            // duration:5,
            // delay:1,
            // ease:"power2.out",
        // }, { scope: container } );


    });


    return ( <>
    
    <div className={style.peel}></div> 
    
    </>)
}

export default Peel;