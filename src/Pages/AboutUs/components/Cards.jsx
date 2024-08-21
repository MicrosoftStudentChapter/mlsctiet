import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import style from "./projects.module.css";
gsap.registerPlugin(useGSAP);

const Para = (props) => {
    const {projectimg, poke} = style;
    const imageRef = useRef();
    const projectRef = useRef();
    
    useGSAP(() => {
        imageRef.current = gsap.timeline({paused:true})
            .to(`${poke}`,{
            
            rotate: 360,
            
        });
    });

    const onMouseEnter = ({ }) => {
        
        //imageRef.current.play();
        console.log("enter");
      };
    
    const onMouseLeave = ({ }) => {
        
        console.log("left");
      };

    return ( 
    <p onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} ref={imageRef} className={style.poke} >{props.text}</p> 
    )
}


export default Para;