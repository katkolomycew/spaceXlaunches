import PropTypes from "prop-types";
import Dropdown from "react-bootstrap/Dropdown";
import "../Buttons.scss";

const dropdownButton = (props) => {
  return (
    <Dropdown>
      <Dropdown.Toggle id="dropdown-basic">{props.title}</Dropdown.Toggle>
      <Dropdown.Menu onClick={props.clicked}>
        {props.data.map((item, index) => {
          return <Dropdown.Item key={index}>{item}</Dropdown.Item>;
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};

dropdownButton.propTypes = {
  title: PropTypes.string.isRequired,
  clicked: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
};

export default dropdownButton;
