import React, { useEffect } from 'react';


import Banner from './components/Banner';
import Section from './components/Section';
// import { Container } from './styles.js';

export default function Ajuda() {
    useEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <>
            <Banner /> 
            <Section />
        </>
        // <h1>Ajuda </h1>
    );
}
