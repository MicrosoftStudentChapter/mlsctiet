import style from "./bg.module.css";
// import "@fontsource/dm-mono";
// import "@fontsource/dm-mono/400.css";
// import "@fontsource/dm-mono/400-italic.css";



export default function Bg() {
    return (<>
        
            
            
        <div className={style.mainBgContainer}>
            {/* <div className={style.heading}></div> */}
            <p className={style.text}>A legacy of innovation</p>
            <div className={style.parent}>
                <div className={style.triangle}></div>
                <div className={style.icon}>
                    <div className={style.arrow}></div>
                </div>
                <div className={style.bluetext}>
                    <p >
                        A legacy of innovation
                    </p>
                </div>
                <div className={style.left}>
                    
                    <div className={style.rotatedTextContainer}>
                        <p className={style.rotatedText}>A legacy of innovation</p>
                    </div>
                    <div className={style.hor}>
                        <div className={style.h1}></div>

                        {/* <div> */}
                            <div className={style.h2}></div>
                            <div className={style.h3}></div>
                        {/* </div> */}
                    </div>

                    <div className={style.ver}>
                        <div className={style.v1}></div>
                        <div>
                            <div className={style.v2}></div>
                            <div className={style.v3}></div>
                        </div>
                    </div>
                </div>
                <div className={style.cen}></div>
                <div className={style.circlesContainer}>
                    <span className={style.circle}></span>
                    <span className={style.circle2}></span>
                    <span className={style.circle}></span>
                </div>
                <div className={style.right}>
                    <div className={style.hor}>
                        <div className={style.h1}></div>
                        <div>
                            <div className={style.h2}></div>
                            <div className={style.h3}></div>
                        </div>
                    </div>
                    <div className={style.ver}>
                        <div className={style.v1}></div>
                        <div>
                            <div className={style.v2}></div>
                            <div className={style.v3}></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        
        
        </>


    );
}