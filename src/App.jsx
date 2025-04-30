import "./App.css";
import Header from "./components/Header.jsx";
import Card from "./components/Card.jsx";
import { useState } from "react";
import hyoga from "../public/hyoga.jpg";
import afrodite from "../public/afrodite.jpg";
import misty from "../public/misty.PNG";
import camus from "../public/camus.avif";
import hilda from "../public/hilda.jpg";
import ikki from "../public/ikki.jpg";
import june from "../public/june.webp";
import kanon from "../public/kanon.webp";
import seiya from "../public/seiya.webp";
import shina from "../public/shina.webp";
import shiryu from "../public/shiryu.webp";
import shun from "../public/shun.webp";

function App() {
  const [count, setCount] = useState(0);
  const [maxScore, setMaxScore] = useState(0);
  const knights = [
    {
      name: "Cygnus Hyoga",
      img: hyoga,
    },
    {
      name: "Pisces Aphrodite",
      img: afrodite,
    },
    {
      name: "Aquarius Camus",
      img: camus,
    },
    {
      name: "Polaris Hilda",
      img: hilda,
    },
    {
      name: "Phoenix Ikki",
      img: ikki,
    },
    {
      name: "Chameleon June",
      img: june,
    },
    {
      name: "Gemini Kanon",
      img: kanon,
    },
    {
      name: "Lizard Misty",
      img: misty,
    },
    {
      name: "Pegasus Seiya",
      img: seiya,
    },
    {
      name: "Snake Shina",
      img: shina,
    },
    {
      name: "Drago Shiryu",
      img: shiryu,
    },
    {
      name: "Andromeda Shun",
      img: shun,
    },
  ];
  const [clicked, setClicked] = useState([]);
  const [shuffle, setShuffle] = useState(knights);

  const fisherYatesShuffle = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]]; //Trade i for j by desestructuring
    }
    return arr;
  };

  const checkScore = (score) => {
    if (score > maxScore) {
      setMaxScore(score);
    }
  };

  const handleCardClick = (e) => {
    setShuffle(fisherYatesShuffle(knights));
    if (clicked.includes(e.target.id)) {
      console.log("rs");
      checkScore(count);
      setCount(0);
      setClicked((clicked) => []);
    } else {
      setClicked([...clicked, e.target.id]);
      setCount(count + 1);
    }
  };

  return (
    <>
      <Header count={count} maxScore={maxScore} />

      <div className="container">
        {shuffle.map((knight) => {
          const [name, img] = Object.values(knight);
          return (
            <Card
              id={name}
              key={name}
              name={name}
              img={img}
              onClick={handleCardClick}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
