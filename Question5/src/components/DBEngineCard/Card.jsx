import "./Card.scss";
const Card = (props) => {
  return (
    <div className="card">
      <ul>
        <li>{props.point_1}</li>
        <li>{props.point_2}</li>
        <li>{props.point_3}</li>
      </ul>
      <img src="https://bitnine.net/wp-content/uploads/2022/04/Password-Profile.png" width={'100%'} />
    </div>
  );
};

export default Card;
