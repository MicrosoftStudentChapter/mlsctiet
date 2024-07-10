import style from "./start.module.css";
import logo from "../assets/logo.png"
import team from "../assets/team.png"

export default function Start() {
    return(
        <>
            <div className={style.main}>
                <div className={style.left}>
                    <p className={style.header}>
                        About
                    </p>
                    <div className={style.li}>
                        <div className={style.line}></div>
                        <div className={style.line1}></div>
                    </div>
                        <div className={style.logo}>
                            <img src={logo} alt="jai mlsc" />
                        </div>
                </div>
                <div className={style.right}>
                    <div className={style.text}>
                        <span className={style.p1}>
                            (about MLSC)
                        </span>     
                        <p className={style.p2}>
                        We at Microsoft Learn Student Chapter believe that youth encompassed with appropriate technology holds the potential to revolutionize the world we perceive today and we have done a fair share in that through multiple events organised over the years. Microsoft Learn Student Chapter was institutionalized by the virtue of providing students a systemic platform for cultivating technical skills and a spirit of teamwork. Our vision is to create a community of computer enthusiasts with a mindset of development.                        </p>
                    </div>
                    <div className={style.svideo}>
                    <iframe src="https://www.youtube.com/embed/Iwl-0ja8hqQ?si=l5TLotLk6dnRjn9-?autoplay=1" className={style.ima}></iframe>
                    </div>
                    <div className={style.li}>
                        <div className={style.line}></div>
                        <div className={style.line1}></div>
                    </div>
                    <div className={style.re}>
                        <div className={style.line}></div>
                        <div className={style.line1}></div>
                    </div>
                </div>
            </div>
        </>
    );
}