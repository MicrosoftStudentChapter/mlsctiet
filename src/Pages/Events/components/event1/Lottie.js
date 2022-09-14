import React from "react";
import Lottie from "lottie-react";
import eventLottie from "./eventLottie.json";
import planetLottie from './planetLottie.json';

const lt = [eventLottie, planetLottie]

const Lottie1 = () => <Lottie animationData={lt[Math.floor(Math.random() * 10000)%2]} loop={true} />;

export default Lottie1;