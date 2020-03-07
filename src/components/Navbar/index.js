import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Logo from '../../assets/img/kadoo.png';

// import './styles.css';
import { NavBar, NavContent, NavMenu, Social } from './styles';

export default function Navbar() {

    useEffect(() => {
        document.querySelectorAll('li.dropdown').forEach(item => {
            item.addEventListener('click', async () => {
                if(item.querySelector('.dropdown-content').offsetHeight === 0) {
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
        // document.querySelector(".nav-menu button").style.opacity = '1';
        // document.querySelector(".nav-menu ul").style.opacity = '1';
        // document.querySelector(".nav-menu").style.width = '100%';
        // alert('open')
    }

    async function closeNav(e) {
        var fade = () => {
            e.style.opacity = '0';
            // document.querySelector(".nav-menu ul").style.opacity = '0';
        }

        await fade();

        document.querySelector(".nav-menu").style.width = '0';
    }

    return (
        <NavBar>
            <Social id="social">
                <div className="contato">
                    +55 81 3425.4700 | contato@kadoo.org.br
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
                        <img src={Logo} />
                    </div>
                </div>
                {/* <div className="menu-expand" onClick={openNav}>
                    <FontAwesomeIcon icon={faBars} />
                </div> */}
                <NavMenu>
                    <ul>
                        <li>QUEM</li>
                        <li>O QUE</li>
                        <li>COMO</li>
                        <li>EVENTOS</li>
                        <li>CONTATO</li>
                        <li>JOBS</li>
                    </ul>
                    <button onClick={(e) => closeNav(e.target)} type="button">&times;</button>
                </NavMenu>
            </NavContent>
        </NavBar>
    );
}
