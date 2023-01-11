import React from "react";
import styles from "./styles/home.module.css";
import logo from "./assets/mlsc_shield_new.png";
import { useRef, useState, useEffect } from "react";
import circle from "./assets/circle.png";

// Title Sponsors
import cnlogo from "./assets/TitleSponsors/cn.png";
import codingblocks from "./assets/TitleSponsors/codingblocks.png";
import juslogo from "./assets/TitleSponsors/juslogo.png";
import mlhlogo from "./assets/TitleSponsors/mlhlogo.png";
import polygonlogo from "./assets/TitleSponsors/polygonlogo.png";
import paytmlogo from "./assets/TitleSponsors/paytm.png";
import gfglogo from "./assets/TitleSponsors/gfg.png";
import githublogo from "./assets/TitleSponsors/github.png";
import sslogo from "./assets/TitleSponsors/souledstore.png";
import smlogo from "./assets/TitleSponsors/paytm.png";

// Power Sponsors
import celologo from "./assets/PowerSponsors/celo.png";
import fclogo from "./assets/PowerSponsors/filecoin.png";
import lllogo from "./assets/PowerSponsors/leadinglearn.webp";
import tezoslogo from "./assets/PowerSponsors/tezos.png";
import yhillslogo from "./assets/PowerSponsors/yhills.png";

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
                                    <div
                                        className={styles.containerSpace}
                                    ></div>
                                    <div className={styles.container2}>
                                        <h2 classname={styles.sponsorText}>
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
                {/* <SwiperSlide>
        <div className={styles.carousel1}>
          <img className={styles.circle} src={circle} alt="animation"></img>
            <div className={styles.container1}>
              <img className={styles.spnsrlogo1} src={codingblocks} alt="sponsor logo"></img>
            </div>

            <div className={styles.containerSpace}></div>
          
            <div className={styles.container2}>
              <h2 classname={styles.sponsorText}>Name of company</h2>
              <h2 classname={styles.sponsorText}>Makeathon 4.0</h2>
              <p classname={styles.sponsorText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt augue lectus, volutpat suscipit quam malesuada sit amet. Nulla sit amet velit rhoncus, dapibus orci quis, lacinia nunc.</p>
            </div> 
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.carousel1}>
            <img className={styles.circle} src={circle} alt="animation"></img>
            <div className={styles.container1}> 
              <img className={styles.spnsrlogo1} src={juslogo} alt="sponsor logo"></img>
            </div>

            <div className={styles.containerSpace}></div>
          
            <div className={styles.container2}>
              <h2 classname={styles.sponsorText}>Name of company</h2>
              <h2 classname={styles.sponsorText}>Makeathon 4.0</h2>
              <p classname={styles.sponsorText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt augue lectus, volutpat suscipit quam malesuada sit amet. Nulla sit amet velit rhoncus, dapibus orci quis, lacinia nunc.</p>
            </div> 
          </div>

        </SwiperSlide>
        <SwiperSlide>
        <div className={styles.carousel1}>
          <img className={styles.circle} src={circle} alt="animation"></img>
            <div className={styles.container1}> 
              <img className={styles.spnsrlogo1} src={mlhlogo} alt="sponsor logo"></img>
            </div>

            <div className={styles.containerSpace}></div>
          
            <div className={styles.container2}>
              <h2 classname={styles.sponsorText}>Name of company</h2>
              <h2 classname={styles.sponsorText}>Makeathon 4.0</h2>
              <p classname={styles.sponsorText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt augue lectus, volutpat suscipit quam malesuada sit amet. Nulla sit amet velit rhoncus, dapibus orci quis, lacinia nunc.</p>
            </div> 
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={styles.carousel1}>
          <img className={styles.circle} src={circle} alt="animation"></img>
          <div className={styles.container1}> 
            <img className={styles.spnsrlogo1} src={polygonlogo} alt="sponsor logo"></img>
          </div>

          <div className={styles.containerSpace}></div>
        
          <div className={styles.container2}>
            <h2 classname={styles.sponsorText}>Name of company</h2>
            <h2 classname={styles.sponsorText}>Makeathon 4.0</h2>
            <p classname={styles.sponsorText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt augue lectus, volutpat suscipit quam malesuada sit amet. Nulla sit amet velit rhoncus, dapibus orci quis, lacinia nunc.</p>
          </div>
      </div> 

        </SwiperSlide>
        <SwiperSlide>
        <div className={styles.carousel1}>
          <img className={styles.circle} src={circle} alt="animation"></img>
          <div className={styles.container1}> 
            <img className={styles.spnsrlogo1} src={paytmlogo} alt="sponsor logo"></img>
          </div>

          <div className={styles.containerSpace}></div>
        
          <div className={styles.container2}>
            <h2 classname={styles.sponsorText}>Name of company</h2>
            <h2 classname={styles.sponsorText}>Makeathon 4.0</h2>
            <p classname={styles.sponsorText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt augue lectus, volutpat suscipit quam malesuada sit amet. Nulla sit amet velit rhoncus, dapibus orci quis, lacinia nunc.</p>
          </div>  
          </div>         
        </SwiperSlide>
        <SwiperSlide>
        <div className={styles.carousel1}>
          <img className={styles.circle} src={circle} alt="animation"></img>
          <div className={styles.container1}> 
            <img className={styles.spnsrlogo1} src={gfglogo} alt="sponsor logo"></img>
          </div>

          <div className={styles.containerSpace}></div>
        
          <div className={styles.container2}>
            <h2 classname={styles.sponsorText}>Name of company</h2>
            <h2 classname={styles.sponsorText}>Makeathon 4.0</h2>
            <p classname={styles.sponsorText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt augue lectus, volutpat suscipit quam malesuada sit amet. Nulla sit amet velit rhoncus, dapibus orci quis, lacinia nunc.</p>
          </div>  
          </div>         
        </SwiperSlide>
        <SwiperSlide>
        <div className={styles.carousel1}>
          <img className={styles.circle} src={circle} alt="animation"></img>
          <div className={styles.container1}> 
            <img className={styles.spnsrlogo1} src={githublogo} alt="sponsor logo"></img>
          </div>

          <div className={styles.containerSpace}></div>
        
          <div className={styles.container2}>
            <h2 classname={styles.sponsorText}>Name of company</h2>
            <h2 classname={styles.sponsorText}>Makeathon 4.0</h2>
            <p classname={styles.sponsorText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt augue lectus, volutpat suscipit quam malesuada sit amet. Nulla sit amet velit rhoncus, dapibus orci quis, lacinia nunc.</p>
          </div>  
          </div>         
        </SwiperSlide>
        <SwiperSlide>
        <div className={styles.carousel1}>
          <img className={styles.circle} src={circle} alt="animation"></img>
          <div className={styles.container1}> 
            <img className={styles.spnsrlogo1} src={sslogo} alt="sponsor logo"></img>
          </div>

          <div className={styles.containerSpace}></div>
        
          <div className={styles.container2}>
            <h2 classname={styles.sponsorText}>Name of company</h2>
            <h2 classname={styles.sponsorText}>Makeathon 4.0</h2>
            <p classname={styles.sponsorText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt augue lectus, volutpat suscipit quam malesuada sit amet. Nulla sit amet velit rhoncus, dapibus orci quis, lacinia nunc.</p>
          </div>  
          </div>         
        </SwiperSlide>
        <SwiperSlide>
        <div className={styles.carousel1}>
          <img className={styles.circle} src={circle} alt="animation"></img>
          <div className={styles.container1}> 
            <img className={styles.spnsrlogo1} src={smlogo} alt="sponsor logo"></img>
          </div>

          <div className={styles.containerSpace}></div>
        
          <div className={styles.container2}>
            <h2 classname={styles.sponsorText}>Name of company</h2>
            <h2 classname={styles.sponsorText}>Makeathon 4.0</h2>
            <p classname={styles.sponsorText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt augue lectus, volutpat suscipit quam malesuada sit amet. Nulla sit amet velit rhoncus, dapibus orci quis, lacinia nunc.</p>
          </div>  
          </div>         
        </SwiperSlide> */}
            </Swiper>

            {/*carousel div ends right here and WHY SPONSOR US div starts from here */}

            <div className={styles.whysponsorus}>
                <h2 className={styles.subheading}> Why Sponsor Us? </h2>
                    {/* First Para */}
                  <ul className={styles.listStyle}>
                    <li className={styles.sponsorPara}>
                        <span className={styles.sponsorText}>Youth Hub:&nbsp;</span>
                        The Youth hub of the organization is a huge reach, as it has
                        a large student population of 10000+ people on campus.
                    </li>
                    {/* Second Para */}

                    <li className={styles.sponsorPara}>
                        <span className={styles.sponsorText}>
                            Connecting Tech Enthusiasts all over India:&nbsp;
                        </span>
                        MLSC is an Open-Source community that connects tech
                        enthusiasts all across India. Its discord server has a reach
                        of over a thousand people, which includes members from some
                        of the country's most prominent educational institutions
                        such as IITs and NITs.
                    </li>

                    {/* Third Para */}

                    <li className={styles.sponsorPara}>
                        <span className={styles.sponsorText}>
                            Flagship Events:&nbsp;
                        </span>
                        MLSC is known for conducting various events throughout the
                        year, which are designed to reach a massive audience. Some
                        of these being Abhyudaya and Makeathon, which are very
                        popular annual events that have the potential to increase
                        the awareness and reach of your brand.
                    </li>

                    {/* Fourth Para */}

                    <li className={styles.sponsorPara}>
                        <span className={styles.sponsorText}>
                            Ultimate Social Media Reach:&nbsp;
                        </span>
                        MLSC has an extensive social media presence that includes
                        over 8000 followers on various platforms such as Facebook,
                        Instagram, and LinkedIn. Thus strategically helping boost
                        your brand's reputation, reach and attract the youth.
                    </li>

                    <li className={styles.sponsorPara}>
                        <span className={styles.sponsorText}>
                            Best way to kickstart your campaign:&nbsp;
                        </span>
                        Collaborating with MLSC, a group of over a hundred
                        individuals who are dedicated to learning all the traits
                        that make up a successful team will help you organize
                        various promotional events and learning workshops.
                    </li>
                  </ul>
            </div>

            {/* why sponsor us div ends here and second corousel div starts */}

            {/* <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay,Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className={styles.carousel2}>

              <div className={styles.box1}>
                <img className={styles.spnsrlogo11} src={celologo} alt="sponsor logo"></img>
              </div>

              <div className={styles.box2}>
                <img className={styles.spnsrlogo11} src={logo} alt="sponsor logo"></img>
              </div>

              <div className={styles.box3}>
                <img className={styles.spnsrlogo11} src={fclogo} alt="sponsor logo"></img>
              </div>

              <div className={styles.box4}>
                <img className={styles.spnsrlogo11} src={logo} alt="sponsor logo"></img>
              </div>

              <div className={styles.box5}>
                <img className={styles.spnsrlogo11} src={lllogo} alt="sponsor logo"></img>
              </div>

              <div className={styles.box6}>
                <img className={styles.spnsrlogo11} src={logo} alt="sponsor logo"></img>
              </div>
            
            </div> 
        </SwiperSlide>

        <SwiperSlide>
            <div className={styles.carousel2}>

              <div className={styles.box1}>
                <img id={styles.spnsrlogo11} src={tezoslogo} alt="sponsor logo"></img>
              </div>

              <div className={styles.box2}>
                <img id={styles.spnsrlogo11} src={yhillslogo} alt="sponsor logo"></img>
              </div>

              <div className={styles.box3}>
                <img id={styles.spnsrlogo11} src={logo} alt="sponsor logo"></img>
              </div>

              <div className={styles.box4}>
                <img id={styles.spnsrlogo11} src={logo} alt="sponsor logo"></img>
              </div>

              <div className={styles.box5}>
                <img id={styles.spnsrlogo11} src={logo} alt="sponsor logo"></img>
              </div>

              <div className={styles.box6}>
                <img id={styles.spnsrlogo11} src={logo} alt="sponsor logo"></img>
              </div>
            
            </div> 
        </SwiperSlide>

        <SwiperSlide>
            <div className={styles.carousel2}>

              <div className={styles.box1}>
                <img id={styles.spnsrlogo11} src={logo} alt="sponsor logo"></img>
              </div>

              <div className={styles.box2}>
                <img id={styles.spnsrlogo11} src={logo} alt="sponsor logo"></img>
              </div>

              <div className={styles.box3}>
                <img id={styles.spnsrlogo11} src={logo} alt="sponsor logo"></img>
              </div>

              <div className={styles.box4}>
                <img id={styles.spnsrlogo11} src={logo} alt="sponsor logo"></img>
              </div>

              <div className={styles.box5}>
                <img id={styles.spnsrlogo11} src={logo} alt="sponsor logo"></img>
              </div>

              <div className={styles.box6}>
                <img id={styles.spnsrlogo11} src={logo} alt="sponsor logo"></img>
              </div>
            
            </div> 
        </SwiperSlide>

        <SwiperSlide>
            <div className={styles.carousel2}>

              <div className={styles.box1}>
                <img id={styles.spnsrlogo11} src={logo} alt="sponsor logo"></img>
              </div>

              <div className={styles.box2}>
                <img id={styles.spnsrlogo11} src={logo} alt="sponsor logo"></img>
              </div>

              <div className={styles.box3}>
                <img id={styles.spnsrlogo11} src={logo} alt="sponsor logo"></img>
              </div>

              <div className={styles.box4}>
                <img id={styles.spnsrlogo11} src={logo} alt="sponsor logo"></img>
              </div>

              <div className={styles.box5}>
                <img id={styles.spnsrlogo11} src={logo} alt="sponsor logo"></img>
              </div>

              <div className={styles.box6}>
                <img id={styles.spnsrlogo11} src={logo} alt="sponsor logo"></img>
              </div>
            
            </div> 
        </SwiperSlide>

        <SwiperSlide>
            <div className={styles.carousel2}>

              <div className={styles.box1}>
                <img id={styles.spnsrlogo11} src={logo} alt="sponsor logo"></img>
              </div>

              <div className={styles.box2}>
                <img id={styles.spnsrlogo11} src={logo} alt="sponsor logo"></img>
              </div>

              <div className={styles.box3}>
                <img id={styles.spnsrlogo11} src={logo} alt="sponsor logo"></img>
              </div>

              <div className={styles.box4}>
                <img id={styles.spnsrlogo11} src={logo} alt="sponsor logo"></img>
              </div>

              <div className={styles.box5}>
                <img id={styles.spnsrlogo11} src={logo} alt="sponsor logo"></img>
              </div>

              <div className={styles.box6}>
                <img id={styles.spnsrlogo11} src={logo} alt="sponsor logo"></img>
              </div>
            
            </div> 
        </SwiperSlide>

      </Swiper> */}

            {/*Second carousel ends, Form begins*/}

            <h1 className={styles.sponsorUsHead}>
                Want To Sponsor Our Upcoming Event?
            </h1>

            <div className={styles.sponsorForm}>
                <form method="get" onSubmit={handleSubmit}>
                    <label for="spnsor-fullname"></label>
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        size="23"
                        value={formValues.fullName}
                        onChange={handleChange}
                    ></input>
                    <p className={styles.errormssg}>{formErrors.fullName}</p>

                    <label for="spnsor-companyname"></label>
                    <input
                        type="text"
                        name="companyName"
                        placeholder="Company Name"
                        size="23"
                        value={formValues.companyName}
                        onChange={handleChange}
                    ></input>
                    <p className={styles.errormssg}>{formErrors.companyName}</p>

                    <label for="spnsor-email"></label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email-Address"
                        size="100"
                        value={formValues.email}
                        onChange={handleChange}
                    ></input>
                    <p className={styles.errormssg}>{formErrors.email}</p>

                    <label for="spnsor-message"></label>
                    <textarea
                        rows="10"
                        name="description"
                        cols="33"
                        placeholder="Type your message here..."
                        onChange={handleChange}
                    ></textarea>
                    <p className={styles.errormssg}>{formErrors.desciption}</p>

                    <div className={styles.spnsorformsubmit}>
                        <input type="submit" name=""></input>
                    </div>

                    {Object.keys(formErrors).length === 0 && isSubmit ? (
                        <div className={styles.success}>
                            Your message has been conveyed!
                        </div>
                    ) : (
                        <div></div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Sponsors;
