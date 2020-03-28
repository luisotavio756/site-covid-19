import React from 'react';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faLock } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import { Row, FormHelp } from './styles';

export default function Feed() {
    return (
        <div className="col-6 p-0" style={{ margin: '0 auto'}}>
            <Row>
                <div className="col-12 title">
                    <h4>Nesta seção você poderá nos informar sobre você que está precisando de ajuda, não é necessário se identificar, no entanto precisamos do seu endereço e do que está precisando. Seu pedido aparecerá no feed de Ajuda.</h4>
                    <div className="divider"></div>
                </div>
            </Row>
            <FormHelp onSubmit={() => alert('Form Enviado !')}>
                <div className="section-form">
                    <h2>Seus Dados</h2>
                    <div className="input-block">
                        <label htmlFor="">Nome</label>
                        <input type="text" placeholder="Digite seu Nome..." />
                    </div>
                    <div className="input-block">
                        <label htmlFor="">Telefone(Opcional)</label>
                        <input type="tel" placeholder="Digite seu Telefone..." />
                    </div>
                    <div className="input-block">
                        <label htmlFor="">Cidade</label>
                        <input type="tel" placeholder="Digite sua Cidade..." />
                    </div>
                    <div className="input-block">
                        <label htmlFor="">Endereço</label>
                        <input type="tel" placeholder="Digite seu Endereço..." />
                    </div>
                    <div className="input-block">
                        <label htmlFor="">Nº</label>
                        <input type="tel" placeholder="Digite o Número da casa..." />
                    </div>
                    <div className="input-block">
                        <label htmlFor="">Complemento</label>
                        <input type="tel" placeholder="Digite seu Complemento..." />
                    </div>
                    <div className="input-block">
                        <label htmlFor="">Descrição</label>
                        <textarea rows="8" placeholder="Descreva sua história e o que está precisando..."></textarea>
                    </div>
                </div>
                <button type="submit"><FontAwesomeIcon icon={faHeart} /> Pedir Ajuda</button>
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
