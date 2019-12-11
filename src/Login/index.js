import React from 'react';
import './style.css';
import withForm, { useFormControl, getValidationsRunnerForSchema } from '../hocs/withForm';

class Login extends React.Component {
    state = { error: null };

    usernameChangeHandler = this.props.controlChangeHandlerFactory('username');
    passwordChangeHandler = this.props.controlChangeHandlerFactory('password');

    submitHandler = () => {
        const errors = this.props.getFormErrorState();
        if (!!errors) { return; }
        const data = this.props.getFormState();
        this.props.login(this.props.history, data).catch(error => {
            this.setState({ error });
        });
    }

    render() {
        const { error } = this.state;

        return (
            <form className="box">
                <h1>Вход</h1>
                <div className="form-control">
                    <input type="text" name="" placeholder="Username" onChange={this.usernameChangeHandler} />
                </div>
                <div className="form-control">
                    <input type="password" name="" placeholder="Password" onChange={this.passwordChangeHandler} />
                </div>
                {error && error}
                <div className="form-control">
                    <input type="submit" name="" value="Login" onClick={this.submitHandler} />
                </div>
            </form>
        )
    }
}

export default withForm(Login, { username: '', password: '' });