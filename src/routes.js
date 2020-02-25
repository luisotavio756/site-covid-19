import React from 'react';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Index from './pages/Index';
import SignIn from './pages/SignIn';

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
const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Index} />
            <Route path="/login" component={SignIn} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
