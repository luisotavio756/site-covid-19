import React from 'react';
import Loadable from 'react-loadable';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';

import NavBar from './pages/include/Navbar';
import Footer from './pages/include/Footer';
import Index from './pages/Index';
import SignIn from './pages/SignIn';
import Quem from './pages/Quem';
import OQue from './pages/OQue';
import Como from './pages/Como';
import Eventos from './pages/Eventos';

import './global.css';

import { isAuthenticated } from './auth.js';

const PrivateRoute = ({ component: Component, ...rest}) => (
    <Route {...rest} render={props => (
        isAuthenticated() ? (
            <Component {...props} />
        ) : (
            <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
    )} />
);


const routes = [
    { path: '/sis/login', name: 'Login', Component: SignIn, styles: { height: '100vh', justifyContent: 'center', padding: '0 20px' } },
];


const Routes = () => (
    
    <BrowserRouter>
        <NavBar />
        <Switch>
            <Route exact path="/" component={Index}  />
            <Route path="/quem" component={Quem} />
            <Route path="/oque" component={OQue} />
            <Route path="/como" component={Como} />
            <Route path="/eventos" component={Eventos}  />
        </Switch>
        <Footer />
    </BrowserRouter>
);

export default Routes;
