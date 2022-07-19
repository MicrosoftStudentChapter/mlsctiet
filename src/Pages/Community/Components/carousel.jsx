import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../styles/styles.css";

// import required modules
import { Pagination } from "swiper";

// images
import ML from '../Assets/ml.png'

function Carousel() {
    return (
        <>
        <div className='communitySwiper'>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper">

                <SwiperSlide>
                    <span className='card-div'>
                        <div className='card-sub-div'>
                            <div className='card-heading'>Machine Learning</div>
                            <div className='card-content'>With increasing data utilization needs among all companies today, Machine Learning has indeed become the talk of the town. The Air around this startling field turned damp with heavy droplets of doubts and confusion when MLSC organized 2-day comprehensive workshop on Deep Learning and its application in Natural Language Processing (NLP) with Live project discussion. A few goodies, swags were given to some of the active enthusiasts in the workshop.</div>
                        </div>
                        <div>
                            <img src={ML} className='cardImage' />
                        </div>
                    </span>
                </SwiperSlide>

                <SwiperSlide>
                    <span className='card-div'>
                    <div className='card-sub-div'>
                            <div className='card-heading'>Machine Learning</div>
                            <div className='card-content'>With increasing data utilization needs among all companies today, Machine Learning has indeed become the talk of the town. The Air around this startling field turned damp with heavy droplets of doubts and confusion when MLSC organized 2-day comprehensive workshop on Deep Learning and its application in Natural Language Processing (NLP) with Live project discussion. A few goodies, swags were given to some of the active enthusiasts in the workshop.</div>
                        </div>
                        <div>
                            <img src={ML} className='cardImage' />
                        </div>
                    </span>
                </SwiperSlide>

                <SwiperSlide>
                    <span className='card-div'>
                         <div className='card-sub-div'>
                            <div className='card-heading'>Machine Learning</div>
                            <div className='card-content'>With increasing data utilization needs among all companies today, Machine Learning has indeed become the talk of the town. The Air around this startling field turned damp with heavy droplets of doubts and confusion when MLSC organized 2-day comprehensive workshop on Deep Learning and its application in Natural Language Processing (NLP) with Live project discussion. A few goodies, swags were given to some of the active enthusiasts in the workshop.</div>
                        </div>
                        <div>
                            <img src={ML} className='cardImage' />
                        </div>
                    </span>
                </SwiperSlide>

                <SwiperSlide>
                    <span className='card-div'>
                         <div className='card-sub-div'>
                            <div className='card-heading'>Machine Learning</div>
                            <div className='card-content'>With increasing data utilization needs among all companies today, Machine Learning has indeed become the talk of the town. The Air around this startling field turned damp with heavy droplets of doubts and confusion when MLSC organized 2-day comprehensive workshop on Deep Learning and its application in Natural Language Processing (NLP) with Live project discussion. A few goodies, swags were given to some of the active enthusiasts in the workshop.</div>
                        </div>
                        <div>
                            <img src={ML} className='cardImage' />
                        </div>
                    </span>
                </SwiperSlide>


            </Swiper>

            </div>

        </>
    )
}

export default Carousel