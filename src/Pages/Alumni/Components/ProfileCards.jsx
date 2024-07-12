import React from 'react';
import styles from '../Style/card.module.css';
import profiles from '../data/profiles.json'; // Assuming profiles.json is in the data folder

const ProfileCards = () => {
  return (
    <div className={styles.container}>
      {profiles.map((profile, index) => (
        <div className={styles.box} key={index}>
          <div className={styles.imgBox}>
            <img src={profile.image} alt={profile.alt} />
          </div>
          <div className={styles.content}>
            <h2>
              {profile.name}
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={styles.linkedin}>
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" />
              </a>
              <br />
              <span>{profile.role}</span>
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfileCards;
