import "../Buttons.scss";

const squareButton = (props) => {
  return (
    <button className="square-button button" onClick={props.clicked}>
      {props.title}
      <img src={props.icon} alt="sort icon" className="button-icon" />
    </button>
  );
};

export default squareButton;
