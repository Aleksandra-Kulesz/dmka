import React, { Component } from "react";
import { NavMobile } from "./Nav_mobile";
import { Footer } from "./Footer";
import { JobOffer } from "./JobOffer";
import { Link } from "react-router-dom";
import { SpinnerRoundFilled } from "spinners-react";
import { InfoModal } from "./InfoModal";

class JobOffers extends Component {
  state = {
    isLoaded: false,
    jobOffers: [],
    currentTypeOfferArr: [],
    isInfoModalOpen: false,
    infoModalType: ""
  };

  handleSortOffer = arr => {
    const currentTypeOfferArr = [];

    arr.map(e => {
      return this.props.header === e.attributes.position
        ? currentTypeOfferArr.push(e)
        : null;
    });

    this.setState({ currentTypeOfferArr: currentTypeOfferArr });
  };

  handleOpenInfoModal = status => {
    let infoModalType = "";

    if (status >= 200 && status < 300) {
      infoModalType = "success";
    } else {
      infoModalType = "failure";
    }

    this.setState({ isInfoModalOpen: true, infoModalType: infoModalType });
  };

  handleInfoModalClose = () => {
    this.setState({ isInfoModalOpen: false });
  };

  componentDidMount() {
    window.scrollTo(0, 0);

    fetch("http://panel.dmka.allan690.usermd.net/api/job_offers")
      .then(r => {
        if (r.ok === true) {
          return r.json();
        } else {
          throw new Error("err");
        }
      })
      .then(data => {
        this.setState(
          { jobOffers: data.data },
          this.setState({ isLoaded: true })
        );
        this.handleSortOffer(this.state.jobOffers);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const infoParagraph = (
      <>
        <p className="jobOffers__paragraph">
          Aktualnie brak ofert w tej kategorii, aplikuj z wyprzedzeniem przez
          wiadomość email.
        </p>
        <Link to="/contact">
          <button className="btn">Aplikuj!</button>
        </Link>
      </>
    );
    const offerList = (
      <ul className="list__container">
        {this.state.currentTypeOfferArr.map((e, i) => {
          return (
            <JobOffer
              job={e}
              key={i}
              handleInfoModal={status => this.handleOpenInfoModal(status)}
            />
          );
        })}
      </ul>
    );

    if (this.state.isLoaded) {
      return (
        <section className="jobOffers">
          <NavMobile />
          <h2 className="jobOffers__header">{this.props.header}</h2>
          <div className="jobOffers__lists">
            {this.state.currentTypeOfferArr.length === 0
              ? infoParagraph
              : offerList}
          </div>

          {this.state.isInfoModalOpen ? (
            <InfoModal
              type={this.state.infoModalType}
              closeModal={this.handleInfoModalClose}
            />
          ) : null}

          <Footer />
        </section>
      );
    } else {
      return (
        <div className="container">
          <SpinnerRoundFilled
            color="#ff8d0a"
            size={90}
            speed={97}
            thickness={180}
          />
        </div>
      );
    }
  }
}

export { JobOffers };
