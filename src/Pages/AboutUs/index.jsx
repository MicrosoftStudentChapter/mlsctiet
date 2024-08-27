import React, { useState, useEffect } from 'react';
import Bg from "./components/bg"; 
import Start from "./components/start";
import MainProject from "./components/mainProject";
import style from './index.module.css';
import Animation from './components/animation';
import Logoani from './components/logoani';
// import Chatbot from "../../../components/Chatbot/chatbot"

const Images = [
  'https://res.cloudinary.com/dy1pmolax/image/upload/v1723134459/about_page/about1.jpg',
  'https://res.cloudinary.com/dy1pmolax/image/upload/v1723134421/about_page/about2.jpg',
  'https://res.cloudinary.com/dy1pmolax/image/upload/v1723133724/about_page/about3.jpg',
  'https://res.cloudinary.com/dy1pmolax/image/upload/v1723133722/about_page/about4.jpg',
  'https://res.cloudinary.com/dy1pmolax/image/upload/v1723134500/about_page/about5.jpg',
  'https://res.cloudinary.com/dy1pmolax/image/upload/v1723133727/about_page/IMG_7317.jpg',
  'https://res.cloudinary.com/dy1pmolax/image/upload/v1723133723/about_page/about7.jpg',
  'https://res.cloudinary.com/dy1pmolax/image/upload/v1723134361/about_page/about8.jpg',
  'https://res.cloudinary.com/dy1pmolax/image/upload/v1723133727/about_page/IMG_7507.jpg',
  'https://res.cloudinary.com/dy1pmolax/image/upload/v1723133724/about_page/about11.jpg',
  'https://res.cloudinary.com/dy1pmolax/image/upload/v1723133722/about_page/1705670358990.jpeg.jpg'
];

const Index = () => {
  const [isWindowWideEnough, setIsWindowWideEnough] = useState(window.innerWidth > 450);

  useEffect(() => {
    const handleResize = () => {
      setIsWindowWideEnough(window.innerWidth > 426);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {isWindowWideEnough && <Logoani/>}
      <Bg />
      
      <div className={style.wrapper}>
        <Start />
        {isWindowWideEnough && <Animation imagesURL={Images} />}
        {isWindowWideEnough && <div className={style.empty} />}
        <MainProject />      </div>
    </>
  );
};

export default Index;
