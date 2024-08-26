import React, { useState, useEffect } from 'react';
import styles from "../Style/scroll.module.css";
import ProfileCards from './ProfileCards';
import YearSelector from './YearSelector';
import AlumniSvg from "../Assets/alumni_vector.svg";
import MeetVector from "../Assets/meet_vector.svg";

const imageData = [
  {
    "src": "https://res.cloudinary.com/dy1pmolax/image/upload/v1688814166/gallery_page/2019/2_2019_tcxpdt.jpg",
    "alt": "Image 1"
  },
  {
    "src": "https://res.cloudinary.com/dy1pmolax/image/upload/v1688813371/gallery_page/2021/8_Large_prqsdg.jpg",
    "alt": "Image 2"
  },
  {
    "src": "https://res.cloudinary.com/dwriqyuob/image/upload/c_crop,g_auto,h_600,w_1100/teamimage3.jpg",
    "alt": "Image 3"
  },
  {
    "src": "https://res.cloudinary.com/dy1pmolax/image/upload/v1688813371/gallery_page/2021/9_Large_femzxd.jpg",
    "alt": "Image 4"
  },
  {
    "src": "https://res.cloudinary.com/dy1pmolax/image/upload/v1688839046/gallery_page/2021/13-2021_fx23ol.jpg",
    "alt": "Image 5"
  },
  {
    "src": "https://res.cloudinary.com/dy1pmolax/image/upload/v1688824564/gallery_page/2022/8_Large_jmcoep.jpg",
    "alt": "Image 6"
  },
  {
    "src": "https://res.cloudinary.com/dy1pmolax/image/upload/v1688813787/gallery_page/2022/10_2022_Large_qn7khe.jpg",
    "alt": "Image 7"
  },
  {
    "src": "https://res.cloudinary.com/dy1pmolax/image/upload/v1688813788/gallery_page/2022/9_2022_Large_b8c0by.jpg",
    "alt": "Image 8"
  },
  {
    "src": "https://res.cloudinary.com/dwriqyuob/image/upload/c_crop,g_auto,h_500,w_1000/teamimage9.jpg",
    "alt": "Image 9"
  }
];

function ScrollCenter({ currentYear }) {
  const [profileData, setProfileData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/data/profiles${currentYear}.json`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProfileData(data);
      } catch (error) {
        console.error("Failed to load data", error);
      }
    };

    fetchData();
  }, [currentYear]);
  
  return (
    <>
     <div className={styles.scrollDiv}>
     <div className={styles.start}>
      <div className={styles.grid}>
      
      <div className={styles.meow}>
      {imageData.map((image, index) => (
        <div key={index} className={styles.image}>
          <img src={image.src} alt={image.alt} />
        </div>
      ))}
    </div>
        <div className={styles.Alumnicap}>
          <img src={AlumniSvg} alt="Alumni" />
        </div>
      </div>
     </div>
     {currentYear === 2022 && (
          <div>
            <div className={styles.meetAlumni}>
              <img src={MeetVector} alt="MeetAlumni" />
            </div>
            <ProfileCards data={profileData} />
          </div>
        )}
        {currentYear === 2023 && (
          <div>
            <div className={styles.meetAlumni}>
              <img src={MeetVector} alt="MeetAlumni" />
            </div>
            <ProfileCards data={profileData} />
          </div>
        )}
      </div>
    </>
  );
}

export default ScrollCenter;