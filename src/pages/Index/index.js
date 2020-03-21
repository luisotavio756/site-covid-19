import React from 'react';

import Banner from './components/Banner';
import Eventos from './components/Eventos';
import Serviços from './components/Serviços';
// import QuemSomos2 from './components/QuemSomos2';
import Jobs from './components/Jobs';
import Email from './components/Email';

export default function Index() {

    return (
        <>
            <Banner />
            <Eventos />
            <Serviços />
            <Jobs />
            <Email />
        </>
    );
}
