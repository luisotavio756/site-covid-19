import React, { useEffect, useState } from "react";

// Import Api
import api from '../../../../services/api';

import { Row, Section, Details, MapsContainer, Table } from "./styles";

import Maps from "./Maps";

const ufs = [
    {nome: "Acre", sigla: "AC"},
    {nome: "Alagoas", sigla: "AL"},
    {nome: "Amapá", sigla: "AP"},
    {nome: "Amazonas", sigla: "AM"},
    {nome: "Bahia", sigla: "BA"},
    {nome: "Ceará", sigla: "CE"},
    {nome: "Distrito Federal", sigla: "DF"},
    {nome: "Espírito Santo", sigla: "ES"},
    {nome: "Goiás", sigla: "GO"},
    {nome: "Maranhão", sigla: "MA"},
    {nome: "Mato Grosso", sigla: "MT"},
    {nome: "Mato Grosso do Sul", sigla: "MS"},
    {nome: "Minas Gerais", sigla: "MG"},
    {nome: "Pará", sigla: "PA"},
    {nome: "Paraíba", sigla: "PB"},
    {nome: "Paraná", sigla: "PR"},
    {nome: "Pernambuco", sigla: "PE"},
    {nome: "Piauí", sigla: "PI"},
    {nome: "Rio de Janeiro", sigla: "RJ"},
    {nome: "Rio Grande do Norte", sigla: "RN"},
    {nome: "Rio Grande do Sul", sigla: "RS"},
    {nome: "Rondônia", sigla: "RO"},
    {nome: "Roraima", sigla: "RR"},
    {nome: "Santa Catarina", sigla: "SC"},
    {nome: "São Paulo", sigla: "SP"},
    {nome: "Sergipe", sigla: "SE"},
    {nome: "Tocantins", sigla: "TO"}
];

export default function Casos() {
    const [ loadingState, setLoadingState ] = useState(false);
    const [ currentState, setCurrentState ] = useState([]);
    const [ allStates, setAllStates ] = useState([]);
    const [ nameState, setName ] = useState('');
    const [ uF, setUf ] = useState(ufs);
    const [ lastUpdate, setLast ] = useState('');


    useEffect(() => {
        var states = document.getElementsByClassName("estado")
        var ufs = document.getElementsByClassName("select-uf");

        document.getElementById('select-uf').addEventListener("change", function(){
            // var el = document.querySelector('select[name="exercicio"] option[selected]').getAttribute('value');
            var i = this.value
            // alert(i)
            setLoadingState(true);
            currentState(i);
            
        
        });

        for(var i = 0; i < states.length; i++) {
            states[i].onclick = function() {
                setLoadingState(true);
                currentState(this.getAttribute('code'))
            }
        }

        
        async function load() {
            const { data } = await api.get('/cases');
            setAllStates(data[0].cases);
            setLast(data[0].last_updated);
        }

        async function currentState(uf = 'ce') {
            // const { data } = await api.get(`/api/report/v1/brazil/uf/`);

            // setCurrentState(data);
            // setLoadingState(false);

            const { data }  = await api.get(`/cases/${uf}`);

            const name = uF.filter(item => item.sigla === uf.toUpperCase());
            // alert(name)
            setName(name[0].nome);
            setCurrentState(data[0]);
            setLoadingState(false);
            
            // alert(JSON.stringify(name[0]));
        }


        load();
        currentState();
    }, []);

   

    return (
        <Row id="cases">
            <Section className="col-12">
                
                <Row className="mobile-reverse">
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
                                        <td style={{ textAlign: 'center'}}>{ item.confirmed }</td>
                                        <td style={{ textAlign: 'center'}}>{ item.deaths } </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Table>   
                    <MapsContainer className="col-6">
                        <h1>Selecione um estado</h1>
                        <Maps />
                        <Row id="select">
                            <div className="col-12 select">
                                <select name="" id="select-uf">
                                    <option selected disabled>Selecione um Estado</option>
                                    { ufs.map(item => (
                                        <option value={item.sigla}>{ item.nome }</option>
                                    ))}
                                </select>
                            </div>
                        </Row>

                    </MapsContainer> 
                    <Details className="col-3">
                        { loadingState && <div className="loader-more"></div>}
                        { !loadingState && <div>
                            <h1>{ nameState }</h1>
                                <div className="confirmed">
                                    <h3>Confirmados</h3>
                                    <p>{ currentState.confirmed }</p>
                                </div>
                                <div className="deaths">
                                    <h3>Mortes</h3>
                                    <p>{ currentState.deaths }</p>
                                </div>
                        </div>}
                    </Details>            
                </Row>
                <Row id="fontes">
                    <div className="col-12">
                        <h4 style={{ textAlign: 'center'}}>Última atualização em { lastUpdate }</h4>
                        <p><span>*Atenção*:</span> Os números podem ter diferença em relação aos números do Ministério da Saúde pela indisponibilidade da plataforma online, fazendo com que os dados das secretarias de cada estado sejam mais próximos da realidade.</p>
                        <p className="fontes"><span>Fontes:</span> Dados consultados pela plataforma de monitoramento <a href="https://labs.wesleycota.com/sarscov2/br/" target="_blank">https://labs.wesleycota.com/sarscov2/br/</a> e analisados por nossos pesquisadores pelas secretárias de saúde do Acre, Alagoas, Amapá, Amazonas, Bahia, Ceará, Distrito Federal, Espírito Santo, Goiás, Maranhão, Mato Grosso, Mato Grosso do Sul, Minas Gerais, Pará, Paraíba, Paraná, Pernambuco, Piauí, Rio de Janeiro, Rio Grande do Norte, Rio Grande do Sul, Rondônia, Roraima, Santa Catarina, São Paulo, Sergipe e Tocantins. </p>
                    </div>
                </Row>
            </Section>
        </Row>
    );
}
