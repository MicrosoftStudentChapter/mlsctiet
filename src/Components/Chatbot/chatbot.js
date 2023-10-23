import {TbMessageChatbot} from 'react-icons/tb';
import { AiFillCloseCircle } from "react-icons/ai";
import styles from './chatbot.module.css';
import { useState } from 'react';

export default function Chatbot(){
    const [open, setOpen] = useState(0);
    // const [warn, setWarn] = useState(true);
    const handleClick = () => {
        // setOpen(!open);
        if(open===0){
            setOpen(1);
        } else if(open===1){
            setOpen(2);
        } else if(open===2){
            setOpen(0);
        }
    }


    return(
        <>
            <div className={styles.mainIcon} onClick={()=>handleClick()}>
                {open!==0 && <AiFillCloseCircle className={styles.icon}/>}
                {open===0 && <TbMessageChatbot className={styles.icon}/>}
            </div>
            {open!==0 && <div className={styles.mainModal} onClick={()=>handleClick()}>
                {open===2 && <div className={styles.modalContent}>
                    <iframe className={styles.iframe} src="https://mlsc-tiet-mlscchatbot.hf.space" title="Chatbot" />
                </div>}
                {open===1 && <div className={styles.warn}>The product is currently in beta testing phase it sometimes may produce inaccurate or misleading information sometimes,if you have a very important query and the response of bot seems weird then get in touch with team through our social media handles,our team is continuously working to improve the performance and user experience.<br/><button onClick={()=>handleClick()}>Click Here to continue</button></div>}
            </div>}
        </>
    )
}