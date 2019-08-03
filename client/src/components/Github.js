import React, { Component } from "react";
import github from "../images/github.png";
import "./github.css";

class Github extends Component {
  render() {
    return (
      <div className="wrapper">
        <a
          className="logo-wrapper"
          href="https://github.com/ysmike/yelp-heavy"
          target="_blank"
        >
          <img src={github} alt="logo" className="logo" />
        </a>
      </div>
    );
  }
}

export default Github;
