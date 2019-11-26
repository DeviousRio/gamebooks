import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import BookCard from '../Book-Card/index';
import './style.css';
import demodb from '../demodb';

const renderBooks = (books) => {
    return books.map(book => {
        return (<BookCard key={book.id} {...book} />);
    })
};

const BookList = ({ books }) => {
    return (
        <Fragment>
            <div className="book-list">
                {renderBooks(demodb)}
            </div>
        </Fragment>
    )
};

BookList.defaultProps = {
    books: []
}

BookList.propTypes = {
    books: PropTypes.array.isRequired
}

export default BookList;