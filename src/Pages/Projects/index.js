import React from 'react';
import {Fragment} from 'react';
import Fade from 'react-reveal';
import './Styles/Projects.css';
import './Styles/swiper.css';
import {Link} from 'react-router-dom';
import Logo from './Assets/Projects logo.png';

//  Swiper react components
import {Swiper, SwiperSlide} from 'swiper/react';
// Swiper Styles
import 'swiper/css';
import 'swiper/css/pagination';

// Modules
import {Autoplay, Pagination} from 'swiper';

function Projects () {
  return (
    <Fragment>
      <div className="projects-container">

        {/* swiper */}

        <div className="slider-wrapper">

          <div className="projects-header">
            <Fade top>
              {/* <h1 className="projects-title">MLSC</h1> */}
              <img src={Logo} alt="" />
            </Fade>
          </div>

          <Fade bottom>
            <Swiper
              loop={true}
              slidesPerView={5}
              centeredSlides={true}
              spaceBetween={30}
              autoplay={{
                delay: 1500,
                disableOnInteraction: true,
              }}
              pagination={{
                dynamicBullets: true,
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
              className="my-swiper"
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
          </Fade>
        </div>

      </div>
    </Fragment>
  );
}

export default Projects;
