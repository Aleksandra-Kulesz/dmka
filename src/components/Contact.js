import React, { Component } from "react";
import { NavMobile } from "./Nav_mobile";
import { ContactForm } from "./ContactForm";
import { Footer } from "./Footer";
import logo from "./../assets/logos/DMKA_logo.png";
import { InfoModal } from "./InfoModal";

class Contact extends Component {
  state = {
    isInfoModalOpen: false,
    infoModalType: ""
  };

  handleOpenInfoModal = status => {
    let infoModalType = "";

    if (status === "") {
      infoModalType = "failure";
    } else {
      infoModalType = "success";
    }

    this.setState({ isInfoModalOpen: true, infoModalType: infoModalType });
  };

  handleInfoModalClose = () => {
    this.setState({ isInfoModalOpen: false });
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <section className="contact">
        <NavMobile />
        <a
          href="https://www.facebook.com/DMKAGdynia/"
          target={"_blank"}
          className="facebook"
        >
          <i className="fab fa-facebook-f" />
        </a>
        <div className='contact__wrapper'>
        <div className="contact__details slide-right">
          <img
            src={logo}
            alt="DMKA logo"
            className="contact__details__background"
          />
          <div className="contact__details__content">
            <h2 className="contact__header">Kontakt</h2>
            <span className="contact__details--mail">kontakt@dmka.eu</span>
            <span className="contact__details--mail">rekrutacja@dmka.eu</span>
            <span className="contact__details--mail">biura@dmka.eu</span>
            <span className="contact__details--phone">
              {" "}
              + 48 512 577 301 / + 48 537 827 631{" "}
            </span>
            <span className="contact__details--nip">NIP: 741-21-00-720</span>
            <span className="contact__details--address">
              {" "}
              ul. J. Porazińskiej 8c/7 81-593 Gdynia{" "}
            </span>
          </div>
        </div>
        <ContactForm
          type="element"
          handleInfoModal={this.handleOpenInfoModal}
        />
        </div>

        {this.state.isInfoModalOpen?<InfoModal type={this.state.infoModalType} closeModal={this.handleInfoModalClose}/>:null}

        <Footer />
      </section>
    );
  }
}

export { Contact };
