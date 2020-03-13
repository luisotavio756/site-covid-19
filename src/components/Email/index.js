import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

import { Row, ContainerSection, Card } from './styles';

import Icon from '../../assets/img/message.svg';
export default function Parceiros() {

    const [ email, setEmail ] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        if(email.length == 0)
            return 0;
            
        alert('O email enviado para ' + email);
        setEmail('');

    }

    return (
        <Row>
            <ContainerSection className="col-12">
                <div className="row">
                    <Card>
                        <div className="icon">
                            <img src={Icon} alt=""/>
                        </div>
                        <div className="form">
                            <h1>Receba conteúdos exclusivos</h1>
                            <p>Conteúdos relevantes e que com certeza serão úteis para você !</p>
                            <div className="divider"></div>
                            <form onSubmit={handleSubmit}>
                                <input type="email" placeholder="Digite seu melhor email..." onChange={(e) => setEmail(e.target.value)} value={email}/>
                                <button type="submit">
                                    <FontAwesomeIcon icon={faPaperPlane} />
                                </button>
                            </form>
                        </div>
                    </Card>
                </div>
            </ContainerSection>
        </Row>
    );
}