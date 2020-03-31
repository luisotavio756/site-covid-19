import React, { useEffect, useState } from 'react';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';


import { Row, FeedItem } from './styles';
import api from '../../../../../services/api';

export default function IKnow() {
    const [ loading, setLoading ] = useState(false);
    const [ pageNow, setPage ] = useState(1);
    const [ feed, setFeed ] = useState([]);
    const [ total, setTotal ] = useState(0);
    
    async function loadFeed(page = 1) {
        const { data }  = await api.get(`/needies?page=${page}`);

        // alert(JSON.stringify(data.needies));
        
        setFeed(data.needies);
        setTotal(data.total);
        setLoading(false);
        setPage(page);
        if(page != 1)
            window.location.href = '#feed';
    }

    useEffect(() => {
        
        setLoading(true);
        loadFeed();

    }, []);


    

    async function prevPage() {
        setLoading(true);
        loadFeed(pageNow - 1); 
    }

    function nextPage() {
        setLoading(true);
        loadFeed(pageNow + 1); 
    }

    return (
        <div id="feed" className="col-6 p-0" style={{ margin: '0 auto'}}>
            <Row>
                <div className="col-12 title">
                    <h4>Aqui funciona um Feed de pessoas necessitadas, onde você poderá ver e conhecer quem está precisando de ajuda</h4>
                    <div className="divider"></div>
                </div>
            </Row>
            <Row>
                { loading && <div className="loader-more"></div>}
                { total == 0 && 
                    <FeedItem>
                        <div className="info">
                            <h4 style={{ textAlign: 'center'}}>Nenhuma ajuda cadastrada. Você pode cadastrar em <span>"Conheço alguem que precisa"</span> ou <span>"Eu preciso"</span></h4>
                        </div>
                    </FeedItem>
                }
                { feed.map(item => (
                    <FeedItem key={item.needy_name}>
                        <div className="info">
                            <h4>{ item.needy_name}</h4>
                            <p>{ item.city }, { item.address }, Nº { item.number }. { item.reference_point }</p>
                        </div>
                        <div className="info">
                            <p>{ item.description }</p>
                        </div>
                        <div className="info-group">
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
                {
                    total > 8 &&
                    <div className="col-12 p-0 pagination" style={{ display: 'flex', alignItems: 'center', justifyContent: "space-between"}}>
                        <button disabled={pageNow === 1} onClick={prevPage}><FontAwesomeIcon icon={faAngleDoubleLeft} /> Anterior</button>
                        <button disabled={pageNow === total / 8} onClick={nextPage}>Proxima <FontAwesomeIcon icon={faAngleDoubleRight} /> </button>
                    </div>
                }
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
