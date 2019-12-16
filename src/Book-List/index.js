import React from 'react';
// import PropTypes from 'prop-types';
import BookCard from './Book-Card/index';
import './style.css';
import bookService from '../services/book-service';

const Books = () => {
    const [books, setBooks] = React.useState('');

    React.useEffect(() => {
        bookService.load().then((res) => {
            setBooks(res);
        });
    }, []);

    return <div>
        {books ?
            <div className="book-list">
                {books.map((book) =>
                    <BookCard key={book._id} {...book} />)}
            </div> : <div>Loading...</div>
        }
    </div>
};

export default Books;