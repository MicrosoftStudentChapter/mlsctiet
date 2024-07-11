import styles from "../Style/scroll.module.css";
import ProfileCards from './ProfileCards';

function ScrollCenter({ currentYear }) {
  
  return (
    <>
     <div className={styles.scrollDiv}>
     <div className={styles.start}>
      <div className={styles.grid}>
      
          <div className={styles.meow}>
            <div className={styles.image}><img src="https://thaparuniv-my.sharepoint.com/personal/tmann_be22_thapar_edu/Documents/MLSC%20PICS%2023-24/MAKEATHON6/Day%202/DSLR-1/IMG_4281.JPG?csf=1&web=1&e=ylHV7e&CID=fc600aee-c131-4e8a-9749-77d51cfd8c70" alt="Image 1"></img></div>
            <div className={styles.image}><img src="https://thaparuniv-my.sharepoint.com/personal/tmann_be22_thapar_edu/Documents/MLSC%20PICS%2023-24/MAKEATHON6/Day%201/DSLR-1/IMG_6822.JPG?csf=1&web=1&e=kqaHsY&CID=f541a31e-8c68-4947-8ef4-571009e09e29" alt="Image 2"></img></div>
            <div className={styles.image}><img src="https://thaparuniv-my.sharepoint.com/personal/tmann_be22_thapar_edu/Documents/MLSC%20PICS%2023-24/Induction%20Day/PXL_20231104_152010834.MP.jpg?csf=1&web=1&e=GA5k9h&CID=a67b2839-5c85-423d-86ae-afd1b61a9dbf" alt="Image 3"></img></div>
            <div className={styles.image}><img src="https://thaparuniv-my.sharepoint.com/personal/tmann_be22_thapar_edu/Documents/MLSC%20PICS%2023-24/MAKEATHON6/Day%201/Agrim/PXL_20240224_113420624.MP.jpg?csf=1&web=1&e=cE7BAo&CID=3037b7f8-6c21-4b97-8ca3-213a704a0346" alt="Image 4"></img></div>
            <div className={styles.image}><img src="https://thaparuniv-my.sharepoint.com/personal/tmann_be22_thapar_edu/Documents/MLSC%20PICS%2023-24/MAKEATHON6/Day%201/DSLR-1/IMG_6871.JPG?csf=1&web=1&e=lTq5hC&CID=b1ca1065-0a9b-4b22-a405-e214fad785ac" alt="Image 5"></img></div>
            <div className={styles.image}><img src="https://thaparuniv-my.sharepoint.com/personal/tmann_be22_thapar_edu/Documents/MLSC%20PICS%2023-24/Induction%20Day/PXL_20231104_145204437.MP.jpg?csf=1&web=1&e=Z1Pzk7&CID=8ce394be-c6f6-4d47-b4fc-587165caf1f6" alt="Image 6"></img></div>
            <div className={styles.image}><img src="https://thaparuniv-my.sharepoint.com/personal/tmann_be22_thapar_edu/Documents/MLSC%20PICS%2023-24/MAKEATHON6/Day%201/DSLR-1/IMG_4057.JPG?csf=1&web=1&e=gpCZiI&CID=557d5878-960f-4d77-b851-ee1acbe5271d" alt="Image 7"></img></div>
            <div className={styles.image}><img src="https://thaparuniv-my.sharepoint.com/personal/tmann_be22_thapar_edu/Documents/MLSC%20PICS%2023-24/MAKEATHON6/Day%201/DSLR-1/IMG_3653.JPG?csf=1&web=1&e=EamkyV&CID=8cc9c4a2-1a78-4a46-97fd-1b3c5e0c691e" alt="Image 8"></img></div>
            <div className={styles.image}><img src="https://thaparuniv-my.sharepoint.com/personal/tmann_be22_thapar_edu/Documents/MLSC%20PICS%2023-24/MAKEATHON6/Day%201/DSLR-1/IMG_6811.JPG?csf=1&web=1&e=QuYmMl&CID=9919927b-4ede-4f47-ac2e-24b39c303c39" alt="Image 9"></img></div>
          </div>
          <div className={styles.Alumnicap}>
            <div className={styles.vl}></div>
            <div className={styles.caption}>Alumni</div>
            <div className={styles.hl}></div>  
          </div>
      </div>
     </div>
      {currentYear === 2019 && (
        <div>
          <ProfileCards />
          {/* <div className={styles.two}></div>
          <div className={styles.one}></div>
          <div className={styles.three}></div> */}
        </div>)}
        {currentYear === 2020 && (
          <div>
            <div className={styles.three}></div>
            <div className={styles.one}></div>
            <div className={styles.two}></div>
          </div>
        )}
        {currentYear === 2021 && (
          <div>
            <div className={styles.one}></div>
            <div className={styles.two}></div>
            <div className={styles.three}></div>
          </div>
        )}
        {currentYear === 2022 && (
          <div>
            {/* <ProfileCards /> */}
            <div className={styles.two}></div>
            <div className={styles.one}></div>
            <div className={styles.three}></div>
          </div>
        )}
        {currentYear === 2023 && (
          <div>
            <ProfileCards />
            {/* <div className={styles.two}></div>
            <div className={styles.one}></div>
            <div className={styles.three}></div> */}
          </div>
        )}
      </div>
    </>
  );
}

export default ScrollCenter;
