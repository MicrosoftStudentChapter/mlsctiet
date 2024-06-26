import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import classes from "../Style/expandableCard.module.css";
import ImageArea from "./imageArea";
import ImageAreaSmall from "./imageAreaSmall";

const ExpandableCard = (props) => {
  const initialWindowWidth = window.innerWidth;
  const [windowWidth, setWindowWidth] = useState(initialWindowWidth);
  const wrpstl = {
    width: "80%",
    position: "relative",
    marginTop: "2px",
    left: "10%",
  };

  const clickHandler = () => {
    if (props.actid === props.index) {
      props.activity(null);
    } else {
      props.activity(props.index);
    }
  };
  return (
    <motion.div style={wrpstl}>
      <motion.h2 className={classes.wrapper} onClick={clickHandler}>
        {props.year}
      </motion.h2>
      <AnimatePresence>
        <motion.div layout exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
          {props.index === props.actid && (
            <>
              {windowWidth >= 500 ? (
                <ImageArea images={props.img} />
              ) : (
                <ImageAreaSmall images={props.img}></ImageAreaSmall>
              )}
            </>
          )}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default ExpandableCard;
