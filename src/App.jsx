import "./App.css";
import Header from "./components/Header.jsx";
import Card from "./components/Card.jsx";
import { useEffect, useState } from "react"

function App() {
  const [clicked, setClicked] = useState("");
  const [shuffle, setShuffle] = useState([
    {
      name: "Hyoga de Cisne",
      img: "src/assets/hyoga.jpg",
    },
    {
      name: "Afrodite de Peixes",
      img: "src/assets/afrodite.jpg",
    },
    {
      name: "Camus de Aquário",
      img: "src/assets/camus.avif",
    },
    {
      name: "Hilda de Polaris",
      img: "src/assets/hilda.jpg",
    },
    {
      name: "Ikki de fênix",
      img: "src/assets/ikki.jpg",
    },
    {
      name: "June de Camaleão",
      img: "src/assets/june.webp",
    },
    {
      name: "Kanon de Gêmeos",
      img: "src/assets/kanon.webp",
    },
    {
      name: "Misty de Lagarto",
      img: "src/assets/misty.PNG",
    },
    {
      name: "Seiya de Pégasus",
      img: "src/assets/seiya.webp",
    },
    {
      name: "Shina de Cobra",
      img: "src/assets/shina.webp",
    },
    {
      name: "Shiryu de Dragão",
      img: "src/assets/shiryu.webp",
    },
    {
      name: "Shun de Andrômeda",
      img: "src/assets/shun.webp",
    },
  ]);

  const fisherYatesShuffle = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]]; //Trade i for j by desestructuring
    }
    return arr;
  };

  const handleCardClick = (event) => {
    setShuffle(fisherYatesShuffle(shuffle));
    console.log(event.target);
  }

  return (
    <>
      <Header />
      <div className="container" >
        {shuffle.map((knight) => {
          const [name, img] = Object.values(knight);
          return <Card 
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
