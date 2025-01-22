import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import style from './projects.module.css';
import Peel from "./Peeling";
import Image1 from '../assets/Linky.jpeg';
import Image2 from '../assets/irc.png';
import Image3 from '../assets/chatbot.png';
import Image4 from '../assets/makeathon.png';
import Image5 from '../assets/quiz.png';
import { Link } from "react-router-dom";
import logo from '../assets/MLSC-logo.png';
gsap.registerPlugin(useGSAP);

const Projects = (props) => {
    const Images = [Image1, Image2, Image3, Image4, Image5];
    const title = ["Linky", "IRC-Server", "MLSC-ChatBot", "makeathon6-app", "recruitment Quiz Portal"];
    const description =["Linky is an open-source project designed to provide redirect solutions with custom-named links using any pre-existing domain name. This solution is perfect for creating short, memorable links that can redirect users to any URL, simplifying the sharing and management of links."
                , "Internet Relay Chat is a forum made for group discussions made and popular in pre-socical media era. IRC servers usually follow TCP protocols and a tree topology. In today's world this is a very obsolete technology but it helps to learn the basics of how messages are commuted between computers connected on a local area network."
                , "The MLSC Chatbot is an interactive tool where users can ask all their questions about MLSC. It provides quick and accurate answers, helping users understand and navigate various aspects of MLSC with ease."
                , "An app designed for Makeathon 6, featuring a mentor calling system that connects participants with domain-specific mentors, ensuring expert guidance and streamlined support during the 24-hour hackathon."
                , "The Recruitment Quiz Portal is a specialized platform used during the MLSC recruitment process. It administers quizzes to assess candidates' knowledge and skills, streamlining the evaluation and selection process."
            ];
    const links = ["https://generate.mlsctiet.com/", "https://github.com/MicrosoftStudentChapter/IRC-Server.git", "https://github.com/MicrosoftStudentChapter/MLSC-ChatBot.git", "https://github.com/MicrosoftStudentChapter/makeathon6-app.git", ""];

    const [activeIndex, setActiveIndex] = useState(0);
    const [hoveredIndex, setHoveredIndex] = useState(0);
    const [clickedIndex, setClickedIndex] = useState(0);
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
            setHoveredIndex(index);
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

    const handleClick = (index) => {
        setClickedIndex(index);
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

       
        if (windowWidth > 426) {
            gsap.to(imgRef.current, { backgroundImage: `url(${Images[0]})`, opacity: 1 });
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
                                            {/* Image here */}
                                        </div>
                                        {hoveredIndex !== null && (
                                            <div>
                                                <p className={style.description}>
                                                    {description[hoveredIndex]}
                                                    <span>
                                                        <Link to={links[hoveredIndex]} target="_blank" style={{ color: '#5aaeff', textDecoration: 'none' }} className={style.projectlink}>
                                                            <br />{'{'} Link {'}'}
                                                        </Link>
                                                    </span>
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className={style.rightSection}>
                                    {Images.map((image, index) => (
                                        <div key={index} className={style.projectHeading}>
                                            <p
                                                ref={el => (paraRef.current[index] = el)}
                                                onClick={() => {
                                                    handleClick(index);
                                                    onMouseEnter(index);
                                                }}
                                                className={clickedIndex === index ? style.whiteText : ""}
                                            >
                                                {title[index]}
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
                                                <div className={style.linksection}>
                                                    <div className={style.projectimage}>
                                                        <img src={Images[index]} alt="error" className={style.accordianimg} />
                                                    </div>
                                                    <a href={links[index]} target="_blank" rel="noopener noreferrer">
                                                        <button className={style.redirectButton}>Link</button>
                                                    </a>
                                                </div>
                                                <span> {description[index]}</span>
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
