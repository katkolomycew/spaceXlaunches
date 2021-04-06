import React, { Component } from "react";
import axios from "../../axios-orders";
import Aux from "../../hoc/Aux/Aux";
import ImgLogo from "../../components/Logos/ImgLogo/ImgLogo";
import ImgLogoSrc from "../../assets/img/launch-home.png";
import LaunchBox from "../../components/LaunchBox/LaunchBox";
import RoundButton from "../../components/Buttons/RoundButton/RoundButton";
import RoundButtonIcon from "../../assets/icon/refresh.png";
import SquareButton from "../../components/Buttons/SquareButton/SquareButton";
import SquareButtonFilterIcon from "../../assets/icon/select.png";
import SquareButtonSortIcon from "../../assets/icon/sort.png";
import TextLogo from "../../components/Logos/TextLogo/TextLogo";
import TextLogoSrc from "../../assets/spacex-logo.png";
import WithErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import "./Layout.scss";

class Layout extends Component {
  render() {
    return (
      <Aux>
        <div className="top">
          <TextLogo img={TextLogoSrc} />
          <RoundButton title="Reload Data" icon={RoundButtonIcon} />
        </div>
        <div className="buttons">
          <SquareButton title="Filter by Year" icon={SquareButtonFilterIcon} />
          <SquareButton title="Sort Descending" icon={SquareButtonSortIcon} />
        </div>
        <div className="left">
          <ImgLogo img={ImgLogoSrc} />
        </div>
        <div className="right">
          <LaunchBox />
        </div>
      </Aux>
    );
  }
}

export default WithErrorHandler(Layout, axios);
