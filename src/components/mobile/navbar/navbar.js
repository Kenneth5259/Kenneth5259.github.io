import React, {useState} from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faFileAlt, faLaptopCode, faQuoteLeft, faUser} from '@fortawesome/free-solid-svg-icons';

import logo from './assets/favicon.png'
import './navbar.css';


const NavBar = (props) => {
    const [showNav, toggleShowNav] = useState(false)
    return (
        <div className="navbar">
            <div className="navbar__logo"><img src={logo}/></div>
            <div className="navbar__spacer"></div>
            <div className="navbar__toggle" onClick={() => toggleShowNav(!showNav)}><FontAwesomeIcon icon={faBars} size="2x"></FontAwesomeIcon></div>
            {showNav ? 
            <div className="navbar__list__container" onClick={() => toggleShowNav(false)}>
                <ul className="navbar__list"> 
                    <li className="navbar__list__item" onClick={() => {
                        toggleShowNav(false);
                        props.setActiveNav('about')
                    }}>About Me <div className="navbar__list__item__icon"><FontAwesomeIcon icon={faUser} size='lg'/></div></li>
                    <li className="navbar__list__item" onClick={() => {
                        toggleShowNav(false);
                        props.setActiveNav('portfolio')
                    }}>Portfolio <div className="navbar__list__item__icon"><FontAwesomeIcon icon={faLaptopCode} size='lg'/></div></li>
                    <li className="navbar__list__item" onClick={() => {
                        toggleShowNav(false);
                        props.setActiveNav('testimonials')
                    }}>Testimonials <div className="navbar__list__item__icon"><FontAwesomeIcon icon={faQuoteLeft} size='lg'/></div></li>
                    <li className="navbar__list__item" onClick={() => {
                        toggleShowNav(false);
                        props.setActiveNav('resume')
                    }}>Resume <div className="navbar__list__item__icon"><FontAwesomeIcon icon={faFileAlt} size='lg'/></div></li>
                </ul>
            </div> : null}
        </div>
    )
}

export default NavBar;