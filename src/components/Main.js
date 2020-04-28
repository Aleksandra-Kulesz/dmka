import React, { Component } from "react";
// import mainBackground1 from "./../assets/backgrounds/main-background2.jpg";
// import mainBackground2 from "./../assets/backgrounds/main-background4.jpg";
// import mainBackground3 from "./../assets/backgrounds/main-background3.jpg";
// import mainBackground4 from "./../assets/backgrounds/main-background1.jpg";
import logo from "./../assets/logos/DMKA_logo.png";
import { Nav } from "./Nav";

class Main extends Component {
  // state = {
  //   bgs: [mainBackground1, mainBackground2, mainBackground3, mainBackground4],
  //   currentBg: 0
  // };

  // componentDidMount() {
  //   this.intervalID = setInterval(() => {
  //     if (this.state.currentBg < this.state.bgs.length - 1) {
  //       this.setState({
  //         currentBg: this.state.currentBg + 1
  //       });
  //     } else {
  //       this.setState({
  //         currentBg: 0
  //       });
  //     }
  //   }, 10000);
  // }

  // componentWillUnmount() {
  //   clearTimeout(this.intervalID);
  // }

  render() {
    return (
      <main>
        <div className="main__background"/>
        <div className='main__container'>
         {window.innerWidth>750?<img src={logo} alt="logo" className="main__logo" />:null}
         <Nav />
        </div>         
      </main>
    );
  }
}

export { Main };
