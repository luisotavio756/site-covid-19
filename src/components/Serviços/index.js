import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faBookReader, faTools, faLaptopCode } from '@fortawesome/free-solid-svg-icons'

import './styles.css';

export default function Section() {
    

    return (
        <div className="row" id="section-2">
            <div className="col-12">
                <div className="row container-section">
                    <div className="col-4">
                        <div className="card">
                            <div className="card-img">
                                <FontAwesomeIcon icon={faBookReader} size="5x"/>
                            </div>
                            <div className="card-title">
                                <h1>Cursos</h1>
                            </div>
                            <div className="link">
                                kkkk
                            </div>
                            <div className="card-desc">
                                <p>A Kadoo Tecnologia vem buscando projetar um cenário tecnológico em Russas e no Vale do Jaguaribe, sempre tentando valorizar..</p>
                            </div>
                            <div className="icon">
                                <FontAwesomeIcon icon={faCaretDown}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card">
                            <div className="card-img">
                                <FontAwesomeIcon icon={faLaptopCode} size="5x"/>
                            </div>
                            <div className="card-title">
                                <h1>Soluções</h1>
                            </div>
                            <div className="link"></div>
                            <div className="card-desc">
                                <p>A Kadoo Tecnologia vem buscando projetar um cenário tecnológico em Russas e no Vale do Jaguaribe, sempre tentando valorizar..</p>
                            </div>
                            <div className="icon">
                                <FontAwesomeIcon icon={faCaretDown}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card">
                            <div className="card-img">
                                <FontAwesomeIcon icon={faTools} size="5x"/>
                            </div>
                            <div className="card-title">
                                <h1>Assistência</h1>
                            </div>
                            <div className="link"></div>
                            <div className="card-desc">
                                <p>A Kadoo Tecnologia vem buscando projetar um cenário tecnológico em Russas e no Vale do Jaguaribe, sempre tentando valorizar..</p>
                            </div>
                            <div className="icon">
                                <FontAwesomeIcon icon={faCaretDown}/>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-12 attach">
                        <h2>Conhecer serviços</h2>
                    </div> */}
                </div>
            </div>
        </div>
    );
}
