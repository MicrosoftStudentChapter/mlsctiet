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
            <div className={styles.image}><img src="https://res.cloudinary.com/dy1pmolax/image/upload/v1688813372/gallery_page/2021/12_Large_xfyaqb.jpg" alt="Image 3"></img></div>
            <div className={styles.image}><img src="https://thaparuniv-my.sharepoint.com/personal/tmann_be22_thapar_edu/Documents/MLSC%20PICS%2023-24/MAKEATHON6/Day%201/Agrim/PXL_20240224_113420624.MP.jpg?csf=1&web=1&e=cE7BAo&CID=3037b7f8-6c21-4b97-8ca3-213a704a0346" alt="Image 4"></img></div>
            <div className={styles.image}><img src="https://res.cloudinary.com/dy1pmolax/image/upload/v1688839046/gallery_page/2021/13-2021_fx23ol.jpg" alt="Image 5"></img></div>
            <div className={styles.image}><img src="https://thaparuniv-my.sharepoint.com/personal/tmann_be22_thapar_edu/Documents/MLSC%20PICS%2023-24/Induction%20Day/PXL_20231104_145204437.MP.jpg?csf=1&web=1&e=Z1Pzk7&CID=8ce394be-c6f6-4d47-b4fc-587165caf1f6" alt="Image 6"></img></div>
            <div className={styles.image}><img src="https://res.cloudinary.com/dy1pmolax/image/upload/v1688813787/gallery_page/2022/10_2022_Large_qn7khe.jpg" alt="Image 7"></img></div>
            <div className={styles.image}><img src="https://res.cloudinary.com/dy1pmolax/image/upload/v1688813788/gallery_page/2022/9_2022_Large_b8c0by.jpg" alt="Image 8"></img></div>
            <div className={styles.image}><img src="https://res.cloudinary.com/dy1pmolax/image/upload/v1688813786/gallery_page/2022/1_2022_Large_y3p0w8.jpg" alt="Image 9"></img></div>
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
