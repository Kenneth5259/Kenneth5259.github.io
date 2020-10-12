import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedinIn, faTwitter} from '@fortawesome/free-brands-svg-icons';

import './footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__socials">
                <a href="https://linkedin.com/in/kenneth-james-carroll" target="_blank"><div className="footer__social"><FontAwesomeIcon className="font-icon" icon={faLinkedinIn} size='lg'/></div></a>
                <a href="https://twitter.com/kjcdev" target="_blank"><div className="footer__social"><FontAwesomeIcon className="font-icon" icon={faTwitter} size='lg'/></div></a>
                <a href="https://github.com/kenneth5259" target="_blank"><div className="footer__social"><FontAwesomeIcon className="font-icon" icon={faGithub} size='lg'/></div></a>
            </div>
        </div>
    )
}

export default Footer;