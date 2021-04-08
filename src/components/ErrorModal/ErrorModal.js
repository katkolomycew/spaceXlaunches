import PropTypes from "prop-types";
import Alert from "react-bootstrap/Alert";

const modal = (props) => {
  return <Alert variant="danger">{props.error}</Alert>;
};

modal.propTypes = {
  error: PropTypes.string.isRequired,
};

export default modal;
