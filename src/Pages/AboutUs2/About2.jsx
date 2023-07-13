import React from "react";
import Style from "../AboutUs2/Styles/about.module.css";
import main2 from "./Assets/main(2).png";
import Arrow from "./Assets/arrow.png";
import Block from "./Assets/block.png";
import Plus from "./Assets/plus.png";
import Rectangle from "./Assets/rectangle.png";
function About2() {
  return (
    <>
      <h1 className={Style.heading}>ABOUT US </h1>
      <img src={Arrow} alt="" className={Style.arrow} />
      <img src={Block} className={Style.block1} />
      <div className={Style.parent}>
        <img src={main2} alt="" className={Style.mainimage} />
        <div className={Style.container}>
          <div className={Style.insideimage}>
            <div className={Style.text}>
              We at Microsoft Learn Student Chapter believe that youth
              encompassed with appropriate technology holds the potential to
              revolutionize the world we perceive today and we have done a fair
              share in that through multiple events organised over the years.
              Microsoft Learn Student Chapter was institutionalized by the
              virtue of providing students a systemic platform for cultivating
              technical skills and a spirit of teamwork. Our vision is to create
              a community of computer enthusiasts with a mindset of development.
            </div>
          </div>
        </div>
      </div>
      <div className={Style.elements}>
        <img src={Block} className={Style.block} />
        <img src={Plus} className={Style.plus} />
        <img src={Rectangle} className={Style.rectangle} />
      </div>
    </>
  );
}

export default About2;
