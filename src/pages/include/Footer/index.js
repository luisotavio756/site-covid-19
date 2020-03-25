import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

import Logo from '../../../assets/img/kadoo.png';
import Logo2 from '../../../assets/img/copy.png';
import Arthur from '../../../assets/img/arthur.png';
import Otavio from '../../../assets/img/otavio.jpg';
import Flaviano from '../../../assets/img/flaviano.jpeg';
import Joathan from '../../../assets/img/joathan.jpeg';
import { Row, Card, Section, Menu } from './styles';


const array = [
    {
        name: 'Luis Otávio',
        img: Otavio,
        position: 'Desenvolvedor',
        links: [
            {
                link: 'https://github.com/luisotavio756',
                icon: faGithub
            },
            {
                link: 'https://www.instagram.com/luisotaviioc/',
                icon: faInstagram
            },
            {
                link: 'https://www.linkedin.com/in/lu%C3%ADs-ot%C3%A1vio-87851517a/',
                icon: faLinkedin
            }
        ]
    },
    {
        name: 'Flaviano',
        img: Flaviano,
        position: 'Desenvolvedor',
        links: [
            {
                link: 'https://github.com/flavisXavier',
                icon: faGithub
            },
            {
                link: 'https://instagram.com/flavisxavier',
                icon: faInstagram
            },
            {
                link: '',
                icon: faLinkedin
            }
        ]
    },
    {
        name: 'Joathan',
        img: Joathan,
        position: 'Empresário',
        links: [
            {
                link: 'https://www.facebook.com/jonhata.starrelres',
                icon: faFacebook
            },
            {
                link: 'https://www.instagram.com/jonhata.starrelres/',
                icon: faInstagram
            },
        ]
    },
    {
        name: 'Arthur R.',
        img: Arthur,
        position: 'Desenvolvedor da API',
        links: [
            {
                link: 'https://github.com/devarthurribeiro/',
                icon: faGithub
            },
            {
                link: 'https://www.linkedin.com/in/arthur-ribeiro-564263150/',
                icon: faLinkedin
            }
        ]
    },
];

export default function Footer() {
    return (
        <Row id="footer">
            <Section type="0">
                <Row>
                    <div className="col-12 logo-text">
                        <div className="title">
                            <h1>Este projeto está sendo uma parceria entre</h1>
                        </div>
                        <div className="links">
                            <p><a href="https://includejr.com.br" target="_blank">Include Jr</a> e <a href="https://www.instagram.com/kadootecnologia/?hl=pt-br" target="_blank">Kadoo Tecnologia</a></p>
                        </div>
                    </div>
                    {/* <div className="col-12">
                        <div className="divider"></div>
                        <Section type="1">
                            <p>Copyright © 2020 Kadoo LTDA. Todos os direitos reservados.</p>
                        </Section>
                    </div> */}
                </Row>
                <Row>
                    <div className="col-12 contrib">
                        <h3><FontAwesomeIcon icon={faUsers}/> Contribuidores</h3>
                    </div>
                    { array.map(item => (
                        <div className="col-3" style={{ marginTop: 10 }}>
                            <Card>
                                <div className="img">
                                    <img src={ item.img } alt=""/>
                                </div>
                                <div className="desc">
                                    <h2>{ item.name }</h2>
                                    <p>{ item.position }</p>
                                </div>
                                <div className="social">
                                    { item.links.map(itemLink => (
                                        <a href={ itemLink.link } target="_blank">
                                            <FontAwesomeIcon icon={ itemLink.icon }/>
                                        </a>
                                    ))}
                                </div>
                            </Card>
                        </div>
                    ))}
                </Row>
            </Section>
            <div className="col-12 copy" >
                <p>Copyright © IncludeJr & Kadoo Tecnologia.</p>
            </div>
        </Row>
    );
}
