import React from 'react';
import { BannerImg } from './styles';

export default function Banner() {
    return (
        <BannerImg>
            <div className="text">
                <h1>conectar <span>pessoas</span>, <br/><span>compartilhar</span> conhecimento<br />e criar <span>oportunidades</span></h1>
                {/* <p className="col-9">Desenvolva habilidades com cursos, certificados e graduações on-line das melhores universidades e empresas do mundo</p> */}
                {/* <button type="button" className="btn">Saiba mais</button> */}
            </div>
        </BannerImg>
    );
}
