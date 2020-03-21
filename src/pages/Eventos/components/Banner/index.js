import React from 'react';
import { BannerImg } from './styles';

// Import Scroll
import  scrollToIdOnClick  from '../../../../assets/js/scroll';

export default function Banner() {
    return (
        <BannerImg>
            <div className="text">
                <h1>Eventos</h1>
                {/* <p className="col-9">Desenvolva habilidades com cursos, certificados e graduações on-line das melhores universidades e empresas do mundo</p> */}
                {/* <button type="button" className="btn">Saiba mais</button> */}
            </div>
            <a href="#scroll" onClick={scrollToIdOnClick}><span></span></a>
        </BannerImg>
    );
}
