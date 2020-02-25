import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Index from './pages/Index';
import SignIn from './pages/SignIn';
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
    { path: '/login', name: 'About', Component: SignIn, styles: { height: '100vh', justifyContent: 'center', padding: '0 20px' } },
];

const Routes = () => (
    <BrowserRouter>
        <Route render={({ location }) => (
            <TransitionGroup>
                <CSSTransition
                    key={location.key}
                    timeout={300}
                    classNames="page"
                >
                    <Switch location={location}>
                        {routes.map(({ path, Component, styles: Styles}) => (
                            <Route exact path={path}>
                                <div className="page" style={Styles}>
                                    <Component />
                                </div>
                            </Route>
                        ))}
                    </Switch>
                </CSSTransition>
            </TransitionGroup>

        )} />
    </BrowserRouter>
);

export default Routes;
