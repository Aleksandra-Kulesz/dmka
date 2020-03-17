import React, {Component} from 'react';

import slide1 from './../assets/slide1.jpg'
import slide2 from './../assets/slide2.jpg'
import slide3 from './../assets/slide3.jpg'
import slide4 from './../assets/slide4.jpg'
import slide5 from './../assets/slide5.jpg'
import slide6 from './../assets/slide6.jpg'
import slide7 from './../assets/slide7.jpg'
import slide8 from './../assets/slide8.jpg'
import slide9 from './../assets/slide9.jpg'
import slide10 from './../assets/slide10.jpg'

class Carousel extends Component {
state = {
    slides:[slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8, slide9, slide10],
    currentSlide: 0
};



handleNextSlide = ()=> {
    if (this.state.currentSlide>=(this.state.slides.length-1)){
        this.setState({currentSlide:0})
    } else {
        this.setState({currentSlide:this.state.currentSlide+1});
    }
}

handlePreviousSlide = ()=> {
    if (this.state.currentSlide<=0){
        this.setState({currentSlide:this.state.slides.length-1})
    } else
    this.setState({currentSlide:this.state.currentSlide-1});
}

    render(){
        return (
            <section className='about__carousel' >
                <h2>Galeria</h2>
                <p>Kilka ujęć z naszego dnia pracy.</p>
                <div className='carousel__container'>
                    <img className='carousel__slide' src={this.state.slides[this.state.currentSlide]} alt="from work"/>
                    <div className='carousel__arrow left' onClick={this.handlePreviousSlide}><i className="fas fa-chevron-left"/></div>
                    <div className='carousel__arrow right' onClick={this.handleNextSlide}><i className="fas fa-chevron-right"/></div>
                </div>
        </section>
        )
    }
};

export {Carousel}