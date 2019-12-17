import React, { Component } from 'react';
import './style.css';

class BookCard extends Component {

    render() {
        const { title, price, author, image } = this.props;

        return (
            <div className="book">
                <img className="book-image" src={image} alt={title} />
                <div className="book-description">
                    <span className="book-title">{title}</span>
                    <span className="book-author">{author}</span>
                    <span className="book-price">{price} лв.</span>
                </div>
            </div>
        )
    }
}

export default BookCard;