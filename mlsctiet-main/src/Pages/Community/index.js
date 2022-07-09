import React from "react";
import './styles/styles.css';
import ImageCommunity from './Assets/image.png'

const Community = () => {
  return (

    <div className="container">

      <div className="main-container">
          <div className="left-container">
            <img src={ImageCommunity} alt="community-image"/>
            <h2>OPEN SOURCE</h2>
          </div>

          <div className="right-container">
            <p>We are a group of highly motivated learners and seekers who wish to create something extraordinary. We believe that youth encompassed with appropriate technology holds the potential to revolutionize the world we perceive today. With our Open-Source community, we aim to bring together the aspiring minds and create a space where they can learn, grow and develop together. To foster this process, we conduct various seminars, group discussions and talks on our channel. It also serves as a platform for theays.</p>
            <ul>
            <li>Get to meet an array of people who have the same hunger as yourself for "Growing Always."</li>
            <li>Learn about new technologies and clarify your doubts regarding them.</li>
            <li>Make super cool projects and add contributions to your resume.</li>
            <li>Become an integral part of building this community.</li>
            </ul>
            <button className="join-button">
                <a href="#">Join the Community!</a>
            </button>
          </div>
          </div>
      </div>
  );
};

export default Community;
