import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from './../assets/DMKA_logo.png'

class NavMobile extends Component {
    state = {
        isOpen: false
    };

    handleOpenClick =() =>{
      this.setState({isOpen:true})
    };

    handleCloseClick =() =>{
        this.setState({isOpen:false})
    };

    render() {
        if (!this.state.isOpen) {
            return (
                <nav className='nav__mobile'>
                    <Link to='/'>
                        <div className="nav__mobile__main">
                            <img src={logo} alt="DMKA logo" className="nav__mobile__main--logo"/>
                            <h2 className="nav__mobile__main--name">DMKA</h2>
                        </div>
                    </Link>
                    <i className="fas fa-cogs" onClick={this.handleOpenClick}/>
                </nav>
            )
        }

        return (
            <nav className='nav__mobile--open'>
                <i onClick={this.handleCloseClick} className="fas fa-times"/>
                <ul className='nav__mobile__list'>
                    <li className='nav__mobile__list__elem'><Link to='/about'>Poznaj DMKA</Link></li>
                    <li className='nav__mobile__list__elem'><Link to='/bulletin'>Dla firm</Link></li>
                    <li className='nav__mobile__list__elem'>Rekrutacja</li>
                    <li className='nav__mobile__list__elem'>Kontakt</li>
                </ul>
            </nav>
        )
    }
}

export {NavMobile};
