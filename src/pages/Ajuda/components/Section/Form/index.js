import React, { useState } from 'react';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faLock, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import { Row, FormHelp } from './styles';
import api from '../../../../../services/api';

export default function Form() {
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ status, setStatus ] = useState(0);

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const response = await api.post('/volunteers', { name, email, phone });
            setStatus(1);
            setName('');
            setEmail('');
            setPhone('');
            window.location.href = '#content';

        } catch (error) {
            setStatus(2);
        }

        setTimeout(() => {
            setStatus(0);
        }, 5000);
    }
    return (
        <div className="col-6 p-0" style={{ margin: '0 auto'}}>
            <Row>
                <div className="col-12 title">
                    <h4>Agradeçoes muito seu interesse em ajudar ! Precisaremos apenas de alguns dados para entrar em contato com você, ou que clique no link do Whatsapp para se comunicar diretamente com um de nossos representantes.</h4>
                    <div className="divider"></div>
                </div>
            </Row>
            <FormHelp onSubmit={handleSubmit}>
                { status == 1 && <div className="alert alert-success"><h4>Você foi cadastrado com sucesso em nosso banco de ajuda. Entraremos em contato logo logo. Obrigado <FontAwesomeIcon icon={faHeart} /></h4></div> }
                { status == 2 && <div className="alert alert-danger"><h4>Não foi possível concluir o cadastro, verifique os campos ou tente novamente mais tarde <FontAwesomeIcon icon={faTimes} /></h4></div> }
                <div className="input-block">
                    <label htmlFor="">Seu Nome</label>
                    <input type="text" placeholder="Digite seu Nome..." onChange={(e) => setName(e.target.value)} value={name} required/>
                </div>
                <div className="input-block">
                    <label htmlFor="">Seu Número</label>
                    <input type="tel" placeholder="Digite seu Telefone..." onChange={(e) => setPhone(e.target.value)} value={phone} required/>
                </div>
                <div className="input-block">
                    <label htmlFor="">Seu Email(Opcional)</label>
                    <input type="email" placeholder="Digite seu Email..." onChange={(e) => setEmail(e.target.value)} value={email}/>
                    <p><FontAwesomeIcon icon={faLock} /> Você não receberá span !</p>
                </div>
                <button type="submit"><FontAwesomeIcon icon={faHeart} /> Desejo Ajudar</button>
            </FormHelp>
            <Row style={{ marginTop: 10 }} >
                <div className="col-12 share">
                    <p style={{ textAlign: 'center', fontSize: 14, color: '#666' }}>Ou</p>
                    <p style={{ textAlign: 'center', fontSize: 14, color: '#666' }}>Entre em contato diretamento com nossos representantes no Whatsapp</p>
                    <a href="https://api.whatsapp.com/send?phone=+5585992817986&text=Olá, eu quero ajudar !" target="_blank">
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </a>
                </div>
            </Row>
        </div>
    );
}
