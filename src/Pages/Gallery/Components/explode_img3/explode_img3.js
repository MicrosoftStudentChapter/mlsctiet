import React, { useRef, useState } from "react";
import "../../Style/explode.css";
import backbutton from "../../Assets/Backbutton.png";
import { Link } from "react-router-dom";


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../../Style/carouselstyle.css";

// import required modules
import { Mousewheel, Pagination } from "swiper";

const explode_img3 = () => {
    function loadanimation() {
        let img = document.getElementById("mainimage");
        let img1 = document.getElementById("mainimage1");
        let img2 = document.getElementById("mainimage2");
        let img3 = document.getElementById("mainimage3");
        let img4 = document.getElementById("mainimage4");
        let img5 = document.getElementById("mainimage5");
        let img6 = document.getElementById("mainimage6");
        let img7 = document.getElementById("mainimage7");
        let img8 = document.getElementById("mainimage8");
        let img9 = document.getElementById("mainimage9");
        let img10 = document.getElementById("mainimage10");
        let img11 = document.getElementById("mainimage11");
        setTimeout(() => {
            img1.style.transform = "translate(30vw,-30vh) scale(0.5)";
        }, 1000);
        setTimeout(() => {
            img2.style.transform = "translate(-30vw,-30vh) scale(0.5)";
        }, 1500);
        setTimeout(() => {
            img3.style.transform = "translate(-30vw,30vh) scale(0.5)";
        }, 2000);
        setTimeout(() => {
            img4.style.transform = "translate(30vw,35vh) scale(0.5)";
        }, 2500);
        setTimeout(() => {
            img5.style.transform = "translate(7vw,-31vh) scale(0.4)";
        }, 3000);
        setTimeout(() => {
            img6.style.transform = "translate(-17vw,-10vh) scale(0.5)";
        }, 3500);
        setTimeout(() => {
            img7.style.transform = "translate(40vw,10vh) scale(0.5)";
        }, 4000);
        setTimeout(() => {
            img8.style.transform = "translate(-35vw,-2vh) scale(0.5)";
        }, 4500);
        setTimeout(() => {
            img9.style.transform = "translate(20vw,2vh) scale(0.5)";
        }, 5000);
        setTimeout(() => {
            img10.style.transform = "translate(-10vw,30vh)  scale(0.5)";
        }, 5500);
        setTimeout(() => {
            img11.style.transform = "translate(10vw,30vh)  scale(0.5)";
        }, 6000);
        setTimeout(() => {
            img.style.transform = "scale(0.8)";
        }, 6500);
    }
    // Window.onload = function() {
    //   console.log("hi");
    // };

    // window.addEventListener("load", function () {
    //   console.log("hi");
    // });
    return (
        <div>
            <Link to='/gallery'><img src={backbutton} className="backbtn"/></Link>
            
            <div className="pagewrapper">
                <div className="imagediv">
                    <img
                        id="mainimage"
                        src="https://i.pinimg.com/originals/25/78/61/25786134576ce0344893b33a051160b1.jpg"
                        onLoad={loadanimation}
                    />

                    <img
                        id="mainimage1"
                        src="https://i.pinimg.com/originals/25/78/61/25786134576ce0344893b33a051160b1.jpg"
                    />

                    <img
                        id="mainimage2"
                        src="https://i.pinimg.com/originals/25/78/61/25786134576ce0344893b33a051160b1.jpg"
                    />

                    <img
                        id="mainimage3"
                        src="https://i.pinimg.com/originals/25/78/61/25786134576ce0344893b33a051160b1.jpg"
                    />

                    <img
                        id="mainimage4"
                        src="https://i.pinimg.com/originals/25/78/61/25786134576ce0344893b33a051160b1.jpg"
                    />

                    <img
                        id="mainimage5"
                        src="https://i.pinimg.com/originals/25/78/61/25786134576ce0344893b33a051160b1.jpg"
                    />

                    <img
                        id="mainimage6"
                        src="https://i.pinimg.com/originals/25/78/61/25786134576ce0344893b33a051160b1.jpg"
                    />

                    <img
                        id="mainimage7"
                        src="https://i.pinimg.com/originals/25/78/61/25786134576ce0344893b33a051160b1.jpg"
                    />

                    <img
                        id="mainimage8"
                        src="https://i.pinimg.com/originals/25/78/61/25786134576ce0344893b33a051160b1.jpg"
                    />

                    <img
                        id="mainimage9"
                        src="https://i.pinimg.com/originals/25/78/61/25786134576ce0344893b33a051160b1.jpg"
                    />

                    <img
                        id="mainimage10"
                        src="https://i.pinimg.com/originals/25/78/61/25786134576ce0344893b33a051160b1.jpg"
                    />

                    <img
                        id="mainimage11"
                        src="https://i.pinimg.com/originals/25/78/61/25786134576ce0344893b33a051160b1.jpg"
                    />

                </div> 
                <div className="carouseldiv">
                <>
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img
                        id="mainimage"
                        src="https://i.pinimg.com/originals/25/78/61/25786134576ce0344893b33a051160b1.jpg"
                        onLoad={loadanimation}
                    /></SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>
                    <img src="https://i.pinimg.com/originals/25/78/61/25786134576ce0344893b33a051160b1.jpg" />
        </SwiperSlide>
      </Swiper>
    </>   
                </div>  
            </div>
        </div>
    );
};

export default explode_img3;
