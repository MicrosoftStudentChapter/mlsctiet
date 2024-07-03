import style from './animation.module.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger);

const Animation = ({ imagesURL }) => {
  const { box } = style;
  const boxRef = useRef();

  useGSAP(() => {
    gsap.to(boxRef.current, {
      x: -1000,
      y: -1000,
      duration: 2,
      delay: 0.5,
      scrollTrigger: {
        trigger: boxRef.current,
        scroller: "body",
        start: "center center",
        end: "bottom top",
        scrub: 3,
        pin: true,
        pinSpacing: false,
        markers: true,
      },
    });
  },{scope: boxRef.current});

  return (
    <>
      <div ref={boxRef} className={box}>
      </div>
    </>
  )
}

export default Animation;