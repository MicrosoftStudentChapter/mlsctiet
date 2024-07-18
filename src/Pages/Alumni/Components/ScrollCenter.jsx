import React, { useState, useEffect } from 'react';
import styles from "../Style/scroll.module.css";
import ProfileCards from './ProfileCards';
import YearSelector from './YearSelector';
import AlumniSvg from "../Assets/alumni_vector.svg";
import MeetVector from "../Assets/meet_vector.svg";

const imageData = [
  {
    "src": "https://thaparuniv-my.sharepoint.com/personal/tmann_be22_thapar_edu/Documents/MLSC%20PICS%2023-24/MAKEATHON6/Day%202/DSLR-1/IMG_4281.JPG?csf=1&web=1&e=ylHV7e&CID=fc600aee-c131-4e8a-9749-77d51cfd8c70",
    "alt": "Image 1"
  },
  {
    "src": "https://thaparuniv-my.sharepoint.com/personal/tmann_be22_thapar_edu/Documents/MLSC%20PICS%2023-24/MAKEATHON6/Day%201/DSLR-1/IMG_6822.JPG?csf=1&web=1&e=kqaHsY&CID=f541a31e-8c68-4947-8ef4-571009e09e29",
    "alt": "Image 2"
  },
  {
    "src": "https://res.cloudinary.com/dwriqyuob/image/upload/c_crop,g_auto,h_600,w_1100/teamimage3.jpg",
    "alt": "Image 3"
  },
  {
    "src": "https://thaparuniv-my.sharepoint.com/personal/tmann_be22_thapar_edu/Documents/MLSC%20PICS%2023-24/MAKEATHON6/Day%201/Agrim/PXL_20240224_113420624.MP.jpg?csf=1&web=1&e=cE7BAo&CID=3037b7f8-6c21-4b97-8ca3-213a704a0346",
    "alt": "Image 4"
  },
  {
    "src": "https://res.cloudinary.com/dy1pmolax/image/upload/v1688839046/gallery_page/2021/13-2021_fx23ol.jpg",
    "alt": "Image 5"
  },
  {
    "src": "https://thaparuniv-my.sharepoint.com/personal/tmann_be22_thapar_edu/Documents/MLSC%20PICS%2023-24/Induction%20Day/PXL_20231104_145204437.MP.jpg?csf=1&web=1&e=Z1Pzk7&CID=8ce394be-c6f6-4d47-b4fc-587165caf1f6",
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