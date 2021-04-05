import "../Logos.scss";

const imgLogo = (props) => {
  return (
    <div className="img-logo_wrapper">
      <img src={props.img} alt="logo" className="img-logo" />
    </div>
  );
};

export default imgLogo;
