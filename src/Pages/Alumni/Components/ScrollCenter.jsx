import styles from "../Style/scroll.module.css";

function ScrollCenter({ currentYear }) {
  return (
    <>
      <div className={styles.scrollDiv}>
        <div className={styles.start}>

          <div className={styles.meow}>
            <div className={styles.image}><img src="https://t4.ftcdn.net/jpg/05/62/78/85/360_F_562788544_gBBydDZ7jt9eYjTmsXhsXVzPjL2yQfsg.jpg"></img></div>
            <div className={styles.image}><img src="https://t4.ftcdn.net/jpg/05/62/78/85/360_F_562788544_gBBydDZ7jt9eYjTmsXhsXVzPjL2yQfsg.jpg"></img></div>
            <div className={styles.image}><img src="https://t4.ftcdn.net/jpg/05/62/78/85/360_F_562788544_gBBydDZ7jt9eYjTmsXhsXVzPjL2yQfsg.jpg"></img></div>
            <div className={styles.image}><img src="https://t4.ftcdn.net/jpg/05/62/78/85/360_F_562788544_gBBydDZ7jt9eYjTmsXhsXVzPjL2yQfsg.jpg"></img></div>
            <div className={styles.image}><img src="https://t4.ftcdn.net/jpg/05/62/78/85/360_F_562788544_gBBydDZ7jt9eYjTmsXhsXVzPjL2yQfsg.jpg"></img></div>
            <div className={styles.image}><img src="https://t4.ftcdn.net/jpg/05/62/78/85/360_F_562788544_gBBydDZ7jt9eYjTmsXhsXVzPjL2yQfsg.jpg"></img></div>
            <div className={styles.image}><img src="https://t4.ftcdn.net/jpg/05/62/78/85/360_F_562788544_gBBydDZ7jt9eYjTmsXhsXVzPjL2yQfsg.jpg"></img></div>
            <div className={styles.image}><img src="https://t4.ftcdn.net/jpg/05/62/78/85/360_F_562788544_gBBydDZ7jt9eYjTmsXhsXVzPjL2yQfsg.jpg"></img></div>
            <div className={styles.image}><img src="https://t4.ftcdn.net/jpg/05/62/78/85/360_F_562788544_gBBydDZ7jt9eYjTmsXhsXVzPjL2yQfsg.jpg"></img></div>
          </div>
          <div className={styles.Alumnicap}>
          <div className={styles.vl}></div>
            <div className={styles.caption}>Alumni</div>
            
            <div className={styles.hl}></div>  
          </div>
        </div>
        {currentYear === 2019 && (
          <div>

            <div className={styles.two}></div>
            <div className={styles.one}></div>
            <div className={styles.three}></div>
          </div>
        )}
        {currentYear === 2020 && (
          <div>

            <div className={styles.three}></div>
            <div className={styles.one}></div>
            <div className={styles.two}></div>
          </div>
        )}
        {currentYear === 2021 && (
          <div >

            <div className={styles.one}></div>
            <div className={styles.two}></div>
            <div className={styles.three}></div>
          </div>
        )}
        {currentYear === 2022 && (
          <div >

            <div className={styles.two}></div>
            <div className={styles.one}></div>
            <div className={styles.three}></div>
          </div>
        )}
        {currentYear === 2023 && (
          <div >

            <div className={styles.two}></div>
            <div className={styles.one}></div>
            <div className={styles.three}></div>
          </div>
        )}
      </div>
    </>
  );
}

export default ScrollCenter;
