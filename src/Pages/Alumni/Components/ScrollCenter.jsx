import styles from "../Style/scroll.module.css";

function ScrollCenter({ currentYear }) {
  return (
    <>
      <div className={styles.scrollDiv}>
        <div className={styles.start}>

          <div className={styles.meow}>
            <div className={styles.image}><img src="https://thaparuniv-my.sharepoint.com/personal/tmann_be22_thapar_edu/Documents/MLSC%20PICS%2023-24/Induction%20Day/PXL_20231104_152010834.MP.jpg?csf=1&web=1&e=GA5k9h&CID=7b1cec33-8e76-4647-9568-555dc9e150b5"></img></div>
            <div className={styles.image}><img src="https://t4.ftcdn.net/jpg/05/62/78/85/360_F_562788544_gBBydDZ7jt9eYjTmsXhsXVzPjL2yQfsg.jpg"></img></div>
            <div className={styles.image}><img src="https://t4.ftcdn.net/jpg/05/62/78/85/360_F_562788544_gBBydDZ7jt9eYjTmsXhsXVzPjL2yQfsg.jpg"></img></div>
            <div className={styles.image}><img src="https://t4.ftcdn.net/jpg/05/62/78/85/360_F_562788544_gBBydDZ7jt9eYjTmsXhsXVzPjL2yQfsg.jpg"></img></div>
            <div className={styles.image}><img src="https://t4.ftcdn.net/jpg/05/62/78/85/360_F_562788544_gBBydDZ7jt9eYjTmsXhsXVzPjL2yQfsg.jpg"></img></div>
            <div className={styles.image}><img src="https://t4.ftcdn.net/jpg/05/62/78/85/360_F_562788544_gBBydDZ7jt9eYjTmsXhsXVzPjL2yQfsg.jpg"></img></div>
            <div className={styles.image}><img src="https://t4.ftcdn.net/jpg/05/62/78/85/360_F_562788544_gBBydDZ7jt9eYjTmsXhsXVzPjL2yQfsg.jpg"></img></div>
            <div className={styles.image}><img src="https://t4.ftcdn.net/jpg/05/62/78/85/360_F_562788544_gBBydDZ7jt9eYjTmsXhsXVzPjL2yQfsg.jpg"></img></div>
            <div className={styles.image}><img src="https://thaparuniv-my.sharepoint.com/personal/tmann_be22_thapar_edu/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Ftmann_be22_thapar_edu%2FDocuments%2FMLSC%20PICS%2023-24%2FScribble%20Day%2FIMG_3717.jpeg&parent=%2Fpersonal%2Ftmann_be22_thapar_edu%2FDocuments%2FMLSC%20PICS%2023-24%2FScribble%20Day"></img></div>
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
