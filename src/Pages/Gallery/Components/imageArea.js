import classes from "../Style/imageArea.module.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const ImageArea = (props) => {
  const [indexg, setIndexg] = useState(-1);
  
  return (
    <div className={classes.imgwrap}>
      <div className={classes.c1}>
        <RectBig
          source={props.images[0]}
          index={1}
          fn={setIndexg}
          ig={indexg}
        />
        <RectSmall
          source={props.images[1]}
          index={2}
          fn={setIndexg}
          ig={indexg}
        />
        <RectBig
          source={props.images[2]}
          index={3}
          fn={setIndexg}
          ig={indexg}
        />
        <Sq source={props.images[3]} index={4} fn={setIndexg} ig={indexg} />
      </div>
      <div className={classes.c2}>
        <RectSmall
          source={props.images[4]}
          index={5}
          fn={setIndexg}
          ig={indexg}
        />
        <Sq source={props.images[5]} index={6} fn={setIndexg} ig={indexg} />
        <RectBig
          source={props.images[6]}
          index={7}
          fn={setIndexg}
          ig={indexg}
        />
        <Sq source={props.images[7]} index={8} fn={setIndexg} ig={indexg} />
        <Sq source={props.images[8]} index={9} fn={setIndexg} ig={indexg} />
      </div>
      <div className={classes.c3}>
        <Sq source={props.images[9]} index={10} fn={setIndexg} ig={indexg} />
        <RectBig
          source={props.images[10]}
          index={11}
          fn={setIndexg}
          ig={indexg}
        />
        <RectSmall
          source={props.images[11]}
          index={12}
          fn={setIndexg}
          ig={indexg}
        />
        <RectBig
          source={props.images[12]}
          index={13}
          fn={setIndexg}
          ig={indexg}
        />
      </div>
    </div>
  );
};

export default ImageArea;

const Sq = (props) => {
  return (
    <img
      src={props.source}
      style={
        props.ig === props.index || props.ig === -1
          ? {}
          : { filter: "brightness(0.5) saturate(0%)" }
      }
      className={classes.i3}
      onMouseEnter={() => props.fn(props.index)}
      onMouseOut={() => props.fn(-1)}
    />
  );
};

const RectBig = (props) => {
  return (
    <img
      src={props.source}
      style={
        props.ig === props.index|| props.ig === -1
          ? {}
          : { filter: "brightness(0.5) saturate(0%)" }
      }
      className={classes.i1}
      onMouseEnter={() => props.fn(props.index)}
      onMouseOut={() => props.fn(-1)}
    />
  );
};

const RectSmall = (props) => {
  return (
    <img
      src={props.source}
      style={
        props.ig === props.index || props.ig === -1
          ? {}
          : { filter: "brightness(0.5) saturate(0%)" }
      }
      className={classes.i2}
      onMouseEnter={() => props.fn(props.index)}
      onMouseOut={() => props.fn(-1)}
    />
  );
};


