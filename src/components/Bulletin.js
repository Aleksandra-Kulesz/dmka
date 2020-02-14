import React, {Component} from 'react';
import {NavMobile} from "./Nav_mobile";
import logo from './../assets/DMKA_logo.png'
import {Footer} from "./Footer";

class Bulletin extends Component{
    render() {
        return (
            <section className="bulletin">
                <NavMobile/>
                <div className="bulletin__title">
                    <img src={logo} alt="DMKA logo" className="bulletin__title__background"/>
                    <h2 className='bulletin__title__header'>Biuletyn dla firm</h2>
                    <a href='https://www.ets.org/s/gre/pdf/gre_info_bulletin_18_19.pdf' download className="bulletin__title__download"><i className="fas fa-file-download"/>Pobierz</a>
                </div>
                <Footer/>
            </section>
        )
    }
}

export {Bulletin}