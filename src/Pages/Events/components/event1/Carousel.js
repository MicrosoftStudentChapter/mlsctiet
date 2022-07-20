import React from 'react'
import {
  Keyboard,
  Mousewheel,
  Navigation,
  Controller,
  Autoplay,
  EffectCards,
} from "swiper";
import 'swiper/css';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from "uuid";
import styles from '../../styles/event1/carousel.module.css';
import EventCard from './EventCard';
import Carousel from "react-spring-3d-carousel-2";
import { config } from "react-spring";
import Event2 from '../Event2';
import { Swiper, SwiperSlide } from 'swiper/react';


function EventsCarousel({yearData, toggle}) {

  // const [isMobile, setIsMobile] = useState(false);
  const [tilt, setTilt] = useState(true);
  const [title, setTitle] = useState("Title");
  const [desc, setDesc] = useState("Description");
  const [showDesc, setShowDesc] = useState(false);

  
  const [data, setData] = useState(yearData);
  const [cards, setCards] = useState(() => {
    let card = []
    for (let i = 0; i < data.length; i++) {
      card.push({
        key: uuidv4(),
        content: <EventCard tilt={tilt} title={data[i]} setShowDesc={showDesc} toggle = {() => {setShowDesc(false); console.log("OKK")}} toggle2={toggle} setDescirption={setDesc}/>
      })
    }
    return card;
  })
  useEffect(() => {
    setData(yearData);
    console.log("data",yearData)
    let card = []
    for (let i = 0; i < yearData.length; i++) {
      card.push({
        key: uuidv4(),
        content: <EventCard tilt={true} title={yearData[i]} setShowDesc={setShowDesc} toggle = {() => {setShowDesc(false); console.log("OKK")}} setTitle={setTitle} toggle2={toggle} setDescirption={setDesc} />
      })
    }
    console.log(card)
    setCards(card)
    console.log(cards == card)
  }, [yearData]);


  const [goToSlide, setGoToSlide] = useState(null);

  // const [cardS] = useState(table)
  // if(isMobile){
  //   return (
  //   <div className={styles.carouselContainerNoTilt}>
  //     <div>
  //       <Swiper
  //         effect={"cards"}
  //         grabCursor={true}
  //         modules={[EffectCards]}
  //       >
  //         {cards.map((element, index) => {
  //           return (
  //             <SwiperSlide key={element.key}>
  //               <EventCard title={yearData[index]} />
  //             </SwiperSlide>
  //           );
  //         })}
  //         ...
  //       </Swiper>
  //     </div>
  //   </div>
  //   )
  // }
  // else{
    if(showDesc){
      console.log("Ok")
      return (
        <Event2
          title_main={title}
          desc={desc}
          toggle = {() => {setShowDesc(false); console.log("OKK")}}
          toggle2 = {toggle}
        />
      )
    }
    return (
      <div
        className={styles.carouselContainer}
        
      >
        <Carousel
          slides={
            cards.map((element, index) => {
              return {
                ...element,
                onClick: () => setGoToSlide(index)
              };
            })
          }
          goToSlide={goToSlide}
          offsetRadius={40}
          showNavigation={false}
          autoPlay={true}
          animationConfig={config.stiff}
          interval={2}
        />
      </div>
    )
  }
// }

export default EventsCarousel