import React from "react";
import styles from "./Footer.module.css";
import logo from "../../Assets/mlsc_shield_new.png";
import {FaLinkedinIn} from 'react-icons/fa';
import { FaYoutube } from "react-icons/fa";
import {FaFacebook} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
const Footer = () => {
  return (
    <React.Fragment>
      <div className={styles.footerbody}>
        <div className={styles.Footer}>
          <div className={styles.FooterContent}>
            <>
              <p>
                Legacy of <br></br>
                <span className={styles.Innovation}>INNOVATIONS</span>
              </p>
            </>
          </div>
          <div className={styles.FooterLogo}>
            <img src={logo} alt="Logo" className={styles.logo} />
          </div>
          <div className={styles.FooterContact}>
            <div>
              <p className={styles.contacthead}>CONTACT US</p>
              <p className={styles.mailphone}>msc@thapar.edu</p>
              <p className={styles.mailphone}>+91 8872331055</p>
              <p className={styles.mailphone}>+91 6392860805</p>
              <div className={styles.socialmedia}>
                <a href="#" className={styles.icons1}>
                  <FaLinkedinIn/>
                </a>
                <a href="https://www.facebook.com/mlsctiet/" className={styles.icons2}>
                  <FaYoutube/>
                </a>
                <a href="#" className={styles.icons3}>
                    <FaFacebook/>
                </a>
                <a href="https://www.instagram.com/mlsc_tiet" className={styles.icons4}>
                  <FaInstagram/>
                </a>
              </div>
            </div>
          </div>
          
        </div>
        <div>
            <p className={styles.copywrite}>2022 | Microsoft Learn Student Chapter | Terms & Conditions | Privacy Policy </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
