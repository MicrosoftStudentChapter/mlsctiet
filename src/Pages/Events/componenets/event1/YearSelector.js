import React from 'react'
import { useState } from 'react';
import styles from '../../styles/event1/yearSel.module.css';

function YearSelector({chngYear, chngData, yearData}) {

    const [prevVal, setPrevVal] = useState(20);
    const [curVal, setCurVal] = useState(21);
    const [nextVal, setNextVal] = useState(22);

    const setVals = (selectedVal) => {
        if(selectedVal === 22){
            setNextVal(21)
            setPrevVal(20)
        }else if(selectedVal === 21){
            setNextVal(22)
            setPrevVal(20)
        }
        else if(selectedVal === 20){
            setNextVal(21)
            setPrevVal(22)
        }
        setCurVal(selectedVal)
        chngYear(selectedVal)
        // console.log(yearData[selectedVal])
        chngData(yearData[selectedVal])
    }
                
    return (
        <div className={styles.container}>
            <div className={styles.notSelected}><span onClick={() => setVals(nextVal)}>{nextVal}</span></div>
            <div className={styles.selectedYear}>
                <span className={styles.yearPrefix}>20</span>
                <span className={styles.yearSuffix}>{curVal}</span>
            </div>
            <div className={styles.notSelected}><span onClick={() => setVals(prevVal)} >{prevVal}</span></div>
        </div>
    )
}

export default YearSelector