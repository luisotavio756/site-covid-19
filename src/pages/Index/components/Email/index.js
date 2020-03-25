import React, { useState } from 'react';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faPaperPlane, faLock } from '@fortawesome/free-solid-svg-icons'

// Components Styleds
import { Row, ContainerSection, Section, Card } from './styles';

// Image
import Icon from '../../../../assets/img/message.svg';
   
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
                <Row>
                    <Section>
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
                                    <p><FontAwesomeIcon icon={faLock} /> Você não receberá span !</p>
                                </form>
                            </div>
                        </Card>
                    </Section>
                </Row>
            </ContainerSection>
        </Row>
    );
}
