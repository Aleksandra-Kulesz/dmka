import React, {Component} from 'react';
import { Link } from "react-router-dom";

class Nav extends Component {
    render() {
        return (
            <nav className='mainNav'>
                <ul className='nav__list'>
                    <li className='nav__list__elem slide-left'><Link to='/about'>Poznaj DMKA</Link></li>
                    <li className='nav__list__elem slide-left'><Link to='/bulletin'>Dla firm</Link></li>
                    <li className='nav__list__elem slide-left'><Link to='/recruitment'>Rekrutacja</Link></li>
                    <li className='nav__list__elem slide-left'><Link to='/contact'>Kontakt</Link></li>
                </ul>
            </nav>
        )
    }
}

export {Nav};