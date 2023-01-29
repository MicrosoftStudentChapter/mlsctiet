import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../styles/styles.css";

// import required modules
import { Pagination } from "swiper";

// images
import HKB from '../Assets/hacktoberfest.png';
import IC from '../Assets/imaginecup.png';
import BK from '../Assets/blockchain.png';

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
                            <div className='card-heading'>Hacktoberfest</div>
                            <div className='card-content'>
            Hacktoberfest is an open-source contribution challenge held each year in the month of October. It is a month-long celebration of open source software run by DigitalOcean and DEV. The main purpose is to give its participants an introductory idea about open source contribution.
            MLSC conducted various Git and Github sessions to give the freshers a kickstart towards their open source contributions.</div>
                        </div>
                        <div>
                            <img src={HKB} className='cardImage' />
                        </div>
                    </span>
                </SwiperSlide>

                <SwiperSlide>
                    <span className='card-div'>
                         <div className='card-sub-div'>
                            <div className='card-heading'>Imagine Cup</div>
                            <div className='card-content'>The Imagine Cup is full of opportunities to gain new skills, access exclusive training, unlock mentorship opportunities, and have a chance to win great prizes and make a difference in the world</div>
                        </div>
                        <div>
                            <img src={IC} className='cardImage' />
                        </div>
                    </span>
                </SwiperSlide>

                <SwiperSlide>
                    <span className='card-div'>
                         <div className='card-sub-div'>
                            <div className='card-heading'>Blockchain</div>
                            <div className='card-content'>A blockchain is a distributed ledger with growing lists of records (blocks) that are securely linked together via cryptographic hashes. Each block contains a cryptographic hash of the previous block, a timestamp, and transaction data (generally represented as a Merkle tree, where data nodes are represented by leaves).</div>
                        </div>
                        <div>
                            <img src={BK} className='cardImage' />
                        </div>
                    </span>
                </SwiperSlide>


            </Swiper>

            </div>

        </>
    )
}

export default Carousel