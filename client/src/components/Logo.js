import React, { Component } from "react";
import logo from "../images/logo.png";
import "./logo.css";

class Logo extends Component {
  render() {
    return (
      <div className="wrapper">
        <a className="logo-wrapper" href="/">
          <img src={logo} alt="logo" className="logo" />
        </a>
      </div>
    );
  }
}

export default Logo;
