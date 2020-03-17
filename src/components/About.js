import React, {Component} from 'react';
import {NavMobile} from "./Nav_mobile";
import {Carousel} from "./Carousel";
import {Footer} from "./Footer";

import navikon from './../assets/navikon_logo.png';
import midroc from './../assets/midroc_logo.png';
import energyMont from './../assets/energy-mont_logo.png';
import dynpap from './../assets/dynpap_logo.png';
import EPG from './../assets/EPG_logo.png';
import BO from './../assets/baltic_operator_logo.png';
import wielton from './../assets/wielton_logo.png';
import stalkon from './../assets/stalkon_logo.png';
import skanska from './../assets/skanska_logo.png';
import man from './../assets/man_logo.png';


class About extends Component {
    render() {

const additionalLogos = [BO, wielton, stalkon, skanska, man];

        return (
            <section className='about'>
                <NavMobile/>
                <div className="about__container">
                    <article className='about__main'>
                        <h2 className='about__main__header'>Poznaj <span>DMKA</span></h2>
                        <p className="about__main__content">Firma DMKA specjalizuje się w usługach
                            spawalniczo-monterskich.</p>
                        <p className="about__main__content">Uczestniczyliśmy w licznych projektach offshore, budowach
                            zbiorników,
                            mostów, dźwigów czy statków. Przez lata nabraliśmy doświadczenia, aby móc oferować usługi
                            najwyższej jakości dla najbardziej wymagających klientów.</p>
                    </article>
                    <Carousel/>
                    <aside className="about__cooperators">
                        <h3 className="about__cooperators--header">Zaufali nam</h3>
                        <div className="about__cooperators--logos">
                            <img src={navikon} alt="Navikon's logo" className="cooperator__logo"/>
                            <img src={midroc} alt="Midroc's logo" className="cooperator__logo"/>
                            <img src={energyMont} alt="Energy-Mont's logo" className="cooperator__logo"/>
                            <img src={dynpap} alt="Dynpap's logo" className="cooperator__logo"/>
                            <img src={EPG} alt="EPG's logo" className="cooperator__logo"/>
                            {window.innerWidth>800?additionalLogos.map((e, i)=><img key={i} src={e} alt='company logo' className="cooperator__logo" />):null}
                        </div>
                    </aside>
                    <Footer/>
                </div>
            </section>
        )
    }
}

export {About};