import React, { useState, useEffect } from 'react';

// Import Router
import { Link, withRouter, useLocation } from 'react-router-dom';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHeart } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

// Import Logo
import Logo from '../../../assets/img/corona-logo.svg';

// Import Styleds;
import { NavBar, NavContent, NavMenu, Social } from './styles';

// Import Scroll
import scrollToIdOnClick from '../../../assets/js/scroll';

export default function Navbar() {
    

    const [ nav, SetNav ] = useState(false);
    
    var his = useLocation().pathname;

    useEffect(() => {
        // alert(JSON.stringify(his))
    });

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
                            { his == '/' && 
                                <>
                                    <li><a href="#cases" onClick={(e) => { SetNav(false); scrollToIdOnClick(e) }}>Casos</a></li>
                                    <li><a href="#prevention" onClick={(e) => { SetNav(false); scrollToIdOnClick(e) }}>Sobre o Covid-19</a></li>
                                    <li><a href="#help" onClick={(e) => { SetNav(false); scrollToIdOnClick(e) }}>Ajude no Combate</a></li>
                                    <li className="route"><Link to="/ajudar" onClick={(e) =>  SetNav(false) }><FontAwesomeIcon icon={faHeart} /> Quero ajudar</Link></li>
                                </>
                            }
                            { his == '/ajudar' && 
                                <li><Link to="/" onClick={(e) => SetNav(false) }>Voltar para Início</Link></li> 
                            }
                        </ul>
                        <button onClick={(e) => SetNav(false)} type="button">&times;</button>
                    </NavMenu>
            </NavContent>
        </NavBar>
    );
}
