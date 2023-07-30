import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import PropTypes from "prop-types";

export default class App extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
  };
  static propTypes = {
    country: propTypes.String,
    pageSize: propTypes.number,
  };

  render() {
    return (
      <div>
        <NavBar />
        <News pageSize={9} country="in" category="science" />
      </div>
    );
  }
}
