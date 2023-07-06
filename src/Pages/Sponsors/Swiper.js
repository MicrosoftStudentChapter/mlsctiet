import "./App.css";
import { v4 as uuidv4 } from "uuid";
import Card from "./Card";
import Carousel from "./Carousel";

//importing the images
import MLH from "./MLH2.png"

function App() {
  let cards = [
    {
      key: uuidv4(),
      Title:"MLH",
      content: (
        <Card imagen="https://res.cloudinary.com/ds7xs3pq1/image/upload/v1672682166/cblogo_jvwkzg.png" Title="MLH"/>
      )
    },
    {
      key: uuidv4(),
      Title:"celo",
      content: (
        <Card imagen="https://res.cloudinary.com/ds7xs3pq1/image/upload/v1672682166/cblogo_jvwkzg.png" Title="THREEWAY" />
      )
    },
    {
      key: uuidv4(),
      Title:"FileCoin",
      content: (
        <Card imagen="https://res.cloudinary.com/ds7xs3pq1/image/upload/v1672682166/cblogo_jvwkzg.png" Title="ALISON" />
      )
    },
    {
      key: uuidv4(),
      Title:"Tezos",
      content: (
        <Card imagen="https://res.cloudinary.com/ds7xs3pq1/image/upload/v1672682166/cblogo_jvwkzg.png" Title="CODING NINJA" />
      )
    },
    {
      key: uuidv4(),
      Title:"StickerMule",
      content: (
        <Card imagen="https://res.cloudinary.com/ds7xs3pq1/image/upload/v1672682166/cblogo_jvwkzg.png" Title="CODER CHEF"/>
      )
    },
    {
      key: uuidv4(),
      Title:"GitHub",
      content: (
        <Card imagen="https://res.cloudinary.com/ds7xs3pq1/image/upload/v1672682166/cblogo_jvwkzg.png" Title="Github" />
      )
    },
    {
      key: uuidv4(),
      Title:"leadingLearners",
      content: (
        <Card imagen="https://res.cloudinary.com/ds7xs3pq1/image/upload/v1672682166/cblogo_jvwkzg.png" Title="LeadingLearner" />
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
        <Card imagen="https://res.cloudinary.com/ds7xs3pq1/image/upload/v1672682166/cblogo_jvwkzg.png" Title="Coding Minutes"/>
      )
    },
    {
      key: uuidv4(),
      Title:"Devfolio",
      content: (
        <Card imagen="https://res.cloudinary.com/ds7xs3pq1/image/upload/v1672682166/cblogo_jvwkzg.png" Title="Devfolio"/>
      )
    },
    
    {
      key: uuidv4(),
      Title:"Polygon",
      content: (
        <Card imagen="https://res.cloudinary.com/ds7xs3pq1/image/upload/v1672682166/cblogo_jvwkzg.png" Title="Polygon"/>
      )
    },
    {
      key: uuidv4(),
      Title:"TechAnalogy",
      content: (
        <Card imagen="https://res.cloudinary.com/ds7xs3pq1/image/upload/v1672682166/cblogo_jvwkzg.png" Title="TechAnalogy" />
      )
    },
    {
      key: uuidv4(),
      Title:"Juspay",
      content: (
        <Card imagen="https://res.cloudinary.com/ds7xs3pq1/image/upload/v1672682166/cblogo_jvwkzg.png" Title="Juspay"/>
      )
    },
    {
      key: uuidv4(),
      Title:"YHills",
      content: (
        <Card imagen="https://res.cloudinary.com/ds7xs3pq1/image/upload/v1672682166/cblogo_jvwkzg.png" Title="YHills"/>
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