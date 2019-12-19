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
                {!isLogged && <Link to="/login">Вход</Link>}
                {!isLogged && <Link to="/register">Регистрация</Link>}
                {isLogged && <li className="nav-link"><span>Здравейте, {user.username}</span></li>}
                {isLogged && <Link to="/logout">Изход</Link>}
            </ul>
            <div className="add-data">
                {isLogged && user.username === "Admin" && <a href="/create" className="create-book-btn">Добави Книга</a>}
                {isLogged && user.username === "Admin" && <a href="/add" className="create-author-btn">Добави Автор</a>}
            </div>
        </nav>
    )
}

export default Navigation;