import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <footer>
        <Link to="/">THORR</Link>
        <span> &copy; 2021</span>
        <a
          href="http://aleksandra-kulesz.github.io/portfolio"
          target={"_blank"}>
          Made by A. Kulesz
        </a>
      </footer>
    );
  }
}

export { Footer };
