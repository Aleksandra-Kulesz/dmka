import React, {Component} from 'react';
import {NavMobile} from "./Nav_mobile";
import {Footer} from "./Footer";
import logo from './../assets/DMKA_logo.png'

class Contact extends Component {
    render() {
        return (
            <section className="contact">
                <NavMobile/>
                <a href="https://www.facebook.com/DMKAGdynia/" target='_blank' className='facebook'><i
                    className="fab fa-facebook-f"/></a>
                <div className="contact__details">
                    <img src={logo} alt="DMKA logo" className="contact__details__background"/>
                    <div className="contact__details__content">
                        <h2 className="contact__header">Kontakt</h2>
                        <span className='contact__details--mail'>kontakt@dmka.eu</span>
                        <span className='contact__details--mail'>rekrutacja@dmka.eu</span>
                        <span className='contact__details--mail'>biura@dmka.eu</span>
                        <span className='contact__details--phone'>+ 48 512 577 301 / + 48 537 827 631</span>
                        <span className='contact__details--nip'>NIP: 741-21-00-720</span>
                        <span className='contact__details--address'>ul. J. Porazińskiej 8c/7 81-593 Gdynia</span>
                    </div>
                </div>
                <form className="contact__form">
                    <h2 className="contact__form__header">Formularz kontaktowy</h2>
                    <div className="contact__form__personal--information">
                        <label for='name'><i className="fas fa-user"/></label>
                        <input id='name ' type="text" className="contact__form__input--name"
                               placeholder='np. Jan Kowalski'/>
                        <label for='phone'><i className="fas fa-mobile-alt"/></label>
                        <input id='phone' type="number" className="contact__form__input--phone"
                               placeholder='np. +48 000 000 000'/>
                    </div>
                    <label for='message'><i className="fas fa-pencil-alt"/></label>
                    <textarea id='message' className="contact__form__input--message"
                              placeholder='Tutaj wpisz swoją wiadomość'/>
                    <button className='contact__form__submit'><i className="fas fa-arrow-circle-up"/>Wyślij</button>
                </form>
                <Footer/>
            </section>
        )
    }
}

export {Contact};
