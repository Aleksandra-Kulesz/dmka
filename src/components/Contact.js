import React, {Component} from 'react';
import {NavMobile} from "./Nav_mobile";
import {Footer} from "./Footer";
import logo from './../assets/logos/DMKA_logo.png'

class Contact extends Component {

    state = {
        name: '',
        phone: '',
        message:'',
        errors: []
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    handleFormSubmit = e => {
        e.preventDefault();
        const errors = [];
        const {name, phone, message} = this.state;

        if (name.length < 3 || phone.length < 9 || message.length < 3) {
            errors.push('Pola imię i nazwisko oraz wiadomość muszą składać się z co najmniej 3 znaków, a pole numer telefonu z co najmniej 9.');
            this.setState({
                errors,
            });
        }
    };

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <section className="contact">
                <NavMobile/>
                <a href="https://www.facebook.com/DMKAGdynia/" target={'_blank'} className='facebook'><i
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
                <form className="contact__form" onSubmit={this.handleFormSubmit}>
                    <h2 className="contact__form__header">Formularz kontaktowy</h2>
                    <div className="contact__form__input">
                    <i className="fas fa-user"/>
                        <input id='name ' onChange={this.handleChange} name='name' type="text" className="contact__form__input--name"
                               placeholder='np. Jan Kowalski'/>
                    </div>
                    <div className="contact__form__input">
                    <i className="fas fa-mobile-alt"/>
                        <input id='phone' type="number" onChange={this.handleChange} name='phone' className="contact__form__input--phone"
                               placeholder='np. +48 000 000 000'/>
                    </div>
                    <div className="contact__form__input">
                    <i className="fas fa-pencil-alt"/>
                    <textarea id='message' onChange={this.handleChange} name='message' className="contact__form__input--message"
                              placeholder='Tutaj wpisz swoją wiadomość'/>
                    </div>
                    <div className="contact__form__input">
                    <input type='file'/>
                    </div>

        {this.state.errors.length>0?<p className="contact__form__errors">{this.state.errors.map((e)=>e)}</p>:null}

                    <button className='contact__form__submit' onClick={this.handleFormSubmit}><i className="fas fa-arrow-circle-up"/>Wyślij</button>
                </form>
                <Footer/>
            </section>
        )
    }
}

export {Contact};
