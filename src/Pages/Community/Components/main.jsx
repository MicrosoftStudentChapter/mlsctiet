import React from 'react'
import Carousel from './carousel';
import styles from '../styles/styles.module.css';
import Cross from '../Assets/cross.png'
import ImageCommunity from '../Assets/image.png'
import Triangles from '../Assets/triangles.png'

function Main() {

    return (
        <div className={styles.container}>

            <div className={styles.headingContainer}>

                <div className={styles.headingItems}>
                    <h1 className={styles.heading}>
                        OPEN SOURCE
                    </h1>
                    <img src={Cross} className={styles.cross} />
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
                            <li>Get to meet an array of people who have the same hunger as yourself for "Growing Always."</li>
                            <li>Learn about new technologies and clarify your doubts regarding them.</li>
                            <li>Make super cool projects and add contributions to your resume.</li>
                            <li>Become an integral part of building this community.</li>
                        </ul>

                        <button className={styles.joinButton}>
                            <a className={styles.joinButtonCss} href="https://discord.gg/GUm8cuns">
                                Join the Community
                                <img src="https://img.icons8.com/ios-filled/24/FFFFFF/discord-logo.png" />
                            </a>
                        </button>

                    </div>

                </div>
                <h1 className={styles.subHeading}>COMMUNITY</h1>
                <div className={styles.workshopHead}>
                    <h1 className={styles.heading}>WORKSHOPS</h1>
                </div>
                <img src={Triangles} className={styles.triangles} />
                <div className={styles.carousel}>
                    <Carousel></Carousel>
                </div>
            </div>
        </div>
    )
}

export default Main