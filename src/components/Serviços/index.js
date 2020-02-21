import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faBookReader, faTools, faLaptopCode } from '@fortawesome/free-solid-svg-icons'

// import './styles.css';
import { ContainerSection, Background, Card } from './styles';


export default function Section() {

    const [cursos, setCursos] = useState([{hover: false, display: true }]);
    const [solucoes, setSolucoes] = useState([{hover: false, display: true }]);
    const [servicos, setServicos] = useState([{hover: false, display: true }]);

    function remOverflow() {
        
    }

    function addOverflow() {
        
    }
    
    return (
        <div className="row" id="section-2">
            <Background className="col-12">
                <ContainerSection className="row">
                    <Card cursos={cursos} onMouseEnter={(e) => remOverflow(e)} onMouseLeave={addOverflow}>
                        <div className="img">
                            <FontAwesomeIcon icon={faBookReader} size="5x"/>
                        </div>
                        <div className="title">
                            <h1>Cursos</h1>
                        </div>
                        <div className="divider"></div>
                        <div className={!cursos ? 'desc overflow' : 'desc'}>
                            <p>A Kadoo Tecnologia vem buscando projetar um cenário tecnológico em Russas e no Vale do Jaguaribe, sempre tentando valorizarA Kadoo Tecnologia vem buscando projetar um cenário tecnológico em Russas e no Vale do Jaguaribe.
                            </p>
                        </div>
                        <div className="icon">
                            <FontAwesomeIcon icon={faCaretDown}/>
                        </div>
                    </Card>
                    <Card solucoes={solucoes}>
                        <div className="img">
                            <FontAwesomeIcon icon={faLaptopCode} size="5x"/>
                        </div>
                        <div className="title">
                            <h1>Soluções</h1>
                        </div>
                        <div className="divider"></div>
                        <div className={!solucoes ? 'desc overflow' : 'desc'}>
                            <p>A Kadoo Tecnologia vem buscando projetar um cenário tecnológico em Russas e no Vale do Jaguaribe, sempre tentando valorizar..</p>
                        </div>
                        <div className="icon">
                            <FontAwesomeIcon icon={faCaretDown}/>
                        </div>
                        <div className="teste">

                        </div>
                    </Card>
                    <Card servicos={servicos}>
                        <div className="img">
                            <FontAwesomeIcon icon={faTools} size="5x"/>
                        </div>
                        <div className="title">
                            <h1>Assistência</h1>
                        </div>
                        <div className="divider"></div>
                        <div className={!servicos ? 'desc overflow' : 'desc'}>
                            <p>A Kadoo Tecnologia vem buscando projetar um cenário tecnológico em Russas e no Vale do Jaguaribe, sempre tentando valorizar..</p>
                        </div>
                        <div className="icon">
                            <FontAwesomeIcon icon={faCaretDown}/>
                        </div>
                    </Card>
                </ContainerSection>
            </Background>
        </div>
    );
}
