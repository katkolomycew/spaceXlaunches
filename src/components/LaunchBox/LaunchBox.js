import Card from "react-bootstrap/Card";
import "./LaunchBox.scss";

const launchBox = (props) => {
  return (
    <div>
      <Card>
        <Card.Body>
          <div className="launch-box_wrapper-left">
            <Card.Text className="launch-box_number">#{props.number}</Card.Text>
            <Card.Text className="launch-box_title">{props.title}</Card.Text>
          </div>
          <div className="launch-box_wrapper-right">
            <Card.Text className="launch-box_date">{props.date}</Card.Text>
            <Card.Text className="launch-box_launch">{props.launch}</Card.Text>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default launchBox;
