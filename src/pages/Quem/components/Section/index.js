import React from 'react';

import { Row, SectionImg, SectionText, Ul } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight, faCheckDouble } from '@fortawesome/free-solid-svg-icons';

import Img from '../../../../assets/img/img-quem.webp';
import Missao from '../../../../assets/img/missao.svg';
import Visao from '../../../../assets/img/visao.svg';
import Valores from '../../../../assets/img/valores.svg';

export default function Section() {
    return(
        <Row id="scroll">
            <SectionImg className="col-5">
                <img src={Img} alt=""/>
            </SectionImg>
            <SectionText className="col-7">
                <p className="first">
                    <FontAwesomeIcon icon={faAngleDoubleRight} /> Somos movidos por um propósito: criar um mundo melhor por meio da tecnologia, da educação e do empreendedorismo. Estamos alcançando esse objetivo conectando pessoas, compartilhando conhecimento e criando novas oportunidades.
                </p>
                <p>
                    <FontAwesomeIcon icon={faAngleDoubleRight} /> Nos que fazemos a Kadoo estamos comprometidos com a transformação social, econômica e sustentável da nossa cidade e região, trabalhamos duro diariamente para fazer isso acontecer.
                </p>
                <Row style={{ marginTop: 20 }}>
                    <div className="col-6 missao">
                        <img src={Missao} alt=""/>
                        <h1>Missão</h1>
                        <div className="divider"></div>
                        <p>
                            Conectar pessoas, compartilhar conhecimento e colaborar com a criação de novas oportunidades que transformem a nossa cidade e região.
                        </p>
                    </div>
                    <div className="col-6 visao">
                        <img src={Visao} alt=""/>
                        <h1>Visão</h1>
                        <div className="divider"></div>
                        <p>
                            Liderar a criação de oportunidades da nossa cidade e região até o fim de 2020.
                        </p>
                    </div>
                </Row>
                <Row>
                    <div className="col-12 valores">
                        <img src={Valores} alt=""/>
                        <h1>Valores</h1>
                        <div className="divider"></div>
                        <Ul>
                            <li><FontAwesomeIcon icon={faCheckDouble} />Alto Desempenho</li>
                            <li><FontAwesomeIcon icon={faCheckDouble} />Transparência e Honestidade</li>
                            <li><FontAwesomeIcon icon={faCheckDouble} />Criatividade</li>
                            <li><FontAwesomeIcon icon={faCheckDouble} />Consistência</li>
                            <li><FontAwesomeIcon icon={faCheckDouble} />Ausência de Medo</li>
                            <li><FontAwesomeIcon icon={faCheckDouble} />Impactar</li>
                            <li><FontAwesomeIcon icon={faCheckDouble} />Fazer mais com menos</li>
                            <li><FontAwesomeIcon icon={faCheckDouble} />Trabalho Duro</li>
                        </Ul>
                    </div>
                </Row>
            </SectionText>
        </Row>
    );
};