import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Index from './pages/Index';
import SignIn from './pages/SignIn';
import Quem from './pages/Quem';
import OQue from './pages/OQue';

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
    { path: '/', name: 'Home', Component: Index },
    { path: '/quem', name: 'Quem', Component: Quem},
    { path: '/oque', name: 'OQue', Component: OQue},
    { path: '/login', name: 'About', Component: SignIn, styles: { height: '100vh', justifyContent: 'center', padding: '0 20px' } },
];


const Routes = () => (
    <BrowserRouter>

        <Switch>
            {routes.map(({ path, Component, styles: Styles}) => (
                <Route key={path} exact path={path}>
                    <div className="page" style={Styles}>
                        <Component />
                    </div>
                </Route>
            ))}
        </Switch>

    </BrowserRouter>
);

export default Routes;
