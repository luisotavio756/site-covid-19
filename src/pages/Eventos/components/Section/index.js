import React, { useEffect, useState } from 'react';

import { Row, SectionContainer, Evento, Ul, Card } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faPlus } from '@fortawesome/free-solid-svg-icons';

const array = [
    {
        name: 'Todos',
        status: 1
    },
    {
        name: 'Gratuitos',
        status: 0
    },
    {
        name: 'Cursos',
        status: 0
    }
];

const eventos = [
    {
        id: 0,  
        type: 'Tipo de Evento',
        title: 'Titulo',
        descricao: 'Evento voltado para a disseminação e democratização do conteúdo tecnológico em nossa cidade. Com a presença de Nonato Filho...',
        data:  '10 março de 2020',
        horario: '08:00',
        duracao: '20'

    },
    {
        id: 1,  
        type: 'Tipo de Evento',
        title: 'Titulo',
        descricao: 'Evento voltado para a disseminação e democratização do conteúdo tecnológico em nossa cidade. Com a presença de Nonato Filho...',
        data:  '15 março de 2020',
        horario: '08:00',
        duracao: '20'

    },
    {
        id: 2,  
        type: 'Tipo de Evento',
        title: 'Titulo',
        descricao: 'Evento voltado para a disseminação e democratização do conteúdo tecnológico em nossa cidade. Com a presença de Nonato Filho...',
        data:  '10 março de 2020',
        horario: '08:00',
        duracao: '20'

    },
    {
        id: 3,  
        type: 'Tipo de Evento 333',
        title: 'Titulo',
        descricao: 'Evento voltado para a disseminação e democratização do conteúdo tecnológico em nossa cidade. Com a presença de Nonato Filho...',
        data:  '15 março de 2020',
        horario: '08:00',
        duracao: '20'

    },
    {
        id: 4,  
        type: 'Tipo de Evento 333',
        title: 'Titulo',
        descricao: 'Evento voltado para a disseminação e democratização do conteúdo tecnológico em nossa cidade. Com a presença de Nonato Filho...',
        data:  '10 março de 2020',
        horario: '08:00',
        duracao: '20'

    },
    {
        id: 5,  
        type: 'Tipo de Evento 333',
        title: 'Titulo',
        descricao: 'Evento voltado para a disseminação e democratização do conteúdo tecnológico em nossa cidade. Com a presença de Nonato Filho...',
        data:  '15 março de 2020',
        horario: '08:00',
        duracao: '20'

    },
];


export default function Section() {
    const [ loading, setLoading ] = useState(false);
    const [ eventosList, setEventos ] = useState([]);

    useEffect(() => {
        async function load() {
            let e = await eventos.slice(0, 3).map(item => item);
            setEventos(e);
            // eventosList = await ;
        }
        
        load();
    }, []);
    
    
    function showMore() {
        var i = eventosList.length - 1;

        setLoading(true);

        let n = [];
        n = eventos.filter(item => {
            return item.id > i;
        });
        
        // n = JSON.parse(n);
        // alert(JSON.stringify(n));    
        // setDevs([...devs, response.data])
        // alert(JSON.stringify(eventosList));
        
        
        setTimeout(() => {
            setLoading(false)
            setEventos([...eventosList, n]);
        }, 2000);

    }

    return(
        <>
            <Row id="scroll">
                <SectionContainer className="col-12">
                    <Row>
                        <div className="col-8">
                            <div className="nav" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                                <Ul>
                                    { array.map(item => (
                                        <li key={item.name} className={item.status ? 'active' : ''}>{ item.name }</li>
                                    ))}
                                </Ul>
                                <a href="#filter"><FontAwesomeIcon icon={faFilter} /> Filtrar</a>
                            </div>
                            <div className="col-12 divider"></div>
                            <Row className="list-eventos">
                                {eventosList && eventosList.map(item => (
                                    <Evento key={item.id} className="col-12">
                                        {/* <div className="date">
                                            <h1><FontAwesomeIcon icon={faCircle} /> { item.data }</h1>
                                            <hr/>
                                        </div> */}
                                        <div className="card">
                                            <div className="event">
                                                <h1 className="title">{ item.type }</h1>
                                                <div className="divider"></div>
                                                <h2 className="hour">{ item.horario }h</h2>
                                                <p className="duracao">Duraçaõ <span>{ item.duracao }h</span></p>
                                            </div>
                                            <div className="about">
                                                <h1 className="title">{ item.title }</h1>
                                                <p className="desc">{ item.descricao }</p>
                                            </div>
                                        </div>
                                    </Evento>
                                ))}
                                <div className="col-12 button-more">
                                    { loading && <div className="loader-more"></div> }
                                    { !loading && <button type="button" onClick={showMore}><FontAwesomeIcon icon={faPlus} /> carregar mais</button> }
                                </div>
                            </Row>
                        </div>
                        <div className="col-4">
                            <Card>
                                <div className="title">
                                    <h1>Realize seu evento na <span>Kadoo</span></h1>
                                    <div className="divider"></div>
                                </div>
                                <div className="desc">
                                    <p>Selecionamos eventos que possuam conteúdos relevantes e que tenham como proposta conectar pessoas e negócios, compartilhar conhecimento e criar oportunidades, colaborando sempre para o desenvolvimento e transformação do ecossistema da nossa cidade e região</p>
                                </div>
                                <div className="action">
                                    <button type="button">Enviar Proposta</button>
                                </div>
                            </Card>
                        </div>
                    </Row>
                </SectionContainer>
            </Row>
            
        </>
    );
};