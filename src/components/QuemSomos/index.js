import React from 'react';

import './styles.css';

export default function QuemSomos() {
    return (
        
        <div className="row" id="section-1">
            <div className="col-7">
                <h1>Uma empresa voltada para a inovação e buscando sempre as melhores tecnologias</h1>
                <p>A Kadoo Tecnologia vem buscando projetar um cenário tecnológico em Russas e no Vale do Jaguaribe, sempre tentando valorizar os talentos adjascentes da cidade e fomentando a democratização da tecnologia.</p>
                <button type="button" className="btn">Quero fazer parte</button>
            </div>
            <div className="col-5">
                <img src="https://dummyimage.com/600x400/000/fff" className="img-fluid"/>
            </div>
        </div>
        
    );
}
