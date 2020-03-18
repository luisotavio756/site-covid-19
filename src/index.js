import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';

// import App from './App';
// const root = document.querySelector('#root');
// const loader = document.querySelector('.loader');

// // if you want to show the loader when React loads data again
// const showLoader = () => {
//     loader.classList.remove('loader--hide');
//     root.style.opacity = '0';
// };

// const hideLoader = () => {
//     loader.classList.add('loader--hide');
//     root.style.opacity = '1';
// };

const App = () => <Routes />; 


// debugger;

ReactDOM.render(<App />, document.getElementById('root'));


