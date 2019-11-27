import React from 'react';
import Link from '../Link/index';
import './style.css';

function Navigation() {
    return <nav className="site-nav">
        <ul>
            <Link url="#">Начало</Link>
            <Link url="#">Новини</Link>
            <Link url="#">Автори</Link>
            <Link url="#">Книги-Игри</Link>
            <Link url="#">Логин</Link>
            <Link url="#">Регистрация</Link>
        </ul>
    </nav>
}

export default Navigation;