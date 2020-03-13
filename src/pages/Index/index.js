import React, { useEffect } from 'react';

import './styles.css';
import Navbar from '../../components/Navbar';
import Banner from '../../components/Banner';
import Eventos from '../../components/Eventos';
import Serviços from '../../components/Serviços';
// import QuemSomos2 from '../../components/QuemSomos2';
import Jobs from '../../components/Jobs';
import Email from '../../components/Email';
// import Contato from '../../components/Contato';
import Footer from '../../components/Footer';

export default function Index() {
    useEffect(() => {
        document.title = 'Kadoo Tecnologia';
    });

    return (
        // <div className="wrap">
            <>
                <Navbar />
                <Banner />
                <div className="container">
                    <Eventos />
                    <Serviços />
                    <Jobs />
                    <Email />
                    {/* <Contato /> */}
                    <Footer />
                </div>
                {/* <button type="button" className="scroll-top"></button> */}
            </>
            /*
            </div>*/
    );
}
