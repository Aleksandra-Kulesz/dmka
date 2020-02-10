import React, {Component} from 'react';
import {NavMobile} from "./Nav_mobile";
import background from './../assets/bulletin_background.jpg'
import bulletin from './../assets/bulletin_example.jpg'
import logo from './../assets/DMKA_logo.png'
import {Footer} from "./Footer";

class Bulletin extends Component{
    render() {
        return (
            <section className="bulletin">
                <NavMobile/>
                <img src={background} alt="checkered plate" className="bulletin__background"/>
                <div className="bulletin__title">
                    <img src={logo} alt="DMKA logo" className="bulletin__title__background"/>
                    <h2 className='bulletin__title__header'>Biuletyn dla firm</h2>
                    <a href='https://www.ets.org/s/gre/pdf/gre_info_bulletin_18_19.pdf' download className="bulletin__title__download"><i className="fas fa-file-download"/>Pobierz</a>
                </div>
                <div className="bulletin__container">
                    <img src={bulletin} alt="bulletin page 1" className="bulletin__container__content"/>
                    <img src={bulletin} alt="bulletin page 2" className="bulletin__container__content"/>
                    <img src={bulletin} alt="bulletin page 3" className="bulletin__container__content"/>
                </div>
                <Footer/>
            </section>
        )
    }
}

export {Bulletin}