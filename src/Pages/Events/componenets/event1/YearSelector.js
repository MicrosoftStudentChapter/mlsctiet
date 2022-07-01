import React from 'react'
import { useState } from 'react';
import styles from '../../styles/event1/yearSel.module.css';

function YearSelector() {

    const [prevVal, setPrevVal] = useState(20);
    const [curVal, setCurVal] = useState(21);
    const [nextVal, setNextVal] = useState(22);

    const setVals = (selectedVal) => {
        console.log("OK")
        setCurVal(selectedVal);
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