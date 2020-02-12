import React from 'react';

import './styles.css';
import Navbar from '../../components/Navbar';
import Banner from '../../components/Banner';
import QuemSomos from '../../components/QuemSomos';
import Section from '../../components/Section';

export default function Index() {
    return (
        <div className="wrap">
            <Navbar />
            <Banner />
            <div className="container">
                <QuemSomos />
                <Section />
            </div>
            {/* <button type="button" className="scroll-top">Scroll to Top</button> */}
        </div>
    );
}
