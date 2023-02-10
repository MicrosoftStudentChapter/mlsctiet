import React from 'react'
import Carousel from './carousel';
import styles from '../styles/styles.module.css';
import Cross from '../Assets/cross.png'
import ImageCommunity from '../Assets/image.png'
import Triangles from '../Assets/triangles.png'
import Animation from '../Assets/animation_lottie.json'

function Main() {

    return (
        <div className={styles.container}>

            <div className={styles.headingContainer}>

                <div className={styles.headingItems}>
                    <h1 className={styles.heading}>
                        OPEN SOURCE
                    </h1>
                    <img src={Cross} className={styles.cross} />
                    {/* <div className={styles.animation}>
                        <Animation></Animation>
                    </div> */}
                </div>

                <div className={styles.contentContainer}>
                    <div className={styles.left}>
                        <img src={ImageCommunity} className={styles.communityImage} />
                    </div>

                    <div className={styles.right}>

                        <p>
                            We are a group of highly motivated learners and seekers who wish to create something extraordinary. We believe that youth encompassed with appropriate technology holds the potential to revolutionize the world we perceive today. With our Open-Source community, we aim to bring together the aspiring minds and create a space where they can learn, grow and develop together. To foster this process, we conduct various seminars, group discussions and talks on our channel. It also serves as a platform for the multitude hackathons, coding events we conduct throughout the year and the projects we develop.
                        </p>

                        <ul>
                            <li className={styles.listItem}>Get to meet an array of people who have the same hunger as yourself for "Growing Always."</li>
                            <li className={styles.listItem}>Learn about new technologies and clarify your doubts regarding them.</li>
                            <li className={styles.listItem}>Make super cool projects and add contributions to your resume.</li>
                            <li className={styles.listItem}>Become an integral part of building this community.</li>
                        </ul>
                    </div>
                </div>
                {/* <h1 className={styles.subHeading}>COMMUNITY</h1> */}
                <div className={styles.workshopHead}>
                    <h1 className={styles.heading}>WORKSHOPS</h1>
                </div>
                <img src={Triangles} className={styles.triangles} />
                <div className={styles.carousel}>
                    <Carousel></Carousel>
                </div>
            </div>
            <div className={styles.buttons}>
                <div className={styles.joinDiv}>
                    <p>
                    Join the Community :
                    </p>
                </div>
                <div>
                    <button className={styles.joinButton}>
                        <a className={styles.joinButtonCss} href="https://discord.gg/GUm8cuns">
                            <img className={styles.discord} src="https://img.icons8.com/ios-filled/24/FFFFFF/discord-logo.png" />
                        </a>
                    </button>
                </div>
                <div>
                    <button className={styles.joinButton}>
                        <a className={styles.joinButtonCss} href="https://twitter.com/mlsc_tiet">
                            
                            <img className={styles.twitter} src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png" />
                        </a>
                    </button>
                </div>
                <div>
                    <button className={styles.joinButton}>
                        <a className={styles.joinButtonCss} href="https://in.linkedin.com/company/microsoft-learn-student-chapter">
                            
                            <img className={styles.linkedin} src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/linkedin-icon-18-256.png" />
                        </a>
                    </button>
                </div>
                <div>
                    <button className={styles.joinButton}>
                        <a className={styles.joinButtonCss} href="https://www.instagram.com/mlsc_tiet/">
                            
                            <img className={styles.instagram} src="https://www.pngkey.com/png/full/107-1075251_la-instagram-logo-white-png-circle.png" />
                        </a>
                    </button>
                </div>
             </div>
        </div>
    )
}

export default Main
