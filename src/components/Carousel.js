import React, { Component } from "react";

import navikon from "./../assets/logos/navikon_logo.png";
import midroc from "./../assets/logos/midroc_logo.png";
import energyMont from "./../assets/logos/energy-mont_logo.png";
import dynpap from "./../assets/logos/dynpap_logo.png";
import EPG from "./../assets/logos/EPG_logo.png";
import thor from "./../assets/logos/thor_logo.png";
import crist from "./../assets/logos/crist_logo.png";
import wielospaw from "./../assets/logos/wielospaw_logo.png";
import WNS from "./../assets/logos/wns_logo.png";
import stalkon from "./../assets/logos/stalkon_logo.png";
import skanska from "./../assets/logos/skanska_logo.png";
import man from "./../assets/logos/man_logo.png";

class Carousel extends Component {
  state = {
    slides: [
      wielospaw,
      WNS,
      stalkon,
      navikon,
      midroc,
      dynpap,
      EPG,
      thor,
      crist,
      skanska,
      man,
      energyMont
    ],
    prevSlide: 0,
    currentSlide: 1,
    nextSlide: 2,
  };

  handleNextSlide = () => {
    if (window.innerWidth < 600) {
      if (this.state.currentSlide > this.state.slides.length - 1) {
        this.setState({ currentSlide: 0 });
      } else this.setState({ currentSlide: this.state.currentSlide + 1 });
    } else {
      if (this.state.prevSlide >= this.state.slides.length - 3) {
        this.setState({ prevSlide: 0 });
      } else {
        this.setState({ prevSlide: this.state.prevSlide + 3 });
      }
      if (this.state.currentSlide >= this.state.slides.length - 2) {
        this.setState({ currentSlide: 1 });
      } else {
        this.setState({ currentSlide: this.state.currentSlide + 3 });
      }
      if (this.state.nextSlide >= this.state.slides.length - 1) {
        this.setState({ nextSlide: 2 });
      } else {
        this.setState({ nextSlide: this.state.nextSlide + 3 });
      }
    }
  };

  handlePreviousSlide = () => {
    if (window.innerWidth < 600) {
      if (this.state.currentSlide <= 0) {
        this.setState({ currentSlide: this.state.slides.length - 1 });
      } else this.setState({ currentSlide: this.state.currentSlide - 1 });
    } else {
      console.log(this.state.slides.length - 3)
      if (this.state.prevSlide <= 0) {
        this.setState({ prevSlide: this.state.slides.length - 3});
      } else {
        this.setState({ prevSlide: this.state.prevSlide - 3 });
      }
      if (this.state.currentSlide <= 1) {
        this.setState({ currentSlide: this.state.slides.length - 2});
      } else {
        this.setState({ currentSlide: this.state.currentSlide - 3 });
      }
      if (this.state.nextSlide <= 2) {
        this.setState({ nextSlide: this.state.slides.length - 1});
      } else {
        this.setState({ nextSlide: this.state.nextSlide - 3 });
      }
    }
  };

  render() {
    return (
      <section className="about__carousel">
        <h2>Zaufali nam:</h2>
        <div className="carousel__container">
          {window.innerWidth<600? <img
            className="carousel__slide"
            src={this.state.slides[this.state.currentSlide]}
            alt="from work"
          />:<><img
            className="carousel__slide"
            src={this.state.slides[this.state.prevSlide]}
            alt="from work"
          />

          <img
            className="carousel__slide"
            src={this.state.slides[this.state.currentSlide]}
            alt="from work"
          />
          <img
            className="carousel__slide"
            src={this.state.slides[this.state.nextSlide]}
            alt="from work"
          />
          </>}
          

          <div
            className="carousel__arrow left"
            onClick={this.handlePreviousSlide}
          >
            <i className="fas fa-chevron-left" />
          </div>
          <div className="carousel__arrow right" onClick={this.handleNextSlide}>
            <i className="fas fa-chevron-right" />
          </div>
        </div>
      </section>
    );
  }
}

export { Carousel };
