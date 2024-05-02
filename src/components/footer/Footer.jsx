import React from 'react';
import "./Footer.scss"

const Footer = () => {
    return (
        <div className='footer' id='footerpadd'>
            <li>
                <img src="/logo2.png" alt="logo de kasa en noir" />
            </li>
            <li>
                <p>@ 2020 Kasa. All rights reserved</p>
            </li>
        </div>
    );
};

export default Footer;
