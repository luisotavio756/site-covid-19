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

export default function Navbar() {
    
    const [ nav, SetNav ] = useState(false);

    return (
        <NavBar id="navbar">
            <NavContent>
                <div className="brand">
                    <div className="logo">
                        <Link to="/"><img src={Logo} alt=""/> Covid-19</Link>
                    </div>
                </div>
                <div className="menu-expand" onClick={(e) => SetNav(true)}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
                <NavMenu open={nav}>
                    <ul>
                        <li><Link onClick={() => SetNav(false) } to="/quem">Casos</Link></li>
                        <li><Link onClick={() => SetNav(false) } to="/oque">Prevenção</Link></li>
                        <li><Link onClick={() => SetNav(false) } to="/como">Contato</Link></li>
                    </ul>
                    <button onClick={(e) => SetNav(false)} type="button">&times;</button>
                </NavMenu>
            </NavContent>
        </NavBar>
    );
}
