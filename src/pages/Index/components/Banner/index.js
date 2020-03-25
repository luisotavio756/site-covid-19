import React, { useEffect, useState } from 'react';
import { BannerImg } from './styles';

import api from '../../../../services/api';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCheck, faHeartbeat } from '@fortawesome/free-solid-svg-icons'

export default function Banner() {

    const [ loading, setLoading ] = useState(false);
    const [ confirmed, setConfirmed ] = useState(0);
    const [ deaths, setDealths ] = useState(0);

    useEffect(() => {
        async function load() {
            const { data } = await api.get('/api/report/v1/brazil');


            setConfirmed(data.data.confirmed);
            setDealths(data.data.deaths);
            setLoading(false);
            // alert(JSON.stringify(data.data))
        }

        setLoading(true);
        load();
        

    }, []);
    return (
        <BannerImg>
            <div className="text" id="text">
                <h1>
                    Mapa de infecção do Coronavirus
                </h1>
            </div>
            <p className="brasil">
                Acompanhe os números dos casos no Brasil
            </p>
            { loading && <div className="loader-more" style={{ marginTop: 5}}></div>}
            { !loading && 
                <div className="cases">
                    <div className="confirmed">
                        <FontAwesomeIcon icon={faUserCheck} /> 
                        <div className="text"> 
                            <h1>{ confirmed }</h1>
                            <p>confirmados</p>
                        </div>
                    </div>
                    <div className="dealths">
                        <FontAwesomeIcon icon={faHeartbeat} /> 
                        <div className="text">
                            <h1>{ deaths }</h1>
                            <p>mortes</p>
                        </div>
                    </div>
                </div>
            }
        </BannerImg>
    );
}
