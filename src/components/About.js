import React, { Component } from "react";
import { NavMobile } from "./Nav_mobile";
import { Carousel } from "./Carousel";
import { Footer } from "./Footer";

import navikon from "./../assets/logos/navikon_logo.png";
import midroc from "./../assets/logos/midroc_logo.png";
import energyMont from "./../assets/logos/energy-mont_logo.png";
import dynpap from "./../assets/logos/dynpap_logo.png";
import EPG from "./../assets/logos/EPG_logo.png";
import thor from "./../assets/logos/thor_logo.png";
import crist from "./../assets/logos/crist_logo.png";
import wielospaw from "./../assets/logos/wielospaw_logo.png";
import WNS from "./../assets/logos/wns_logo.png";
import BO from "./../assets/logos/baltic_operator_logo.png";
import wielton from "./../assets/logos/wielton_logo.png";
import stalkon from "./../assets/logos/stalkon_logo.png";
import skanska from "./../assets/logos/skanska_logo.png";
import man from "./../assets/logos/man_logo.png";

class About extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const additionalLogos = [
      thor,
      crist,
      wielospaw,
      WNS,
      BO,
      wielton,
      stalkon,
      skanska,
      man
    ];

    return (
      <section className="about">
        <NavMobile />
        <div className="about__container">
          <article className="about__main">
            <h2 className="about__main__header">
              Poznaj <span>DMKA</span>
            </h2>
            <p className="about__main__content">
              Firma DMKA specjalizuje się w usługach spawalniczo-monterskich.
            </p>
            <p className="about__main__content">
              Uczestniczyliśmy w licznych projektach offshore, budowach
              zbiorników, mostów, dźwigów czy statków. Przez lata nabraliśmy
              doświadczenia, aby móc oferować usługi najwyższej jakości dla
              najbardziej wymagających klientów.
            </p>
          </article>
          <Carousel />
          <aside className="about__cooperators">
            <h3 className="about__cooperators--header">Zaufali nam</h3>
            <div className="about__cooperators--logos">
              <img
                src={navikon}
                alt="Navikon's logo"
                className="cooperator__logo"
              />
              <img
                src={midroc}
                alt="Midroc's logo"
                className="cooperator__logo"
              />
              <img
                src={energyMont}
                alt="Energy-Mont's logo"
                className="cooperator__logo"
              />
              <img
                src={dynpap}
                alt="Dynpap's logo"
                className="cooperator__logo"
              />
              <img src={EPG} alt="EPG's logo" className="cooperator__logo" />
              {window.innerWidth > 800
                ? additionalLogos.map((e, i) => (
                    <img
                      key={i}
                      src={e}
                      alt="company logo"
                      className="cooperator__logo"
                    />
                  ))
                : null}
            </div>
          </aside>
          <Footer />
        </div>
      </section>
    );
  }
}

export { About };
