import React, { useEffect } from 'react';
import { BannerImg } from './styles';
import Typewriter from 'typewriter-effect';

export default function Banner() {

    return (
        <BannerImg>
            <div className="text" id="text">
                <h1>
                    <Typewriter
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
                    />
                </h1>
            </div>
        </BannerImg>
    );
}
