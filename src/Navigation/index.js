import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
// import Link from '../Link/index';
import './style.css';
import App from '../App/App';
import Login from '../Login/index';


function Navigation() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={App}>Начало</Route>
                {/* <Route path="#">Новини</Route>
                <Route path="#">Автори</Route>
                <Route path="#">Книги-Игри</Route> */}
                <Route path="/login" component={Login}>Логин</Route>
                {/* <Route path="#">Регистрация</Route> */}
            </Switch>
        </Router>
    )
}

export default Navigation;