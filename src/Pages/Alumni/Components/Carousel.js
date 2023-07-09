import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Y2021 from "../Assets/2021.png";
import Y2017 from "../Assets/2017.png";
import Y2018 from "../Assets/2018.png";
import CarouselCSS from "../Styles/Carousel.module.css";

const Carouselss = () => {
  return (
    <div>
      <Carousel
        autoPlay="True"
        transitionTime={10}
        thumbWidth={0}
        infiniteLoop="True"
        showThumbs={false}
        className={CarouselCSS.Carousel}
        dynamicHeight={false}
        showStatus={false}
      >
        <div>
          <img src={Y2018} className={CarouselCSS.img} />
        </div>
        <div>
          <img src={Y2017} className={CarouselCSS.img} />
        </div>
        <div>
          <img src={Y2021} className={CarouselCSS.img} />
        </div>
      </Carousel>
    </div>
  );
};

export default Carouselss;
