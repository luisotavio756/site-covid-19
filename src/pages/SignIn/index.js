import React, { useEffect, useState } from 'react';
import ReactTransitionGroup from 'react-addons-transition-group';
import { Link, withRouter, Route, useHistory, useLocation } from 'react-router-dom';

import Logo from '../../assets/img/kadoo.png';
import api from '../../services/api';
// import { login } from '../../services/auth';

import { Form, Container } from './styles';

const SignIn = () => {
    var history = useHistory();
    const [email, setEmail] = useState('luis.otavio2425@gmail.com');
    const [password, setPassword] = useState('12345678');
    const [email_err, setEmailErr] = useState('');
    const [password_err, setPasswordErr] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        document.title = 'Kadoo Tecnologia - Login';
    });

    async function handleSignIn(e) {
        e.preventDefault();
        // const { email, password } = this.state;

        if(email.length == 0) {
            setEmailErr("Campo Obrigatório");
        }

        if (password.length == 0) {
            setPasswordErr("Campo Obrigatório")
        }

        if (!email || !password) {
            setError("Preencha todos os campos para entrar ");

        } else {
            // alert(email + password)
            try {
                const response = await api.post("/users/auth", {
                    email,
                    password
                });
                
                // alert(JSON.stringify(response))
                // login(response.data.token);

                // window.location.href = '/teste';
                history.push('/sis/');
            } catch (err) {
                setError("Email ou Senha incorretos")
            }
        }
    } 

    // handleInput = (e) => {
    //     let name = e.target.name;
    //     let error = name+"_error";
    //     this.setState({ [name]: e.target.value });

    //     if (e.target.value.length > 0) {
    //         this.setState(
    //             { 
    //                 [error]: '' 
    //             }
    //         )
    //     }
    // }

    return (
        <Container>
            <Form autoComplete="off" onSubmit={handleSignIn}>
                <img src={Logo} alt="Airbnb" />
                {error && <p>{error}</p>}
                <input 
                    type="email"
                    name="email"
                    placeholder="Seu Email.."
                    onChange={(e) => { setEmail(e.target.value); setEmailErr('') }}
                    value={email}
                    className={email_err != '' ? 'invalid' : '' }
                />
                <input 
                    type="password"
                    name="password"
                    placeholder="Sua Senha Secreta.."
                    onChange={(e) => { setPassword(e.target.value); setPasswordErr('') }}
                    value={password}
                    className={password_err != '' ? 'invalid' : '' }
                />
                <button type="submit">Entrar</button>
                <hr />
                <Link to="/signup">Não tem uma Conta ? Cadastre-se !</Link>
            </Form>
        </Container>
    );

}

export default withRouter(SignIn);