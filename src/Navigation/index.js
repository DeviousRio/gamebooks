import React from 'react';
import './style.css';
import Link from '../Link/index';

function Navigation({ isLogged, user }) {
    return (
        <nav className="site-nav">
            <ul>
                <Link to="/">Начало</Link>
                <Link to="/authors">Автори</Link>
                <Link to="/gamebooks">Книги-Игри</Link>
                <Link to="/contacts">Контакти</Link>
                {!isLogged && <Link to="/login">Вход</Link>}
                {!isLogged && <Link to="/register">Регистрация</Link>}
                {isLogged && <Link to="#">Здравейте, {user.username}</Link>}
                {isLogged && <Link to="/logout">Изход</Link>}
            </ul>
        </nav>
    )
}

export default Navigation;