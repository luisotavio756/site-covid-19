import React from 'react';

import './styles.css';
import Navbar from '../../components/Navbar';
import Banner from '../../components/Banner';
import QuemSomos from '../../components/QuemSomos';
import QuemSomos2 from '../../components/QuemSomos2';
import Serviços from '../../components/Serviços';
import Serviços2 from '../../components/Serviços2';
import Parceiros from '../../components/Parceiros';
import Contato from '../../components/Contato';
import Footer from '../../components/Footer';

export default function Index() {

    return (
        // <div className="wrap">
            <>
                <Navbar />
                <Banner />
                <div className="container">
                    <QuemSomos />
                    <Serviços />
                    <QuemSomos2 />
                    <Serviços2 />
                    <Parceiros />
                    <Contato />
                    <Footer />
                </div>
            </>
            /*
            <button type="button" className="scroll-top">Scroll to Top</button>
        </div>*/
    );
}
