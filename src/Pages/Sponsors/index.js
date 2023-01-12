import React from "react";
import styles from "./styles/home.module.css";
import { useState, useEffect } from "react";
import shield from '../LandingPage/mlsc-logo.png';
// Title Sponsors

// Power Sponsors

//Ikshan's code for swiper JS

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ImageHolder from "./Components/ImageHolder.js";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import { companyData } from "./Data.js";
// const title = data.pop();

const Sponsors = () => {
    const initialValues = {
        fullName: "",
        companyName: "",
        email: "",
        desciption: "",
    };
    console.log(process.env.API_KEY)
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        // console.log(e.target);
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        console.log(formValues);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors]);

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if (!values.fullName) {
            errors.fullName = "Full name is required!";
        }

        if (!values.companyName) {
            errors.companyName = "Company name is required!";
        }

        if (!values.email) {
            errors.email = "E-mail is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This e-mail is not valid";
        }
        return errors;
    };
    return (
        <div className={styles.main}>
            <h1 className={styles.heading}>Our Sponsors</h1>
            {/* First carousel */}
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                // loop={true}
                pagination={{
                    type: "progressbar",
                    // clickable:true,
                }}
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
                                        <h2 classname={styles.sponsorHead}>
                                            {data.sponsorName}
                                        </h2>
                                        <h2 classname={styles.sponsorText}>
                                            Makeathon 4.0
                                        </h2>
                                        <p classname={styles.sponsorText}>
                                            {data.description}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                })}
            </Swiper>
            <div className={styles.whysponsorus}>
                <h2 className={styles.subheading}> Why Sponsor Us? </h2>
                    {/* First Para */}
                  <ul className={styles.listStyle}>
                    <div className={styles.sponsorPara}>
                        <span className={styles.sponsorText}>Youth Hub:&nbsp;</span>
                        The Youth hub of the organization is a huge reach, as it has
                        a large student population of 10000+ people on campus.
                    </div>
                    {/* Second Para */}
                    <div className={styles.sponsorPara}>
                        <span className={styles.sponsorText}>
                            Connecting Tech Enthusiasts all over India:&nbsp;
                        </span>
                        MLSC is an Open-Source community that connects tech
                        enthusiasts all across India. Its discord server has a reach
                        of over a thousand people, which includes members from some
                        of the country's most prominent educational institutions
                        such as IITs and NITs.
                    </div>
                    {/* Third Para */}
                    <div className={styles.sponsorPara}>
                        <span className={styles.sponsorText}>
                            Flagship Events:&nbsp;
                        </span>
                        MLSC is known for conducting various events throughout the
                        year, which are designed to reach a massive audience. Some
                        of these being Abhyudaya and Makeathon, which are very
                        popular annual events that have the potential to increase
                        the awareness and reach of your brand.
                    </div>
                    {/* Fourth Para */}
                    <div className={styles.sponsorPara}>
                        <span className={styles.sponsorText}>
                            Ultimate Social Media Reach:&nbsp;
                        </span>
                        MLSC has an extensive social media presence that includes
                        over 8000 followers on various platforms such as Facebook,
                        Instagram, and LinkedIn. Thus strategically helping boost
                        your brand's reputation, reach and attract the youth.
                    </div>

                    <div className={styles.sponsorPara}>
                        <span className={styles.sponsorText}>
                            Best way to kickstart your campaign:&nbsp;
                        </span>
                        Collaborating with MLSC, a group of over a hundred
                        individuals who are dedicated to learning all the traits
                        that make up a successful team will help you organize
                        various promotional events and learning workshops.
                    </div>
                  </ul>
            </div>
            <h1 className={styles.sponsorUsHead}>
                Want To Sponsor Our Upcoming Event?
            </h1>
            <div className={styles.sponsorForm}>
              <div className={styles.ctContainer1}>
                <form action="https://api.web3forms.com/submit" method="POST">
                  <input type="hidden" name="access_key" value={process.env.API_KEY} />
                  <input type="text" placeholder="Name....." name="name" required className={styles.contactField} />
                  <input type="email" placeholder="email69@abc.com" name="email" required className={styles.contactField} />
                  <textarea name="message" placeholder="Wanna leave a message for us? ;)" required className={styles.contactText} ></textarea>
                  <input type="hidden" name="redirect" value="https://web3forms.com/success" />
                  <button type="submit" className={styles.submitButton}>Submit!</button>
                </form>
              </div> 
              <div className={styles.ctContainer2}>
                <img src={shield} className={styles.sheild} />
              </div>
            </div>
        </div>
    );
};

export default Sponsors;
