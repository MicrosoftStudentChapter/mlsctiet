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
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        pin: true,
        pinSpacing: false,
        markers: true,
      },
    });
  },{scope: boxRef.current});

  return (
    <>
      <div ref={boxRef} className={box}>
      <div className={style.imageDiv} style={{ backgroundImage: `url(${imagesURL[0]})` }}></div>
        <div className={style.empty}></div>
        <div className={style.imageDiv} style={{ backgroundImage: `url(${imagesURL[1]})` }}></div>
        <div className={style.empty}></div>
        <div className={style.empty}></div>
        <div className={style.empty}></div>
        <div className={style.imageDiv} style={{ backgroundImage: `url(${imagesURL[2]})` }}></div>
        <div className={style.empty}></div>
        <div className={style.imageDiv} style={{ backgroundImage: `url(${imagesURL[3]})` }}></div>
        <div className={style.empty}></div>
        <div className={style.imageDiv} style={{ backgroundImage: `url(${imagesURL[4]})` }}></div>
        <div className={style.empty}></div>
        <div className={style.imageDiv} style={{ backgroundImage: `url(${imagesURL[5]})` }}></div>
        <div className={style.empty}></div>
        <div className={style.imageDiv} style={{ backgroundImage: `url(${imagesURL[6]})` }}></div>
        <div className={style.empty}></div>
        <div className={style.imageDiv} style={{ backgroundImage: `url(${imagesURL[7]})` }}></div>
        <div className={style.empty}></div>
        <div className={style.imageDiv} style={{ backgroundImage: `url(${imagesURL[8]})` }}></div>
        <div className={style.empty}></div>
        <div className={style.empty}></div>
        <div className={style.empty}></div>
        <div className={style.imageDiv} style={{ backgroundImage: `url(${imagesURL[9]})` }}></div>
        <div className={style.empty}></div>
        <div className={style.imageDiv} style={{ backgroundImage: `url(${imagesURL[10]})` }}></div>
      </div>
    </>
  )
}

export default Animation;