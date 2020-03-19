import React, { useEffect } from 'react';

// Includes
import Navbar from '../include/Navbar';
import Footer from '../include/Footer';

import Banner from './components/Banner';
import Section from './components/Section';

export default function OQue() {
    
    return (
        <>
            <Navbar />
            <Banner />
            <Section />
            <Footer />
        </>
    );
}
