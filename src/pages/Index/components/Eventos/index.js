import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faAngleRight } from '@fortawesome/free-solid-svg-icons'

import { Row, SectionEventos, Evento } from './styles.js';

const eventos = [
    {
        id: 1,  
        type: 'Tipo de Evento',
        title: 'Titulo',
        descricao: 'Evento voltado para a disseminação e democratização do conteúdo tecnológico em nossa cidade. Com a presença de Nonato Filho...',
        data:  '10 março de 2020',
        horario: '08:00',
        duracao: '20'

    },
    {
        id: 2,  
        type: 'Tipo de Evento',
        title: 'Titulo',
        descricao: 'Evento voltado para a disseminação e democratização do conteúdo tecnológico em nossa cidade. Com a presença de Nonato Filho...',
        data:  '15 março de 2020',
        horario: '08:00',
        duracao: '20'

    }
];
export default function Eventos() {
    return (
        <Row>
            <SectionEventos className="col-12">
                <Row>
                    <div className="col-12 header">
                        <h1>Eventos</h1>
                        <div className="divider"></div>
                    </div>
                    {eventos.map((item) => (
                        <Evento key={item.id} className="col-6">
                            <div className="date">
                                <h1><FontAwesomeIcon icon={faCircle} /> { item.data }</h1>
                                {/* <hr/> */}
                            </div>
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
                    <div className="col-12 link">
                        <Link to="/teste">
                            Veja toda nossa programação <FontAwesomeIcon icon={faAngleRight} />
                            {/* <div className="divider"></div> */}
                        </Link>
                    </div>
                </Row>
            </SectionEventos>
        </Row>
    );
}
