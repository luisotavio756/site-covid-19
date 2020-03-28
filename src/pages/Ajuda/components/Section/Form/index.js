import React from 'react';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faLock } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import { Row, FormHelp } from './styles';

export default function Form() {
    return (
        <div className="col-6" style={{ margin: '0 auto'}}>
            <Row>
                <div className="col-12 title">
                    <h4>Agradeçoes muito seu interesse em ajudar ! Precisaremos apenas de alguns dados para entrar em contato com você, ou que clique no link do Whatsapp para se comunicar diretamente com um de nossos representantes.</h4>
                    <div className="divider"></div>
                </div>
            </Row>
            <FormHelp onSubmit={() => alert('Form Enviado !')}>
                <div className="input-block">
                    <label htmlFor="">Seu Nome <sup>*</sup></label>
                    <input type="text" placeholder="Digite seu Nome..." />
                </div>
                <div className="input-block">
                    <label htmlFor="">Seu Número <sup>*</sup></label>
                    <input type="tel" placeholder="Digite seu Telefone..." />
                </div>
                <div className="input-block">
                    <label htmlFor="">Seu Email(Opcional)</label>
                    <input type="email" placeholder="Digite seu Email..." />
                    <p><FontAwesomeIcon icon={faLock} /> Você não receberá span !</p>
                </div>
                <button type="submit"><FontAwesomeIcon icon={faHeart} /> Desejo Ajudar</button>
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
