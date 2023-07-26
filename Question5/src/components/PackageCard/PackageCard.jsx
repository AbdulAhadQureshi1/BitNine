import "./PackageCard.scss";
const PackageCard = (props) => {
  return (
    <div className="package-card">
      <div className="card-side front">
        <div>{props.heading}</div>
      </div>
      <div className="card-side back">
        <ul>
            <li>{props.p1}</li>
            <li>{props.p2}</li>
        </ul>
      </div>
    </div>
  );
};

export default PackageCard;
