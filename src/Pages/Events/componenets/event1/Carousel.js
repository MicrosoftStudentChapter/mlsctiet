import React from 'react'
import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import styles from '../../styles/event1/carousel.module.css';
import EventCard from './EventCard';
import Carousel from "react-spring-3d-carousel-2";
import { config } from "react-spring";


function EventsCarousel() {

  let cards = [
    {
      key: uuidv4(),
      content: <EventCard />
    },
    {
      key: uuidv4(),
      content: <EventCard />
    },
    {
      key: uuidv4(),
      content: <EventCard />
    },
    {
      key: uuidv4(),
      content: <EventCard />
    },
    {
      key: uuidv4(),
      content: <EventCard />
    },
    {
      key: uuidv4(),
      content: <EventCard />
    },
    {
      key: uuidv4(),
      content: <EventCard />
    }
  ];

  const table = cards.map((element, index) => {
    return { ...element, onClick: () => setGoToSlide(index) };
  });

  const [goToSlide, setGoToSlide] = useState(null);
  const [cardS] = useState(table)

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

export default EventsCarousel