import React from "react";
import StyleButton from "../Styles/Years.module.css";
import Polaroid from "./Polaroid";
import { useNavigate } from "react-router-dom";

const Years = ({ filterPolaroids, yearItems }) => {
  const Color = ["#FFF6EB", "#FA3966", "#0078D4"];
  const navigate = useNavigate();
  return (
    <div className="yearbutton">
      {yearItems.map((curElem, index) => {
        return (
          <button
            className={StyleButton.buttons}
            key={index}
            onClick={() => {
              filterPolaroids(curElem);
              navigate(`/alumni/${curElem}`);
            }}
          >
            {curElem}
          </button>
        );
      })}
    </div>
  );
};

export default Years;
