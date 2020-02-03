import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import background from './../assets/bulletin_background.jpg'
import bulletin from './../assets/bulletin_example.jpg'
import logo from './../assets/DMKA_logo.png'

class Bulletin extends Component{
    render() {
        return (
            <section className="bulletin">
                <img src={background} alt="checkered plate" className="bulletin__background"/>
                <div className="bulletin__title">
                    <img src={logo} alt="DMKA logo" className="bulletin__title__background"/>
                    <h2 className='bulletin__title__header'>Biuletyn dla firm</h2>
                    <button className="bulletin__title__download"><i className="fas fa-file-download"/>Pobierz</button>
                </div>
                <div className="bulletin__container">
                    <img src={bulletin} alt="bulletin page 1" className="bulletin__container__content"/>
                    <img src={bulletin} alt="bulletin page 2" className="bulletin__container__content"/>
                    <img src={bulletin} alt="bulletin page 3" className="bulletin__container__content"/>
                </div>
            </section>
        )
    }
}

export {Bulletin}