import PropTypes from "prop-types";
import "../Buttons.scss";

const roundButton = (props) => {
  return (
    <button className="round-button button" onClick={props.clicked}>
      {props.title}
      <img src={props.icon} alt="refresh icon" className="button-icon" />
    </button>
  );
};

roundButton.propTypes = {
  clicked: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default roundButton;
