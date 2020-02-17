import React from 'react';

import './styles.css';

export default function QuemSomos2() {
    return (
        <div className="row" id="section-5">
            <div className="col-5">
                <img src="https://dummyimage.com/600x400/000/fff" className="img-fluid"/>
            </div>
            <div className="col-7">
                <div className="row">
                    <div className="divider"></div>
                </div>
                <h1>Uma empresa com <span>mais de 10 anos de mercado</span> na área tecnológica</h1>
                <p>A Kadoo Tecnologia vem buscando projetar um cenário tecnológico em Russas e no Vale do Jaguaribe, sempre tentando valorizar os talentos adjascentes da cidade e fomentando a democratização da tecnologia.</p>
                {/* <button type="button" className="btn">Desejo fazer parte <FontAwesomeIcon icon={faAirFreshener}/></button> */}
            </div>
        </div>
    );
}
