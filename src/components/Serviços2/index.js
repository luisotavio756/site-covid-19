import React from 'react';

import './styles.css';

export default function Serviços2() {
    return (
        <div className="row" id="section-3">
            <div className="col-12 title">
                <h1>Alcance seus objetivos com a Kadoo</h1>
                <div className="divider"></div>
            </div>
            <div className="col-4">
                <div className="card">
                    <div className="card-img">
                        <img src="https://dummyimage.com/400x400/000/fff" className="img-fluid"/>
                    </div>
                    <div className="card-title">
                        <h1>Aprenda as habilidades mais recentes</h1>
                    </div>
                    <div className="card-desc">
                        <p>como análise de negócios, design gráfico, Python e muito mais</p>
                    </div>
                </div>
            </div>
            <div className="col-4">
                <div className="card">
                    <div className="card-img">
                        <img src="https://dummyimage.com/400x400/000/fff" className="img-fluid"/>
                    </div>
                    <div className="card-title">
                        <h1>Prepare-se para uma carreira</h1>
                    </div>
                    <div className="card-desc">
                        <p>em campos de alta demanda, como TI, IA e engenharia de nuvem</p>
                    </div>
                </div>
            </div>
            <div className="col-4">
                <div className="card">
                    <div className="card-img">
                        <img src="https://dummyimage.com/400x400/000/fff" className="img-fluid"/>
                    </div>
                    <div className="card-title">
                        <h1>Capacite sua organização</h1>
                    </div>
                    <div className="card-desc">
                        <p>com programas de treinamento e desenvolvimento sob demanda</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
