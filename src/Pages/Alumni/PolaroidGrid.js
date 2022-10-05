import React, { useEffect, useState } from "react";
import Polaroid from "./Components/Polaroid";
import PolaroidGridCSS from "../Alumni/Styles/PolaroidGrid.module.css";
import Years from "./Components/Years";
import Alumni from "./Components/alumni";
import Lines from "./Assets/lines.png";
import Circles from "./Assets/Circles.svg";
import { useLocation } from "react-router-dom";

const allYearValues = [
  ...new Set(
    Alumni.map((curElem) => {
      return curElem.year;
    })
  ),
];

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
          <div className={PolaroidGridCSS.text}>
            <h1>{items[0].year}</h1>
          </div>
          <img src={Lines} className={PolaroidGridCSS.zebra}></img>
        </div>
        <div
          className={PolaroidGridCSS.secondContainer}
          style={{
            backgroundColor: color[selected % 3],
          }}
        >
          {items.map((items, index) => {
            return (
              <div key={index} className={PolaroidGridCSS.items}>
                <Polaroid items={items} />
              </div>
            );
          })}
        </div>
      </div>
      <div className={PolaroidGridCSS.thirdContainer}>
        <Years filterPolaroids={filterPolaroids} yearItems={yearItems} />
      </div>
    </div>
    // </div>
  );
};

export default PolaroidGrid;
