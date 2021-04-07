import Dropdown from "react-bootstrap/Dropdown";
import icon from "../../../assets/icon/sort.png";
import "../Buttons.scss";

const dropdownButton = (props) => {
  console.log(props.launchYears);
  return (
    <Dropdown>
      <Dropdown.Toggle id="dropdown-basic">
        Filter By Year <img src={icon} alt="sort-icon" />
      </Dropdown.Toggle>
      <Dropdown.Menu align="right" onClick={props.clicked}>
        <Dropdown.Item>{props.data}</Dropdown.Item>;
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default dropdownButton;
