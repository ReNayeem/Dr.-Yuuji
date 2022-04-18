import React from 'react';
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center'>
            <h1>DOCTOR YUUJI</h1>
            <p>Copyright © {year} DOCTOR YUUJI</p>
            <p>All rights reserved</p>
            <span><i class="fab fa-instagram"></i><i class="fab fa-discord"></i><i class="fab fa-twitter"></i><i
                class="fab fa-youtube"></i></span>
        </footer>
    );
};

export default Footer;