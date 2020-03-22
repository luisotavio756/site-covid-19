import React from 'react';
import Loadable from 'react-loadable';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';

// Import Includes
import NavBar from './pages/include/Navbar';
import Footer from './pages/include/Footer';
import './global.css';
import { isAuthenticated } from './auth.js';

const Loading = () => {
    return(
        <div style={{ height: '100vh'}}>
            <div className="loader"></div>
        </div>
    );
};
// Import Pages
const Index = Loadable({
    loader: () => import('./pages/Index'),
    loading: Loading 
});

const Quem = Loadable({
    loader: () => import('./pages/Quem'),
    loading: Loading
});

const OQue = Loadable({
    loader: () => import('./pages/OQue'),
    loading: Loading
});

const Como = Loadable({
    loader: () => import('./pages/Como'),
    loading: Loading
});

const Eventos = Loadable({
    loader: () => import('./pages/Eventos'),
    loading: Loading
});


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
        <NavBar />

        {/* Routes */}
        <Switch>
            <Route exact path="/" component={Index}  />
            <Route path="/quem" component={Quem} />
            <Route path="/oque" component={OQue} />
            <Route path="/como" component={Como} />
            <Route path="/eventos" component={Eventos}  />
        </Switch>
        {/* Routes */}
        
        <Footer />
    </BrowserRouter>
);

export default Routes;
