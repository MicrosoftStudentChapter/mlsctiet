import classes from "../Style/imageAreaSmall.module.css";

const ImageAreaSmall = (props) => {
  const wrap = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: " initial",
    height: "auto",
  };
  const subwrap = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: " initial",
    height: "auto",
  };

  return (
    <div style={wrap}>
      <div style={subwrap}>
        <RectSmall source={props.images[4]} />
      </div>
      <div className={classes.subwarp}>
        <Sq source={props.images[5]} />
        <Sq source={props.images[9]} />
      </div>
      <div className={classes.subwarp}>
        <RectSmall source={props.images[1]}></RectSmall>
      </div>
      <div className={classes.subwarp}>
        <RectBig source={props.images[0]}></RectBig>
        <RectBig source={props.images[3]}></RectBig>
      </div>
      <div className={classes.subwarp}>
        <RectSmall source={props.images[11]}></RectSmall>
      </div>
      <div className={classes.subwarp}>
        <RectBig source={props.images[2]}></RectBig>
        <RectBig source={props.images[12]}></RectBig>
      </div>
      <div className={classes.subwarp}></div>
    </div>
  );
};

export default ImageAreaSmall;

const Sq = (props) => {
  return <img src={props.source} className={classes.i3} />;
};

const RectBig = (props) => {
  return <img src={props.source} className={classes.i1} />;
};

const RectSmall = (props) => {
  return <img src={props.source} className={classes.i2} />;
};

