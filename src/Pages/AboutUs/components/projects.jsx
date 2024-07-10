import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import style from './projects.module.css';
import Peel from "./Peeling";
import Image1 from '../assets/image1.jpg';
import Image2 from '../assets/image2.jpg';
import Image3 from '../assets/image3.jpg';
import Image4 from '../assets/image4.jpg';
import Image5 from '../assets/image5.jpg';
import Image6 from '../assets/image6.jpg';
gsap.registerPlugin(useGSAP);

const Projects = (props) => {
    const Images = [Image1, Image2, Image3, Image4, Image5, Image6];
    const title = ["linky", "hello2", "hello3", "hello4", "hello5", "hello6"];
    const description = ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, placeat. Iste repudiandae eius temporibus doloribus eveni" , "ye dusri description" , "ye teesri" , "ye rahi chauthi" , "aur ye lo paanchvi"  , "bs ye last hai"]

    const [activeIndex, setActiveIndex] = useState(0);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [contentHeight, setContentHeight] = useState(0);
    

    const container = useRef();
    const imgRef = useRef();
    const paraRef = useRef([]);
    const contentRef = useRef([]);
    const { contextSafe } = useGSAP({ scope: container });

    const onMouseEnter = contextSafe((index) => {
        if (windowWidth > 426) {
            gsap.from(imgRef.current, { x: -1000, y: -1000, immediateRender: false });
            gsap.to(imgRef.current, { backgroundImage: `url(${Images[index]})`, opacity: 1 });
        }
    });

    const onMouseLeave = contextSafe(() => {
        if (windowWidth > 426) {
            gsap.to(imgRef.current, { backgroundImage: `url(${Image1})`, opacity: 0 });
            console.log("left");
        }
    });

    const handleAccordionClick = (index) => {
        if (index === activeIndex) {
            setActiveIndex(null);
            setContentHeight(0);
        } else {
            setActiveIndex(index);
            const contentHeight = contentRef.current[index]?.scrollHeight || 0;
            setContentHeight(contentHeight);
        }
    };

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            if (activeIndex !== null) {
                const contentHeight = contentRef.current[activeIndex]?.scrollHeight || 0;
                setContentHeight(contentHeight);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [activeIndex]);

    useEffect(() => {
        if (contentRef.current[0]) {
            setContentHeight(contentRef.current[0].scrollHeight);
        }
    }, []);

    return (
        <div className={style.grid} ref={container}>
            <div className={style.sticky}>
                <div className={style.mainProjectsContainer}>
                    <div className={style.projectsContainer}>
                        <Peel />
                        {windowWidth > 450 ? (
                            <>
                                <div className={style.leftSection}>
                                    <div className={style.projecth}>
                                        <p>Projects:</p>
                                    </div>
                                    <div className={style.projectimagediv}>
                                        <div className={style.projectimg} ref={imgRef}>
                                            Image here
                                        </div>
                                    </div>
                                </div>
                                <div className={style.rightSection}>
                                    {Images.map((image, index) => (
                                        <div key={index} className={style.projectHeading}>
                                            <p
                                                ref={el => (paraRef.current[index] = el)}
                                                onMouseEnter={() => onMouseEnter(index)}
                                                onMouseLeave={onMouseLeave}
                                            >
                                                {index + 1}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </>
                        ) : (
                            <div className={style.rightSection}>
                                <div className={style.projecth}>
                                        <p>Projects:</p>
                                    </div>
                                {Images.map((image, index) => (
                                    <div
                                        key={index}
                                        className={`${style.projectHeading} ${activeIndex === index ? style.active : ""}`}
                                        onClick={() => handleAccordionClick(index)}
                                        style={{ height: activeIndex === index ? contentHeight + 40 : 40 }}
                                    >
                                        <p ref={el => (paraRef.current[index] = el)}>
                                            {title[index]}
                                        </p>
                                        <div
                                            ref={el => (contentRef.current[index] = el)}
                                            className={style.accordionContent}
                                        >
                                            <div className={style.accordianDiv}>
                                            <div className={style.projectimage}>
                                                <img src={Images[index]} alt="error" className={style.accordianimg}/>
                                            </div>
                                            <span> {description[index]}
                                            </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
