import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBrain, faChartLine, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons'

import './styles.css';

export default function Serviços2() {
    return (
        <div className="row" id="section-3">
            <div className="col-12">
                <div className="row">
                    <div className="col-12 title">
                        <h1>Alcance seus objetivos com a Kadoo</h1>
                        <div className="divider"></div>
                    </div>
                    <div className="col-4">
                        <div className="card">
                            <div className="card-img">
                                <FontAwesomeIcon icon={faBrain} size="4x"/>
                            </div>
                            <div className="card-title">
                                <h1>Aprenda as habilidades do futuro</h1>
                            </div>
                            <div className="card-desc">
                                <p>como <span>programação</span>, <span>web design</span>, <span>marketing</span> e muito mais</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card">
                            <div className="card-img">
                                <FontAwesomeIcon icon={faChartLine} size="4x"/>
                            </div>
                            <div className="card-title">
                                <h1>Eleve sua carreira</h1>
                            </div>
                            <div className="card-desc">
                                <p>em campos de alta demanda, como <span>TI</span> e <span>desenvolvimento pessoal</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card">
                            <div className="card-img">
                                <FontAwesomeIcon icon={faChalkboardTeacher} size="4x"/>
                            </div>
                            <div className="card-title">
                                <h1>Capacite sua organização</h1>
                            </div>
                            <div className="card-desc">
                                <p>com o <span>Kadoo Businnes</span> e programas de treinamento sob demanda</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
