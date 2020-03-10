import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperclip } from '@fortawesome/free-solid-svg-icons'

import { Row, Section, Img } from './styles';
import Ig1 from '../../assets/img/jobs.svg';

export default function Serviços2() {
    return (
        <Row>
            <Section className="col-12">
                <Row>
                    <div className="col-12 header">
                        <h1>Jobs</h1>
                        <div className="divider"></div>
                    </div>
                    <div className="col-12">
                        <Row>
                            <div className="col-12 img" style={{ textAlign: 'center' }}>
                                <Img src={Ig1} alt="Jobs"/>
                            </div>
                            <div className="col-6 desc">
                                <div className="text">
                                    <p>Buscamos sempre <span>conectar</span> pessoas e <span>compartilhar</span> conteúdo, então criamos o Kadoo.Jobs, um lugar para dar mais visibilidade ao seu CV.
                                    </p>
                                    <p>Cadastre seu currículo em nossa plataforma e tenha visibilidade no mercado da cidade e região. É simples e prático, basta preencher algumas informações e pronto ! Você ficará visível para as empresas.</p>
                                </div>
                                <Link to="/teste"><FontAwesomeIcon icon={faPaperclip} style={{ marginRight: '5' }}/> Conhecer Kadoo.Jobs</Link>
                            </div>
                        </Row>
                    </div>
                </Row>
            </Section>
        </Row>
    );
}
