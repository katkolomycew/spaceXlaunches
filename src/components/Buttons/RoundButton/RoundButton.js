import "../Buttons.scss";

const roundButton = (props) => {
  return (
    <button className="round-button button" onClick={props.clicked}>
      {props.title}
      <img src={props.icon} alt="refresh icon" className="button-icon" />
    </button>
  );
};

export default roundButton;