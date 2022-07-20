import React, { useState } from "react";
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

  const filterPolaroids = (years) => {
    const updatedItems = Alumni.filter((curElem) => {
      return curElem.year === years;
    });
    setItems(updatedItems);
  };
  console.log(items);
  console.log(allYearValues);

  return (
    <div className={Style.container}>
      <div className={Style.mainContainer}>
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
          <Carousels />
          <div className={Style.Lines}>
            <img src={Lines}></img>
          </div>
        </div>
        <div className={Style.secondContainer}>
          <div className={Style.Alumni}>
            <h1>Alumni</h1>
          </div>
          <div className={Style.p}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mi
              urna, elementum vitae maximus ut, cursus eu turpis. Cras non
              libero ut massa tincidunt rutrum et eget ipsum
            </p>
          </div>
          <div className={Style.Squarcle}>
            <img src={Squarcle}></img>
          </div>
          <div className={Style.Lines2}>
            <img src={Lines}></img>
          </div>
          <div className={Style.Broadline}>
            <img src={Broadline}></img>
          </div>
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
