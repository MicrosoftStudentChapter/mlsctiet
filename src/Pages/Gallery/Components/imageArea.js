import classes from "./imageArea.module.css";
import { motion } from "framer-motion";
import { useState } from "react";

const ImageArea = (props) => {

  const [indexg,setIndexg] = useState(null)
  
  return (
    <div className={classes.imgwrap}>
      <div className={classes.c1}>
        <RectBig source={props.images[0]} index={1} fn={setIndexg} />
        <RectSmall source={props.images[1]} index={2} fn={setIndexg} />
        <RectBig source={props.images[2]} index={3} fn={setIndexg} />
        <Sq source={props.images[3]} index={4} fn={setIndexg} />
      </div>
      <div className={classes.c2}>
        <RectSmall source={props.images[4]} index={5} fn={setIndexg} />
        <Sq source={props.images[5]} index={6} fn={setIndexg} />
        <RectBig source={props.images[6]} index={7} fn={setIndexg} />
        <Sq source={props.images[7]} index={8} fn={setIndexg} />
        <Sq source={props.images[8]} index={9} fn={setIndexg} />
      </div>
      <div className={classes.c3}>
        <Sq source={props.images[9]} index={10} fn={setIndexg} />
        <RectBig source={props.images[10]} index={11} fn={setIndexg} />
        <RectSmall source={props.images[11]} index={12} fn={setIndexg} />
        <RectBig source={props.images[12]} index={13} fn={setIndexg} />
      </div>
    </div>
  );
};

export default ImageArea;

const Sq = (props) => {
  return <img src={props.source} className={classes.i3} onHover={props.fn(props.index)}/>;
};

const RectBig = (props) => {
  return <img src={props.source} className={classes.i1} onHover={props.fn(props.index)}/>;
};

const RectSmall = (props) => {
  return <img src={props.source} className={classes.i2} onHover={props.fn(props.index)}/>;
};

{
  /* <img className={classes.i1} />
<img className={classes.i2} />
<img className={classes.i3} />
<img className={classes.i4} />
<img className={classes.i5} />
<img className={classes.i6} />
<img className={classes.i7} />
<img className={classes.i8} />
<img className={classes.i9} />
<img className={classes.i10} />
<img className={classes.i11} />
<img className={classes.i12} />
<img className={classes.i13} /> */
}
