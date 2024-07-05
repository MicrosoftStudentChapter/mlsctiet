import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import style from "./projects.module.css";
gsap.registerPlugin(useGSAP);

const Para = (props) => {
    const {projectimg} = style;
    const imageRef = useRef();
    const projectRef = useRef();
    
    useGSAP(() => {
        imageRef.current = gsap.timeline({paused:true})
            .to(`${projectimg}`,{
            backgroundColor:"red",
            color:"red",
            opacity:1,
        });
    });

    const onMouseEnter = ({ }) => {
        
        imageRef.current.play();
        console.log("enter");
      };
    
    const onMouseLeave = ({ }) => {
        
        console.log("left");
      };

    return ( 
    <p onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >{props.text}</p> 
    )
}


export default Para;