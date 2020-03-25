import React from 'react';

import Banner from './components/Banner';

export default function Index() {

    return (
        <>  
            <Banner />
            <div className="teste" style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <h1>Covid-19</h1>
            </div>
            {/* <Banner /> */}
        </>
    );
}
