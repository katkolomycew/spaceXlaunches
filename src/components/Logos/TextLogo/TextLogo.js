import "../Logos.scss";

const textLogo = (props) => {
  return (
    <div className="text-logo_wrapper">
      <img src={props.img} alt="text logo" className="text-logo" />
      <span className="text-logo_title">LAUNCHES</span>
    </div>
  );
};

export default textLogo;
