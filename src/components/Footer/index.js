import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHome, faPhoneAlt, faBox } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

import Logo from '../../assets/img/kadoo.png';
import { Row, Text, Section, Menu } from './styles';

export default function Footer() {
    return (
        <Row>
            <Section type="0">
                <Row>
                    <div className="col-4 logo-text">
                        <div className="img">
                            <img src={Logo} alt=""/>
                        </div>
                        <div className="content">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus sed voluptates aliquid omnis dignissimos, amet, natus suscipit fugit quisquam saepe consequatur. Quaerat rerum deserunt at ratione omnis impedit ducimus consectetur.</p>
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
                            <a href="#linke">
                                <FontAwesomeIcon icon={faWhatsapp}/>
                            </a>
                        </div>
                    </div>
                    <div className="col-2 menu">
                        <h1>Menus</h1>
                        <div className="content">
                            <Menu>
                                <li><Link to="#">Quem</Link></li>
                                <li><Link to="#">O Que</Link></li>
                                <li><Link to="#">Como</Link></li>
                                <li><Link to="#">Eventos</Link></li>
                                <li><Link to="#">Contato</Link></li>
                                <li><Link to="#">Jobs</Link></li>
                            </Menu>
                        </div>
                    </div>
                    <div className="col-2 menu">
                        <h1>Siga-nos</h1>
                        <div className="content">
                            <Menu>
                                <li><a href="#">Instagram</a></li>
                                <li><a href="#">Facebook</a></li>
                                <li><a href="#">LinkedIn</a></li>
                            </Menu>
                        </div>
                    </div>
                    <div className="col-3 contato">
                        <h1>Contato</h1>
                        <div className="content">
                            <Text>
                                <FontAwesomeIcon icon={faHome}/> Av. Dom Lino, 932 | Centro Russsas-CE | CEP: 62900-000 - Brasil
                            </Text>
                            <Text>
                                <FontAwesomeIcon icon={faBox}/> contato@kadoo.com.br
                            </Text>
                            <Text>
                                <FontAwesomeIcon icon={faPhoneAlt}/> +55 88 3411-0404
                            </Text>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="divider"></div>
                        <Section type="1">
                            <p>Copyright © 2020 Kadoo LTDA. Todos os direitos reservados.</p>
                        </Section>
                    </div>
                </Row>
            </Section>
            {/* <div className="col-12">
                <Section type="1">
                    <p>© 2020 Kadoo LTDA. Todos os direitos reservados.</p>
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
                    </div>
                </Section>
            </div> */}
        </Row>
    );
}
