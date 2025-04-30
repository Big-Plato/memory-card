import "./Card.css";

export default function Card({ onClick, name, img }) {
  return (
    <div className="card" onClick={onClick} >
      <div className="img-div">
        <img src={img} />
      </div>
      <h2>{name}</h2>
    </div>
  );
}
