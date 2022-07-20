import React from "react";
import exstyles from "../../Style/explode.css";

const explode_img1 = () => {
  
  function loadanimation(){
    let img1 = document.getElementById("mainimage1");
    let img2 = document.getElementById("mainimage2");
    let img3 = document.getElementById("mainimage3");
    setTimeout(() => {
      img1.style.transform = "translate(30vw,-30vh) scale(0.5)";
    }, 1000);
    setTimeout(() => {
      img2.style.transform = "translate(-30vw,-30vh) scale(0.5)";
    }, 2000);
    setTimeout(() => {
      img3.style.transform = "translate(-40vw,30vh) scale(0.5)";
    }, 3000);
  }
  // Window.onload = function() {
  //   console.log("hi"); 
  // };
  
  // window.addEventListener("load", function () {
  //   console.log("hi");
  // });
  return (
    <div className="pagewrapper">
      <div className="imagediv">
        <img
          id="mainimage"
          src="https://i.pinimg.com/originals/25/78/61/25786134576ce0344893b33a051160b1.jpg"
          onLoad={loadanimation}
        />

        <img
          id="mainimage1"
          src="https://i.pinimg.com/originals/25/78/61/25786134576ce0344893b33a051160b1.jpg"
        />

        <img
          id="mainimage2"
          src="https://i.pinimg.com/originals/25/78/61/25786134576ce0344893b33a051160b1.jpg"
        />


        <img
          id="mainimage3"
          src="https://i.pinimg.com/originals/25/78/61/25786134576ce0344893b33a051160b1.jpg"
          
        />
      </div>
    </div>
  );
};

export default explode_img1;
