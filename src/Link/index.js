import React from 'react';
import './style.css';

function Link({ children, url }) {
    return <li className="nav-link">
        <a href={url}>{children}</a>
    </li>
}

export default Link;