import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <footer>
        <Link to="/">DMKA</Link>
        <span> &copy; 2020</span>
        <a
          href="http://aleksandra-kulesz.github.io/portfolio"
          target={"_blank"}>
          Made with <i className="fas fa-heart" /> by A. Kulesz
        </a>
      </footer>
    );
  }
}

export { Footer };
