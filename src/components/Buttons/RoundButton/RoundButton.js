import refreshIcon from "../../../assets/icon/refresh.png";
import "./RoundButton.scss";

const roundButton = (props) => {
  return (
    <button className="round-button" onClick={props.clicked}>
      {props.title}
      <img src={refreshIcon} alt="refresh icon" className="button-icon" />
    </button>
  );
};

export default roundButton;
