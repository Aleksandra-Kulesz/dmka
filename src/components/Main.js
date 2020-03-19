import React, {Component} from 'react';
import mainBackground1 from './../assets/main-background2.jpg'
import mainBackground2 from './../assets/main-background4.jpg'
import mainBackground3 from './../assets/main-background3.jpg'
import mainBackground4 from './../assets/main-background1.jpg'
import logo from './../assets/DMKA_logo.png'
import {Nav} from "./Nav";

class Main extends Component {
    state = {
        bgs: [mainBackground1, mainBackground2, mainBackground3, mainBackground4],
        currentBg: 0

    };

    componentDidMount() {
        this.intervalID = setInterval(() => {

                if (this.state.currentBg < this.state.bgs.length-1) {
                    this.setState({
                        currentBg: this.state.currentBg + 1
                    });
                } else {
                    this.setState({
                        currentBg: 0
                    });
                }
            }, 5000
        )
    }

    componentWillUnmount() {
        clearTimeout(this.intervalID);
    }

    render() {
        return (
            <main>
                <img src={this.state.bgs[this.state.currentBg]} alt="offshore" className="main__background"/>
                <img src={logo} alt="logo" className="main__logo"/>
                <h1 className='main__header'>DMKA</h1>
                <Nav/>
            </main>
        )
    }
}

export {Main};
