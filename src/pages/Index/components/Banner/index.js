import React, { useEffect } from 'react';
import { BannerImg } from './styles';
// import Typewriter from 'typewriter-effect';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCheck, faHeartbeat } from '@fortawesome/free-solid-svg-icons'

export default function Banner() {

    return (
        <BannerImg>
            <div className="text" id="text">
                <h1>
                    Mapa de infecção do Coronavirus
                </h1>
            </div>
            <p className="brasil">
                Acompanhe os números dos casos no Brasil
            </p>
            <div className="cases">
                <div className="confirmed">
                    <FontAwesomeIcon icon={faUserCheck} /> 
                    <div className="text"> 
                        <h1>3800</h1>
                        <p>confirmados</p>
                    </div>
                </div>
                <div className="dealths">
                    <FontAwesomeIcon icon={faHeartbeat} /> 
                    <div className="text">
                        <h1>3800</h1>
                        <p>mortes</p>
                    </div>
                </div>
            </div>
        </BannerImg>
    );
}
