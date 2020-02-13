import React from 'react';

import './styles.css';

export default function Section() {
    return (
        <div className="row" id="section-2">
            <div className="col-12">
                <div className="row container-section">
                    <div className="col-4">
                        <div className="card">
                            <div className="card-img">
                                <img src="https://dummyimage.com/600x400/000/fff" className="img-fluid"/>
                            </div>
                            <div className="card-title">
                                <h1>Cursos</h1>
                            </div>
                            <div className="card-desc">
                                <p>A Kadoo Tecnologia vem buscando projetar um cenário tecnológico em Russas e no Vale do Jaguaribe, sempre tentando valorizar..</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card">
                            <div className="card-img">
                                <img src="https://dummyimage.com/600x400/000/fff" className="img-fluid"/>
                            </div>
                            <div className="card-title">
                                <h1>Soluções</h1>
                            </div>
                            <div className="card-desc">
                                <p>A Kadoo Tecnologia vem buscando projetar um cenário tecnológico em Russas e no Vale do Jaguaribe, sempre tentando valorizar..</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card">
                            <div className="card-img">
                                <img src="https://dummyimage.com/600x400/000/fff" className="img-fluid"/>
                            </div>
                            <div className="card-title">
                                <h1>Assistência</h1>
                            </div>
                            <div className="card-desc">
                                <p>A Kadoo Tecnologia vem buscando projetar um cenário tecnológico em Russas e no Vale do Jaguaribe, sempre tentando valorizar..</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 attach">
                        <h2>Conhecer serviços</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}
