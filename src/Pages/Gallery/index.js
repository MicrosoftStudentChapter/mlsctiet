import React from "react";
import Page from "./Components/Page.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import style from './Style/index.module.css'

const Gallery = () => {
  return (
    <div className="galleryContainer">
      <Page />
    </div>
  );
};

export default Gallery;
