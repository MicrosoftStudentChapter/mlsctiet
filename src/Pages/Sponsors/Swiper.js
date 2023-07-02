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
        <Card imagen="Sponsors/MLH2.png" Title="MLH"/>
      )
    },
    {
      key: uuidv4(),
      Title:"celo",
      content: (
        <Card imagen="../Sponsors./assets./img./3way2.png" Title="THREEWAY" />
      )
    },
    {
      key: uuidv4(),
      Title:"FileCoin",
      content: (
        <Card imagen="mlsctiet/src/Pages/Sponsors/assets/img/alison2.png" Title="ALISON" />
      )
    },
    {
      key: uuidv4(),
      Title:"Tezos",
      content: (
        <Card imagen="mlsctiet/src/Pages/Sponsors/assets/img/cn2.png" Title="CODING NINJA" />
      )
    },
    {
      key: uuidv4(),
      Title:"StickerMule",
      content: (
        <Card imagen="/src/Pages/Sponsors/assets/img/Codechef2.png" Title="CODER CHEF"/>
      )
    },
    {
      key: uuidv4(),
      Title:"GitHub",
      content: (
        <Card imagen="https://res.cloudinary.com/ds7xs3pq1/image/upload/v1672682083/github_fphxpw.png" Title="Github" />
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
        <Card imagen="https://res.cloudinary.com/ds7xs3pq1/image/upload/v1672682394/devfolio_nukzij.png" Title="Devfolio"/>
      )
    },
    
    {
      key: uuidv4(),
      Title:"Polygon",
      content: (
        <Card imagen="https://res.cloudinary.com/ds7xs3pq1/image/upload/v1672682423/polygonlogo_ltkl1w.png" Title="Polygon"/>
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
        <Card imagen="https://res.cloudinary.com/ds7xs3pq1/image/upload/v1672682592/juslogo_pglrve.png" Title="Juspay"/>
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
      />
    </div>
  );
}

export default App;
