import React from 'react';

import './styles.css';
import Img from '../../assets/img/banner.jpeg';

export default function Banner() {
    return (
        <div className="banner">
            {/* <img className="img" src={Img} /> */}
            <div className="text">
                <h1>The country is big, but this believes it's short</h1>
                <p>- Ronaldo Lemos</p>
            </div>
            <div className="shadow"></div>
        </div>
    );
}
