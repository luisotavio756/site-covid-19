import React, { useEffect, useState } from 'react';
import { BannerImg } from './styles';

import api from '../../../../services/api';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faHandHoldingUsd, faUsers } from '@fortawesome/free-solid-svg-icons';

export default function Banner() {

    const [ loading, setLoading ] = useState(false);
    const [ confirmed, setConfirmed ] = useState('1,3');
    const [ deaths, setDealths ] = useState(105);

    useEffect(() => {
        // alert('kkkkk')
        // async function load() {
        //     let { data }  = await api.get('/cases/br');
        //     data = data[0];

        //     setConfirmed(data.confirmed);
        //     setDealths(data.deaths);
        //     setLoading(false);
        //     // alert(JSON.stringify(data[0]))
        // }

        // setLoading(true);
        // load();


    }, []);
    return (
        <BannerImg>
            <div className="text" id="text">
                <h1>
                    "Não é preciso toque para estar junto"
                </h1>
            </div>
            <p className="brasil">
                {/* Números de arrecadação até o momento */}
            </p>
            { loading && <div className="loader-more" style={{ marginTop: 5}}></div>}
            { !loading &&
                <div className="cases">
                    <div className="confirmed">
                        <FontAwesomeIcon icon={faUtensils} />
                        <div className="text">
                            <h1>{ confirmed }</h1>
                            <p>ton de alimentos</p>
                        </div>
                    </div>
                    <div className="dealths">
                        <FontAwesomeIcon icon={faUsers} />
                        <div className="text">
                            <h1>{ deaths }</h1>
                            <p>famílias</p>
                        </div>
                    </div>
                    {/* <div className="dealths">
                        <FontAwesomeIcon icon={faUsers} />
                        <div className="text">
                            <h1>{ deaths }</h1>
                            <p>famílias ajudadas</p>
                        </div>
                    </div> */}
                </div>
            }
        </BannerImg>
    );
}
