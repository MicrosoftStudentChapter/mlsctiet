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
import { Swiper, SwiperSlide } from 'swiper/react';


function EventsCarousel() {

  const [isMobile, setIsMobile] = useState(false);
  const [tilt, setTilt] = useState(true);

  useEffect(() => {
    if(window.screen.width <= 760){setIsMobile(true); setTilt(false);}else{setIsMobile(false); setTilt(false);};
  }, []);

  let cards = [
    {
      key: uuidv4(),
      content: <EventCard tilt={tilt}/>
    },
    {
      key: uuidv4(),
      content: <EventCard tilt={tilt}/>
    },
    {
      key: uuidv4(),
      content: <EventCard tilt={tilt}/>
    },
    {
      key: uuidv4(),
      content: <EventCard tilt={tilt}/>
    },
    {
      key: uuidv4(),
      content: <EventCard tilt={tilt}/>
    },
    {
      key: uuidv4(),
      content: <EventCard tilt={tilt}/>
    },
    {
      key: uuidv4(),
      content: <EventCard tilt={tilt}/>
    }
  ];

  const table = cards.map((element, index) => {
    return { ...element, onClick: () => setGoToSlide(index) };
  });

  const [goToSlide, setGoToSlide] = useState(null);
  const [cardS] = useState(table)
  if(isMobile){
    return (
    <div className={styles.carouselContainerNoTilt}>
      <div>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
        >
          <SwiperSlide>
            <EventCard tilt={false} />
          </SwiperSlide>
          <SwiperSlide>
          <EventCard tilt={false}/>
          </SwiperSlide>
          <SwiperSlide>
          <EventCard tilt={false} />
          </SwiperSlide>
          <SwiperSlide>
          <EventCard tilt={false} />
          </SwiperSlide>
          ...
        </Swiper>
      </div>
    </div>
    )
  }
  else{
    return (
      <div
        className={styles.carouselContainer}
      >
        <Carousel
          slides={cardS}
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
}

export default EventsCarousel