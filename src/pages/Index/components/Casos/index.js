import React, { useEffect, useState } from "react";

// Import Api
import api from '../../../../services/api';

import { Row, Section, Details, MapsContainer, Table } from "./styles";

import Maps from "./Maps";

export default function Casos() {
    const [ loadingState, setLoadingState ] = useState(false);
    const [ currentState, setCurrentState ] = useState([]);
    const [ allStates, setAllStates ] = useState([]);

    useEffect(() => {
        var states = document.getElementsByClassName("estado")

        for(var i = 0; i < states.length; i++) {
            states[i].onclick = function() {
                setLoadingState(true);
                currentState(this.getAttribute('code'))
            }
        }
        
        async function load() {
            const { data } = await api.get('/api/report/v1');
            setAllStates(data.data);
        }

        async function currentState(uf = 'ce') {
            const { data } = await api.get(`/api/report/v1/brazil/uf/${uf}`);

            setCurrentState(data);
            setLoadingState(false);
            
            // alert(JSON.stringify(data));
        }


        load();
        currentState();
    }, []);
    return (
        <Row id="cases">
            <Section className="col-12">
                
                <Row className="mobile-reverse">
                    <Details className="col-2">
                        { loadingState && <div className="loader-more"></div>}
                        { !loadingState && <div>
                            <h1>{ currentState.state }</h1>
                                <div className="confirmed">
                                    <h3>Confirmados</h3>
                                    <p>{ currentState.cases }</p>
                                </div>
                                <div className="deaths">
                                    <h3>Mortes</h3>
                                    <p>{ currentState.deaths }</p>
                                </div>
                        </div>}
                    </Details>
                    <MapsContainer className="col-7">
                        <h1>Selecione um estado</h1>
                        <Maps />
                    </MapsContainer>
                    <Table className="col-3">
                        <table>
                            <thead>
                                <tr>
                                    <th>UF</th>
                                    <th style={{ textAlign: 'center'}}>Confirmados</th>
                                    <th style={{ textAlign: 'center'}}>Mortes</th>
                                </tr>
                            </thead>
                            <tbody>
                                { allStates.map(item => (
                                    <tr>
                                        <td style={{ textAlign: 'center'}}><strong>{ item.uf }</strong></td>
                                        <td style={{ textAlign: 'center'}}>{ item.cases }</td>
                                        <td style={{ textAlign: 'center'}}>{ item.deaths } </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Table>
                </Row>
            </Section>
        </Row>
    );
}
