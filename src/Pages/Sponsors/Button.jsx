import Styles from "./Button.module.css";

function Button({ text }) {
  return <button className={Styles.btn}>{text}</button>;
}

export default Button;
