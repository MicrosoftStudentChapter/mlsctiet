import React, { useState, useEffect } from 'react';
import Bg from "./components/bg"; 
import Start from "./components/start";
import Peel from "./components/Peeling";
import MainProject from "./components/mainProject";
import style from './index.module.css'
import Animation from './components/animation'
import Image1 from './assets/image1.jpg'
import Image2 from './assets/image2.jpg'
import Image3 from './assets/image3.jpg'
import Image4 from './assets/image4.jpg'
import Image5 from './assets/image5.jpg'
import Image6 from './assets/image6.jpg'
import Image7 from './assets/image7.jpg'
import Image8 from './assets/image8.jpg'
import Image9 from './assets/image9.jpg'
import Image10 from './assets/image10.jpg'
import Image11 from './assets/image11.jpg'

const Images= [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9, Image10, Image11]
const Index = () => {
  const [isWindowWideEnough, setIsWindowWideEnough] = useState(window.innerWidth > 426);

  useEffect(() => {
    const handleResize = () => {
      setIsWindowWideEnough(window.innerWidth > 426);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Bg />
      <div className={style.wrapper}>
        <Start />
        {isWindowWideEnough && <Animation imagesURL={Images} />}
        <div className={style.empty} />
        <MainProject />
      </div>
    </>
  );
};

export default Index;
