import "./Card.css";

export default function Card({ name, img }) {
  return (
    <div className="card">
      <div className="img-div">
        <img src={img} />
      </div>
      <h2>{name}</h2>
    </div>
  );
}
