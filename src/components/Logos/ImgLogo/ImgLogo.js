import PropTypes from "prop-types";
import "../Logos.scss";

const imgLogo = (props) => {
  return <img src={props.img} alt="logo" className="img-logo" />;
};

imgLogo.propTypes = {
  img: PropTypes.string.isRequired,
};

export default imgLogo;
