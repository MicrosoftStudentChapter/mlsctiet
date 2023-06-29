//code for the swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ImageHolder from "./Components/ImageHolder.js";
import styles from "./styles/home.module.css";
import { companyData } from "./Data.js";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

function SwiperSlider({}){
    return <Swiper
            slidesPerView={3}
            spaceBetween={100}
            // loop={true}
            // pagination={{
            //     type: "progressbar",
            //     // clickable:true,
            // }}
            autoplay={{
                delay: 1000,
                disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className={styles.mySwiper}
        >
            {companyData.map((data) => {
                    return (
                        <SwiperSlide>
                            <div className={styles.carousel1}>
                                <ImageHolder data={data} />
                                <div className={styles.container2}>
                                    {/* <h2 classname={styles.sponsorHead}>
                                        {data.sponsorName}
                                    </h2> */}
                                    {/* <h2 classname={styles.sponsorText}>
                                        Makeathon 4.0
                                    </h2> */}
                                    {/* <p classname={styles.sponsorText}>
                                        {data.description}
                                    </p> */}
                                </div>
                            </div>
                        </SwiperSlide>
                    );
            })}
        </Swiper>
}

export default SwiperSlider;