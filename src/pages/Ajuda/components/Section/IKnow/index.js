import React from 'react';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faLock } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import { Row, FormHelp } from './styles';

export default function IKnow() {
    return (
        <div className="col-6 p-0" style={{ margin: '0 auto'}}>
            <Row>
                <div className="col-12 title">
                    <h4>Nesta seção você poderá nos informar sobre alguem que está precisando de ajuda, mas que não tem acesso a internet ou não consegue acessar nossa página por algum motivo. Esse é um espaço de ajuda ao próximo.</h4>
                    <div className="divider"></div>
                </div>
            </Row>
            <FormHelp onSubmit={() => alert('Form Enviado !')}>
                <div className="section-form">
                    <h2>Seus Dados</h2>
                    <div className="input-block">
                        <label htmlFor="">Nome(Opcional)</label>
                        <input type="text" placeholder="Digite seu Nome..." />
                    </div>
                    <div className="input-block">
                        <label htmlFor="">Telefone</label>
                        <input type="tel" placeholder="Digite seu Telefone..." />
                    </div>
                </div>
                <div className="section-form">
                    <h2>Dados de quem está precisando</h2>
                    <div className="input-block">
                        <label htmlFor="">Nome</label>
                        <input type="text" placeholder="Digite o Nome da Pessoa Necessitada..." />
                    </div>
                    <div className="input-block">
                        <label htmlFor="">Telefone(Opcional)</label>
                        <input type="tel" placeholder="Digite o Telefone da Pessoa Necessitada..." />
                    </div>
                    <div className="input-block">
                        <label htmlFor="">Cidade</label>
                        <input type="tel" placeholder="Digite a Cidade da Pessoa Necessitada..." />
                    </div>
                    <div className="input-block">
                        <label htmlFor="">Endereço</label>
                        <input type="tel" placeholder="Digite o Endereço da Pessoa Necessitada..." />
                    </div>
                    <div className="input-block">
                        <label htmlFor="">Nº</label>
                        <input type="tel" placeholder="Digite o Número da casa da Pessoa Necessitada..." />
                    </div>
                    <div className="input-block">
                        <label htmlFor="">Complemento</label>
                        <input type="tel" placeholder="Digite o Complemento da Pessoa Necessitada..." />
                    </div>
                    <div className="input-block">
                        <label htmlFor="">Descrição</label>
                        <textarea rows="8" placeholder="Descreva sobre a história dessa pessoa e o que ela está precisando..."></textarea>
                    </div>
                </div>
                
                <button type="submit"><FontAwesomeIcon icon={faHeart} /> Indicar para Ajuda</button>
            </FormHelp>
            <Row style={{ marginTop: 10 }} >
                <div className="col-12 share">
                    <p style={{ textAlign: 'center', fontSize: 14, color: '#666' }}>Ou</p>
                    <p style={{ textAlign: 'center', fontSize: 14, color: '#666' }}>Entre em contato diretamento com nossos representantes no Whatsapp</p>
                    <a href="" >
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </a>
                </div>
            </Row>
        </div>
    );
}
