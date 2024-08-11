import logo from "../assets/MLSC-logo.png"
import style from './logoani.module.css'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger);

const logoani = () => {
  const { mlsclogo } = style;
  const logoRef = useRef();
  const imageRef= useRef();

  useGSAP(() => {
    gsap.to(logoRef.current, {
      x: "75.75vw",
      y: "-17vw",
      delay: 0.5,
      ease: "power3.out",
      scrollTrigger:{
        trigger: logoRef.current,
        scroller: "body",
        start: "top +250px top",
        end: "bottom +315px top",
        markers: true,
        scrub: true
      }
    });
  },{scope: logoRef.current});

  useGSAP(() => {
    gsap.to(imageRef.current, {
      height: 100,
      delay: 0.5,
      ease: "power3.out",
      scrollTrigger:{
        trigger: imageRef.current,
        scroller: "body",
        start: "top +250px top",
        end: "bottom +315px top",
        scrub: true
      }
    });
  },{scope: imageRef.current});

  return (
    <div ref={logoRef} className= {mlsclogo}>
      <img ref={imageRef} src={logo} alt="jai mlsc" style={{height: "250px"}}/>
    </div>
  )
}

export default logoani