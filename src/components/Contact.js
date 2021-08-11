import React, { Component } from "react";
import { NavMobile } from "./Nav_mobile";
import { ContactForm } from "./ContactForm";
import { Footer } from "./Footer";
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
          href="https://www.facebook.com/Thorr-103438815359437"
          target={"_blank"}
          className="facebook"
        >
          <i className="fab fa-facebook-f" />
        </a>
        <a
          href="https://www.linkedin.com/company/75442721"
          target={"_blank"}
          className="linkedIn"
        >
          <i className="fab fa-linkedin-in" />
        </a>
        <a
          href="https://www.gowork.pl/thorr-sp.-z-o.o.,23988375"
          target={"_blank"}
          className="goWork"
        >
          <i className="fas fa-briefcase"/>
        </a>
        <div className='contact__wrapper'>
          <div className="contact__details slide-right">
            <div className="contact__details__content">
              <h2 className="contact__header">Personel</h2>
              <div className="contact__details__personel--wrapper">
                <div className="contact__details--personel">
                  <div className="contact__details--person">
                    <span className="contact__details--name">Beata Bednarska</span>
                    <span className="contact__details--position">Administration Specialist</span>
                    <span className="contact__details--mail">beata@thorr.pl</span>
                    <span className="contact__details--phone">+48 577 390 001</span>
                  </div>

                  <div className="contact__details--person">
                    <span className="contact__details--name">Sylwia Marzeion</span>
                    <span className="contact__details--position">Finance Specialist</span>
                    <span className="contact__details--mail">sylwia@thorr.pl</span>
                    <span className="contact__details--phone">+48 533 131 515</span>
                  </div>

                  <div className="contact__details--person">
                    <span className="contact__details--name">Marina Cherenok</span>
                    <span className="contact__details--position">Human Resource Specialist</span>
                    <span className="contact__details--mail">marina@thorr.pl</span>
                    <span className="contact__details--phone">+48 575 817 703</span>
                  </div>
                </div>
                <div className="contact__details--personel">
                  <div className="contact__details--person">
                    <span className="contact__details--name">Kamil Dmytryszyn</span>
                    <span className="contact__details--position">Recruitment & Marketing Manager</span>
                    <span className="contact__details--mail">kamil@thorr.pl</span>
                    <span className="contact__details--phone">+48 537 827 631</span>
                    <span className="contact__details--phone">+48 512 577 301</span>
                  </div>

                  <div className="contact__details--person">
                    <span className="contact__details--name">Sławomir Ogonowski</span>
                    <span className="contact__details--position">General Director</span>
                    <span className="contact__details--mail">slawomirogonowski@thorr.pl</span>
                    <span className="contact__details--phone">+48 511 004 910</span>
                  </div>

                  <div className="contact__details--person">
                    <span className="contact__details--name">Andrzej Krystyniak</span>
                    <span className="contact__details--position">Chief Executive Officer</span>
                    <span className="contact__details--mail">andrzejkrystyniak@thorr.pl</span>
                    <span className="contact__details--phone">+48 791 319 303</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ContactForm
            type="element"
            handleInfoModal={this.handleOpenInfoModal}
          />
        </div>

        {this.state.isInfoModalOpen ? <InfoModal type={this.state.infoModalType} closeModal={this.handleInfoModalClose} /> : null}

        <Footer />
      </section>
    );
  }
}

export { Contact };
