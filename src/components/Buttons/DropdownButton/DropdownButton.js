import Dropdown from "react-bootstrap/Dropdown";
import "../Buttons.scss";

const dropdownButton = (props) => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Filter By Year
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={props.clicked} eventKey="2006">
          2006
        </Dropdown.Item>
        <Dropdown.Item onClick={props.clicked}>2007</Dropdown.Item>
        <Dropdown.Item onClick={props.clicked}>2008</Dropdown.Item>
        <Dropdown.Item onClick={props.clicked}>2009</Dropdown.Item>
        <Dropdown.Item onClick={props.clicked}>2010</Dropdown.Item>
        <Dropdown.Item onClick={props.clicked}>2012</Dropdown.Item>
        <Dropdown.Item onClick={props.clicked}>2013</Dropdown.Item>
        <Dropdown.Item onClick={props.clicked}>2014</Dropdown.Item>
        <Dropdown.Item onClick={props.clicked}>2015</Dropdown.Item>
        <Dropdown.Item onClick={props.clicked}>2016</Dropdown.Item>
        <Dropdown.Item onClick={props.clicked}>2017</Dropdown.Item>
        <Dropdown.Item onClick={props.clicked}>2018</Dropdown.Item>
        <Dropdown.Item onClick={props.clicked}>2019</Dropdown.Item>
        <Dropdown.Item onClick={props.clicked}>2020</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default dropdownButton;
