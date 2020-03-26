import React, { useState } from 'react';

// Import Router
import { Link } from 'react-router-dom';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

// Import Logo
import Logo from '../../../assets/img/corona-logo.svg';

// Import Styleds;
import { NavBar, NavContent, NavMenu, Social } from './styles';

// Import Scroll
import scrollToIdOnClick from '../../../assets/js/scroll';

export default function Navbar() {
    
    const [ nav, SetNav ] = useState(false);

    return (
        <NavBar id="navbar">
            <NavContent>
                <div className="brand">
                    <div className="logo">
                        <Link to="/"><img src={Logo} alt=""/> Corona Info</Link>
                    </div>
                </div>
                <div className="menu-expand" onClick={(e) => SetNav(true)}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
                <NavMenu open={nav}>
                    <ul>
                        <li><a href="#cases" onClick={(e) => { SetNav(false); scrollToIdOnClick(e) }}>Casos</a></li>
                        <li><a href="#prevention" onClick={(e) => { SetNav(false); scrollToIdOnClick(e) }}>Sobre o Covid-19</a></li>
                        <li><a href="#footer" onClick={(e) => { SetNav(false); scrollToIdOnClick(e) }}>Envolvidos</a></li>
                    </ul>
                    <button onClick={(e) => SetNav(false)} type="button">&times;</button>
                </NavMenu>
            </NavContent>
        </NavBar>
    );
}
