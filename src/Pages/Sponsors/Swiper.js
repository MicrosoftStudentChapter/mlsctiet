import "./App.css";
import { v4 as uuidv4 } from "uuid";
import Card from "./Card";
import Carousel from "./Carousel";

function App() {
  let cards = [
    {
      key: uuidv4(),
      Title:"MLH",
      content: (
        <Card imagen="https://res.cloudinary.com/dy1pmolax/image/upload/v1688813058/sponsors_page/MLH2_vnbf6i.png" Title="MLH"/>
      )
    },
    {
      key: uuidv4(),
      Title:"ThreeWay",
      content: (
        <Card imagen="https://res.cloudinary.com/dy1pmolax/image/upload/v1688813059/sponsors_page/3way2_atkeeh.png" Title="THREEWAY" />
      )
    },
    {
      key: uuidv4(),
      Title:"FileCoin",
      content: (
        <Card imagen="https://res.cloudinary.com/dy1pmolax/image/upload/v1688813059/sponsors_page/alison2_dzf5ui.png" Title="ALISON" />
      )
    },
    {
      key: uuidv4(),
      Title:"CodingNinjas",
      content: (
        <Card imagen="https://res.cloudinary.com/dy1pmolax/image/upload/v1688813059/sponsors_page/cn2_u7sidw.png" Title="CODING NINJA" />
      )
    },
    {
      key: uuidv4(),
      Title:"StickerMule",
      content: (
        <Card imagen="https://res.cloudinary.com/dy1pmolax/image/upload/v1688813057/sponsors_page/Codechef2_dillaj.png" Title="CODER CHEF"/>
      )
    },
    {
      key: uuidv4(),
      Title:"GitHub",
      content: (
        <Card imagen="https://res.cloudinary.com/dy1pmolax/image/upload/v1688813057/sponsors_page/GitHub-logo_hy0u8w.png" Title="Github" />
      )
    },
    {
      key: uuidv4(),
      Title:"leadingLearners",
      content: (
        <Card imagen="https://res.cloudinary.com/ds7xs3pq1/image/upload/v1672682144/leadinglearn_asuhf8.webp" Title="LeadingLearner" />
      )
    },
    {
      key: uuidv4(),
      Title:"Coding Blocks",
      content: (
        <Card imagen="https://res.cloudinary.com/ds7xs3pq1/image/upload/v1672682166/cblogo_jvwkzg.png" Title="Coding Blocks" />
      )
    },
    {
      key: uuidv4(),
      Title:"CodingMinutes",
      content: (
        <Card imagen="https://res.cloudinary.com/ds7xs3pq1/image/upload/v1672682312/cm_fcvr7u.jpg" Title="Coding Minutes"/>
      )
    },
    {
      key: uuidv4(),
      Title:"Devfolio",
      content: (
        <Card imagen="https://res.cloudinary.com/dy1pmolax/image/upload/v1688813057/sponsors_page/devfolio2_s5acdh.png" Title="Devfolio"/>
      )
    },
    
    {
      key: uuidv4(),
      Title:"Polygon",
      content: (
        <Card imagen="https://res.cloudinary.com/dy1pmolax/image/upload/v1688813058/sponsors_page/Polygon2_ldvjjv.png" Title="Polygon"/>
      )
    },
    {
      key: uuidv4(),
      Title:"TechAnalogy",
      content: (
        <Card imagen="https://res.cloudinary.com/ds7xs3pq1/image/upload/v1672682566/techa_aa3goj.jpg" Title="TechAnalogy" />
      )
    },
    {
      key: uuidv4(),
      Title:"Juspay",
      content: (
        <Card imagen="https://res.cloudinary.com/dy1pmolax/image/upload/v1688813058/sponsors_page/jus2_xwy0aa.png" Title="Juspay"/>
      )
    },
    {
      key: uuidv4(),
      Title:"YHills",
      content: (
        <Card imagen="https://res.cloudinary.com/ds7xs3pq1/image/upload/v1672681953/yhills_qtgadh.png" Title="YHills"/>
      )
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
