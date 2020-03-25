import React, { useEffect } from 'react';
import { BannerImg } from './styles';
// import Typewriter from 'typewriter-effect';

export default function Banner() {

    return (
        <BannerImg>
            <div className="text" id="text">
                <h1>
                    {/* <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                            .typeString('conectar <span>Pessoas</span>, <br/><span>Compartilhar</span> conhecimento<br />e criar <span>Oportunidades !</span>')
                            .pauseFor(2500)
                            .deleteAll(30)
                            .typeString('<span>Nós somos a Kadoo !</span>')
                            .pauseFor(2500)
                            .start();
                      }}
                        
                      options={{
                            delay: 60,
                            loop: true
                      }}
                    /> */}
                    Mapa de infecção do Coronavirus
                </h1>
                <p>
                    Acompanhe os números dos casos no Brasil
                </p>
            </div>
            <div className="cases">
                <div className="confirmed">
                    <h1>3800</h1>
                    <p>confirmados</p>
                </div>
                <div className="dealths">
                    <h1>3800</h1>
                    <p>mortes</p>
                </div>
            </div>
        </BannerImg>
    );
}
