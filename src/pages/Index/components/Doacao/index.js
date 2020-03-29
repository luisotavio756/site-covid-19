import React from 'react';
import { Link } from 'react-router-dom';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarked, faDonate, faHeart } from '@fortawesome/free-solid-svg-icons';
// import { faBrade } from '@fortawesome/free-brands-svg-icons'

import { Row, Section } from './styles';

export default function Doacao() {
    return (
        <Row id="help">
            <Section className="col-12">
                <Row>
                    <div className="col-12 title">
                        <h1>Ajude no Combate ao Covid-19</h1>
                        <div className="divider"></div>
                    </div>
                    <div className="col-8 info" style={{ margin: '15px auto'}}>
                        <p>Além de afetar diretamente a saúde das pessoas, o coronavírus vem afetando a vida econômica de milhares de famílias de baixa renda, uma vez que a maioria das atividades empresariais foram suspendidas. Segundo o Ministério da Economia, cerca de 50% dos empregos no Brasil, são informais e isso faz com que a fragilidade das pessoas com baixa renda seja ainda mais acentuada, ja que eles estão em maioria inseridos nessa porcentagem.</p>
                        <p>Portanto, além de fornecer informações sobre o coronavírus, tambem queremos ajudar pessoas carentes que estão sofrendo com essa situação. Clique em Quero Ajudar e junte-se a esta iniciativa !</p>
                    </div>
                    <div className="col-8 info share" style={{ margin: '15px auto'}}>
                        <Link to="/ajudar"><FontAwesomeIcon icon={faHeart} /> Quero Ajudar !</Link>
                    </div>
                    {/* <div className="col-8 info" style={{ margin: '15px auto'}}>
                        <h1>Por Que?</h1>
                        <p>Além de afetar diretamente a saúde das pessoas, o coronavírus vem afetando a vida econômica de milhares de famílias de baixa renda, uma vez que a maioria das atividades empresariais foram suspendidas. Segundo o Ministério da Economia, cerca de 50% dos empregos no Brasil, são informais e isso faz com que a fragilidade das pessoas com baixa renda seja ainda mais acentuada, ja que eles estão em maioria inseridos nessa porcentagem.</p>
                        <p>Portanto, além de fornecer informações sobre o coronavírus, tambem queremos ajudar pessoas carentes que estão sofrendo com essa situação.</p>
                    </div> */}
                    {/* <div className="col-8 info" style={{ margin: '15px auto'}}>
                        <h1>Como?</h1>
                        <p>Segue abaixo a lista de necessidades: </p>
                        <p style={{ marginTop: 5}}>
                            a) Alcoól em Gel;<br />
                            b) Sabão/Detergente;<br />
                            c) Alimentos não perecíveis;<br />
                            d) Máscaras;<br />
                            e) Doações em dinheiro.<br />
                        </p>
                    </div>
                    <div className="col-8 info links" style={{ margin: '15px auto'}}>
                        <h1>Onde?</h1>
                        <p>Você pode deixar os alimentos e materias de limpeza nos seguintes endereços:</p>
                        <p style={{ marginTop: 5}}>
                            <a href="#"><FontAwesomeIcon icon={faMapMarked} /> IncludeJr(ao lado da Rabelo Contrução), Av. Irmã Maria da Graça, Russas-CE, 62900-000</a><br />
                        </p>
                        <p style={{ marginTop: 10}}>As doações em dinheiro podem ser por:</p>
                        <p style={{ marginTop: 5}}>
                            <a href="#"><FontAwesomeIcon icon={faDonate} /> Vakinha.com</a><br />
                            <a href="#"><FontAwesomeIcon icon={faDonate} /> Banco Bradesco</a><br />
                            <a href="#"><FontAwesomeIcon icon={faDonate} /> Banco Caixa</a><br />
                        </p>
                    </div>
                    <div className="col-8 info" style={{ margin: '15px auto'}}>
                        <h1>Para quem?</h1>
                        <p>Todas as doações serão destinadas a comunidades carentes, com vunerabilidade econômica e que estão sofrendo de maneira bem mais árdua com a crise do coronavírus. Todas as doações arrecadas serão devidamente contabilizadas e mostradas ao público por meio das redes socias da IncludeJr e Kadoo Tecnologia.</p>
                    </div>
                    <div className="col-8 info" style={{ margin: '15px auto'}}>
                        <p style={{ fontSize: 15, textAlign: "center", fontStyle: "italic" }}>"Aquele que caminha sozinho pode até ir <b>mais rápido</b>, mas aquele que vai acompanhado, com certera irá <b>mais longe.</b>"</p>
                        <p style={{ fontSize: 13, textAlign: "center" }}>- Clarice Lispector</p>
                    </div> */}
                </Row>
            </Section>
        </Row>
    );
}
