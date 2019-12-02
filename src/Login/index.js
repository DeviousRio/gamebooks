import React from 'react';
import './style.css';

function Login() {
    return (
        <form className="box" action="#" method="post">
            <h1>Login</h1>
            <input type="text" name="" placeholder="Username" />
            <input type="password" name="" placeholder="Password" />
            <input type="submit" name="" value="Login" />
        </form>
    )
}

export default Login;