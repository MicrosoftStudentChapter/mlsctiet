import { useState } from "react";
import { motion } from "framer-motion";
import { Fragment } from "react";
import classes from "./expandableCard.module.css";
import ImageArea from "./imageArea";

const ExpandableCard = (props) => {
 
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
    <Fragment>
      <motion.div layout style={wrpstl} initial={wrpstl} animate={wrpstl}>
      <motion.h2
        className={classes.wrapper}
        initial={classes.wrapper}
        animate={classes.wrapper}
        onClick={clickHandler}
      >
        {props.year}
      </motion.h2>
    
        <motion.div>{props.index === props.actid && <ImageArea images={props.img}/>}</motion.div>
      </motion.div>
    </Fragment>
  );
};

export default ExpandableCard;
