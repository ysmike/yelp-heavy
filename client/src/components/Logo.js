import React, { Component } from "react";
import logo from "../images/logo_transparent.png";
import "./logo.css";

class Logo extends Component {
  render() {
    return (
      <div className="main-wrapper">
        <a className="main-logo-wrapper" href="/">
          <img src={logo} alt="logo" className="main-logo" />
        </a>
      </div>
    );
  }
}

export default Logo;
