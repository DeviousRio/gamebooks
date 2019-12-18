import React from 'react';
import BookCard from './Book-Card/index';
import './style.css';
import bookService from '../services/book-service';
import booksImg from '../pictures/frontpage.png'

const Books = ({ user }) => {
    const [books, setBooks] = React.useState('');

    React.useEffect(() => {
        bookService.load().then((res) => {
            setBooks(res);
        });
    }, []);

    return <div className="book-list-img">
        <h2>КОЛЕКЦИЯ "КНИГИ-ИГРИ"</h2>
        <img src={booksImg} alt="books" />
        {books ?
            <div className="book-list">
                {books.map((book) =>
                    <BookCard key={book._id} {...book} />)}
            </div> : <div>Loading...</div>
        }
    </div>
};

export default Books;