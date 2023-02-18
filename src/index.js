import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import TagManager from "react-gtm-module";
import 'react-tooltip/dist/react-tooltip.css'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);
