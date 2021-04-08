import Spinner from "react-bootstrap/Spinner";
import "./Spinner.scss";

const spinner = () => {
  return (
    <div className="spinner_container">
      <Spinner animation="border" role="status" variant="primary">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
};

export default spinner;
