import React from 'react';

import { Row, SectionContainer, SectionImg, SectionText, Ul, ContainerSection, Itens, Item, Img } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight, faCheckDouble, faAngleRight,  } from '@fortawesome/free-solid-svg-icons';

// Import Images
import Img1 from '../../../../assets/img/banner.webp';
import Img2 from '../../../../assets/img/banner-oque.webp';
import Img3 from '../../../../assets/img/img3-como.webp';
import Include from '../../../../assets/img/parceiros/logo.svg';
import Hiper from '../../../../assets/img/parceiros/hiper.svg'





export default function Section() {
    return(
        <>
            <Row id="scroll">
                <SectionContainer className="col-12">
                    <Row className="order-reverse">
                        <SectionText className="col-7">
                            <p>
                                <FontAwesomeIcon icon={faAngleDoubleRight} /> Em um mundo disruptivo temos a nossa frente imensos desafios, portanto ao compreender o atual momento de transformação,a Kadoo mais uma vez se reinventa para oferecer soluções que permitam os negócios e as pessoas enfrentar seus desafios e criando novas oportunidades.
                            </p>
                        </SectionText>
                        <SectionImg className="col-5">
                            <img src={Img1} alt=""/>
                            <div className="fade">
                                <h1>conectando pessoas</h1>
                                <div className="divider"></div>
                            </div>
                        </SectionImg>
                    </Row>
                    <Row>
                        <SectionImg className="col-5">
                            <img src={Img3} alt=""/>
                            <div className="fade">
                                <h1>compartilhando conhecimento</h1>
                                <div className="divider"></div>
                            </div>
                        </SectionImg>
                        <SectionText className="col-7">
                            <p>
                                <FontAwesomeIcon icon={faAngleDoubleRight} /> Em um mundo disruptivo temos a nossa frente imensos desafios, portanto ao compreender o atual momento de transformação,a Kadoo mais uma vez se reinventa para oferecer soluções que permitam os negócios e as pessoas enfrentar seus desafios e criando novas oportunidades.
                            </p>
                        </SectionText>
                    </Row>
                    <Row className="order-reverse">
                        <SectionText className="col-7">
                            <p>
                                <FontAwesomeIcon icon={faAngleDoubleRight} /> Em um mundo disruptivo temos a nossa frente imensos desafios, portanto ao compreender o atual momento de transformação,a Kadoo mais uma vez se reinventa para oferecer soluções que permitam os negócios e as pessoas enfrentar seus desafios e criando novas oportunidades.
                            </p>
                        </SectionText>
                        <SectionImg className="col-5">
                            <img src={Img2} alt=""/>
                            <div className="fade">
                                <h1>criando oportunidades</h1>
                                <div className="divider"></div>
                            </div>
                        </SectionImg>
                    </Row>
                </SectionContainer>
            </Row>
            
        </>
    );
};