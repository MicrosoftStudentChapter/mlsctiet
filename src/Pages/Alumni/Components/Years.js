
import React from "react";
import StyleButton from "../Styles/Years.module.css";
import { useNavigate } from "react-router-dom";

const Years = ({ filterPolaroids, yearItems }) => {
  const Color = ["#FFF6EB", "#FA3966", "#0078D4"];
  const navigate = useNavigate();
  return (
     <div className= {StyleButton.yearbutton}>
      {yearItems.map((curElem, index) => {
        return (
          <div className={StyleButton.mAin}>
          <button
          className={StyleButton.buttons}
            key={index}
            onClick={() => {
              filterPolaroids(curElem);
              navigate(`/alumni/${curElem}`);
            }}
          >
            <p className={StyleButton.blocks}>
            {curElem}
            </p>
          </button>
          </div>
        );
      })}
    </div>
  );
};

export default Years;
