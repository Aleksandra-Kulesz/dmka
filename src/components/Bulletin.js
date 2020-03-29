import React, { Component } from "react";
import { NavMobile } from "./Nav_mobile";
import logo from "./../assets/logos/DMKA_logo.png";
import bulletin from './../assets/bulletin_example.pdf'
import { Footer } from "./Footer";


class Bulletin extends Component {
  render() {
    return (
      <section className="bulletin">
        <NavMobile />
        <img src={logo} alt="DMKA logo" className="bulletin__title" />
        <h2 className="bulletin__title__header">Biuletyn dla firm</h2>
        <a
          href={bulletin}
          className="bulletin__title__download"
          download>
          <i className="fas fa-file-download" /> Pobierz
        </a>
        <Footer />
      </section>
    );
  }
}

export { Bulletin };
