import React, { Component } from "react";
import axios from "../../axios-orders";
import moment from "moment";
import Aux from "../../hoc/Aux/Aux";
import DropdownButton from "../../components/Buttons/DropdownButton/DropdownButton";
import ImgLogo from "../../components/Logos/ImgLogo/ImgLogo";
import ImgLogoSrc from "../../assets/img/launch-home.png";
import LaunchBox from "../../components/LaunchBox/LaunchBox";
import ErrorModal from "../../components/ErrorModal/ErrorModal";
import RoundButton from "../../components/Buttons/RoundButton/RoundButton";
import RoundButtonIcon from "../../assets/icon/refresh.png";
import Spinner from "../../components/Spinner/Spinner";
import SquareButton from "../../components/Buttons/SquareButton/SquareButton";
import SquareButtonSortIcon from "../../assets/icon/sort.png";
import TextLogo from "../../components/Logos/TextLogo/TextLogo";
import TextLogoSrc from "../../assets/spacex-logo.png";
import WithErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import "./Layout.scss";

class Layout extends Component {
  state = {
    launchData: [],
    filteredLaunchData: [],
    sortedLaunchData: false,
    launchYearsData: [],
    error: null,
    errorMessage: "",
    loading: true,
  };

  componentDidMount() {
    this.fetchLaunchData();
  }

  fetchLaunchData = () => {
    axios
      .get("https://api.spacexdata.com/v3/launches")
      .then((response) => {
        const data = response.data;
        this.setState({
          launchData: data,
          filteredLaunchData: data,
          sortedLaunchData: false,
          launchYearsData: [...data].map((item) => item.launch_year),
          loading: false,
        });
      })
      .catch((error) =>
        this.setState({ error: error, errorMessage: error.message })
      );
  };

  reloadLaunchData = () => {
    this.fetchLaunchData();
  };

  sortDataHandler = () => {
    const reversed = [...this.state.filteredLaunchData].reverse();
    this.setState({
      filteredLaunchData: reversed,
      sortedLaunchData: !this.state.sortedLaunchData,
    });
  };

  filterDataHandler = (event) => {
    let filtered = [...this.state.launchData];
    filtered = filtered.filter((item) => {
      return item.launch_year === event.target.innerHTML;
    });

    this.setState({ filteredLaunchData: filtered });
  };

  render() {
    const iterated = [...this.state.launchYearsData];
    const filteredLaunchYears = iterated.filter(
      (value, id, filteredArray) => filteredArray.indexOf(value) === id
    );

    const renderedLaunchData = this.state.filteredLaunchData.map(
      (item, index) => {
        return (
          <LaunchBox
            key={index}
            number={item.flight_number}
            title={item.mission_name}
            date={moment(item.launch_date_utc).format("Do MMM YYYY")}
            rocket={item.rocket.rocket_name}
          />
        );
      }
    );

    return (
      <Aux>
        <div className="nav-wrapper">
          <TextLogo img={TextLogoSrc} />
          <RoundButton
            title="Reload Data"
            icon={RoundButtonIcon}
            clicked={this.reloadLaunchData}
          />
        </div>
        <div className="subnav-wrapper">
          <DropdownButton
            title="Filter By Year"
            clicked={(event) => this.filterDataHandler(event)}
            data={filteredLaunchYears}
          />
          <SquareButton
            title={
              this.state.sortedLaunchData ? "Sort Ascending" : "Sort Descending"
            }
            icon={SquareButtonSortIcon}
            clicked={this.sortDataHandler}
          />
        </div>
        <div className="left-wrapper">
          <ImgLogo img={ImgLogoSrc} />
        </div>
        <div className="right-wrapper">
          {this.state.error ? (
            <ErrorModal error={this.state.errorMessage} />
          ) : this.state.loading ? (
            <Spinner />
          ) : (
            renderedLaunchData
          )}
        </div>
      </Aux>
    );
  }
}

export default WithErrorHandler(Layout, axios);
