import PropTypes from "prop-types";
import "../Logos.scss";

const textLogo = (props) => {
  return (
    <div>
      <img src={props.img} alt="logo" className="text-logo" />
      <span className="text-logo_title">LAUNCHES</span>
    </div>
  );
};

textLogo.propTypes = {
  img: PropTypes.string.isRequired,
};

export default textLogo;
