import React from 'react';

import './styles.css';
import Logo from '../../assets/img/kadoo.png';

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-brand">
                <div className="brand">
                    <div className="logo">
                        <img src={Logo} />
                    </div>
                    <h4>
                        Kadoo
                    </h4>
                </div>
                <div className="social">
                    icones
                </div>
            </div>
            <div className="nav-menu">
                <ul>
                    <li className="active">Home</li>
                    <li className="dropdown">Programas &#9662;
                        <ul className="dropdown-content">
                            <li>Kadoo.hub</li>
                            <li>Kadoo.lab</li>
                            <li>Kadoo.hack</li>
                        </ul>
                    </li>
                    <li>Eventos</li>
                    <li>Jobs</li>
                    <li>Blog</li>
                </ul>
            </div>
        </nav>
    );
}
