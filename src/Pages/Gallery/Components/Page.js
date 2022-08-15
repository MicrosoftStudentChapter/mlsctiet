import "../Style/Gallery.css";
import { Link } from "react-router-dom";
import greaterthan from "../Assets/greaterthan.png";
import lessthan from "../Assets/lessthan.png";

export default function Page() {
    // JS
    // function to move ahead when the right button is clicked
    function changeimgadd() {
        const attr1 = document.querySelector("#img1");
        const attr2 = document.querySelector("#img2");
        const attr3 = document.querySelector("#img3");
        const attr4 = document.querySelector("#img4");
        const attrbtn1 = document.getElementById("btn1");
        const attrbtn2 = document.getElementById("btn2");
        const text1 = document.querySelector("#twenty19");
        const text2 = document.querySelector("#twenty20");
        const text3 = document.querySelector("#twenty21");
        const text4 = document.querySelector("#twenty22");

        if (n == 1) {
            attr1.style.zIndex = "2";
            attr2.style.zIndex = "1";
            attr3.style.zIndex = "1";
            attr4.style.zIndex = "1";

            text1.style.transform = "TranslateY(240px)";
            text2.style.transform = "TranslateY(100vh)";
            text3.style.transform = "TranslateY(100vh)";
            text4.style.transform = "TranslateY(100vh)";

            attr1.style.transform = "translateX(0vw)";
            attr1.style.filter = "blur(0px) saturate(0)";
            // attr1.style.visibility="visible";
            attr1.style.opacity = "1";
            attr2.style.transform = "translateX(50vw)";
            // attr2.style.visibility="visible";
            attr2.style.opacity = "1";
            attr2.style.filter = "blur(13px) saturate(0)";
            // attr3.style.visibility="hidden";
            attr3.style.opacity = "0";
            attr3.style.transform = "translateX(-100vw)";
            // attr4.style.visibility="visible";
            attr4.style.opacity = "1";
            attr4.style.transform = "translateX(-50vw)";
            attr4.style.filter = "blur(13px) saturate(0)";

            setTimeout(() => {
                attr3.style.transform = "translateX(100vw)";
                setTimeout(() => {
                    attrbtn1.disabled = false;
                    attrbtn2.disabled = false;
                }, 500);
            }, 1000);
        } else if (n == 2) {
            attr1.style.zIndex = "1";
            attr2.style.zIndex = "2";
            attr3.style.zIndex = "1";
            attr4.style.zIndex = "1";

            text1.style.transform = "TranslateY(100vh)";
            text2.style.transform = "TranslateY(240px)";
            text3.style.transform = "TranslateY(100vh)";
            text4.style.transform = "TranslateY(100vh)";

            attr1.style.transform = "translateX(-50vw)";
            attr1.style.filter = "blur(13px) saturate(0)";
            // attr1.style.visibility="visible";
            attr1.style.opacity = "1";
            attr2.style.transform = "translateX(0vw)";
            attr2.style.filter = "blur(0px) saturate(0)";
            attr3.style.transform = "translateX(50vw)";
            attr3.style.opacity = "1";
            attr3.style.filter = "blur(13px) saturate(0)";
            attr4.style.transform = "translateX(-100vw)";
            // attr4.style.visibility="hidden";
            attr4.style.opacity = "0";
            setTimeout(() => {
                attr4.style.transform = "translateX(100vw)";
                setTimeout(() => {
                    attrbtn1.disabled = false;
                    attrbtn2.disabled = false;
                }, 500);
            }, 1000);
        } else if (n == 3) {
            attr1.style.zIndex = "1";
            attr2.style.zIndex = "1";
            attr3.style.zIndex = "3";
            attr4.style.zIndex = "1";

            text1.style.transform = "TranslateY(100vh)";
            text2.style.transform = "TranslateY(100vh)";
            text3.style.transform = "TranslateY(240px)";
            text4.style.transform = "TranslateY(100vh)";

            // attr2.style.visibility="visible";
            attr2.style.opacity = "1";
            attr2.style.transform = "translateX(-50vw)";
            attr2.style.filter = "blur(13px) saturate(0)";
            attr3.style.transform = "translateX(0vw)";
            attr3.style.filter = "blur(0px) saturate(0)";
            // attr4.style.visibility="visible";
            attr4.style.opacity = "1";
            attr4.style.transform = "translateX(50vw)";
            attr4.style.filter = "blur(13px) saturate(0)";
            attr1.style.transform = "translateX(-100vw)";
            // attr1.style.visibility="hidden";
            attr1.style.opacity = "0";
            setTimeout(() => {
                attr1.style.transform = "translateX(100vw)";
                setTimeout(() => {
                    attrbtn1.disabled = false;
                    attrbtn2.disabled = false;
                }, 500);
            }, 1000);
        } else if (n == 4) {
            attr1.style.zIndex = "1";
            attr2.style.zIndex = "1";
            attr3.style.zIndex = "1";
            attr4.style.zIndex = "2";

            text1.style.transform = "TranslateY(100vh)";
            text2.style.transform = "TranslateY(100vh)";
            text3.style.transform = "TranslateY(100vh)";
            text4.style.transform = "TranslateY(240px)";

            attr3.style.transform = "translateX(-50vw)";
            attr3.style.filter = "blur(13px) saturate(0)";
            attr4.style.transform = "translateX(0vw)";
            attr4.style.filter = "blur(0px) saturate(0)";
            attr1.style.display = "block";
            attr1.style.transform = "translateX(50vw)";
            // attr1.style.visibility="visible";
            attr1.style.opacity = "1";
            attr1.style.filter = "blur(13px) saturate(0)";
            attr2.style.transform = "translateX(-100vw)";
            // attr2.style.visibility="hidden";
            attr2.style.opacity = "0";
            // attrbtn2.style.visibility="hidden";
            setTimeout(() => {
                attr2.style.transform = "translateX(100vw)";
                setTimeout(() => {
                    attrbtn1.disabled = false;
                    attrbtn2.disabled = false;
                }, 500);
            }, 1000);
        }
    }

    function changeimgsubtract() {
        const attr1 = document.querySelector("#img1");
        const attr2 = document.querySelector("#img2");
        const attr3 = document.querySelector("#img3");
        const attr4 = document.querySelector("#img4");
        const attrbtn1 = document.getElementById("btn1");
        const attrbtn2 = document.getElementById("btn2");
        const text1 = document.querySelector("#twenty19");
        const text2 = document.querySelector("#twenty20");
        const text3 = document.querySelector("#twenty21");
        const text4 = document.querySelector("#twenty22");

        if (n == 1) {
            attr1.style.zIndex = "2";
            attr2.style.zIndex = "1";
            attr3.style.zIndex = "1";
            attr4.style.zIndex = "1";

            text1.style.transform = "TranslateY(240px)";
            text2.style.transform = "TranslateY(100vh)";
            text3.style.transform = "TranslateY(100vh)";
            text4.style.transform = "TranslateY(100vh)";

            attr1.style.transform = "translateX(0vw)";
            attr1.style.filter = "blur(0px) saturate(0)";
            // attr1.style.visibility="visible";
            attr1.style.opacity = "1";
            attr2.style.transform = "translateX(50vw)";
            // attr2.style.visibility="visible";
            attr2.style.opacity = "1";
            attr2.style.filter = "blur(13px) saturate(0)";
            // attr3.style.visibility="hidden";
            attr3.style.opacity = "0";
            attr3.style.transform = "translateX(-100vw)";
            // attr4.style.visibility="visible";
            attr4.style.opacity = "1";
            attr4.style.transform = "translateX(-50vw)";
            attr4.style.filter = "blur(13px) saturate(0)";

            setTimeout(() => {
                attr3.style.transform = "translateX(100vw)";
                setTimeout(() => {
                    attrbtn1.disabled = false;
                    attrbtn2.disabled = false;
                }, 500);
            }, 1000);
        } else if (n == 2) {
            attr1.style.zIndex = "1";
            attr2.style.zIndex = "2";
            attr3.style.zIndex = "1";
            attr4.style.zIndex = "1";

            text1.style.transform = "TranslateY(100vh)";
            text2.style.transform = "TranslateY(240px)";
            text3.style.transform = "TranslateY(100vh)";
            text4.style.transform = "TranslateY(100vh)";

            attr1.style.transform = "translateX(-50vw)";
            attr1.style.filter = "blur(13px) saturate(0)";
            // attr1.style.visibility="visible";
            attr1.style.opacity = "1";
            attr2.style.transform = "translateX(0vw)";
            attr2.style.filter = "blur(0px) saturate(0)";
            attr3.style.transform = "translateX(50vw)";
            attr3.style.opacity = "1";
            attr3.style.filter = "blur(13px) saturate(0)";
            attr4.style.transform = "translateX(-100vw)";
            // attr4.style.visibility="hidden";
            attr4.style.opacity = "0";
            setTimeout(() => {
                attr4.style.transform = "translateX(100vw)";
                setTimeout(() => {
                    attrbtn1.disabled = false;
                    attrbtn2.disabled = false;
                }, 500);
            }, 1000);
        } else if (n == 3) {
            attr1.style.zIndex = "1";
            attr2.style.zIndex = "1";
            attr3.style.zIndex = "2";
            attr4.style.zIndex = "1";

            text1.style.transform = "TranslateY(100vh)";
            text2.style.transform = "TranslateY(100vh)";
            text3.style.transform = "TranslateY(240px)";
            text4.style.transform = "TranslateY(100vh)";

            // attr2.style.visibility="visible";
            attr2.style.opacity = "1";
            attr2.style.transform = "translateX(-50vw)";
            attr2.style.filter = "blur(13px) saturate(0)";
            attr3.style.transform = "translateX(0vw)";
            attr3.style.filter = "blur(0px) saturate(0)";
            // attr4.style.visibility="visible";
            attr4.style.opacity = "1";
            attr4.style.transform = "translateX(50vw)";
            attr4.style.filter = "blur(13px) saturate(0)";
            attr1.style.transform = "translateX(-100vw)";
            // attr1.style.visibility="hidden";
            attr1.style.opacity = "0";
            setTimeout(() => {
                attr1.style.transform = "translateX(100vw)";
                setTimeout(() => {
                    attrbtn1.disabled = false;
                    attrbtn2.disabled = false;
                }, 500);
            }, 1000);
        } else if (n == 4) {
            attr1.style.zIndex = "1";
            attr2.style.zIndex = "1";
            attr3.style.zIndex = "1";
            attr4.style.zIndex = "2";

            text1.style.transform = "TranslateY(100vh)";
            text2.style.transform = "TranslateY(100vh)";
            text3.style.transform = "TranslateY(100vh)";
            text4.style.transform = "TranslateY(240px)";

            attr3.style.transform = "translateX(-50vw)";
            attr3.style.filter = "blur(13px) saturate(0)";
            attr3.style.opacity = "1";
            attr4.style.transform = "translateX(0vw)";
            attr4.style.filter = "blur(0px) saturate(0)";
            attr1.style.display = "block";
            attr1.style.transform = "translateX(50vw)";
            // attr1.style.visibility="visible";
            attr1.style.opacity = "1";
            attr1.style.filter = "blur(13px) saturate(0)";
            attr2.style.transform = "translateX(-100vw)";
            // attr2.style.visibility="hidden";
            attr2.style.opacity = "0";
            // attrbtn2.style.visibility="hidden";
            setTimeout(() => {
                attr2.style.transform = "translateX(100vw)";
                setTimeout(() => {
                    attrbtn1.disabled = false;
                    attrbtn2.disabled = false;
                }, 500);
            }, 1000);
        }
    }

    let n = 1;
    const add = () => {
        const attrbtn1 = document.getElementById("btn1");
        const attrbtn2 = document.getElementById("btn2");
        attrbtn1.disabled = true;
        attrbtn2.disabled = true;
        if (n < 4) {
            n++;
            console.log(n);
            changeimgadd();
        } else {
            n = 1;
            console.log(n);
            changeimgadd();
        }
    };

    const subtract = () => {
        const attrbtn1 = document.getElementById("btn1");
        const attrbtn2 = document.getElementById("btn2");
        attrbtn1.disabled = true;
        attrbtn2.disabled = true;
        if (n > 1) {
            n--;
            console.log(n);
            changeimgsubtract();
        } else {
            n = 4;
            console.log(n);
            changeimgsubtract();
        }
    };

    const changeimgphn = () => {
        const attr1 = document.querySelector("#img1");
        const attr2 = document.querySelector("#img2");
        const attr3 = document.querySelector("#img3");
        const attr4 = document.querySelector("#img4");
        const text1 = document.querySelector("#twenty19");
        const text2 = document.querySelector("#twenty20");
        const text3 = document.querySelector("#twenty21");
        const text4 = document.querySelector("#twenty22");
        if (n == 1) {
            attr1.style.zIndex = "2";
            attr2.style.zIndex = "1";
            attr2.style.zIndex = "1";
            attr2.style.zIndex = "1";

            attr1.style.opacity = "1";
            attr2.style.opacity = "0";
            attr3.style.opacity = "0";
            attr4.style.opacity = "0";

            text1.style.opacity = "1";
            text2.style.opacity = "0";
            text3.style.opacity = "0";
            text4.style.opacity = "0";
        } else if (n == 2) {
            attr1.style.zIndex = "1";
            attr2.style.zIndex = "2";
            attr2.style.zIndex = "1";
            attr2.style.zIndex = "1";

            attr1.style.opacity = "0";
            attr2.style.opacity = "1";
            attr3.style.opacity = "0";
            attr4.style.opacity = "0";

            text1.style.opacity = "0";
            text2.style.opacity = "1";
            text3.style.opacity = "0";
            text4.style.opacity = "0";
        } else if (n == 3) {
            attr1.style.zIndex = "1";
            attr2.style.zIndex = "1";
            attr2.style.zIndex = "2";
            attr2.style.zIndex = "1";

            attr1.style.opacity = "0";
            attr2.style.opacity = "0";
            attr3.style.opacity = "1";
            attr4.style.opacity = "0";

            text1.style.opacity = "0";
            text2.style.opacity = "0";
            text3.style.opacity = "1";
            text4.style.opacity = "0";
        } else if (n == 4) {
            attr1.style.zIndex = "1";
            attr2.style.zIndex = "1";
            attr2.style.zIndex = "1";
            attr2.style.zIndex = "2";

            attr1.style.opacity = "0";
            attr2.style.opacity = "0";
            attr3.style.opacity = "0";
            attr4.style.opacity = "1";

            text1.style.opacity = "0";
            text2.style.opacity = "0";
            text3.style.opacity = "0";
            text4.style.opacity = "1";
        }
    };

    const addphn = () => {
        if (n < 4) {
            n++;
            console.log(n);
            changeimgphn();
        } else {
            n = 1;
            console.log(n);
            changeimgphn();
        }
    };
    const subtractphn = () => {
        if (n > 1) {
            n--;
            console.log(n);
            changeimgphn();
        } else {
            n = 4;
            console.log(n);
            changeimgphn();
        }
    };

    let imgobject = document.querySelector(".image");

    const mousehover = () => {
        const attr1 = document.querySelector("#img1");
        const attr2 = document.querySelector("#img2");
        const attr3 = document.querySelector("#img3");
        const attr4 = document.querySelector("#img4");
        if (n == 1) {
            attr1.style.filter = "blur(0px) saturate(100%)";
        } else if (n == 2) {
            attr2.style.filter = "blur(0px) saturate(100%)";
        } else if (n == 3) {
            attr3.style.filter = "blur(0px) saturate(100%)";
        } else if (n == 4) {
            attr4.style.filter = "blur(0px) saturate(100%)";
        }
    };
    const unhover = () => {
        const attr1 = document.querySelector("#img1");
        const attr2 = document.querySelector("#img2");
        const attr3 = document.querySelector("#img3");
        const attr4 = document.querySelector("#img4");
        if (n == 1) {
            attr1.style.filter = "blur(0px) saturate(0)";
        } else if (n == 2) {
            attr2.style.filter = "blur(0px) saturate(0)";
        } else if (n == 3) {
            attr3.style.filter = "blur(0px) saturate(0)";
        } else if (n == 4) {
            attr4.style.filter = "blur(0px) saturate(0)";
        }
    };

    //   JSX
    return (
        <div className="pagewrapper">
            {/* try image left and right technique */}

            <div id="img1" className="image">
                <Link to="/explode_img1">
                    <img
                        className="image"
                        onMouseOver={mousehover}
                        onMouseOut={unhover}
                        src="https://www.pandotrip.com/wp-content/uploads/2013/05/red-beach-china-740x440.jpg"
                    />
                </Link>
            </div>

            <div id="img2" className="image">
                <Link to="/explode_img2">
                    <img
                        className="image"
                        onMouseOver={mousehover}
                        onMouseOut={unhover}
                        src="https://hips.hearstapps.com/hbz.h-cdn.co/assets/16/16/mirador-las-torres-gettyimages-512588114.jpg?crop=1.0xw:1xh;center,top&resize=480:*"
                    />
                </Link>
            </div>

            <div id="img3" className="image">
                <Link to="/explode_img3">
                    <img
                        className="image"
                        onMouseOver={mousehover}
                        onMouseOut={unhover}
                        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/most-beautiful-places-in-the-world-gettyimages-1042549972.jpg"
                    />
                </Link>
            </div>

            <div id="img4" className="image">
                <Link to="/explode_img4">
                    <img
                        className="image"
                        onMouseOver={mousehover}
                        onMouseOut={unhover}
                        src="https://media.cntraveler.com/photos/5cb63a4c1a7e7050e8f70959/master/w_4000,h_2667,c_limit/Socotra-Yemen_GettyImages-487703989.jpg"
                    />
                </Link>
            </div>

            {/* <img id="img2" className="image"  onMouseOver={mousehover} onMouseOut={unhover} src="https://hips.hearstapps.com/hbz.h-cdn.co/assets/16/16/mirador-las-torres-gettyimages-512588114.jpg?crop=1.0xw:1xh;center,top&resize=480:*"/>
            <img id="img2" className="image"  onMouseOver={mousehover} onMouseOut={unhover} src="https://hips.hearstapps.com/hbz.h-cdn.co/assets/16/16/mirador-las-torres-gettyimages-512588114.jpg?crop=1.0xw:1xh;center,top&resize=480:*"/>
            <img id="img3"className="image"  onMouseOver={mousehover} onMouseOut={unhover} src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/most-beautiful-places-in-the-world-gettyimages-1042549972.jpg"/>
            <img id="img4"className="image"  onMouseOver={mousehover} onMouseOut={unhover} src="https://media.cntraveler.com/photos/5cb63a4c1a7e7050e8f70959/master/w_4000,h_2667,c_limit/Socotra-Yemen_GettyImages-487703989.jpg"/> */}

            <h1 id="twenty19" className="YearTags">
                2019
            </h1>
            <h1 id="twenty20" className="YearTags">
                2020
            </h1>
            <h1 id="twenty21" className="YearTags">
                2021
            </h1>
            <h1 id="twenty22" className="YearTags">
                2022
            </h1>
            <div className="aligncenter">
                <button id="btn1" className="btn" onClick={subtract}>
                    <img className="btnpic1" src={lessthan} alt="Logo" width="18px" />
                    {/* &lt; */}
                </button>
                <button id="btn1phn" className="btn" onClick={subtractphn}>
                    &lt;
                </button>

                <div id="imageplaceholder"></div>

                <button id="btn2phn" className="btn" onClick={addphn}>
                    &gt;
                </button>
                <button id="btn2" className="btn" onClick={add}>
                    
                    <img
                        className="btnpic2"
                        src={greaterthan}
                        alt="Logo"
                        width="18px"
                    />{" "}
                </button>
            </div>
        </div>
    );
}
