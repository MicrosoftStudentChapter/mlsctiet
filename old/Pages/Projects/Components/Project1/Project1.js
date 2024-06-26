import React from 'react';
import {Fragment} from 'react';
import main_img from './../../Assets/project1.png';
import './Project1.css';

function Project1 ({prjName, prjDesc}) {
  return (
    <Fragment>
      <div className="project1Container">
        <div className="projectName">Project Name</div>
        <div className="contentContainer">
          <img src={main_img} alt="" />
          <div className="content">
            <div className="text">
              <h6>{prjName}</h6>
              <p>
                {prjDesc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Project1;
