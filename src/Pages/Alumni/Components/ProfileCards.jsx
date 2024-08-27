import React from 'react';
import styles from '../Style/card.module.css';

const ProfileCards = ({ data }) => {
  return (
    <div className={styles.container}>
      {data.map((profile, index) => (
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
