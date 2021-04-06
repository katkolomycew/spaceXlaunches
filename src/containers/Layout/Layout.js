import React, { Component } from "react";
import axios from "../../axios-orders";
import Aux from "../../hoc/Aux/Aux";
import WithErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import "./Layout.scss";

class Layout extends Component {
  render() {
    return (
      <Aux>
        <h1>test2</h1>
      </Aux>
    );
  }
}

export default WithErrorHandler(Layout, axios);
