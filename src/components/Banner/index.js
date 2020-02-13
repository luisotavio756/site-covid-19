import React from 'react';


import './styles.css';


export default function Banner() {
    return (
        <div className="banner">
            {/* <img className="img" src={Img} /> */}
            <div className="text">
                <h1>Seu percurso rumo ao sucesso</h1>
                <p className="col-9">Desenvolva habilidades com cursos, certificados e graduações on-line das melhores universidades e empresas do mundo</p>
                <button type="button" className="btn">Increva-se gratuitamente</button>
            </div>
            <div className="shadow"></div>
        </div>
    );
}
