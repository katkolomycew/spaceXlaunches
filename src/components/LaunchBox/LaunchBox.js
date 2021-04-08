import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import "./LaunchBox.scss";

const launchBox = (props) => {
  return (
    <div>
      <Card>
        <Card.Body>
          <div className="wrapper-left">
            <Card.Text className="number">#{props.number}</Card.Text>
            <Card.Text className="title">{props.title}</Card.Text>
          </div>
          <div className="wrapper-right">
            <Card.Text className="date">{props.date}</Card.Text>
            <Card.Text className="rocket">{props.rocket}</Card.Text>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

launchBox.propTypes = {
  number: PropTypes.number,
  title: PropTypes.string,
  date: PropTypes.string,
  rocket: PropTypes.string,
};

export default launchBox;
