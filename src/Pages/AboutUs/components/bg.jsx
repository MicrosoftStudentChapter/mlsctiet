import style from "./bg.module.css";

export default function About(){
    return (
    <>
        <div className={style.parent}>
           
            <div className={style.left}>
            <div className={style.title}>
                <p className={style.heading}> A legacy of innovations</p>
            </div>
                <div className={style.hor}>
                    <div className={style.h1}></div>
                    <div>
                       
                        <div className={style.h2}></div>
                        <div className={style.h3}></div>
                    </div>
                </div>
                <div className={style.ver}>
                    <div className={style.title1}>
                        <p className={style.heading}> A legacy of innovations</p>
                    </div>
                    <div className={style.v1}></div>
                    <div>
                        <div className={style.v2}></div>
                        <div className={style.v3}></div>
                    </div>
                </div>
            </div>
            <div className={style.cen}></div>
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
     </>
    );
}