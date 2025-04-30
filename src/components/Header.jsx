import "./Header.css";

export default function Header({ count, maxScore }) {
  return (
    <div className="header">
      <div className="name-description">
        <h1>Saint Seiya Memory Game</h1>
        <p>
          Whenever you click on a card, keep it in mind because you can't click
          on the same card again.
        </p>
      </div>
      <div className="score">
        <p>Score: {count}</p>
        <p>Max Score: {maxScore}</p>
      </div>
    </div>
  );
}
