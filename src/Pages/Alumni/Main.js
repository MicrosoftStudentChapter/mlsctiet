// import React, { useState } from "react";
// import Polaroid from "./Components/Polaroid";
// import Style from "../Alumni/Styles/Style.module.css";
// import Years from "./Components/Years";
// import Alumni from "./Components/alumni";
// import Carousels from "./Components/Carousel";
// import Arrow from "./Assets/arrow.png";
// import Broadline from "./Assets/broadline.png";
// import Cross from "./Assets/cross.png";
// import Dots from "./Assets/dots.png";
// import Lines from "./Assets/lines.png";
// import Squarcle from "./Assets/squarcle.png";

// const allYearValues = [
//   ...new Set(
//     Alumni.map((curElem) => {
//       return curElem.year;
//     })
//   ),
// ];

// const Main = () => {
//   const [items, setItems] = useState(Alumni);
//   const [yearItems, setYearItems] = useState(allYearValues);

//   const filterPolaroids = (years) => {
//     const updatedItems = Alumni.filter((curElem) => {
//       return curElem.year === years;
//     });
//     setItems(updatedItems);
//   };
//   console.log(items);
//   console.log(allYearValues);

//   return (
//     <div className={Style.container}>
//       <div className={Style.mainContainer}>
//         <div className={Style.firstContainer}>
//           <div className={Style.im1}>
//             <div className={Style.Dots}>
//               <img src={Dots}></img>
//             </div>
//             <div className={Style.Cross}>
//               <img src={Cross}></img>
//             </div>
//             <div className={Style.Arrow}>
//               <img src={Arrow}></img>
//             </div>
//           </div>
//           <div className={Style.Carousels}>
//             <Carousels />
//           </div>
//           <div className={Style.Lines}>
//             <img src={Lines}></img>
//           </div>
//         </div>
//         <div className={Style.secondContainer}>
//           <div className={Style.Alumni}>
//             <h1>Alumni</h1>
//           </div>
//           <div className={Style.Lines2}>
//             <img src={Lines}></img>
//           </div>
//           <div className={Style.p}>
//             <p>
//               “The most valuable thing about an accelerator are the people
//               behind it.”
//               <br />
//               <br />
//               MLSC’s alumni are key to its growth. Our alumni have established
//               themselves as successful individuals in almost every field of
//               their lives, and we could not be any prouder. They have been the
//               backbone of our society, and they deserve to be cherished and
//               remembered.
//             </p>
//           </div>
//           <div className={Style.Squarcle}>
//             <img src={Squarcle}></img>
//           </div>
//           <div className={Style.Broadline}>
//             <img src={Broadline}></img>
//           </div>
//         </div>
//       </div>
//       <div className={Style.thirdContainer}>
//         <Years filterPolaroids={filterPolaroids} yearItems={yearItems} />

//         <Polaroid items={items} />
//       </div>
//     </div>
//   );
// };

// export default Main;


//Rijul 

// import React, { useState } from "react";
// import Polaroid from "./Components/Polaroid";
// import Style from "../Alumni/Styles/Style.module.css";
// import Years from "./Components/Years";
// import Alumni from "./Components/alumni";
// import Carouselss from "./Components/Carousel";
// import Arrow from "./Assets/arrow.png";
// import Broadline from "./Assets/broadline.png";
// import Cross from "./Assets/cross.png";
// import Dots from "./Assets/dots.png";
// import Lines from "./Assets/lines.png";
// import Squarcle from "./Assets/squarcle.png";
// import Thinline from "./Assets/thinline.png";
// import DownArrow from "./Assets/down_arrow.png";

// const allYearValues = [
//   ...new Set(
//     Alumni.map((curElem) => {
//       return curElem.year;
//     })
//   ),
// ];

// const Main = () => {
//   const [items, setItems] = useState(Alumni);
//   const [yearItems, setYearItems] = useState(allYearValues);

//   const filterPolaroids = (years) => {
//     const updatedItems = Alumni.filter((curElem) => {
//       return curElem.year === years;
//     });
//     setItems(updatedItems);
//   };
//  console.log(items);
// console.log(allYearValues);

//   return (
//     <div className={Style.container}>
//       <div className={Style.mainContainer}>
//         <div className={Style.firstContainer}>
//           {/* <div className={Style.im1}> */}
//             <div className={Style.Arrow}>
//               <img src={Arrow}></img>
//             </div>
            
            
//             {/* <div className={Style.Arrow}>
//               <img src={Arrow}></img>
//             </div> */}
//           {/*</div>*/}
           
          
//           {<div className={Style.Alumni}>
//             <br></br><h1>ALUMNI</h1>
//           </div>}
//           <div className={Style.Lines}>
//             <img src={Lines}></img>
//           </div>
//           <div className={Style.Thinline}>
//             <img src={Thinline}></img>
//           </div>
//           <div className={Style.p}>
//             <p>
//               “The most valuable thing about an accelerator are the people
//               behind it.”
//               <br />
//               <br />
//               MLSC’s alumni are key to its growth. Our alumni have established
//               themselves as successful individuals in almost every field of
//               their lives, and we could not be any prouder. They have been the
//               backbone of our society, and they deserve to be cherished and
//               remembered.
//             </p>
//           </div> 
//           <div className={Style.Broadline}>
//             <img src={Broadline}></img>
//           </div> 
//           <div className={Style.Carousels}>
//             <Carouselss />
//           </div>
//           <div className={Style.Squarcle}>
//             <img src={Squarcle}></img>
//           </div>
//           <div className={Style.Dots}>
//               <img src={Dots}></img>
//           </div>
//           <div className={Style.Cross}>
//               <img src={Cross}></img>
//           </div> 
//           <div className={Style.Lines2}>
//             <img src={Lines}></img>
//           </div>
//           <div className={Style.DownArrow}>
//             <img src={DownArrow}></img>
//           </div>
//         </div>
//         <div className={Style.secondContainer}>
//           {/* <div className={Style.Alumni}>
//             <h1>Alumni</h1>
//           </div> */}
          
          
//           {/* <div className={Style.Carousels}>
//             <Carousels />
//           </div> */}
//         <div className={Style.thirdContainer}>
//         <Years filterPolaroids={filterPolaroids} yearItems={yearItems} />

//         {/* <Polaroid items={items} />  */}
//         </div>
          
          
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Main;

//Shreya 

import React, { useState, useEffect } from "react";
import Polaroid from "./Components/Polaroid";
import Style from "../Alumni/Styles/Style.module.css";
import Years from "./Components/Years";
import Alumni from "./Components/alumni";
import Carousels from "./Components/Carousel";
import Arrow from "./Assets/arrow.png";
import Broadline from "./Assets/broadline.png";
import Cross from "./Assets/cross.png";
import Dots from "./Assets/dots.png";
import Lines from "./Assets/lines.png";
import Squarcle from "./Assets/squarcle.png";
// import Btns from "./Components/Btns";

const allYearValues = [
  ...new Set(
    Alumni.map((curElem) => {
      return curElem.year;
    })
  ),
];

const Main = () => {
  const [items, setItems] = useState(Alumni);
  const [yearItems, setYearItems] = useState(allYearValues);
  // const [isSmallScreen, setIsSmallScreen] = useState(false);
  const filterPolaroids = (years) => {
    const updatedItems = Alumni.filter((curElem) => {
      return curElem.year === years;
    });
    setItems(updatedItems);
  };
  console.log(items);
  console.log(allYearValues);
  // useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth <= 786) {
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
    <div className={Style.container}>
      <div className={Style.mainContainer}>
        <div className={Style.secondContainer}>
        <div className={Style.Arrows}>
              <img src={Arrow}></img>
            </div>
        <div className={Style.Alumni}>
            <h1>Alumni</h1>
          </div>
          {/* <div className={Style.Lines2}>
            <img src={Lines}></img>
          </div> */}
          <div className={Style.p}>
            <p>
              “The most valuable thing about an accelerator are the people
              behind it.”
              <br />
              <br />
              MLSC’s alumni are key to its growth. Our alumni have established
              themselves as successful individuals in almost every field of
              their lives, and we could not be any prouder. They have been the
              backbone of our society, and they deserve to be cherished and
              remembered.
            </p>
          </div>
          <div className={Style.Squarcle}>
            <img src={Squarcle}></img>
          </div>
          {/* <div className={Style.Broadline}>
            <img src={Broadline}></img>
          </div> */}
        </div>
      </div>
      
      <div className={Style.firstContainer}>
        
          <div className={Style.im1}>
            <div className={Style.Dots}>
              <img src={Dots}></img>
            </div>
            <div className={Style.Cross}>
              <img src={Cross}></img>
            </div>
            <div className={Style.Arrow}>
              <img src={Arrow}></img>
            </div>
          </div>
          
          <div className={Style.Carousels}>
            <Carousels />
          </div>
          
          <div className={Style.Lines}>
            <img src={Lines}></img>
          </div>
        </div>
      <div className={Style.thirdContainer}>
        <Years filterPolaroids={filterPolaroids} yearItems={yearItems} />
        {/* <Polaroid items={items} /> */}
      </div>
    </div>
  );
};

export default Main;