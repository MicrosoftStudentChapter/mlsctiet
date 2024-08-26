import React from 'react';
import styles from './gallery.module.css';

const images = [
  'images/makeathon6.JPG',
  'images/makeathon6.JPG',
  'images/makeathon6.JPG',
  'images/makeathon6.JPG',
  'images/makeathon6.JPG',
  'images/makeathon6.JPG',
  'images/makeathon6.JPG',
  'images/makeathon6.JPG',
];

const Slider = ({ images, width, height, quantity, reverse }) => {
  return (
    <div
      className={styles.slider}
      style={{ '--width': `${width}px`, '--height': `${height}px`, '--quantity': quantity }}
      reverse={reverse ? 'true' : undefined}
    >
      <div className={styles.list}>
        {images.map((src, index) => (
          <div 
            className={styles.item} 
            style={{ 
              '--position': index + 1,
              '--offset': index % 2 === 0 ? -1 : 1 // This line alternates the offset
            }} 
            key={index}
          >
            <div className={styles.border}/>
            <img src={src} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

const Gallerypg = () => {
  return (
    <main className={styles.main}>
      <Slider images={images} width={400} height={200} quantity={8} reverse />
    </main>
  );
};

export default Gallerypg;