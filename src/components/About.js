import React, { Component } from "react";
import { NavMobile } from "./Nav_mobile";
import { Carousel } from "./Carousel";
import { Footer } from "./Footer";

class About extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <section className="about">
        <NavMobile />
        <div className="about__container">
          <div className="about__header">
            <h2 className="about__header--title">Poznaj Thorr</h2>
          </div>
          <div className="about__row">
            <div className="about__img slide-right"/>
            <div className="about_parag">
              <h3 className='slide-up'>Kim jesteśmy?</h3>
              <p className='slide-up'>
              Firma Thorr Sp. z o.o. została założona z myślą wpierania kluczowych gałęzi przemysłu ciężkiego i specjalizuje się w szeroko pojętych usługach spawalniczo-monterkich. Wieloletnie doświadczenie w między innymi w takich branżach jak stoczniowa, offshore, czy petrochemia zostało przekute w sprawnie działający mechanizm zaopatrujący liderów na rynku w najlepszych specjalistów dopasowanych do ich indywidualnych potrzeb.
              </p>
            </div>
          </div>

          <div className="about__row">
            <div className="about__img slide-left" />
            <div className="about_parag">
            <h3 className='slide-up'>Jak działamy?</h3>
              <p className='slide-up'>
              W związku z dynamicznym rozwojem przedsiębiorstwa Thorr Sp. z o.o. możemy zaoferować naszym klientom jeszcze więcej. Z chęcią pozyskujemy i realizujemy również zlecenia o zakres prac. W naszym portfolio znajdują się zarówno proste prace jak budowa fundamentów spawanych oraz i te zaawansowane jak samodzielna prefabrykacja rurociągów.
              </p>
            </div>
          </div>

          <div className="about__row">
            <div className="about__img slide-right" />
            <div className="about_parag">
            <h3 className='slide-up'>Co oferujemy?</h3>
              <p className='slide-up'>
              Działając na całym rynku europejskim mamy przyjemność poszerzać nasze kompetencje z każdym zleceniem. Aktualna liczba pracowników przekraczająca 150 osób, baza pracownicza sięgająca 5000 sprawdzonych kandydatów oraz zaplecze sprzętowe zapewniają dynamiczną realizację powierzonych zleceń.
              </p>
            </div>
          </div>
        </div>
        <Carousel />
        <Footer />
      </section>
    );
  }
}

export { About };
