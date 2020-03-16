import React from 'react';

import { Row, SectionImg, SectionText } from './styles';

import Img from '../../../../assets/img/img-quem.jpg';

export default function Section() {
    return(
        <Row>
            <SectionImg className="col-5">
                <img src={Img} alt=""/>
            </SectionImg>
            <SectionText className="col-7">
                <p>Somos movidos por um propósito: criar um mundo
                melhor por meio da tecnologia, da educação e do
                empreendedorismo. Estamos alcançando esse objetivo
                conectando pessoas, compartilhando conhecimento e
                criandonovasoportunidades.
                </p>
                <p>Nos que fazemos a Kadoo estamos comprometidos com a
                transformação social, econômica e sustentável da nossa
                cidade e região, trabalhamos duro diariamente para fazer
                issoacontecer.
                </p>
            </SectionText>
        </Row>
    );
};