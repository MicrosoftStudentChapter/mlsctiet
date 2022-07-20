import React from "react";
import { Fragment } from "react";
import main_img from "./../../Assets/project1.png";
import "./Project1.module.css";

function Project1() {
  return (
    <Fragment>
      <div className="project1Container">
        <div className="projectName">Project Name</div>
        <div className="contentContainer">
          <img src={main_img} alt="" />
          <div className="content">
            <div className="text">
              <h6>We Design Opportunities to grow</h6>
              <p>
                <span> Debut –</span> A branding agency in Deventer. We help
                your company to grow through strategy and design. With a
                down-to-earth mentality, we work together on a clear translation
                of your identity. We put you visibly on stage to share your
                brand story and connect with people. Critical, honest and
                genuinely involved. As part of your brand, we give you direction
                and lay the foundation for long-term brand success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Project1;
