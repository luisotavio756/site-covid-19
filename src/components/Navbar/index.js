import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCertificate } from '@fortawesome/free-solid-svg-icons'
// import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import Logo from '../../assets/img/kadoo.png';

import './styles.css';

export default function Navbar() {

    useEffect(() => {
        document.querySelectorAll('li.dropdown').forEach(item => {
            item.addEventListener('click', async () => {
                if(item.querySelector('.dropdown-content').offsetHeight == 0) {
                    let height = () => {
                        item.querySelector('.dropdown-content').style.opacity = '1';
                    };
                    
                    await height();
                    item.querySelector('.dropdown-content').style.height = '100%';
                }else {
                    let height = () => {
                        item.querySelector('.dropdown-content').style.opacity = '0';
                    };
                    
                    await height();
                    item.querySelector('.dropdown-content').style.height = '0';
                }
            })
        });
        // alert(JSON.stringify(data));

    });

    function openNav() {
        document.querySelector(".nav-menu button").style.opacity = '1';
        document.querySelector(".nav-menu ul").style.opacity = '1';
        document.querySelector(".nav-menu").style.width = '100%';
    }

    async function closeNav(e) {
        var fade = () => {
            e.style.opacity = '0';
            document.querySelector(".nav-menu ul").style.opacity = '0';
        }
        await fade();

        document.querySelector(".nav-menu").style.width = '0';
    }

    return (
        <>
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
                    {/* <FontAwesomeIcon icon={faFacebook} /> */}
                    <FontAwesomeIcon icon={faBars} />
                    <FontAwesomeIcon icon={faBars} />
                </div>
                <div className="menu-expand" onClick={openNav}>
                    <FontAwesomeIcon icon={faBars} />
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
                <button onClick={(e) => closeNav(e.target)} type="button">&times;</button>
            </div>
        </nav>
        </>
    );
}
