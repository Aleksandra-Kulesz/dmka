import React, {Component} from 'react';
import {NavMobile} from "./Nav_mobile";
import {Footer} from "./Footer";
import {JobOffer} from "./JobOffer";

class JobOffers extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {

        return (
            <section className="jobOffers">
                <NavMobile/>
                <h2 className="jobOffers__header">{this.props.header}</h2>
                <p className="jobOffers__paragraph">Naciśnij na nagłówek ogłoszenia, żeby dowiedzieć się więcej o ofercie.</p>
                <div className="jobOffers__lists">
                    <ul className="list__container">
                        {this.props.job.map((e,i) => {
                            return (
                                <JobOffer job={e} key={i}/>
                            )
                        })}
                    </ul>
                </div>
                <Footer/>
            </section>
        )
    }
}

export {JobOffers};