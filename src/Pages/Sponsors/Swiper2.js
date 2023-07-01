import React, { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper.min.css';
import './Carousel.css';

function Carousel() {
  const images = [
    'https://res.cloudinary.com/ds7xs3pq1/image/upload/v1672682083/github_fphxpw.png',
    'https://res.cloudinary.com/ds7xs3pq1/image/upload/v1672682083/github_fphxpw.png',
    'https://res.cloudinary.com/ds7xs3pq1/image/upload/v1672682083/github_fphxpw.png',
    'https://res.cloudinary.com/ds7xs3pq1/image/upload/v1672682083/github_fphxpw.png',
    'https://res.cloudinary.com/ds7xs3pq1/image/upload/v1672682083/github_fphxpw.png',
    'https://res.cloudinary.com/ds7xs3pq1/image/upload/v1672682083/github_fphxpw.png',
    'https://res.cloudinary.com/ds7xs3pq1/image/upload/v1672682083/github_fphxpw.png',
    'https://res.cloudinary.com/ds7xs3pq1/image/upload/v1672682083/github_fphxpw.png',
    'https://res.cloudinary.com/ds7xs3pq1/image/upload/v1672682083/github_fphxpw.png',
    'https://res.cloudinary.com/ds7xs3pq1/image/upload/v1672682083/github_fphxpw.png',
  ];

  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current = new Swiper('.swiper-container', {
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 20,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        keyboard: {
          enabled: true,
        },
        loop: true,
        autoplay: {
          delay: 3000,
        },
        on: {
          slideChange: () => {
            const activeIndex = swiperRef.current.activeIndex % images.length;
            const slides = swiperRef.current.slides;
            slides.forEach((slide, index) => {
              const scale = index === activeIndex ? 1.5 : 1;
              slide.style.transform = `scale(${scale})`;
            });
          },
        },
      });
    }
  }, []);

  const handleNextClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handlePrevClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <div className="carousel-container">
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {images.map((image, index) => (
            <div key={index} className="swiper-slide">
              <div className="image-container">
                <img src={image} alt={`Image ${index + 1}`} className="carousel-image" />
              </div>
            </div>
          ))}
        </div>
        <div className="swiper-button-next" onClick={handleNextClick}></div>
        <div className="swiper-button-prev" onClick={handlePrevClick}></div>
      </div>
    </div>
  );
}

export default Carousel;
