import React, { useEffect, useState } from 'react';

import { Row, SectionContainer, Ul } from './styles';

// Import Icons
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart, faLock } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


// Import Components
import Form from './Form';
import IKnow from './IKnow';
import Feed from './Feed';
import INeed from './INeed';

export default function Section() {
    const array = [
        {
            id: 'form',
            name: 'Posso Ajudar',
            status: 0
        },
        {
            id: 'feed',
            name: "Feed de Ajuda",
            status: 1
        },
        {
            id: 'iknow',
            name: 'Conheço alguem que precisa',
            status: 0
        },
        {
            id: 'ineed',
            name: 'Eu preciso !',
            status: 0
        }
    ];

    const [ loading, setLoading ] = useState(false);
    const [ itens, setItens ] = useState([]);
    const [ content, setContent ] = useState();

 
    useEffect(() => {
        setContent(array[1].id);
        setItens(array);

    }, []);
    

    function handleNav(name) {
        array.forEach(element => {
            element.status = 0;
            if(element.name == name)
                element.status = 1;
        });

        // alert(JSON.stringify(array));
        var aux = array.filter(item => item.status == 1);


        // alert(JSON.stringify(aux[0].id));
        setItens(array);
        setContent('');
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setContent(aux[0].id);
        }, 300);

        // ;
        // alert()
    }

    return (
        <Row>
            <SectionContainer className="col-12">
                <Row>
                    <div className="col-12 p-0">
                        <h2 id="title-menu" style={{ textAlign: "center", marginBottom: 5 }}>Menu</h2>
                        <div className="nav" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                            <Ul>
                                { itens.map(item => (
                                    <li key={item.name} className={item.status ? 'active' : ''} onClick={() => handleNav(item.name)}>{ item.name }</li>
                                ))}
                            </Ul>
                        </div>
                    </div>
                    <div className="col-12 content p-0">
                        <Row>
                            { loading && <div className="loader-more"></div>}
                            { content == '' && '' }
                            { content == 'form' && <Form /> }
                            { content == 'iknow' && <IKnow /> }
                            { content == 'ineed' && <INeed /> }
                            { content == 'feed' && <Feed /> }
                        </Row>
                    </div>
                </Row>
            </SectionContainer>
        </Row>
    );
}
