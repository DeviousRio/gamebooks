import React from 'react';
import './style.css';

function Registration() {
    return (
        <form className="box" action="#" method="post">
            <h1>Регистрация</h1>
            <input type="text" name="" placeholder="Username" />
            <input type="password" name="" placeholder="Password" />
            <input type="repeatPassword" name="" placeholder="Repeat Password" />
            <input type="submit" name="" value="Submit" />
        </form>
    )
}

export default Registration;