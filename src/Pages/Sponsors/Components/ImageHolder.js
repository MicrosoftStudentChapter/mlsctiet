import react from "react";
import styles from "../styles/home.module.css";
import circle from "../assets/circle.png";

const ImageHolder = ({data}) => {
	return (
				<div className={styles.container1}>
						<img
							className={styles.spnsrlogo1}
							src={data.src}
							alt="Coding Ninjas"
						/>
				</div>
	);
};

export default ImageHolder;
