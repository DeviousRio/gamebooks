import React from 'react';
import * as yup from 'yup';
import './style.css';
import withForm from '../../hocs/withForm';
import bookService from '../../services/book-service';

class CreateBook extends React.Component {
    imageOnChangeHandler = this.props.controlChangeHandlerFactory('image');
    titleOnChangeHandler = this.props.controlChangeHandlerFactory('title');
    authorOnChangeHandler = this.props.controlChangeHandlerFactory('author');
    priceOnChangeHandler = this.props.controlChangeHandlerFactory('price');

    submitHandler = (props) => {
        const errors = this.props.getFormErrorState();
        if (!!errors) { return; }
        const data = this.props.getFormState();
        bookService.create(data).then(() => {
            this.props.history.push('/');
        });
    };

    getFirstControlError = name => {
        const errorState = this.props.getFormErrorState();
        return errorState && errorState[name] && errorState[name][0];
    };

    render() {
        const imageError = this.getFirstControlError('image');
        const titleError = this.getFirstControlError('title');
        const authorError = this.getFirstControlError('author');
        const priceError = this.getFirstControlError('price');

        return <form className="create-book">
            <h1>Добави книга</h1>
            <div className="form-control">
                <input type="text" placeholder="Снимка" onChange={this.imageOnChangeHandler} />
                {imageError && <div className="error">{imageError}</div>}
            </div>
            <div className="form-control">
                <input type="text" placeholder="Име" onChange={this.titleOnChangeHandler} />
                {titleError && <div className="error">{titleError}</div>}
            </div>
            <div className="form-control">
                <input type="text" placeholder="Автор" onChange={this.authorOnChangeHandler} />
                {authorError && <div className="error">{authorError}</div>}
            </div>
            <div className="form-control">
                <input type="number" placeholder="Цена" onChange={this.priceOnChangeHandler} />
                {priceError && <div className="error">{priceError}</div>}
            </div>
            <div className="form-control">
                <button type="button" onClick={this.submitHandler}>Добави</button>
            </div>
        </form>
    }
}

const initialFormState = {
    image: '',
    title: '',
    author: '',
    price: Number
};

export default withForm(CreateBook, initialFormState);