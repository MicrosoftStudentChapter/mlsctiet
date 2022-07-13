import React from 'react';
import {Fragment} from 'react';
import Fade from 'react-reveal';
import './Styles/Projects.css';
import './Styles/swiper.css';
import {Link} from 'react-router-dom';

//  Swiper react components
import {Swiper, SwiperSlide} from 'swiper/react';
// Swiper Styles
import 'swiper/css';
import 'swiper/css/pagination';

// Modules
import {Autoplay, Pagination} from 'swiper';

function Projects (props) {
  return (
    <Fragment>
      <div className="projects-container">

        {/* swiper */}

        <div className="sliderWrapper">

          <div className="projects-header">
            <Fade top>
              <h1 className="projects-title">MLSC</h1>
            </Fade>
          </div>
          <Swiper
            // breakpoints={{
            //   // when window width is >= 640px
            //   640: {
            //     width: 640,
            //     slidesPerView: 4,
            //   },
            //   // when window width is >= 768px
            //   768: {
            //     width: 768,
            //     slidesPerView: 2,
            //   },
            //   // when window width is >= 1024px
            //   1024: {
            //     width: 1024,
            //     slidesPerView: 5,
            //   },
            //   1200: {
            //     width: 1024,
            //     slidesPerView: 6,
            //   },
            // }}
            slidesPerView={5}
            centeredSlides={true}
            spaceBetween={30}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            pagination={{
              dynamicBullets: true,
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            <swiperContainer>
              <SwiperSlide>
                <Link to="/project1" className="slide">
                  Slide 1
                </Link>
              </SwiperSlide>

              <SwiperSlide>
                <Link to="/project1" className="slide">
                  Slide 2
                </Link>
              </SwiperSlide>

              <SwiperSlide>
                <Link to="/project1" className="slide">
                  Slide 3
                </Link>
              </SwiperSlide>

              <SwiperSlide>
                <Link to="/project1" className="slide">
                  Slide 4
                </Link>
              </SwiperSlide>

              <SwiperSlide>
                <Link to="/project1" className="slide">
                  Slide 5
                </Link>
              </SwiperSlide>

              <SwiperSlide>
                <Link to="/project1" className="slide">
                  Slide 6
                </Link>
              </SwiperSlide>

              <SwiperSlide>
                <Link to="/project1" className="slide">
                  Slide 7
                </Link>
              </SwiperSlide>

              <SwiperSlide>
                <Link to="/project1" className="slide">
                  Slide 8
                </Link>
              </SwiperSlide>
            </swiperContainer>
          </Swiper>
        </div>

      </div>
    </Fragment>
  );
}

export default Projects;
