import React from 'react';

import { Row, SectionImg, SectionText, Ul, ContainerSection, Itens, Item, Img } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight, faCheckDouble, faAngleRight,  } from '@fortawesome/free-solid-svg-icons';

// Import Images
import ImgOQue from '../../../../assets/img/img-oque.jpg';
import Include from '../../../../assets/img/parceiros/logo.svg';
import Hiper from '../../../../assets/img/parceiros/hiper.svg'

import Missao from '../../../../assets/img/missao.svg';
import Visao from '../../../../assets/img/visao.svg';
import Valores from '../../../../assets/img/valores.svg';

export default function Section() {
    return(
        <>
            <Row>
                <SectionText className="col-7">
                    <p>
                        <FontAwesomeIcon icon={faAngleDoubleRight} /> Os negócios e as pessoas que mais se destacam são aquelas que além de identificar as novas tendências, trabalham para criar o futuro.
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faAngleDoubleRight} /> Em um mundo disruptivo temos a nossa frente imensos desafios, portanto ao compreender o atual momento de transformação,a Kadoo mais uma vez se reinventa para oferecer soluções que permitam os negócios e as pessoas enfrentar seus desafios e criando novas oportunidades.
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faAngleDoubleRight} /> Por isso buscamos constantemente parceiros inovadores, comprometidos com a transformação socioeconômica da nossa cidade e região.
                    </p>
                    <Row>
                        <ContainerSection className="col-12">
                            <div className="row">
                                <div className="title">
                                    <h1>Conheça nossos Parceiros</h1>
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
                </SectionText>
                <SectionImg className="col-5">
                    <img src={ImgOQue} alt=""/>
                </SectionImg>
            </Row>
            
        </>
    );
};