import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

import './styles.css';

export default function Contato() {

    const [github, setGithub] = useState('');
    const [techs, setTechs] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        alert('kkkk')
    }

    return (
        <div className="row" id="contato">
            <div className="col-12 content">
                <h1>Se interessou ? Entre em contato conosco !</h1>
                <div className="divider"></div>
                <div className="row">
                    <div className="col-12">
                        <form onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="col-6">
                                    <div className="form-group">
                                        <label>Seu Nome</label>
                                        <input type="text" name="nome" />
                                    </div>
                                    <div className="form-group">
                                        <label>Seu Número</label>
                                        <input type="number" name="phone" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label>Seu Melhor E-mail</label>
                                        <input type="email" name="email" />
                                    </div>
                                    <div className="form-group">
                                        <label>Diga-nos em que se Interessou ?</label>
                                        <select name="servico">
                                            <option selected disabled>Selecione uma Opção</option>
                                            <option value="1">Cursos</option>
                                            <option value="2">Eventos</option>
                                            <option value="3">Serviços</option>
                                            <option value="4">Outro</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-12">
                                    <div className="form-group">
                                        <label>Mensagem</label>
                                        <textarea name="mensagem" rows="5"></textarea>
                                    </div>
                                    <div className="form-actions">
                                        <button type="submit" className="btn"><FontAwesomeIcon icon={faPaperPlane} /> Enviar Mensagem</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
