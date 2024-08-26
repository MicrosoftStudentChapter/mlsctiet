import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './gallery.module.css';

const GoogleSession = [
  'images/GoogleSession/1.jpeg',
  'images/GoogleSession/2.jpeg',
  'images/GoogleSession/3.jpeg',
  'images/GoogleSession/4.jpeg',
  'images/GoogleSession/5.jpeg',
  'images/GoogleSession/6.jpeg',
  'images/GoogleSession/7.jpeg',
  'images/GoogleSession/8.jpeg',
  'images/GoogleSession/9.jpeg',
  'images/GoogleSession/10.jpeg',
];
const Makeathon6 = [
  'images/Makeathon6/1.jpg',
  'images/Makeathon6/2.jpg',
  'images/Makeathon6/3.jpg',
  'images/Makeathon6/4.jpg',
  'images/Makeathon6/5.jpg',
  'images/Makeathon6/6.jpg',
  'images/Makeathon6/7.jpg',
  'images/Makeathon6/8.jpg',
  'images/Makeathon6/9.jpg',
  'images/Makeathon6/10.jpg',
  'images/Makeathon6/11.jpg',
  'images/Makeathon6/12.jpeg',
  'images/Makeathon6/13.jpeg',
  'images/Makeathon6/14.jpg',
  'images/Makeathon6/15.jpg',
  'images/Makeathon6/16.jpg',
  'images/Makeathon6/17.jpg',
  'images/Makeathon6/18.jpg',
  'images/Makeathon6/19.jpg',
  'images/Makeathon6/20.jpg',
  'images/Makeathon6/21.jpg',
  'images/Makeathon6/22.jpg',
  'images/Makeathon6/23.jpg',
  'images/Makeathon6/24.jpg',
  'images/Makeathon6/25.jpg',
  'images/Makeathon6/26.jpg',
  'images/Makeathon6/27.jpg',
  'images/Makeathon6/28.jpg',
];
const Techmeet2023 = [
  'images/Techmeet2023/1.jpg',
  'images/Techmeet2023/2.jpg',
  'images/Techmeet2023/3.jpg',
  'images/Techmeet2023/4.jpg',
  'images/Techmeet2023/5.jpg',
  'images/Techmeet2023/7.jpg',
  'images/Techmeet2023/8.jpg',
  'images/Techmeet2023/9.jpg',
  'images/Techmeet2023/10.jpg',
  'images/Techmeet2023/11.jpg',
  'images/Techmeet2023/12.jpg',
  'images/Techmeet2023/13.jpg',
  'images/Techmeet2023/14.jpg',
  'images/Techmeet2023/15.jpg',
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
              '--offset': index % 2 === 0 ? -1 : 1
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
  const location = useLocation();
  const { title } = location.state || {};

  let images;
  let quantity;

  switch (title) {
    case 'Google Speaker Session':
      images = GoogleSession;
      quantity = 10;
      break;
    case 'Makeathon 6':
      images = Makeathon6;
      quantity = 28;
      break;
    case 'Techmeet 2023':
      images = Techmeet2023;
      quantity = 14;
      break;
    default:
      images = [];
      quantity = 0;
  }

  return (
    <main className={styles.main}>
      <h1 className={styles.text}>{title}</h1>
      <Slider images={images} width={400} height={200} quantity={quantity} reverse />
    </main>
  );
};

export default Gallerypg;