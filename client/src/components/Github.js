import React, { Component } from "react";
import github from "../images/github.png";
import "./github.css";

class Github extends Component {
  render() {
    return (
      <div className="github-wrapper">
        <a
          className="github-logo-wrapper"
          href="https://github.com/ysmike/yelp-heavy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="github-logo" className="github-logo" />
        </a>
      </div>
    );
  }
}

export default Github;
