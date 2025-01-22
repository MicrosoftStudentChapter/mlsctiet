import Carousel from "react-spring-3d-carousel";
import { useState, useEffect } from "react";
import { config } from "react-spring";

export default function Carroussel(props) {
  const table = props.cards.map((element, index) => {
    return { ...element, onClick: () => setGoToSlide(index) };
  });

  const [offsetRadius, setOffsetRadius] = useState(2);
  const [showArrows, setShowArrows] = useState(false);
  const [goToSlide, setGoToSlide] = useState(0);
  const [cards] = useState(table);
  const [autoPlay, setAutoPlay] = useState(false);

  useEffect(() => {
    setOffsetRadius(props.offset);
    setShowArrows(props.showArrows);
    setAutoPlay(props.autoPlay);
  }, [props.offset, props.showArrows, props.autoPlay]);

  useEffect(() => {
    if (autoPlay) {
      const intervalId = setInterval(() => {
        setGoToSlide((prevSlide) => (prevSlide + 1) % cards.length);
      }, props.interval * 1000); 
      
      return () => clearInterval(intervalId); 
    }
  }, [autoPlay, cards.length, props.interval]);

  return (
    <div
      style={{ width: props.width, height: props.height, margin: props.margin }}
    >
      <Carousel
        slides={cards}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showArrows}
        animationConfig={config.gentle}
      />
    </div>
  );
}
