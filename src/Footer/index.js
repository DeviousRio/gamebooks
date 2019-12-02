import React from 'react';
import Link from '../Link/index';
import './style.css';

function Footer() {
    return <ul className="site-footer">
        <li><a href="https://www.facebook.com" target="_blank"><i className="fab fa-facebook-square"></i></a></li>
        <li><a href="https://www.youtube.com" target="_blank"><i className="fab fa-youtube"></i></a></li>
        <li><a href="https://www.instagram.com" target="_blank"><i className="fab fa-instagram"></i></a></li>
        <li><span className="copyright">Copyright 2019 Gamebooks Bulgaria</span></li>
    </ul>
}

export default Footer;

