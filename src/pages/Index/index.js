import React from 'react';

import './styles.css';
import Navbar from '../../components/Navbar';
import Banner from '../../components/Banner';
import QuemSomos from '../../components/QuemSomos';
import Serviços from '../../components/Serviços';
import Serviços2 from '../../components/Serviços2';
import Eventos from '../../components/Eventos';
import Footer from '../../components/Footer';

export default function Index() {
    return (
        <div className="wrap">
            <Navbar />
            <Banner />
            <div className="container">
                <QuemSomos />
                <Serviços />
                <Serviços2 />
                <Eventos />
                <Footer />
            </div>
            {/* <button type="button" className="scroll-top">Scroll to Top</button> */}
        </div>
    );
}
