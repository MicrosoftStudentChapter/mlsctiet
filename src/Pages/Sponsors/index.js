import React from "react";
import styles from "./styles/home.module.css";
import { useState, useEffect } from "react";
import App from './Swiper.js'

import ImageHolder from "./Components/ImageHolder.js";
// import required modules

// import { companyData } from "./Data.js";
// const title = data.pop();

const Sponsors = () => {
  const initialValues = {
    name: "",
    company: "",
    email: "",
    message: "",
  };
  //console.log(process.env.API_KEY)
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    //console.log(formValues);
  };
  const [result, setResult] = React.useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    formData.append("access_key", process.env.REACT_APP_API_KEY);

    if (
      formValues.name &&
      formValues.company &&
      formValues.email &&
      formValues.message
    ) {
      setResult("Success");
    } else {
      setResult("Error");
    }

    setFormValues({
      name: "",
      company: "",
      email: "",
      message: "",
    });

    // const callback = (index) => {
    //   return console.log("hello", index);
    //   //   console.log("callback", index);
    // };

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());
    console.log("Yo");
  };

  useEffect(() => {
    //console.log(formErrors);
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

    if (!values.company) {
      errors.company = "Company name is required!";
    }

    if (!values.email) {
      errors.email = "E-mail is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This e-mail is not valid";
    }
    return errors;
  };
  let slides = [
    <img src="https://picsum.photos/800/300/?random" alt="1" />,
    <img src="https://picsum.photos/800/301/?random" alt="2" />,
    <img src="https://picsum.photos/800/302/?random" alt="3" />,
    <img src="https://picsum.photos/800/303/?random" alt="4" />,
    <img src="https://picsum.photos/800/304/?random" alt="5" />,
  ];
  // <Carousel
  //   slides={slides}
  //   autoplay={true}
  //   interval={1000}
  //   // onSlideChange={callback}
  // />;
  return (
    <div className={styles.main}>
      <h1 className={styles.heading}>Our Sponsors</h1>
        <App />
      <div className={styles.whysponsorus}>
        <h2 className={styles.subheading}> Why Sponsor Us? </h2>
        {/* First Para */}
        <ul className={styles.listStyle}>
          <div className={styles.sponsorPara}>
            <span className={styles.sponsorText}>Youth Hub:&nbsp;</span>
            The Youth hub of the organization is a huge reach, as it has a large
            student population of 10000+ people on campus.
          </div>
          {/* Second Para */}
          <div className={styles.sponsorPara}>
            <span className={styles.sponsorText}>
              Connecting Tech Enthusiasts all over India:&nbsp;
            </span>
            MLSC is an Open-Source community that connects tech enthusiasts all
            across India. Its discord server has a reach of over a thousand
            people, which includes members from some of the country's most
            prominent educational institutions such as IITs and NITs.
          </div>
          {/* Third Para */}
          <div className={styles.sponsorPara}>
            <span className={styles.sponsorText}>Flagship Events:&nbsp;</span>
            MLSC is known for conducting various events throughout the year,
            which are designed to reach a massive audience. Some of these being
            Abhyudaya and Makeathon, which are very popular annual events that
            have the potential to increase the awareness and reach of your
            brand.
          </div>
          {/* Fourth Para */}
          <div className={styles.sponsorPara}>
            <span className={styles.sponsorText}>
              Ultimate Social Media Reach:&nbsp;
            </span>
            MLSC has an extensive social media presence that includes over 8000
            followers on various platforms such as Facebook, Instagram, and
            LinkedIn. Thus strategically helping boost your brand's reputation,
            reach and attract the youth.
          </div>

          <div className={styles.sponsorPara}>
            <span className={styles.sponsorText}>
              Best way to kickstart your campaign:&nbsp;
            </span>
            Collaborating with MLSC, a group of over a hundred individuals who
            are dedicated to learning all the traits that make up a successful
            team will help you organize various promotional events and learning
            workshops.
          </div>
        </ul>
      </div>
      <h1 className={styles.sponsorUsHead}>
        Want To Sponsor Our Upcoming Event?
      </h1>
      <div className={styles.sponsorForm}>
        <div className={styles.ctContainer1}>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name....."
              name="name"
              required
              className={styles.contactField}
              value={formValues.name}
              onChange={handleChange}
            />
            <input
              type="company"
              placeholder="Enter your company name here"
              name="company"
              required
              className={styles.contactField}
              value={formValues.company}
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="email69@abc.com"
              name="email"
              required
              className={styles.contactField}
              value={formValues.email}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Wanna leave a message for us? ;)"
              required
              className={styles.contactText}
              value={formValues.message}
              onChange={handleChange}
            ></textarea>
            <input
              type="hidden"
              name="redirect"
              value="localhost:3000/sponsors"
            />
            <button type="submit" className={styles.submitButton}>
              Submit!
            </button>
            {result && (
              <p
                className={styles.submissionStatus}
                style={{ color: result === "Success" ? "green" : "red" }}
              >
                {result === "Success"
                  ? "Form submitted successfully!"
                  : "Form submission failed."}
              </p>
            )}
          </form>
        </div>
        <div className={styles.ctContainer2}>
          {/* <img src={shield} className={styles.sheild} /> */}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
