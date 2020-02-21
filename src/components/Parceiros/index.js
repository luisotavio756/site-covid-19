import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

import { Row, ContainerSection, Img, Itens, Item } from './styles';

import Include from '../../assets/img/parceiros/logo.svg';
import Hiper from '../../assets/img/parceiros/hiper.svg'
export default function Parceiros() {
    return (
        <Row>
            <ContainerSection className="col-12">
                <div className="row">
                    <div className="title">
                        <h1>Conheça nossos Parceiros</h1>
                        <p>Nos ajudamos mutuamente para um único propósito: o de mudar nossa cidade !</p>
                        <div className="divider"></div>
                    </div>
                    <Itens>
                        <Item href='https://includejr.com.br' target="_blank">
                            <div className="img">
                                <Img src={Include} alt=""/>
                            </div>
                            <div className="link">
                                <p>visitar  <FontAwesomeIcon icon={faAngleRight}/></p>
                            </div>
                        </Item>
                        <Item href='https://hiper.com.br' target="_blank">
                            <div className="img">
                                <Img src={Hiper} alt=""/>
                            </div>
                            <div className="link">
                                <p>visitar  <FontAwesomeIcon icon={faAngleRight}/></p>
                            </div>
                        </Item>
                    </Itens>
                </div>
            </ContainerSection>
        </Row>
    );
}
