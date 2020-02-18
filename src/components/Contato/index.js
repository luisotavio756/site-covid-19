import React from 'react';

import './styles.css';

export default function Contato() {
    return (
        <div className="row" id="contato">
            <div className="col-12 content">
                <h1>Se interessou ? Entre em contato conosco !</h1>
                <div className="divider"></div>
                <div className="row">
                    <div className="col-12">
                        <form>
                            <div className="form-row">
                                <div className="col-6">
                                    <div className="form-group">
                                        <label>Seu Nome</label>
                                        <input type="text" name="nome" />
                                    </div>
                                    <div className="form-group">
                                        <label>Seu Melhor E-mail</label>
                                        <input type="text" name="email" />
                                    </div>
                                    <div className="form-group">
                                        <label>Seu Número</label>
                                        <input type="number" name="phone" />
                                    </div>
                                    <div className="form-group">
                                        <label>Em que serviço se Interessou ?</label>
                                        <select name="servico">
                                            <option value="1">Cursos</option>
                                            <option value="2">Eventos</option>
                                            <option value="3">Serviços</option>
                                            <option value="4">Outro</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <textarea name="mensagem" rows="3"></textarea>
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
