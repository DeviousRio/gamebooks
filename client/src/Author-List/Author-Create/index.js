import React from 'react';
import * as yup from 'yup';
import './style.css';
import withForm from '../../hocs/withForm';
import authorService from '../../services/author-service';
import { createBrowserHistory } from 'history';

class CreateAuthor extends React.Component {
    nicknameOnChangeHandler = this.props.controlChangeHandlerFactory('nickname');
    nameOnChangeHandler = this.props.controlChangeHandlerFactory('name');
    bornOnChangeHandler = this.props.controlChangeHandlerFactory('born');
    booksOnChangeHandler = this.props.controlChangeHandlerFactory('books');
    imageOnChangeHandler = this.props.controlChangeHandlerFactory('image');

    submitHandler = () => {
        const history = createBrowserHistory({ forceRefresh: true });

        const errors = this.props.getFormErrorState();
        if (!!errors) { return; }
        const data = this.props.getFormState();
        authorService.create(data);
        history.push('/authors');
    };

    getFirstControlError = name => {
        const errorState = this.props.getFormErrorState();
        return errorState && errorState[name] && errorState[name][0];
    };

    render() {
        const nicknameError = this.getFirstControlError('nickname');
        const nameError = this.getFirstControlError('name');
        const bornError = this.getFirstControlError('born');
        const booksError = this.getFirstControlError('books');
        const imageError = this.getFirstControlError('image');

        return <form className="create-author">
            <h1>Добави автор</h1>
            <div className="form-control">
                <input type="text" placeholder="Псевдоним" onChange={this.nicknameOnChangeHandler} />
                {nicknameError && <div className="error">{nicknameError}</div>}
            </div>
            <div className="form-control">
                <input type="text" placeholder="Име" onChange={this.nameOnChangeHandler} />
                {nameError && <div className="error">{nameError}</div>}
            </div>
            <div className="form-control">
                <input type="text" placeholder="Роден/а" onChange={this.bornOnChangeHandler} />
                {bornError && <div className="error">{bornError}</div>}
            </div>
            <div className="form-control">
                <input type="text" placeholder="Книги" onChange={this.booksOnChangeHandler} />
                {booksError && <div className="error">{booksError}</div>}
            </div>
            <div className="form-control">
                <input type="text" placeholder="Снимка" onChange={this.imageOnChangeHandler} />
                {imageError && <div className="error">{imageError}</div>}
            </div>
            <div className="form-control">
                <button type="button" onClick={this.submitHandler}>Добави</button>
            </div>
        </form>
    }
}

const initialFormState = {
    nickname: '',
    name: '',
    born: '',
    books: '',
    image: ''
};

export default withForm(CreateAuthor, initialFormState);