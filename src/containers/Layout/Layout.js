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
  state = {
    launchData: [],
    sortedLaunchData: false,
  };

  componentDidMount() {
    this.fetchLaunchData();
  }

  fetchLaunchData = () => {
    axios
      .get("https://api.spacexdata.com/v3/launches")
      .then((response) => {
        const data = response.data;
        this.setState({ launchData: data });
      })
      .catch((error) => console.log(error));
  };

  sortDataHandler = () => {
    const sorted = [...this.state.launchData].reverse();
    this.setState({
      launchData: sorted,
      sortedLaunchData: !this.state.sortedLaunchData,
    });
  };

  render() {
    return (
      <Aux>
        <div className="top">
          <TextLogo img={TextLogoSrc} />
          <RoundButton
            title="Reload Data"
            icon={RoundButtonIcon}
            clicked={this.fetchLaunchData}
          />
        </div>
        <div className="buttons">
          <SquareButton title="Filter by Year" icon={SquareButtonFilterIcon} />
          <SquareButton
            title={
              this.state.sortedLaunchData ? "Sort Ascending" : "Sort Descending"
            }
            icon={SquareButtonSortIcon}
            clicked={this.sortDataHandler}
          />
        </div>
        <div className="left">
          <ImgLogo img={ImgLogoSrc} />
        </div>
        <div className="right">
          {this.state.launchData.map((d, i) => {
            return (
              <LaunchBox
                key={i}
                number={d.flight_number}
                title={d.mission_name}
                date={new Date(d.launch_date_utc).toLocaleDateString()}
                launch={d.rocket.rocket_name}
              />
            );
          })}
        </div>
      </Aux>
    );
  }
}

export default WithErrorHandler(Layout, axios);
