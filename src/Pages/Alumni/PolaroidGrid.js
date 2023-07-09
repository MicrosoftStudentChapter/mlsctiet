// import React, { useEffect, useState } from "react";
// import Polaroid from "./Components/Polaroid";
// import PolaroidGridCSS from "../Alumni/Styles/PolaroidGrid.module.css";
// import Years from "./Components/Years";
// import Alumni from "./Components/alumni";
// import Lines from "./Assets/lines.png";
// import Circles from "./Assets/Circles.svg";
// import { useLocation } from "react-router-dom";
// import Card from "./Components/Card";

// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';

// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";




// const allYearValues = [
//   ...new Set(
//     Alumni.map((curElem) => {
//       return curElem.year;
//     })
//   ),
// ];

// const PolaroidGrid = () => {
//   const [items, setItems] = useState(Alumni);
//   const [yearItems, setYearItems] = useState(allYearValues);
//   const location = useLocation();
//   const color = ["#FA3966", "#FFF6EB", "#0078D4"];
//   console.log(location);
//   useEffect(() => {
//     if (!location.pathname.endsWith("alumni")) {
//       const yearExtraction = parseInt(location.pathname.split("/").at(-1));
//       setSelected(yearExtraction);
//       filterPolaroids(yearExtraction);
//     }
//   }, [location.pathname]);
//   const [selected, setSelected] = useState(null);

//   const filterPolaroids = (years) => {
//     const updatedItems = Alumni.filter((curElem) => {
//       return curElem.year === years;
//     });
//     setItems(updatedItems);
//   };
//   console.log(items);

//   const responsive = {
//     superLargeDesktop: {
//       // the naming can be any, depends on you.
//       breakpoint: { max: 4000, min: 3000 },
//       items: 5
//     },
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 3
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 2
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1
//     }
//   };

//   return (
//     // <div>
//     <div className={PolaroidGridCSS.container}>
//       <div className={PolaroidGridCSS.mainContainer} id="rectangle">
//         <div className={PolaroidGridCSS.firstContainer}>
//           <div className={PolaroidGridCSS.Circles}>
//             <img
//               src={Circles}
//               // style={{
//               //   stroke: color[selected % 3],
//               // }}
//             ></img>
//           </div>
//           <div className={PolaroidGridCSS.text}>
//             <h1>{items[0].year}</h1>
//           </div>
//           <img src={Lines} className={PolaroidGridCSS.zebra}></img>
//         </div>
//         <div className={PolaroidGridCSS.secondContainer}>
//           <div
//           style={{
//             backgroundColor: color[selected % 3],
//           }}
//           >
//         <Carousel
//         autoPlay="True"
//         transitionTime={10}
//         thumbWidth={0}
//         infiniteLoop="True"
//         showThumbs={false}
//         dynamicHeight={false}
//          >
//         <Carousel responsive={responsive} >
//           {items.map((items, index) => {
//             return (
//               <div key={index} className={PolaroidGridCSS.items}>
//                 <Card />
//               </div>
//             );
//           })}
//         </Carousel>
//         </Carousel>
//           </div>
        
//         </div>
//       </div>
//       <div className={PolaroidGridCSS.thirdContainer}>
//         <Years filterPolaroids={filterPolaroids} yearItems={yearItems} />
//       </div>
//     </div>
//     // </div>
//   );
// };

// export default PolaroidGrid;


import React, { useState, useEffect } from "react";
import Polaroid from "./Components/Polaroid";
import PolaroidGridCSS from "../Alumni/Styles/PolaroidGrid.module.css";
import Years from "./Components/Years";
import Alumni from "./Components/alumni";
import Lines from "./Assets/lines.png";
import Circles from "./Assets/Circles.svg";
import { useLocation } from "react-router-dom";
import Carousels from "./Components/Carousels";
import Card from "./Components/Card";
import "../Alumni/Styles/arrow.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from "../Alumni/Styles/Years.module.css";
// import Btns from "./Components/Btns";

// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";

const allYearValues = [
  ...new Set(
    Alumni.map((curElem) => {
      return curElem.year;
    })
  ),
];
// const [isSmallScreen, setIsSmallScreen] = useState(false);
const PolaroidGrid = () => {
  
  const [items, setItems] = useState(Alumni);
  const [yearItems, setYearItems] = useState(allYearValues);
  const location = useLocation();
  const color = ["#FA3966", "#FFF6EB", "#0078D4"];
  console.log(location);
  useEffect(() => {
    if (!location.pathname.endsWith("alumni")) {
      const yearExtraction = parseInt(location.pathname.split("/").at(-1));
      setSelected(yearExtraction);
      filterPolaroids(yearExtraction);
    }
  }, [location.pathname]);
  const [selected, setSelected] = useState(null);

  const filterPolaroids = (years) => {
    const updatedItems = Alumni.filter((curElem) => {
      return curElem.year === years;
    });
    setItems(updatedItems);
  };
  console.log(items);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
      slidesToSlide: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 3,
    }
  };
  // useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth <= 748) {
  //       setIsSmallScreen(true);
  //     } else {
  //       setIsSmallScreen(false);
  //     }
  //   };

  //    // Add event listener to handle window resize
  //    window.addEventListener("resize", handleResize);

  //    // Clean up event listener on component unmount
  //    return () => {
  //      window.removeEventListener("resize", handleResize);
  //    };
  //  }, []);
  // useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth <= 748) {
  //       setIsSmallScreen(true);
  //     } else {
  //       setIsSmallScreen(false);
  //     }
  //   };

  //    // Add event listener to handle window resize
  //    window.addEventListener("resize", handleResize);

  //    // Clean up event listener on component unmount
  //    return () => {
  //      window.removeEventListener("resize", handleResize);
  //    };
  //  }, []);
  return (
    // <div>
    <div className={PolaroidGridCSS.container}>
      <div className={PolaroidGridCSS.mainContainer} id="rectangle">
        <div className={PolaroidGridCSS.firstContainer}>
          <div className={PolaroidGridCSS.Circles}>
            <img
              src={Circles}
              style={{
                stroke: color[selected % 3],
              }}
            ></img>
          </div>
          <img src={Lines} className={PolaroidGridCSS.zebra}></img>
        </div>
        <div className={PolaroidGridCSS.outer}>
        <div className={PolaroidGridCSS.text}>
           <p> Meet our team <span className={PolaroidGridCSS.y}>{items[0].year}</span></p> 
          </div>
          {/* <div className={styles.mobile_buttons}>
          <button className={styles.mobilebutton}>2022</button>
          <button className={styles.mobilebutton}>2021</button>
          <button className={styles.mobilebutton}>2020</button>
          <button className={styles.mobilebutton}>2019</button>
          <button className={styles.mobilebutton}>2018</button>
          </div> */}
        <div
          className={PolaroidGridCSS.secondContainer}
          style={{
          // width: 990,
          // height:350,
          
          }}
        >
        {/* <Carousel
        autoPlay="True"
        transitionTime={10}
        thumbWidth={0}
        infiniteLoop="True"
        showThumbs={false}
        dynamicHeight={false}
         > */}
        <Carousel responsive={responsive} autoPlay={true} autoPlaySpeed={3500} infinite={true} >
            {items.map((items, index) => {
            // const { id, name, image, year, linkedIn } = elem.items;
            return (
              <div key={index} className={PolaroidGridCSS.items}>
                <div className='productList'>
                  <div className={PolaroidGridCSS.productCard}>
                    <div className="{PolaroidGridCSS.image}">
                    <img src={items.image} alt="Sampleimg.png"  className={PolaroidGridCSS.image}/>
                    </div>
                    <div className={PolaroidGridCSS.productCard__content}>
                      <h3 className={PolaroidGridCSS.productName}>{items.name}</h3>
                      <p className={PolaroidGridCSS.productInfo}>{items.post}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
        </div>
        </div>
      </div>
      <div className={PolaroidGridCSS.thirdContainer}>
        <Years filterPolaroids={filterPolaroids} yearItems={yearItems} />
        {/* {isSmallScreen ? (
      <Btns filterPolaroids={filterPolaroids} yearItems={yearItems} />
        ) : (
          <Years filterPolaroids={filterPolaroids} yearItems={yearItems} />
        )} */}
      </div>
      
    </div>
    
    // </div>
  );
};

export default PolaroidGrid;