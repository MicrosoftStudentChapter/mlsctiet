import "./App.css";
import { v4 as uuidv4 } from "uuid";
import Card from "./Card";
import Carousel from "./Carousel";

function App() {
  let cards = [
    {
      key: uuidv4(),
      Title: "MLH",
      content: (
        <Card
          imagen="https://res.cloudinary.com/dy1pmolax/image/upload/v1688841998/sponsors_page/mlh__nsyfzm.png"
          Title="MLH"
        />
      ),
    },
    {
      key: uuidv4(),
      Title: "ThreeWay",
      content: (
        <Card
          imagen="https://res.cloudinary.com/dy1pmolax/image/upload/v1688841997/sponsors_page/threewayjuspay_wtvu4x.png"
          Title="THREEWAY"
        />
      ),
    },
    {
      key: uuidv4(),
      Title: "alison",
      content: (
        <Card
          imagen="https://res.cloudinary.com/dy1pmolax/image/upload/v1688813059/sponsors_page/alison2_dzf5ui.png"
          Title="ALISON"
        />
      ),
    },
    {
      key: uuidv4(),
      Title: "CodingNinjas",
      content: (
        <Card
          imagen="https://res.cloudinary.com/dy1pmolax/image/upload/v1688841998/sponsors_page/codingninjasjuspay_ob7kp0.png"
          Title="CODING NINJAS"
        />
      ),
    },
    {
      key: uuidv4(),
      Title: "codechef",
      content: (
        <Card
          imagen="https://res.cloudinary.com/dy1pmolax/image/upload/v1688813057/sponsors_page/Codechef2_dillaj.png"
          Title="CODECHEF"
        />
      ),
    },
    {
      key: uuidv4(),
      Title: "GitHub",
      content: (
        <Card
          imagen="https://res.cloudinary.com/dy1pmolax/image/upload/v1688813057/sponsors_page/GitHub-logo_hy0u8w.png"
          Title="GITHUB"
        />
      ),
    },
    {
      key: uuidv4(),
      Title: "leadingLearners",
      content: (
        <Card
          imagen="https://res.cloudinary.com/ds7xs3pq1/image/upload/v1672682144/leadinglearn_asuhf8.webp"
          Title="LEADING LEARNERS"
        />
      ),
    },
    {
      key: uuidv4(),
      Title: "Coding Blocks",
      content: (
        <Card
          imagen="https://res.cloudinary.com/ds7xs3pq1/image/upload/v1672682166/cblogo_jvwkzg.png"
          Title="CODING BLOCKS"
        />
      ),
    },
    {
      key: uuidv4(),
      Title: "CodingMinutes",
      content: (
        <Card
          imagen="https://res.cloudinary.com/ds7xs3pq1/image/upload/v1672682312/cm_fcvr7u.jpg"
          Title="CODING MINUTES"
        />
      ),
    },
    {
      key: uuidv4(),
      Title: "Devfolio",
      content: (
        <Card
          imagen="https://res.cloudinary.com/dy1pmolax/image/upload/v1688841997/sponsors_page/devfolio__r7pg1k.png"
          Title="DEVFOLIO"
        />
      ),
    },

    {
      key: uuidv4(),
      Title: "Polygon",
      content: (
        <Card
          imagen="https://res.cloudinary.com/dy1pmolax/image/upload/v1688813058/sponsors_page/Polygon2_ldvjjv.png"
          Title="POLYGON"
        />
      ),
    },
    {
      key: uuidv4(),
      Title: "TechAnalogy",
      content: (
        <Card
          imagen="https://res.cloudinary.com/ds7xs3pq1/image/upload/v1672682566/techa_aa3goj.jpg"
          Title="TECH ANALOGY"
        />
      ),
    },
    {
      key: uuidv4(),
      Title: "Juspay",
      content: (
        <Card
          imagen="https://res.cloudinary.com/dy1pmolax/image/upload/v1688841997/sponsors_page/juspayjuspay_lkp7rh.png"
          Title="JUSPAY"
        />
      ),
    },
    {
      key: uuidv4(),
      Title: "YHills",
      content: (
        <Card
          imagen="https://res.cloudinary.com/ds7xs3pq1/image/upload/v1672681953/yhills_qtgadh.png"
          Title="YHILLS"
        />
      ),
    },
    {
      key: uuidv4(),
      Title: "Jio",
      content: (
        <Card
          imagen="https://res.cloudinary.com/dy1pmolax/image/upload/v1689148974/jio2_rvkbgd.png"
          Title="JIO"
        />
      ),
    },
    {
      key: uuidv4(),
      Title: "PayTM",
      content: (
        <Card
          imagen="https://res.cloudinary.com/dy1pmolax/image/upload/v1689149125/paytm2_hiqfqd.png"
          Title="PAYTM"
        />
      ),
    },
  ];
  return (
    <div className="">
      <Carousel
        cards={cards}
        height="500px"
        width="80%"
        margin="0 auto"
        offset={2}
        showArrows={false}
        autoPlay={true}
        interval="2"
      />
    </div>
  );
}

export default App;
