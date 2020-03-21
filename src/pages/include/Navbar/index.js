import React, { useState } from 'react';

// Import Router
import { Link } from 'react-router-dom';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

// Import Logo
import Logo from '../../../assets/img/kadoo.png';

// Import Styleds;
import { NavBar, NavContent, NavMenu, Social } from './styles';

export default function Navbar() {
    
    const [ nav, SetNav ] = useState(false);

    return (
        <NavBar>
            <Social id="social">
                <div className="contato">
                    +55 88 3411-0404 | contato@kadoo.com.br
                </div>
                <div className="social">
                    <a href="#face">
                        <FontAwesomeIcon icon={faFacebook}/>
                    </a>
                    <a href="#insta">
                        <FontAwesomeIcon icon={faInstagram}/>  
                    </a>
                    <a href="#linke">
                        <FontAwesomeIcon icon={faLinkedin}/>
                    </a>
                    {/* <Link to="/login">Login</Link> */}
                </div>
            </Social>
            <div className="divider"></div>
            <NavContent>
                <div className="brand">
                    <div className="logo">
                        <Link to="/"><img src={Logo} /></Link>
                    </div>
                </div>
                <div className="menu-expand" onClick={(e) => SetNav(true)}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
                <NavMenu open={nav}>
                    <ul>
                        <li><Link to="/quem">QUEM</Link></li>
                        <li><Link to="/oque">O QUE</Link></li>
                        <li><Link to="/como">COMO</Link></li>
                        <li><Link to="/eventos">EVENTOS</Link></li>
                        <li><Link to="/contato">CONTATO</Link></li>
                        <li><Link to="/jobs">JOBS</Link></li>
                    </ul>
                    <button onClick={(e) => SetNav(false)} type="button">&times;</button>
                </NavMenu>
            </NavContent>
        </NavBar>
    );
}
