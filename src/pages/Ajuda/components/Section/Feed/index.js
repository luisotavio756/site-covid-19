import React, { useEffect, useState } from 'react';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';


import { Row, FeedItem } from './styles';
import api from '../../../../../services/api';

export default function IKnow() {
    const [ feed, setFeed ] = useState([]);

    useEffect(() => {
        async function loadFeed() {
            const { data }  = await api.get('/needies');

            // alert(JSON.stringify(data.needies));
            setFeed(data.needies);
        }

        loadFeed();

    }, []);
    return (
        <div className="col-6 p-0" style={{ margin: '0 auto'}}>
            <Row>
                <div className="col-12 title">
                    <h4>Aqui funciona um Feed de pessoas necessitadas, onde você poderá ver e conhecer quem está precisando de ajuda</h4>
                    <div className="divider"></div>
                </div>
            </Row>
            <Row>
                { feed.map(item => (
                    <FeedItem>
                        <div className="info">
                            <h4>{ item.needy_name}</h4>
                            <p>{ item.city }, { item.address }, Nº { item.number }. { item.reference_point }</p>
                        </div>
                        <div className="info">
                            <p>{ item.description }</p>
                        </div>
                        <div className="info-group" style={{ }}>
                            <div className="test">
                                <h4>Telefone:</h4>
                                <p>{ item.needy_phone}</p>
                            </div>
                            <p>há 4 horas</p>
                        </div>
                        <div className="info subscribe">
                            {item.name && item.phone && <p>cadastrado por <span>{ item.name }</span></p>}
                            
                        </div>
                    </FeedItem>
                ))}
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
