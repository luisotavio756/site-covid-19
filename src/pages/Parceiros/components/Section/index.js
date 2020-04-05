import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons'


import Flaviano from '../../../../assets/img/flaviano.jpeg';

import RGym from '../../../../assets/img/rgym.jpeg';
import { Row, Card, Section, Menu } from './styles';


const array = [
    {
        name: 'RGym',
        img: RGym,
        position: 'Academia',
        frase: 'Frase',
        links: [
            {
                link: 'https://api.whatsapp.com/send?phone=+5588999901647',
                icon: faWhatsapp
            },
            {
                link: 'https://www.instagram.com/r_gym1/',
                icon: faInstagram
            },
        ]
    },
    
];

export default function Footer() {
    return (
        <Row id="parceiros">
            <Section type="0">
                <Row>
                    <div className="col-12 logo-text">
                        <div className="title">
                            <h1>Conheça os parceiros que estão fazendo o projeto acontecer</h1>
                        </div>
                        <div className="links">
                            <p>Empresas <span>empenhadas</span> em <span>compartilhar o bem</span></p>
                        </div>
                    </div>
                    {/* <div className="col-12">
                        <div className="divider"></div>
                        <Section type="1">
                            <p>Copyright © 2020 Kadoo LTDA. Todos os direitos reservados.</p>
                        </Section>
                    </div> */}
                </Row>
                <Row style={{ marginTop: 30}}>
                    { array.map(item => (
                        <div key={item.name} className="col-4" style={{ marginTop: 10 }}>
                            <Card>
                                <div className="img">
                                    <img src={ item.img } alt=""/>
                                </div>
                                <div className="desc">
                                    <h2>{ item.name }</h2>
                                    <p>{ item.position }</p>
                                    <p className="frase">"{ item.frase }"</p>
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
                <p>Copyright © IncludeJr</p>
            </div>
        </Row>
    );
}
