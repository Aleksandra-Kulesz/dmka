import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./../assets/logos/DMKA.png";

class NavMobile extends Component {
  state = {
    isOpen: false,
  };

  handleOpenClick = () => {
    this.setState({ isOpen: true });
  };

  handleCloseClick = () => {
    this.setState({ isOpen: false });
  };

  render() {
    if (window.innerWidth < 701) {
      if (!this.state.isOpen) {
        return (
          <nav className="nav__mobile">
            <Link to="/">
              <img
                src={logo}
                alt="DMKA logo"
                className="nav__mobile__main--logo"
              />
            </Link>
            <i className="fas fa-cogs" onClick={this.handleOpenClick} />
          </nav>
        );
      }

      return (
        <nav className="nav__mobile--open">
          <i onClick={this.handleCloseClick} className="fas fa-times" />
          <ul className="nav__mobile__list">
            <li className="nav__mobile__list__elem">
              <Link to="/about">Poznaj DMKA</Link>
            </li>
            <li className="nav__mobile__list__elem">
              <Link to="/bulletin">Dla firm</Link>
            </li>
            <li className="nav__mobile__list__elem">
              <Link to="/recruitment">Rekrutacja</Link>
            </li>
            <li className="nav__mobile__list__elem">
              <Link to="/contact">Kontakt</Link>
            </li>
          </ul>
        </nav>
      );
    }
    return (
      <nav className="nav__desktop">
        <Link to="/">
          <img src={logo} alt="DMKA logo" className="nav__mobile__main--logo" />
        </Link>
        <ul className="nav__mobile__list">
          <li className="nav__mobile__list__elem">
            <Link to="/about">Poznaj DMKA</Link>
          </li>
          <li className="nav__mobile__list__elem">
            <Link to="/bulletin">Dla firm</Link>
          </li>
          <li className="nav__mobile__list__elem">
            <Link to="/recruitment">Rekrutacja</Link>
          </li>
          <li className="nav__mobile__list__elem">
            <Link to="/contact">Kontakt</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export { NavMobile };
