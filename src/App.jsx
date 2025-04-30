import "./App.css";
import Header from "./components/Header.jsx";
import Card from "./components/Card.jsx";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [maxScore, setMaxScore] = useState(0);
  const knights = 
    [
    {
      name: "Cygnus Hyoga",
      img: "public/assets/hyoga.jpg",
    },
    {
      name: "Pisces Aphrodite",
      img: "public/assets/afrodite.jpg",
    },
    {
      name: "Aquarius Camus",
      img: "public/assets/camus.avif",
    },
    {
      name: "Polaris Hilda",
      img: "public/assets/hilda.jpg",
    },
    {
      name: "Phoenix Ikki",
      img: "public/assets/ikki.jpg",
    },
    {
      name: "Chameleon June",
      img: "public/assets/june.webp",
    },
    {
      name: "Gemini Kanon",
      img: "public/assets/kanon.webp",
    },
    {
      name: "Lizard Misty",
      img: "public/assets/misty.PNG",
    },
    {
      name: "Pegasus Seiya",
      img: "public/assets/seiya.webp",
    },
    {
      name: "Snake Shina",
      img: "public/assets/shina.webp",
    },
    {
      name: "Drago Shiryu",
      img: "public/assets/shiryu.webp",
    },
    {
      name: "Andromeda Shun",
      img: "public/assets/shun.webp",
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
      setMaxScore(score)
    } 
  }

  const handleCardClick = (e) => {
    setShuffle(fisherYatesShuffle(knights));
    if (clicked.includes(e.target.id)) {
      console.log('rs');
      checkScore(count);
      setCount(0);
      setClicked(clicked => []);
    } else {
      setClicked([...clicked, e.target.id]);
      setCount(count + 1);
    }
  }

  return (
    <>
      <Header 
        count={count} 
        maxScore={maxScore}
      />

      <div className="container" >
        {shuffle.map((knight) => {
          const [name, img] = Object.values(knight);
          return <Card 
                    id={name}
                    key={name} 
                    name={name} 
                    img={img} 
                    onClick={handleCardClick} 
                  />;
        })}
      </div>
    </>
  );
}

export default App;
