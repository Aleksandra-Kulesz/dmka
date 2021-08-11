import React, { Component } from "react";
import mainBackground1 from "./../assets/backgrounds/main-background1.jpg";
import mainBackground2 from "./../assets/backgrounds/main-background2.jpg";
import mainBackground3 from "./../assets/backgrounds/main-background3.jpg";
import mainBackground4 from "./../assets/backgrounds/main-background4.jpg";
import mainBackground5 from "./../assets/backgrounds/main-background5.jpg";
import logo from "./../assets/logos/Thorr.png";
import { Nav } from "./Nav";

class Main extends Component {
  state = {
    bgs: [mainBackground1, mainBackground2, mainBackground3, mainBackground4, mainBackground5],
    currentBg: 0,
    animation: "slide-right",
    base: "main__background"
  };

  componentDidMount() {
    this.intervalID = setInterval(() => {
      if (this.state.currentBg < this.state.bgs.length - 1) {
        this.setState({
          currentBg: this.state.currentBg + 1
        });
      } else {
        this.setState({
          currentBg: 0,
        });
      }
      if (this.state.animation === 'slide-right') {
        this.setState({
          animation: "slide-left"
        });
      } else {
        this.setState({
          animation: "slide-right"
        });
      }
    }, 5000);
  }

  componentWillUnmount() {
    clearTimeout(this.intervalID);
  }

  render() {
    return (
      <main>
        <div className={`${this.state.animation} ${this.state.base}`} style={{ backgroundImage: `url(${this.state.bgs[this.state.currentBg]})`}}/>
        <div className='main__container'>
        <img src={logo} alt="logo" className="main__logo" />
         <Nav />
        </div>         
      </main>
    );
  }
}

export { Main };
