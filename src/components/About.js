import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import background from './../assets/about_background.jpg'
import logo from './../assets/DMKA_logo.png'
import navikon from './../assets/navikon_logo.png'
import midroc from './../assets/midroc_logo.png'
import energyMont from './../assets/energy-mont_logo.png'
import dynpap from './../assets/dynpap_logo.png'
import EPG from './../assets/EPG_logo.png'

class About extends Component {
    render() {
        return (
            <section className='about'>
                <img src={background} alt="Welder" className="about__background"/>
                <div className="about__background--filter"/>
                <div className="about__container">
                    <article className='about__main'>
                        <header className='about__main__header'>
                            <Link to='/'><img src={logo} alt='DMKA logo' className='about__main__header--logo'/></Link>
                            <h2 className='about__main__header--title'>Poznaj <span>DMKA</span></h2>
                        </header>
                        <p className="about__main__content">Firma DMKA specjalizuje się w usługach
                            spawalniczo-monterskich.</p>
                        <p className="about__main__content">Uczestniczyliśmy w licznych projektach offshore, budowach
                            zbiorników,
                            mostów, dźwigów czy statków. Przez lata nabraliśmy doświadczenia, aby móc oferować usługi
                            najwyższej jakości dla najbardziej wymagających klientów.</p>
                    </article>
                    <aside className="about__cooperators">
                        <h3 className="about__cooperators--header">Zaufali nam:</h3>
                        <div className="about__cooperators--logos">
                            <img src={navikon} alt="Navikon's logo" className="cooperator__logo"/>
                            <img src={midroc} alt="Midroc's logo" className="cooperator__logo"/>
                            <img src={energyMont} alt="Energy-Mont's logo" className="cooperator__logo"/>
                            <img src={dynpap} alt="Dynpap's logo" className="cooperator__logo"/>
                            <img src={EPG} alt="EPG's logo" className="cooperator__logo"/>
                        </div>
                    </aside>
                </div>

            </section>
        )
    }
}

export {About};