import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faBookReader, faTools, faLaptopCode } from '@fortawesome/free-solid-svg-icons'

// import './styles.css';
import { Row, ContainerSection, Background, Card, Img1 } from './styles';
import Ig1 from '../../assets/img/education.svg';
import Ig2 from '../../assets/img/brain.svg';
import Ig3 from '../../assets/img/startup.svg';

const data = [
    {
        img: Ig1,
        title: 'Educação',
        desc: 'A Kadoo Tecnologia vem buscando projetar um cenário tecnológico em Russas e no Vale do Jaguaribe, sempre tentando valorizarA Kadoo Tecnologia vem buscando projetar um cenário tecnológico em Russas e no Vale do Jaguaribe.'
    },
    {
        img: Ig2,
        title: 'Tecnologia',
        desc: 'A Kadoo Tecnologia vem buscando projetar um cenário tecnológico em Russas e no Vale do Jaguaribe, sempre tentando valorizar..'
    },
    {
        img: Ig3,
        title: 'Empreendedorismo',
        desc: 'A Kadoo Tecnologia vem buscando projetar um cenário tecnológico em Russas e no Vale do Jaguaribe, sempre tentando valorizar..'
    }
];

export default function Section() {

    return (
        <Row>
            <Background className="col-12">
                <ContainerSection className="row">
                    {data.map(item => (
                        <Card>
                            <div className="img">
                                <Img1 src={ item.img }/>
                            </div>
                            <div className="title">
                                <h1>{ item.title }</h1>
                            </div>
                            <div className="divider"></div>
                            <div className='desc'>
                                <p>{ item.desc }</p>
                            </div>
                            <div className="icon">
                                {/* <FontAwesomeIcon icon={faCaretDown}/> */}
                            </div>
                        </Card>
                    ))}
                </ContainerSection>
            </Background>
        </Row>
    );
}
