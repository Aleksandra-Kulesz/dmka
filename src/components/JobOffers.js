import React, { Component } from "react";
import { NavMobile } from "./Nav_mobile";
import { Footer } from "./Footer";
import { JobOffer } from "./JobOffer";
import { Link } from "react-router-dom";
import { SpinnerRoundFilled } from "spinners-react";

class JobOffers extends Component {
  state = {
    isLoaded: false,
    jobOffers: [],
    currentTypeOfferArr: []
  };

  handleSortOffer = arr => {
    const currentTypeOfferArr = [];

    arr.map((e) => {
      return this.props.header === e.attributes.position
        ? currentTypeOfferArr.push(e)
        : null;
    });

    this.setState({ currentTypeOfferArr: currentTypeOfferArr });
  };

  componentDidMount() {
    window.scrollTo(0, 0);

    fetch("http://panel.dmka.allan690.usermd.net/api/job_offers")
      .then(r => {
        if (r.ok === true) {
          return r.json();
        } else {
          throw new Error("Do głębokiego dupska");
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
          formularz kontaktowy.
        </p>
        <Link to="/contact">
          <button className="btn">Aplikuj!</button>
        </Link>
      </>
    );
    const offerList = (
      <ul className="list__container">
        {this.state.currentTypeOfferArr.map((e, i) => {
          return <JobOffer job={e} key={i} />;
        })}
      </ul>
    );

    if (this.state.isLoaded) {
      return (
        <section className="jobOffers">
          <NavMobile />
          <h2 className="jobOffers__header">{this.props.header}</h2>
          <p className="jobOffers__paragraph">
            Naciśnij na nagłówek ogłoszenia, żeby dowiedzieć się więcej o
            ofercie.
          </p>
          <div className="jobOffers__lists">
            {this.state.currentTypeOfferArr.length === 0
              ? infoParagraph
              : offerList}
          </div>
          <Footer />
        </section>
      );
    } else {
      return (
        <div className='container'>
          <SpinnerRoundFilled
            color="#ff8d0a"
            size={90}
            speed={97}
            thickness={180}/>
        </div>
      );
    }
  }
}

export { JobOffers };
