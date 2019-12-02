import React from 'react';
import './style.css';
import Link from '../Link/index';

function Navigation() {
    return (
        <nav className="site-nav">
            <ul>
                <Link to="/">Начало</Link>
                <Link to="/gamebooks">Книги-Игри</Link>
                <Link to="/login">Вход</Link>
                <Link to="/register">Регистрация</Link>
            </ul>
        </nav>
    )
}

export default Navigation;