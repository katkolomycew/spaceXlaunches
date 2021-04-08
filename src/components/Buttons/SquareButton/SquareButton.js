import PropTypes from "prop-types";
import "../Buttons.scss";

const squareButton = (props) => {
  return (
    <button className="square-button button" onClick={props.clicked}>
      {props.title}
      <img src={props.icon} alt="sort icon" className="button-icon" />
    </button>
  );
};

squareButton.propTypes = {
  clicked: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default squareButton;
