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
import { Outlet } from "react-router-dom";
import Main from "./Main";

const allYearValues = [
  ...new Set(
    Alumni.map((curElem) => {
      return curElem.year;
    })
  ),
];
const Alumnis = () => {
  const [items, setItems] = useState(Alumni);
  const [yearItems, setYearItems] = useState(allYearValues);

  const filterPolaroids = (years) => {
    const updatedItems = Alumni.filter((curElem) => {
      return curElem.year === years;
    });
    setItems(updatedItems);
  };
  console.log(items);
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Alumnis;
