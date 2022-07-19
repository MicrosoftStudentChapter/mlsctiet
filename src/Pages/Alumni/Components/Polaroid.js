import React, { useState } from "react";
import PolaroidCSS from "../Styles/Polaroid.module.css";
import Alumni from "./alumni";
import LinkedIn from "../Assets/LinkedIn.png";
import Alumnis from "../index";

const Polaroid = (items) => {
  return (
    <div className="alumni-items container-fluid mt-5">
      <div className="row">
        <div className="col-11 mx-auto">
          <div className="row my-5">
            {[items].map((elem, index) => {
              const { id, name, image, year, linkedIn } = elem.items;
              return (
                <div className={PolaroidCSS.bdy} key="{id}">
                  <div className="row">
                    <figure>
                      <img src={image} alt="my_photo"></img>
                      <div>
                        <figcaption>
                          {name}
                          <a href={linkedIn}>
                            <img src={LinkedIn} alt="linkedIn"></img>
                          </a>
                        </figcaption>
                      </div>
                    </figure>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Polaroid;
