import React, { Component } from "react";
import { ContactForm } from "./ContactForm";

class JobOffer extends Component {
  state = {
    isOfferOpen: false,
    isModalOpen: false
  };

  handleOfferOpen = () => {
    this.setState({ isOfferOpen: !this.state.isOfferOpen });
  };

  handleModalOpen = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  };

  handleModalClose = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    let classes = "job__description";
    if (this.state.isOfferOpen) {
      classes = "job__description--open";
    }

    return (
      <li className="job" onClick={e => this.handleOfferOpen(e)}>
        <h3 className="job__name">
          {this.props.job.attributes.position} -{" "}
          {this.props.job.attributes.place}
        </h3>

        <p className={classes}>
          <span>Miejsce pracy: {this.props.job.attributes.place}</span>
          Opis: {this.props.job.attributes.description}
          <span>Stawka: {this.props.job.attributes.salary}</span>
        </p>

        <button className="job_application" onClick={this.handleModalOpen}>
          Aplikuj!
        </button>

        {this.state.isModalOpen ? (
          <ContactForm
            type="modal"
            position={this.props.job.attributes.position}
            closeModal={this.handleModalClose}
          />
        ) : null}
      </li>
    );
  }
}

export { JobOffer };
