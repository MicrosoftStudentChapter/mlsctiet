import {TbMessageChatbot} from 'react-icons/tb';
import { AiFillCloseCircle } from "react-icons/ai";
import styles from './chatbot.module.css';
import { useState } from 'react';

export default function Chatbot(){
    const [open, setOpen] = useState(false);
    
    const handleClick = () => {
        setOpen(!open);
    }


    return(
        <>
            <div className={styles.mainIcon} onClick={()=>handleClick()}>
                {open && <AiFillCloseCircle className={styles.icon}/>}
                {!open && <TbMessageChatbot className={styles.icon}/>}
            </div>
            {open && (
            <div className={styles.mainModal} onClick={()=>handleClick()}>
                <div className={styles.modalContent}>
                    <iframe className={styles.iframe} src="https://mlsc-tiet-mlscchatbot.hf.space" title="Chatbot" />
                </div>
            </div>)
            }
        </>
    )
}