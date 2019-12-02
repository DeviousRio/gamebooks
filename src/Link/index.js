import React from 'react';
import { Link as ReactRouterDomLink } from 'react-router-dom';
import './style.css';

function Link({ children, to }) {
    return <li className="nav-link">
        <ReactRouterDomLink to={to}>{children}</ReactRouterDomLink>
    </li>
}

export default Link;