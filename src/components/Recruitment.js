import React, {Component} from 'react';
import {NavMobile} from "./Nav_mobile";
import {Footer} from "./Footer";
import {Link} from 'react-router-dom';

class Recruitment extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <section className="recruitment">
                <NavMobile/>
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
                        <Link to='/recruitment/welders'><button className='specializations__button'>Spawacz</button></Link>
                        <Link to='/recruitment/assemblers'><button className='specializations__button'>Monter</button></Link>
                        <Link to='/recruitment/overhead-crane-operators'><button className='specializations__button'>Operator suwnicy</button></Link>
                        <Link to='/recruitment/forklift-operators'><button className='specializations__button'>Operator WJO</button></Link>
                        <Link to='/recruitment/welder-engineers'><button className='specializations__button'>Inżynier spawalnik</button></Link>
                        <Link to='/recruitment/blacksmiths'><button className='specializations__button'>Kowal</button></Link>
                        </div>
                    </aside>
                </div>
                <Footer/>
            </section>
        );
    };
}

export {Recruitment};