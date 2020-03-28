import React from 'react';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';


import { Row, FeedItem } from './styles';

export default function IKnow() {
    return (
        <div className="col-6 p-0" style={{ margin: '0 auto'}}>
            <Row>
                <div className="col-12 title">
                    <h4>Aqui funciona um Feed de pessoas necessitadas, onde você poderá ver e conhecer quem está precisando de ajuda</h4>
                    <div className="divider"></div>
                </div>
            </Row>
            <Row>
                <FeedItem>
                    <div className="info">
                        <h4>Luis Otávio Lima Caminha</h4>
                        <p>Russas, Av. Irmã Maria da Graça, Nº 344. Perto do liceu</p>
                    </div>
                    <div className="info">
                        <p>sou viúva e tenho 4 filhos. não tenho condições de comprar o alimentos deles em meio essa crise. moro em russas, perto do liceu. se alguem puder me ajudar, eu nao vou ter palavras pra agradecer. que deus abençõe cada um de voces. espero que todos consigam. vocês podem ajudar com alimentos, roupas ou dinheiro. agradeço por tudo.</p>
                    </div>
                    <div className="info-group" style={{ }}>
                        <div className="test">
                            <h4>Telefone:</h4>
                            <p>(88) 99723-4726</p>
                        </div>
                        <p>há 4 horas</p>
                    </div>
                    <div className="info subscribe">
                        {/* <h4>Luis Otávio Lima Caminha</h4> */}
                        <p>cadastrado por <span>Roberto de Lima Ferreira</span></p>
                    </div>
                </FeedItem>
                <div className="col-12 p-0 pagination" style={{ display: 'flex', alignItems: 'center', justifyContent: "space-between"}}>
                    <a href="#"><FontAwesomeIcon icon={faAngleDoubleLeft} /> Anterior</a>
                    <a href="#">Proxima <FontAwesomeIcon icon={faAngleDoubleRight} /> </a>
                </div>
            </Row>
            {/* <Row style={{ marginTop: 10 }} >
                <div className="col-12 share">
                    <p style={{ textAlign: 'center', fontSize: 14, color: '#666' }}>Ou</p>
                    <p style={{ textAlign: 'center', fontSize: 14, color: '#666' }}>Entre em contato diretamento com nossos representantes no Whatsapp</p>
                    <a href="" >
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </a>
                </div>
            </Row> */}
        </div>
    );
}
