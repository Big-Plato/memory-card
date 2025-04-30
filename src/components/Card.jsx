import "./Card.css";

export default function Card({ onClick, name, img, id }) {
  return (
    <div className="card" onClick={onClick} id={id}>
      <div className="img-div">
        <img id={id} src={img} />
      </div>
      <h2>{name}</h2>
    </div>
  );
}
