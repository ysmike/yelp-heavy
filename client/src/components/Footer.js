import React, { Component } from "react";
import "./footer.css";

class Footer extends Component {
  render() {
    return (
      <footer className="footer-style">
        * (% positive reviews) - (% negative reviews); ranges from -100 to 100.
        For additional detail, please refer to the&nbsp;
        <a
          href="https://github.com/ysmike/yelp-heavy"
          target="_blank"
          rel="noopener noreferrer"
        >
          readme
        </a>
        .
      </footer>
    );
  }
}

export default Footer;
