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
            <h2 className="about__header--title">Poznaj DMKA</h2>
          </div>
          <div className="about__row">
            <div className="about__img slide-right"/>
            <div className="about_parag">
              <h3 className='slide-up'>Głupotki</h3>
              <p className='slide-up'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo
                reiciendis veniam nihil dicta in! Aliquam assumenda repellendus
                ex soluta enim ipsam ad est, earum repudiandae odio quam
                deleniti facilis voluptatem.
              </p>
            </div>
          </div>

          <div className="about__row">
            <div className="about__img slide-left" />
            <div className="about_parag">
            <h3 className='slide-up'>I współpraca</h3>
              <p className='slide-up'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
                necessitatibus mollitia optio itaque nisi earum harum,
                laudantium reprehenderit sunt doloremque sapiente corporis
                adipisci voluptatum nihil perferendis voluptatem inventore!
                Sint, id.
              </p>
            </div>
          </div>

          <div className="about__row">
            <div className="about__img slide-right" />
            <div className="about_parag">
            <h3 className='slide-up'>to sukces!</h3>
              <p className='slide-up'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab eos
                dolorem maxime.
              </p>
            </div>
          </div>
        </div>
        <Carousel/>
        <Footer />
      </section>
    );
  }
}

export { About };
