import React, {Component} from 'react';
import {NavMobile} from "./Nav_mobile";
import {Footer} from "./Footer";
import background from "../assets/recruitment_background.jpg";
import {Link} from 'react-router-dom';

class Recruitment extends Component {
    render() {
        return (
            <section className="recruitment">
                <NavMobile/>
                <img src={background} alt="Welder" className="recruitment__background"/>
                <div className="recruitment__background--filter"/>
                <div className="recruitment__container">
                    <article className='recruitment__content'>
                        <h2 className='recruitment__content__header'>Praca w <span>DMKA</span></h2>
                        <p className="recruitment__content__paragraph">Firma DMKA specjalizuje się w usługach
                            spawalniczo-monterskich.</p>
                        <p className="recruitment__content__paragraph">Jeśli nie widzisz oferty odpowiadającej Twoim
                            umiejętnościom lub zainteresowaniom, aplikuj z wyprzedzeniem za pośrednictwem formularza
                            kontaktowego.</p>
                    </article>
                    <aside className="recruitment__offers">
                        <h3 className="recruitment__offers--header">Aplikuj!</h3>
                        <div className="recruitment__offers--specializations">
                            <button className='specializations__button'><Link to='/recruitment/welders'>Spawacz</Link></button>
                            <button className='specializations__button'><Link to='/recruitment/assemblers'>Monter</Link></button>
                            <button className='specializations__button'><Link to='/recruitment/overhead-crane-operators'>Operator suwnicy</Link></button>
                            <button className='specializations__button'><Link to='/recruitment/forklift-operators'>Operator WJO</Link></button>
                            <button className='specializations__button'><Link to='/recruitment/welder-engineers'>Inżynier spawalnik</Link></button>
                            <button className='specializations__button'><Link to='/recruitment/blacksmiths'>Kowal</Link></button>
                        </div>
                    </aside>
                </div>
                <Footer/>
            </section>
        );
    };
}

export {Recruitment};