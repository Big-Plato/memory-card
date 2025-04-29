import "./Header.css";
import { useState } from "react";

export default function Header() {
  const [count, setCount] = useState(0);
  const [maxScore, setMaxScore] = useState(0);

  return (
    <div className="header">
      <h1>Memory Game</h1>
      <div className="score">
        <p>Score: {count}</p>
        <p>Max Score: {maxScore}</p>
      </div>
    </div>
  );
}
