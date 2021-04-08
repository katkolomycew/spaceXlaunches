import Alert from "react-bootstrap/Alert";

const modal = (props) => {
  return <Alert variant="danger">{props.error}</Alert>;
};

export default modal;
