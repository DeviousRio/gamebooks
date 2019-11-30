import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Login() {
    return (
        <Link to="/login">
            <form className="box" action="#" method="post">
                <h1>Login</h1>
                <input type="text" name="" placeholder="Username" />
                <input type="password" name="" placeholder="Password" />
                <input type="submit" name="" value="Login" />
            </form>
        </Link>
    )
}

export default Login;