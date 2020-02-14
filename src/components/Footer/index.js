import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import './styles.css';

export default function Footer() {
    return (
        <div className="row" id="footer">
            <div className="col-12">
                <p>© 2020 Kadoo LTDA. Todos os direitos reservados.</p>
                <div className="social">
                    <a href="#face">
                        <FontAwesomeIcon icon={faFacebook}/>
                    </a>
                    <a href="#insta">
                        <FontAwesomeIcon icon={faInstagram}/>  
                    </a>
                    <a href="#linke">
                        <FontAwesomeIcon icon={faLinkedin}/>
                    </a>
                </div>
            </div>
        </div>
    );
}
