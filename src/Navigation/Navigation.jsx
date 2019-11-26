import React from 'react';
import './Navigation.css';
import Link from '../Link/Link';

function Navigation() {
    return <nav className="site-nav">
        <ul>
            <Link url="#">Nav 1</Link>
            <Link url="#">Nav 2</Link>
            <Link url="#">Nav 3</Link>
            <Link url="#">Nav 4</Link>
            <Link url="#">Nav 5</Link>
        </ul>
    </nav>
}

export default Navigation;