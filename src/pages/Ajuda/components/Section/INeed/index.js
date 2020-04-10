import React, { useState, useEffect } from 'react';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import { Row, FormHelp } from './styles';
import api from '../../../../../services/api';

export default function Feed() {
    const [ name, setName ] = useState('');
    const [ phone, setPhone ] = useState('');

    const [ needy_name, setNameNeedy ] = useState('');
    const [ needy_phone, setPhoneNeedy ] = useState('');
    const [ city, setCity ] = useState('');
    const [ address, setAddress ] = useState('');
    const [ number, setNumber ] = useState('');
    const [ reference_point, setRP] = useState('');
    const [ description, setDescription ] = useState('');


    const [ status, setStatus ] = useState(0);
    const [ total, setTotal ] = useState(0);

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const response = await api.post('/needies', {
                name,
                phone,
                needyName: needy_name,
                needyPhone: needy_phone,
                city,
                address,
                number,
                referencePoint: reference_point,
                description
            });

            setStatus(1);
            setName('');
            setPhone('');
            setNameNeedy('');
            setPhoneNeedy('');
            setCity('');
            setAddress('');
            setNumber('');
            setRP('');
            setDescription('');
            window.location.href = '#content';

        } catch (error) {
            setStatus(2);
        }

        setTimeout(() => {
            setStatus(0);
        }, 5000);
    }

    async function loadTotal(page = 1, order = '') {
        const { data } = await api.get(
            `/needies?page=${page}&order=${order}`
        );

        // alert(data);
        setTotal(data.total);
        // alert(data);
    }

    useEffect(() => {
        loadTotal();
        // alert(total)
    }, []);

    return (
        <div className="col-6 p-0" style={{ margin: '0 auto'}}>
            <Row>
                <div className="col-12 title">
                    <h4>Nesta seção você poderá nos informar sobre você que está precisando de ajuda, não é necessário se identificar, no entanto precisamos do seu endereço e do que está precisando. Seu pedido aparecerá no feed de Ajuda.</h4>
                    <div className="divider"></div>
                </div>
            </Row>
            {total >= 100 && 
                <FormHelp onSubmit={handleSubmit}>
                    <div className="section-form">
                        <h2 style={{ textAlign: 'center'}}>Cadastro Encerrado !</h2>
                        <p style={{ textAlign: 'center', color: '#666'}}>O limite de 100 pessoas foi excedido</p>
                    </div>
                </FormHelp>
            
            }
            { total < 100 &&
            <FormHelp onSubmit={handleSubmit}>
                { status == 1 && <div className="alert alert-success"><h4>Você foi cadastrado com sucesso em nosso feed de ajuda. Você pode ver clicando em "Feed de Ajuda". Obrigado <FontAwesomeIcon icon={faHeart} /></h4></div> }
                { status == 2 && <div className="alert alert-danger"><h4>Não foi possível concluir o cadastro, verifique os campos ou tente novamente mais tarde <FontAwesomeIcon icon={faTimes} /></h4></div> }
                <div className="section-form">
                    <h2>Seus Dados</h2>
                    <div className="input-block">
                        <label htmlFor="">Nome</label>
                        <input type="text" placeholder="Digite seu Nome..." onChange={(e) => setNameNeedy(e.target.value)} value={needy_name} required />
                    </div>
                    <div className="input-block">
                        <label htmlFor="">Telefone</label>
                        <input type="tel" maxLength="15" placeholder="Digite seu Telefone..." onChange={(e) => setPhoneNeedy(e.target.value)} value={needy_phone} required/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="">Cidade</label>
                        <input type="text" placeholder="Digite sua Cidade..." onChange={(e) => setCity(e.target.value)} value={city} required/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="">Endereço</label>
                        <input type="text" placeholder="Digite seu Endereço..." onChange={(e) => setAddress(e.target.value)} value={address} required/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="">Nº</label>
                        <input type="tel" placeholder="Digite o Número da casa..." onChange={(e) => setNumber(e.target.value)} value={number} required/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="">Ponto de Referência</label>
                        <input type="text" placeholder="Digite um Ponto de Referência..." onChange={(e) => setRP(e.target.value)} value={reference_point} required/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="">Descrição</label>
                        <textarea rows="8" placeholder="Descreva sua história e o que está precisando..." onChange={(e) => setDescription(e.target.value)}>{description}</textarea>
                    </div>
                </div>
                <button type="submit"><FontAwesomeIcon icon={faHeart} /> Pedir Ajuda</button>
            </FormHelp>
            }
            { total < 100 &&
            <Row style={{ marginTop: 10 }} >
                <div className="col-12 share">
                    <p style={{ textAlign: 'center', fontSize: 14, color: '#666' }}>Ou</p>
                    <p style={{ textAlign: 'center', fontSize: 14, color: '#666' }}>Entre em contato diretamente com nossos representantes no Whatsapp</p>
                    <a href="https://api.whatsapp.com/send?phone=+5585992817986&text=Olá, eu preciso de ajuda !" target="_blank">
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </a>
                </div>
            </Row>
            }
        </div>
    );
}
