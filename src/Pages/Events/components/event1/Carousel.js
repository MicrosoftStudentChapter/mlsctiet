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

  // useEffect(() => {
  //   if(window.screen.width <= 760){setIsMobile(true); setTilt(false);}else{setIsMobile(false); setTilt(false);};
  // }, []);
  
  const [data, setData] = useState(yearData);
  const [cards, setCards] = useState(() => {
    let card = []
    for (let i = 0; i < data.length; i++) {
      card.push({
        key: uuidv4(),
        content: <EventCard tilt={tilt} title={data[i]} />
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
        content: <EventCard tilt={true} title={yearData[i]} />
      })
    }
    console.log(card)
    setCards(card)
    console.log(cards == card)
  }, [yearData]);

  const table = cards.map((element, index) => {
    return { ...element, onClick: () => setGoToSlide(index) };
  });
  const [goToSlide, setGoToSlide] = useState(null);

  const [title, setTitle] = useState("Title");
  const [desc, setDesc] = useState("Description");
  const [showDesc, setShowDesc] = useState(false);

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
      return (
        <Event2
          title_main={title}
          desc={desc}
          toggle = {() => {setShowDesc(false); console.log("OKK")}}
          toggle2 = {toggle}
          setTitle = {setTitle}
          setDesc = {setDesc}
        />
      )
    }
    return (
      <div
        className={styles.carouselContainer}
        onClick={() =>{
          toggle();
          setShowDesc(true);
        } }
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